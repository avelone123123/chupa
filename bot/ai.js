import OpenAI from "openai";
import { config } from "./config.js";
const openai = new OpenAI({ apiKey: config.openaiApiKey });
export async function analyzeAndTransformMeme(imageUrl) {
  const visionResponse = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Analyze this crypto/memecoin meme image. Describe the joke, visual setup, composition, and key elements in 2 sentences." },
          { type: "image_url", image_url: { url: imageUrl } },
        ],
      },
    ],
  });
  const memeConcept = visionResponse.choices[0].message.content;
  const imagePrompt = `A ultra high quality, epic crypto meme artwork inspired by: ${memeConcept}. The hero character is CHUPA: a charismatic bearded guy with a white cap labeled 'CHUPA', gold chains with $CHUPA coin, gold coins everywhere, green candles flying to the moon, neon yellow and green accents, text '$CHUPA' or 'CHUPA' styled prominently. Vibrant dark background with gold highlights, cinematic lighting, funny and viral crypto style.`;
  const imageGen = await openai.images.generate({
    model: "dall-e-3",
    prompt: imagePrompt,
    n: 1,
    size: "1024x1024",
    response_format: "url",
  });
  const generatedImageUrl = imageGen.data[0].url;
  const textResponse = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are the official hype manager for $CHUPA memecoin. Write a short, viral, chaotic and hilarious tweet/post for $CHUPA coin based on the image theme. Include emojis, ticker $CHUPA, bold statements, and top hashtags like #CHUPA #Memecoin #Solana #Crypto #ToTheMoon #PumpFun #MemeCoin #SOL 🚀🟡",
      },
      {
        role: "user",
        content: `Theme: ${memeConcept}`,
      },
    ],
  });
  const captionText = textResponse.choices[0].message.content;
  return { generatedImageUrl, captionText };
}
