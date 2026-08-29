export const siteConfig = {
  projectName: "CHUPA",
  ticker: "$CHUPA",
  tagline: "Казахстанский интернет-мем выходит в крипту.",
  launchDate: null as string | null,
  links: {
    telegram: "https://t.me/chupakabraaaaaaaaaaaaaaa",
    tiktok: "https://www.tiktok.com/@chupa_coin",
    twitter: "https://x.com/qwetyuadhjas",
    instagram: "https://instagram.com/chupa_coin",
  },
  socials: {
    telegram: { handle: "@chupakabraaaaaaaaaaaaaaa", label: "Telegram" },
    tiktok: { handle: "@chupa_coin", label: "TikTok" },
    twitter: { handle: "@qwetyuadhjas", label: "X / Twitter" },
    instagram: { handle: "@chupa_coin", label: "Instagram" },
  },
  memes: [
    { type: "image" as const, src: "/memes/meme1.svg", caption: "ЧУПААА" },
    { type: "image" as const, src: "/memes/meme2.svg", caption: "When CHUPA?" },
    { type: "image" as const, src: "/memes/meme3.svg", caption: "CHUPA MODE" },
    { type: "image" as const, src: "/memes/meme4.svg", caption: "CHUPA ARMY" },
    { type: "image" as const, src: "/memes/meme5.svg", caption: "TO THE MOON" },
    { type: "image" as const, src: "/memes/meme6.svg", caption: "HODL CHUPA" },
  ],
  submitMemeUrl: "https://t.me/chupakabraaaaaaaaaaaaaaa",
};
