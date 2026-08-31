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
export async function sendStartupNotification(minutes) {
  if (!config.telegramBotToken || !config.telegramChatId) return null;
  const text = `🤖 <b>CHUPA Bot запущен и работает!</b>\n\nДо генерации следующего поста осталось: <b>${minutes} минут</b> ⏳`;
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
  try {
    const res = await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: config.telegramChatId, text: text, parse_mode: "HTML" }),
    });
    return res.json();
  } catch (err) {
    console.error("Startup notification failed:", err.message);
  }
}
export async function sendApprovalPreview(imageUrl, xCaption, tgCaption, postId) {
  if (!config.telegramBotToken || !config.telegramChatId) return null;
  const text = `🎯 <b>НОВЫЙ ПОСТ ДЛЯ CHUPA</b>\n\n<b>X (Twitter):</b>\n${xCaption}\n\n<b>Telegram:</b>\n${tgCaption}`;
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendPhoto`;
  try {
    const response = await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: config.telegramChatId,
        photo: imageUrl,
        caption: text,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🚀 Выложить", callback_data: `pub_${postId}` },
              { text: "❌ Пропустить", callback_data: `skip_${postId}` }
            ],
            [
              { text: "🔄 Другой вариант", callback_data: `regen_${postId}` }
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
export async function postToTelegramChannel(imageUrl, caption) {
  if (!config.telegramBotToken || !config.telegramChatId) return null;
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendPhoto`;
  try {
    const response = await fetchWithRetry(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: config.telegramChatId,
        photo: imageUrl,
        caption: caption,
      }),
    });
    return response.json();
  } catch (err) {
    console.error("Channel post error:", err.message);
  }
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
      body: JSON.stringify({ chat_id: chatId, message_id: messageId, caption: caption, parse_mode: "HTML", reply_markup: { inline_keyboard: [] } }),
    });
  } catch (err) {}
}
