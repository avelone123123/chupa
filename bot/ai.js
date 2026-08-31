const captions = [
  "When the god candle hits the sky, you know what time it is. 🚀🟢\n\n$CHUPA #CHUPA #Chupakoi #ToTheMoon #CryptoMemes",
  "No team. No roadmap. Just pure CHUPA energy. ⚡🔥\n\nAre you CHUPAKOY? 🪙\n\n$CHUPA #CHUPA #Chupakoi #Memecoin #Crypto #Solana",
  "SLEEP IS TEMPORARY. CHUPA IS FOREVER. 🟢🌙\n\nThe whole village is sleeping... while $CHUPA is climbing the chart!\n\n#CHUPACOIN #CHUPA #Memecoin #Crypto",
  "CHUPA sees only one destination: TO THE MOON! 🚀🟡\n\nThe chart can shake. The weak hands can leave. CHUPA keeps pointing at the moon.\n\n$CHUPA NO FEAR. NO FOMO. JUST CHUPA.",
  "CHUPA BEAM DETECTED! MOON IS INEVITABLE. 🟢📡\n\nWhen the signal hits the sky, you don't ask questions. You load the bags.\n\n$CHUPA #Chupakoi #CHUPA #CryptoTwitter #100xGem"
];
export async function analyzeAndTransformMeme() {
  const promptText = encodeURIComponent("epic viral crypto meme $CHUPA token, charismatic bearded guy in white cap with gold chain holding $CHUPA coin to the moon with green candles, cinematic gold lighting, high quality meme art");
  const seed = Math.floor(Math.random() * 999999);
  const generatedImageUrl = `https://image.pollinations.ai/prompt/${promptText}?width=1024&height=1024&seed=${seed}&nologo=true&model=flux`;
  const randomIndex = Math.floor(Math.random() * captions.length);
  const captionText = captions[randomIndex];
  return { generatedImageUrl, captionText };
}
