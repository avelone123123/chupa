import fetch from "node-fetch";
import { config } from "./config.js";
export async function postToTelegram(imageUrl, caption) {
  if (!config.telegramBotToken || !config.telegramChatId) {
    console.log("Telegram credentials missing in .env, skipping Telegram post");
    return null;
  }
  try {
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
    const data = await response.json();
    if (data.ok) {
      console.log("Successfully posted to Telegram!");
    } else {
      console.error("Telegram post failed:", data.description);
    }
    return data;
  } catch (err) {
    console.error("Telegram post error:", err.message);
    return null;
  }
}
