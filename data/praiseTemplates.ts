import { AchievementCategory, Rarity } from "@/types/achievement";

export type PraiseSegment = {
  id: string;
  category: AchievementCategory | "__all";
  emotion?: string | "__all";
  rarity?: Rarity | "__all";
  type: "opening" | "body" | "ending";
  text: string;
};

export const segments: PraiseSegment[] = [
  // === Openings ===
  { id: "op_1", category: "__all", emotion: "__all", rarity: "__all", type: "opening", text: "今天你完成了一项成就：【title】。" },
  { id: "op_2", category: "__all", emotion: "__all", rarity: "__all", type: "opening", text: "地球 Online 日志更新：玩家刚刚解锁了【title】。" },
  { id: "op_3", category: "__all", emotion: "__all", rarity: "__all", type: "opening", text: "在你的成长时间里，有一个新坐标被点亮了：【title】。" },
  { id: "op_4", category: "__all", emotion: "__all", rarity: "__all", type: "opening", text: "有一件事正在你的生命里悄然发生——你完成了【title】。" },
  { id: "op_5", category: "恋爱篇", emotion: "__all", rarity: "__all", type: "opening", text: "在关于「靠近」这件事上，你又往前走了一步。" },
  { id: "op_6", category: "成长篇", emotion: "__all", rarity: "__all", type: "opening", text: "成长不总是大张旗鼓的，有时候它安静地发生在一件小事之后。" },
  { id: "op_7", category: "自愈篇", emotion: "__all", rarity: "__all", type: "opening", text: "在对自己好的这件事上，你正在变得越来越熟练。" },
  { id: "op_8", category: "勇气篇", emotion: "__all", rarity: "__all", type: "opening", text: "有一瞬间你选择了往前，而不是后退。那个瞬间叫做勇气。" },
  { id: "op_9", category: "生活篇", emotion: "__all", rarity: "__all", type: "opening", text: "生活不总是宏大的叙事，但它藏在每一个你认真对待的片刻里。" },
  { id: "op_10", category: "社交篇", emotion: "__all", rarity: "__all", type: "opening", text: "人与人之间的连接，有时候只需要你主动打开那扇门。" },
  { id: "op_11", category: "学习篇", emotion: "__all", rarity: "__all", type: "opening", text: "知识是一点一点搭建起来的，今天你为它添了一块砖。" },
  { id: "op_12", category: "健康篇", emotion: "__all", rarity: "__all", type: "opening", text: "身体是你最忠实的伙伴，你刚刚为它做了一件好事。" },
  { id: "op_13", category: "亲情篇", emotion: "__all", rarity: "__all", type: "opening", text: "在那些最日常的关系里，你选择了多走一步。" },
  { id: "op_14", category: "校园篇", emotion: "__all", rarity: "__all", type: "opening", text: "青春里的每一个认真瞬间，都在悄悄为你铺路。" },
  { id: "op_15", category: "勇气篇", emotion: "nervous", rarity: "__all", type: "opening", text: "紧张和行动同时出现了，而你选择了让行动先走一步。" },
  { id: "op_16", category: "__all", emotion: "finally", rarity: "__all", type: "opening", text: "那件一直被你放在心里的事，今天终于有了一个句号。" },
  { id: "op_17", category: "__all", emotion: "relieved", rarity: "__all", type: "opening", text: "放下比坚持更需要勇气，而你做到了。" },
  { id: "op_18", category: "__all", rarity: "史诗", type: "opening", text: "这是一个值得被特别记录的瞬间——你完成了一件有分量的事。" },
  { id: "op_19", category: "__all", rarity: "传说", type: "opening", text: "有些成就不是每天都会发生的。今天你做到的这件事，值得被放在一个更高的位置。" },
  { id: "op_20", category: "__all", emotion: "low", type: "opening", text: "在不太好的日子里，你还是做了一件事。这比在好日子里做十件都难。" },
  { id: "op_21", category: "__all", emotion: "proud", type: "opening", text: "你为自己感到骄傲，这不是自满，这是你应得的。" },
  { id: "op_22", category: "__all", emotion: "ordinary", type: "opening", text: "不是每件事都需要轰轰烈烈。普通也很好，因为「做了」本身就已经很棒了。" },

  // === Body patterns ===
  { id: "bd_1", category: "__all", emotion: "__all", rarity: "__all", type: "body", text: "也许在别人看来这只是件小事，但你知道它意味着什么。" },
  { id: "bd_2", category: "__all", emotion: "__all", rarity: "__all", type: "body", text: "地球 Online 系统已记录：你比昨天的自己又前进了一点。" },
  { id: "bd_3", category: "__all", emotion: "__all", rarity: "__all", type: "body", text: "这些看似微小的行动，正在悄悄重塑你与世界相处的方式。" },
  { id: "bd_4", category: "__all", emotion: "__all", rarity: "__all", type: "body", text: "不需要和别人比较，你只需要知道——你又为自己的生活做了一件好事。" },
  { id: "bd_5", category: "恋爱篇", emotion: "__all", rarity: "__all", type: "body", text: "在感情这件事上，主动永远没错。因为你正在为自己想要的关系写下自己的剧本。" },
  { id: "bd_6", category: "成长篇", emotion: "__all", rarity: "__all", type: "body", text: "成长不是突然变强，而是在每一次微小选择中，选了一个更难但更对的选项。" },
  { id: "bd_7", category: "自愈篇", emotion: "__all", rarity: "__all", type: "body", text: "你正在学会照顾自己的情绪。这不是自私，这是你对自己最基本的善意。" },
  { id: "bd_8", category: "__all", emotion: "nervous", rarity: "__all", type: "body", text: "紧张没有消失，但它也没有阻止你。这就是一种很真实的勇敢。" },
  { id: "bd_9", category: "__all", emotion: "finally", rarity: "__all", type: "body", text: "拖了这么久不是因为你懒，是因为你一直在等一个对的时机。而那个时机，就是现在。" },
  { id: "bd_10", category: "__all", emotion: "low", rarity: "__all", type: "body", text: "在低落的情绪里还能行动，这是最被低估的一种坚强。" },
  { id: "bd_11", category: "__all", emotion: "relieved", rarity: "__all", type: "body", text: "那种「终于可以放下了」的感觉，不是逃避，而是你终于跨过了那一步。" },
  { id: "bd_12", category: "__all", emotion: "proud", rarity: "__all", type: "body", text: "这份骄傲是真实的，因为它来自于一件你真正做到了的事。" },
  { id: "bd_13", category: "__all", rarity: "稀有", type: "body", text: "这不是一件人人都会做的事，而你选择了去做。这就是你和别人的不同之处。" },
  { id: "bd_14", category: "__all", rarity: "史诗", type: "body", text: "这件事需要的不只是一点点勇气。你做到了，这说明你比自己想象中更强大。" },
  { id: "bd_15", category: "__all", rarity: "传说", type: "body", text: "很少有人能做到这一步。你不只是在完成成就，你在重新定义什么叫做「认真生活」。" },
  { id: "bd_16", category: "__all", emotion: "shy", type: "body", text: "害羞是因为你在意。而在意本身，就是这件事值得做的最大证明。" },
  { id: "bd_17", category: "__all", emotion: "wronged", type: "body", text: "即使觉得委屈，你还是做了。这说明你的内心比你以为的更强大。" },
  { id: "bd_18", category: "__all", emotion: "tired", type: "body", text: "有些行动确实会消耗能量，但这是「为自己而累」，和被动消耗是不一样的。" },
  { id: "bd_19", category: "__all", emotion: "anxious", type: "body", text: "焦虑和行动可以共存。焦虑不是停下的理由，而你刚刚证明了这一点。" },
  { id: "bd_20", category: "勇气篇", emotion: "__all", rarity: "__all", type: "body", text: "很多时候我们缺的不是能力，而是「先试一下」的那个瞬间。你找到了那个瞬间。" },
  { id: "bd_21", category: "生活篇", emotion: "__all", rarity: "__all", type: "body", text: "生活中的仪式感不一定要盛大，有时候只是你主动为自己做的一件小事。" },
  { id: "bd_22", category: "健康篇", emotion: "__all", rarity: "__all", type: "body", text: "身体不会说话，但你做的每一件好事它都会记住。" },
  { id: "bd_23", category: "学习篇", emotion: "__all", rarity: "__all", type: "body", text: "学习最好的时机不是「准备好了」，而是「开始了」。你已经在路上了。" },
  { id: "bd_24", category: "亲情篇", emotion: "__all", rarity: "__all", type: "body", text: "家人之间不常说爱，但行动本身就是最真实的心意。" },

  // === Endings ===
  { id: "en_1", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "地球 Online 正在记录你的每一次成长。继续走下去吧。" },
  { id: "en_2", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "你的生命进度条又前进了一点。明天也请继续认真地生活。" },
  { id: "en_3", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "这些点点滴滴，终将成为你人生中最坚实的地基。" },
  { id: "en_4", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "今天的打卡已经完成。你做得很好，该休息一下了。" },
  { id: "en_5", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "一切都在变好，因为你一直在行动。" },
  { id: "en_6", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "恭喜你，又在这个世界上留下了一个属于自己的印记。" },
  { id: "en_7", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "你比自己以为的更加值得被认真对待。" },
  { id: "en_8", category: "__all", rarity: "史诗", type: "ending", text: "这个成就级任务你都完成了，还有什么能难倒你呢？" },
  { id: "en_9", category: "__all", rarity: "传说", type: "ending", text: "传说中的成就已经被你收入囊中。你的旅程正在变得不平凡。" },
  { id: "en_10", category: "__all", emotion: "low", type: "ending", text: "今天你已经做得很好了。如果累了，就好好休息吧。" },
];

