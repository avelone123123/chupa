import fetch from "node-fetch";
import { config } from "./config.js";
async function fetchWithRetry(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      return res;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}
export async function sendStartupNotification(targetChatId, minutes) {
  if (!config.telegramBotToken || !targetChatId) return null;
  const text = `🤖 <b>CHUPA Bot запущен и работает!</b>\n\nДо следующего нового поста осталось: <b>${minutes} минут</b> ⏳`;
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
  try {
    const res = await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: targetChatId, text: text, parse_mode: "HTML" }),
    });
    return res.json();
  } catch (err) {
    console.error("Startup notification failed:", err.message);
  }
}
export async function sendApprovalPreview(targetChatId, imageUrl, xCaption, postId) {
  if (!config.telegramBotToken || !targetChatId) return null;
  const text = `🎯 <b>НОВЫЙ ТВИТ ДЛЯ CHUPA (СКОРО ЗАПУСК)</b>\n\n${xCaption}`;
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendPhoto`;
  try {
    const response = await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: targetChatId,
        photo: imageUrl,
        caption: text,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🚀 Выложить твит", callback_data: `pub_${postId}` },
              { text: "❌ Пропустить", callback_data: `skip_${postId}` }
            ],
            [
              { text: "🔄 Другой текст/мем", callback_data: `regen_${postId}` },
              { text: "🖼 Своя картинка", callback_data: `custom_${postId}` }
            ]
          ]
        }
      }),
    });
    return response.json();
  } catch (err) {
    console.error("Preview send error:", err.message);
  }
}
export async function getTelegramFileUrl(fileId) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/getFile?file_id=${fileId}`;
  const res = await fetchWithRetry(url);
  const data = await res.json();
  if (data.ok && data.result?.file_path) {
    return `https://api.telegram.org/file/bot${config.telegramBotToken}/${data.result.file_path}`;
  }
  return null;
}
export async function answerCallbackQuery(callbackQueryId, text) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/answerCallbackQuery`;
  try {
    await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ callback_query_id: callbackQueryId, text: text }),
    });
  } catch (err) {}
}
export async function editMessageCaption(chatId, messageId, caption) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/editMessageCaption`;
  try {
    await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId: chatId, message_id: messageId, caption: caption, parse_mode: "HTML", reply_markup: { inline_keyboard: [] } }),
    });
  } catch (err) {}
}
export async function sendSimpleMessage(chatId, text) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
  try {
    await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: "HTML" }),
    });
  } catch (err) {}
}
