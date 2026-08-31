import fetch from "node-fetch";
import { config } from "./config.js";
export async function sendApprovalPreview(imageUrl, xCaption, tgCaption, postId) {
  if (!config.telegramBotToken || !config.telegramChatId) {
    console.log("Telegram credentials missing, skipping preview");
    return null;
  }
  const text = `🎯 <b>НОВЫЙ ПОСТ ДЛЯ CHUPA</b>\n\n<b>X (Twitter):</b>\n${xCaption}\n\n<b>Telegram:</b>\n${tgCaption}`;
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendPhoto`;
  const response = await fetch(url, {
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
}
export async function postToTelegramChannel(imageUrl, caption) {
  if (!config.telegramBotToken || !config.telegramChatId) return null;
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendPhoto`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: config.telegramChatId,
      photo: imageUrl,
      caption: caption,
    }),
  });
  return response.json();
}
export async function answerCallbackQuery(callbackQueryId, text) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/answerCallbackQuery`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callback_query_id: callbackQueryId, text: text }),
  });
}
export async function editMessageCaption(chatId, messageId, caption) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/editMessageCaption`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, message_id: messageId, caption: caption, parse_mode: "HTML", reply_markup: { inline_keyboard: [] } }),
  });
}