export function getSegments(
  category: string,
  emotionId: string,
  rarity: string,
  type: "opening" | "body" | "ending"
): string[] {
  const candidates = segments.filter(
    (s) =>
      s.type === type &&
      (s.category === category || s.category === "__all") &&
      (!s.emotion || s.emotion === emotionId || s.emotion === "__all") &&
      (!s.rarity || s.rarity === rarity || s.rarity === "__all")
  );
  return candidates.map((s) => s.text);
}

export function getRandomText(
  category: string,
  emotionId: string,
  rarity: string,
  type: "opening" | "body" | "ending"
): string {
  const texts = getSegments(category, emotionId, rarity, type);
  if (texts.length === 0) {
    const fallback = getSegments("__all", "__all", "__all", type);
    return fallback[Math.floor(Math.random() * fallback.length)] || "";
  }
  return texts[Math.floor(Math.random() * texts.length)];
}

export function buildPraise(
  title: string,
  category: string,
  emotionId: string,
  rarity: string
): string {
  const opening = getRandomText(category, emotionId, rarity, "opening")
    .replace("【title】", title);
  const body1 = getRandomText(category, emotionId, rarity, "body");
  const body2 = getRandomText(category, emotionId, rarity, "body");
  const ending = getRandomText(category, emotionId, rarity, "ending");

  return `${opening}\n\n${body1}\n${body2}\n\n${ending}`;
}
