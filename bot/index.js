import cron from "node-cron";
import fetch from "node-fetch";
import { config } from "./config.js";
import { fetchTrendingMemeImage, postToTwitter } from "./twitter.js";
import { analyzeAndTransformMeme } from "./ai.js";
import { sendStartupNotification, sendApprovalPreview, getTelegramFileUrl, answerCallbackQuery, editMessageCaption, sendSimpleMessage } from "./telegram.js";
const pendingPosts = new Map();
let lastUpdateId = 0;
let userChatId = null;
let awaitingPhotoPostId = null;
export async function createPostForApproval() {
  if (!userChatId) return;
  console.log("Generating CHUPA meme post for user approval...");
  const trendingImageUrl = await fetchTrendingMemeImage();
  const { generatedImageUrl, captionText } = await analyzeAndTransformMeme(trendingImageUrl);
  const postId = Date.now().toString();
  pendingPosts.set(postId, { generatedImageUrl, captionText });
  console.log("Sending approval preview to Telegram user chat:", userChatId);
  await sendApprovalPreview(userChatId, generatedImageUrl, captionText, postId);
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
        if (update.message && update.message.chat) {
          const incomingChatId = update.message.chat.id;
          userChatId = incomingChatId;
          if (update.message.photo && update.message.photo.length > 0 && awaitingPhotoPostId) {
            const photoArray = update.message.photo;
            const largestPhoto = photoArray[photoArray.length - 1];
            const photoUrl = await getTelegramFileUrl(largestPhoto.file_id);
            if (photoUrl) {
              const post = pendingPosts.get(awaitingPhotoPostId);
              if (post) {
                post.generatedImageUrl = photoUrl;
                await sendSimpleMessage(userChatId, "✅ <b>Твоя картинка принята! Заменяем...</b>");
                await sendApprovalPreview(userChatId, photoUrl, post.captionText, awaitingPhotoPostId);
                awaitingPhotoPostId = null;
              }
            }
          } else if (update.message.text) {
            if (update.message.text.includes("/start")) {
              console.log("Connected to Telegram user chat:", userChatId);
              await sendStartupNotification(userChatId, config.intervalMinutes);
              createPostForApproval().catch(console.error);
            }
          }
        }
        if (update.callback_query) {
          const query = update.callback_query;
          const dataStr = query.data;
          const chatId = query.message.chat.id;
          const messageId = query.message.message_id;
          if (dataStr.startsWith("pub_")) {
            const id = dataStr.replace("pub_", "");
            const post = pendingPosts.get(id);
            if (post) {
              await answerCallbackQuery(query.id, "Публикуем твит!");
              await postToTwitter(post.generatedImageUrl, post.captionText);
              await editMessageCaption(chatId, messageId, `✅ <b>ТВИТ ОПУБЛИКОВАНО В X (TWITTER)!</b>\n\n${post.captionText}`);
              pendingPosts.delete(id);
            }
          } else if (dataStr.startsWith("skip_")) {
            const id = dataStr.replace("skip_", "");
            await answerCallbackQuery(query.id, "Отменено.");
            await editMessageCaption(chatId, messageId, `❌ <b>ТВИТ ОТМЕНЕН</b>`);
            pendingPosts.delete(id);
          } else if (dataStr.startsWith("regen_")) {
            const id = dataStr.replace("regen_", "");
            await answerCallbackQuery(query.id, "Генерируем другой вариант...");
            await editMessageCaption(chatId, messageId, `🔄 <b>ГЕНЕРИРУЕТСЯ ДРУГОЙ ВАРИАНТ...</b>`);
            pendingPosts.delete(id);
            createPostForApproval().catch(console.error);
          } else if (dataStr.startsWith("custom_")) {
            const id = dataStr.replace("custom_", "");
            awaitingPhotoPostId = id;
            await answerCallbackQuery(query.id, "Отправь свое фото!");
            await sendSimpleMessage(chatId, "📸 <b>Отправь свою картинку прямо в этот чат, и я прикреплю её к твиту!</b>");
          }
        }
      }
    }
  } catch (err) {
    console.error("Polling error:", err.message);
  }
}
console.log(`Starting CHUPA Bot in Telegram Chat mode (every ${config.intervalMinutes} minutes)...`);
console.log("Send /start in Telegram bot chat to activate!");
setInterval(pollTelegramUpdates, 2000);
cron.schedule(`*/${config.intervalMinutes} * * * *`, () => {
  createPostForApproval().catch(console.error);
});
process.on("unhandledRejection", (err) => console.error("Unhandled error:", err?.message || err));
