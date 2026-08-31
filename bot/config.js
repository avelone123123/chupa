import dotenv from "dotenv";
dotenv.config();
export const config = {
  openaiApiKey: process.env.OPENAI_API_KEY || "",
  twitterApiKey: process.env.TWITTER_API_KEY || "",
  twitterApiSecret: process.env.TWITTER_API_SECRET || "",
  twitterAccessToken: process.env.TWITTER_ACCESS_TOKEN || "",
  twitterAccessSecret: process.env.TWITTER_ACCESS_SECRET || "",
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "",
  telegramChatId: process.env.TELEGRAM_CHAT_ID || "",
  intervalHours: parseInt(process.env.INTERVAL_HOURS || "3", 10),
  searchKeywords: ["#memecoin", "#solanamemecoin", "$SOL meme", "crypto meme", "pumpfun"],
};
