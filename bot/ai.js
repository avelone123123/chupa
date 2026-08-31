const posts = [
  {
    prompt: "epic viral crypto meme poster for $CHUPA, a monkey wearing a black cap with yellow CHUPA text pointing finger at glowing yellow full moon, glowing golden green chart line going up to the moon, text overlay '$CHUPA NO FEAR NO FOMO JUST CHUPA' and 'TO THE MOON', cosmic dark background with golden sparkles",
    text: "🦣📈 CHUPA sees only one destination.\n\nThe chart can shake.\nThe weak hands can leave.\nCHUPA keeps pointing at the moon. 🟡🚀\n\n$CHUPA\nNO FEAR. NO FOMO. JUST CHUPA.\n\n#CHUPA #Memecoin #Solana #Crypto #CryptoMoon #ToTheMoon #PumpFun #MemeCoin #SOL 🚀🟡"
  },
  {
    prompt: "epic viral crypto meme poster for $CHUPA token, charismatic guy in white cap labeled CHUPA with golden chain holding giant $CHUPA coin, giant green candle beam shooting into space, text overlay '$CHUPA CHUPA BEAM DETECTED MOON IS INEVITABLE', golden coins around",
    text: "🦣📡 CHUPA BEAM LOCATED 🟢📡\n\nWhen the signal hits the sky, you don't ask questions. You load the bags. 💰⚡\n\nNo VC dumps. Just pure CHUPA power taking over space.\n\n$CHUPA #Chupakoi #CHUPA #CryptoTwitter #Altcoins #100xGem #Solana #PumpFun 🚀🟡"
  },
  {
    prompt: "viral memecoin poster for $CHUPA token, monkey wearing black CHUPA hat looking at smartphone with glowing green candles chart, text overlay '$CHUPA SLEEP IS TEMPORARY CHUPA IS FOREVER', dark room with neon gold aura",
    text: "🦣📱 CHUPA found the phone. Now he's watching the chart.\n\nSLEEP IS TEMPORARY.\nCHUPA IS FOREVER. 🟢🌙\n\nThe whole village is sleeping... while $CHUPA is climbing the chart!\n\n#CHUPACOIN #CHUPA #Memecoin #Crypto #Solana #PumpFun #ToTheMoon 🚀🟡"
  },
  {
    prompt: "epic crypto meme poster for $CHUPA token, king sitting on golden throne surrounded by $CHUPA coins and green candles, text overlay '$CHUPA ALL HAIL KING CHUPA MOON IS SECURED', ultra detailed",
    text: "🦣👑 ALL HAIL KING CHUPA: THE MOON IS SECURED 🚀\n\nMe checking my wallet every 5 seconds to see if $CHUPA hit the moon yet 🦣📱\n\nNo team. No roadmap. Just pure CHUPA energy.\n\nAre you CHUPAKOY? 🪙\n\n$CHUPA #Chupakoi #CHUPA #Memecoin #Crypto #Solana #PumpFun #ToTheMoon 🚀🟡"
  }
];
export async function analyzeAndTransformMeme() {
  const item = posts[Math.floor(Math.random() * posts.length)];
  const seed = Math.floor(Math.random() * 999999);
  const promptEncoded = encodeURIComponent(item.prompt);
  const generatedImageUrl = `https://image.pollinations.ai/prompt/${promptEncoded}?width=1024&height=1024&seed=${seed}&nologo=true&model=flux`;
  return { generatedImageUrl, captionText: item.text };
}
