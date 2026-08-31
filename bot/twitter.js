import { TwitterApi } from "twitter-api-v2";
import { config } from "./config.js";
import fetch from "node-fetch";
const client = new TwitterApi({
  appKey: config.twitterApiKey,
  appSecret: config.twitterApiSecret,
  accessToken: config.twitterAccessToken,
  accessSecret: config.twitterAccessSecret,
});
export async function fetchTrendingMemeImage() {
  return "https://raw.githubusercontent.com/avelone123123/chupa/main/public/chupa-hero.jpg";
}
export async function postToTwitter(imageUrl, caption) {
  if (!config.twitterApiKey || !config.twitterAccessToken) {
    console.log("Twitter credentials missing in .env, skipping Twitter post");
    return null;
  }
  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const mediaId = await client.v1.uploadMedia(Buffer.from(buffer), { mimeType: "image/jpeg" });
    const tweet = await client.v2.tweet({
      text: caption,
      media: { media_ids: [mediaId] },
    });
    console.log("Successfully posted to Twitter!");
    return tweet;
  } catch (err) {
    console.error("Twitter post error:", err.message);
    return null;
  }
}
