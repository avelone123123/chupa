import cron from "node-cron";
import fetch from "node-fetch";
import { config } from "./config.js";
import { fetchTrendingMemeImage, postToTwitter } from "./twitter.js";
import { analyzeAndTransformMeme } from "./ai.js";
import { sendApprovalPreview, postToTelegramChannel, answerCallbackQuery, editMessageCaption } from "./telegram.js";
const pendingPosts = new Map();
let lastUpdateId = 0;
export async function createPostForApproval() {
  console.log("Generating CHUPA meme post for user approval...");
  const trendingImageUrl = await fetchTrendingMemeImage();
  const { generatedImageUrl, captionText, telegramText } = await analyzeAndTransformMeme(trendingImageUrl);
  const postId = Date.now().toString();
  pendingPosts.set(postId, { generatedImageUrl, captionText, telegramText });
  console.log("Sending approval preview to Telegram...");
  await sendApprovalPreview(generatedImageUrl, captionText, telegramText, postId);
}
async function pollTelegramUpdates() {
  if (!config.telegramBotToken) return;
  try {
    const url = `https://api.telegram.org/bot${config.telegramBotToken}/getUpdates?offset=${lastUpdateId + 1}&timeout=10`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.ok && data.result) {
      for (const update of data.result) {
        lastUpdateId = update.update_id;
        if (update.callback_query) {
          const query = update.callback_query;
          const dataStr = query.data;
          const chatId = query.message.chat.id;
          const messageId = query.message.message_id;
          if (dataStr.startsWith("pub_")) {
            const id = dataStr.replace("pub_", "");
            const post = pendingPosts.get(id);
            if (post) {
              await answerCallbackQuery(query.id, "Публикуем в X и Telegram!");
              await postToTwitter(post.generatedImageUrl, post.captionText);
              await postToTelegramChannel(post.generatedImageUrl, post.telegramText);
              await editMessageCaption(chatId, messageId, `✅ <b>ОПУБЛИКОВАНО В X И TELEGRAM!</b>\n\n${post.captionText}`);
              pendingPosts.delete(id);
            }
          } else if (dataStr.startsWith("skip_")) {
            const id = dataStr.replace("skip_", "");
            await answerCallbackQuery(query.id, "Отменено.");
            await editMessageCaption(chatId, messageId, `❌ <b>ПУБЛИКАЦИЯ ОТМЕНЕНА</b>`);
            pendingPosts.delete(id);
          } else if (dataStr.startsWith("regen_")) {
            const id = dataStr.replace("regen_", "");
            await answerCallbackQuery(query.id, "Генерируем другой вариант...");
            await editMessageCaption(chatId, messageId, `🔄 <b>ГЕНЕРИРУЕТСЯ ДРУГОЙ ВАРИАНТ...</b>`);
            pendingPosts.delete(id);
            createPostForApproval().catch(console.error);
          }
        }
      }
    }
  } catch (err) {
    console.error("Polling error:", err.message);
  }
}
if (process.argv.includes("--once")) {
  createPostForApproval().then(() => {
    console.log("Preview sent! Starting polling for approval (ctrl+c to stop)...");
    setInterval(pollTelegramUpdates, 2000);
  }).catch((err) => console.error("Error:", err));
} else {
  console.log(`Starting CHUPA Interactive Approval Bot (every ${config.intervalMinutes} minutes)...`);
  createPostForApproval().catch(console.error);
  setInterval(pollTelegramUpdates, 2000);
  cron.schedule(`*/${config.intervalMinutes} * * * *`, () => {
    createPostForApproval().catch(console.error);
  });
}
