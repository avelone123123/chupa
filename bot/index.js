import cron from "node-cron";
import { config } from "./config.js";
import { fetchTrendingMemeImage } from "./twitter.js";
import { analyzeAndTransformMeme } from "./ai.js";
import { postToTwitter } from "./twitter.js";
import { postToTelegram } from "./telegram.js";
export async function runMemeAutomationCycle() {
  console.log("Starting CHUPA autonomous meme cycle...");
  const trendingImageUrl = await fetchTrendingMemeImage();
  console.log("Found meme image:", trendingImageUrl);
  const { generatedImageUrl, captionText } = await analyzeAndTransformMeme(trendingImageUrl);
  console.log("Generated CHUPA Meme URL:", generatedImageUrl);
  console.log("Generated Caption:\n", captionText);
  await postToTwitter(generatedImageUrl, captionText);
  await postToTelegram(generatedImageUrl, captionText);
  console.log("CHUPA autonomous cycle complete!");
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
