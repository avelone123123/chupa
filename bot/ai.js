const faces = Array.from({ length: 12 }, (_, i) => `https://raw.githubusercontent.com/avelone123123/chupa/main/public/faces/face${i + 1}.png`);
const preLaunchPosts = [
  {
    prompt: "epic viral crypto meme poster for $CHUPA, a monkey wearing a black cap with yellow CHUPA text pointing finger at glowing yellow full moon, glowing golden green chart line going up to the moon, text overlay '$CHUPA NO FEAR NO FOMO JUST CHUPA' and 'TO THE MOON', cosmic dark background with golden sparkles",
    text: "🦣📱 CHUPA is watching the chart.\n\nToken isn't even out yet and the hype is getting out of control.\n\nAre you ready for $CHUPA? 🟡🚀\n\n#CHUPA #Memecoin #Solana #PumpFun #Crypto"
  },
  {
    prompt: "epic viral crypto meme poster for $CHUPA token, charismatic guy in white cap labeled CHUPA with golden chain holding giant $CHUPA coin, giant green candle beam shooting into space, text overlay 'CHUPA BEAM DETECTED! MOON IS INEVITABLE.', golden coins around",
    text: "🦣📡 CHUPA BEAM LOCATED 🟢📡\n\nNo team dumps. No fake promises. Just pure CHUPA energy loading.\n\nLaunch coming SOON™. 💰⚡\n\n$CHUPA #Chupakoi #CHUPA #CryptoTwitter #Solana #PumpFun 🚀🟡"
  },
  {
    prompt: "gold coin with monkey face wearing black cap labeled CHUPA, text overlay 'CHUPA COIN NO FEAR NO FOMO CHUPA NEVER DIES', green candlestick background",
    text: "🦣🪙 One question before the launch.\n\nAre you watching CHUPA…\nor is CHUPA watching you? 👀🐒\n\n$CHUPA IS COMING SOON.\n\n#CHUPA #Solana #MemeCoin #Crypto"
  },
  {
    prompt: "epic crypto meme poster for $CHUPA token, king sitting on golden throne surrounded by $CHUPA coins and rockets, text overlay 'ALL HAIL KING CHUPA: THE MOON IS SECURED', ultra detailed",
    text: "🦣👑 ALL HAIL KING CHUPA 🚀\n\nMe checking my phone every 5 seconds waiting for the $CHUPA launch 🦣📱\n\nNo roadmap. Just CHUPA.\n\n#CHUPA #Chupakoi #Memecoin #Crypto #Solana #PumpFun 🚀🟡"
  }
];
export async function analyzeAndTransformMeme() {
  const item = preLaunchPosts[Math.floor(Math.random() * preLaunchPosts.length)];
  const useRealFace = Math.random() > 0.5;
  let generatedImageUrl = "";
  if (useRealFace) {
    generatedImageUrl = faces[Math.floor(Math.random() * faces.length)];
  } else {
    const seed = Math.floor(Math.random() * 999999);
    generatedImageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.prompt)}?width=1024&height=1024&seed=${seed}&nologo=true&model=flux`;
  }
  return { generatedImageUrl, captionText: item.text };
}
