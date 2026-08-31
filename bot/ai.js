const faces = Array.from({ length: 12 }, (_, i) => `https://raw.githubusercontent.com/avelone123123/chupa/main/public/faces/face${i + 1}.png`);
const xPosts = [
  {
    text: "CHUPA checked the chart.\n\nThe chart checked CHUPA.\n\nNobody knows what happens next. 🐒📈",
    tags: "\n\n#CHUPA #Crypto"
  },
  {
    text: "GM to everyone except the guy who sold before the pump.\n\nYou know who you are. 🐒\n\n$CHUPA",
    tags: "\n\n#CHUPA #Memecoin #Solana"
  },
  {
    text: "Market: red 🔴\n\nCHUPA: interesting. 🐒📱",
    tags: "\n\n#CHUPA #Crypto"
  },
  {
    text: "One question.\n\nAre you watching CHUPA…\nor is CHUPA watching you? 👀🐒",
    tags: "\n\n#CHUPA #Solana #MemeCoin"
  },
  {
    text: "No roadmap.\n\nNo promises.\n\nJust a monkey with a phone and questionable financial decisions. 🐒📱",
    tags: "\n\n#CHUPA #PumpFun"
  },
  {
    text: "CHUPA found the phone. Now he's watching the chart.\n\nIs CHUPA sleeping or cooking? 🍳🐒",
    tags: "\n\n#CHUPA #Memecoin"
  },
  {
    text: "Who is still here watching the green candles with CHUPA? 🟢🪙\n\nDrop your location below. 👇",
    tags: "\n\n#CHUPA #Solana"
  }
];
const tgPosts = [
  "CHUPA checked the chart.\n\nThe chart checked CHUPA.\n\nNo fake roadmap, no guaranteed 100x promises. Just pure community chaos and a monkey watching the candles. 📈🐒\n\nAre you holding or watching from the sidelines?",
  "GM CHUPAKOY ☀️\n\nTo everyone waking up to check the wallet every 5 seconds — you are not alone.\n\nCHUPA is watching the chart right now. What's your play today? 🐒📱",
  "Red day in crypto?\n\nCHUPA finds it interesting. When others panic, CHUPA just sits back and drinks tea. ☕️🔴\n\nWho is still here holding strong with the CHUPA army?",
  "Quick question for the community:\n\nIs CHUPA sleeping... or is CHUPA cooking something big behind the scenes? 🍳🐒\n\nLeave your thoughts in the chat!",
  "No corporate marketing. No fake promises. Just pure meme energy and questionable financial decisions. 🪙\n\nThat is the CHUPA way."
];
const fluxPrompts = [
  "meme poster of CHUPA, charismatic bearded guy in white cap labeled CHUPA holding $CHUPA coin, neon gold green chart candles, high quality meme art",
  "funny meme of a monkey wearing a black cap with yellow CHUPA text looking at glowing smartphone screen with green chart candles, dark room gold aura",
  "epic poster of CHUPA sitting on a throne surrounded by golden coins and $CHUPA crypto ticker, cinematic lighting"
];
export async function analyzeAndTransformMeme() {
  const useRealFace = Math.random() > 0.5;
  let generatedImageUrl = "";
  if (useRealFace) {
    generatedImageUrl = faces[Math.floor(Math.random() * faces.length)];
  } else {
    const prompt = fluxPrompts[Math.floor(Math.random() * fluxPrompts.length)];
    const seed = Math.floor(Math.random() * 999999);
    generatedImageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&seed=${seed}&nologo=true&model=flux`;
  }
  const xItem = xPosts[Math.floor(Math.random() * xPosts.length)];
  const xText = `${xItem.text}${xItem.tags}`;
  const tgText = tgPosts[Math.floor(Math.random() * tgPosts.length)];
  return { generatedImageUrl, captionText: xText, telegramText: tgText };
}
