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
  try {
    const query = config.searchKeywords.join(" OR ") + " has:media -is:retweet";
    const searchResult = await client.v2.search(query, {
      "media.fields": ["url", "type"],
      expansions: ["attachments.media_keys"],
      max_results: 10,
    });
    const mediaList = searchResult.includes?.media || [];
    const photoMedia = mediaList.find((m) => m.type === "photo" && m.url);
    if (photoMedia) {
      return photoMedia.url;
    }
  } catch (error) {
    console.error("Twitter search fallback fallback to default theme:", error.message);
  }
  return "https://raw.githubusercontent.com/avelone123123/chupa/main/public/chupa-hero.jpg";
}
export async function postToTwitter(imageUrl, caption) {
  if (!config.twitterApiKey) {
    console.log("Twitter credentials missing, skipping Twitter post");
    return null;
  }
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const mediaId = await client.v1.uploadMedia(Buffer.from(buffer), { mimeType: "image/jpeg" });
  const tweet = await client.v2.tweet({
    text: caption,
    media: { media_ids: [mediaId] },
  });
  return tweet;
}
