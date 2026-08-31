import fetch from "node-fetch";
import { config } from "./config.js";
export async function postToTelegram(imageUrl, caption) {
  if (!config.telegramBotToken || !config.telegramChatId) {
    console.log("Telegram credentials missing, skipping Telegram post");
    return null;
  }
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendPhoto`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: config.telegramChatId,
      photo: imageUrl,
      caption: caption,
      parse_mode: "HTML",
    }),
  });
  const data = await response.json();
  if (!data.ok) {
    console.error("Telegram send error:", data.description);
  }
  return data;
}
