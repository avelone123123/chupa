import cron from "node-cron";
import { config } from "./config.js";
import { fetchTrendingMemeImage } from "./twitter.js";
import { analyzeAndTransformMeme } from "./ai.js";
import { postToTwitter } from "./twitter.js";
import { postToTelegram } from "./telegram.js";
export async function runMemeAutomationCycle() {
  console.log("Starting CHUPA autonomous AI manager cycle...");
  const trendingImageUrl = await fetchTrendingMemeImage();
  const { generatedImageUrl, captionText, telegramText } = await analyzeAndTransformMeme(trendingImageUrl);
  console.log("CHUPA Image URL:", generatedImageUrl);
  console.log("X Caption:\n", captionText);
  console.log("Telegram Caption:\n", telegramText);
  await postToTwitter(generatedImageUrl, captionText);
  await postToTelegram(generatedImageUrl, telegramText || captionText);
  console.log("CHUPA cycle complete!");
}
if (process.argv.includes("--once")) {
  runMemeAutomationCycle().catch((err) => console.error("Cycle error:", err));
} else {
  console.log(`Starting CHUPA Bot schedule (every ${config.intervalHours} hours)...`);
  runMemeAutomationCycle().catch((err) => console.error("Initial cycle error:", err));
  cron.schedule(`0 */${config.intervalHours} * * *`, () => {
    runMemeAutomationCycle().catch((err) => console.error("Cron cycle error:", err));
  });
}
