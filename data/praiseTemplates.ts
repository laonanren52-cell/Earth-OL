import { AchievementCategory, Rarity } from "@/types/achievement";

export type PraiseSegment = {
  id: string;
  category: string;
  emotion: string;
  rarity: string;
  type: "opening" | "body" | "ending";
  text: string;
};

export const segments: PraiseSegment[] = [
  // === OPENINGS ===
  { id: "op_all_1", category: "__all", emotion: "__all", rarity: "__all", type: "opening", text: "你刚刚完成了一项成就：【title】。" },
  { id: "op_all_2", category: "__all", emotion: "__all", rarity: "__all", type: "opening", text: "地球 Online 日志更新：玩家刚刚解锁了【title】。" },
  { id: "op_all_3", category: "__all", emotion: "__all", rarity: "__all", type: "opening", text: "在你的成长时间线上，有一个新坐标被点亮了：【title】。" },
  { id: "op_love", category: "恋爱篇", emotion: "__all", rarity: "__all", type: "opening", text: "在关于靠近这件事上，你又往前走了一步。" },
  { id: "op_grow", category: "成长篇", emotion: "__all", rarity: "__all", type: "opening", text: "成长有时安静地发生在一件小事之后。" },
  { id: "op_heal", category: "自愈篇", emotion: "__all", rarity: "__all", type: "opening", text: "在对自己好的这件事上，你变得越来越熟练了。" },
  { id: "op_brave", category: "勇气篇", emotion: "__all", rarity: "__all", type: "opening", text: "有一个瞬间你选择了往前，而不是后退。那个瞬间叫做勇气。" },
  { id: "op_life", category: "生活篇", emotion: "__all", rarity: "__all", type: "opening", text: "生活藏在每一个你认真对待的片刻里。" },
  { id: "op_social", category: "社交篇", emotion: "__all", rarity: "__all", type: "opening", text: "人与人之间的连接，有时只需要你主动打开那扇门。" },
  { id: "op_study", category: "学习篇", emotion: "__all", rarity: "__all", type: "opening", text: "知识是一点一点搭建起来的，今天你为它添了一块砖。" },
  { id: "op_health", category: "健康篇", emotion: "__all", rarity: "__all", type: "opening", text: "身体不会说话，但你对它做的每一件好事它都会记住。" },
  { id: "op_fam", category: "亲情篇", emotion: "__all", rarity: "__all", type: "opening", text: "在那些最日常的关系里，你选择了多走一步。" },
  { id: "op_mood", category: "情绪篇", emotion: "__all", rarity: "__all", type: "opening", text: "你没有忽略自己的感受，而是选择了觉察和面对。" },
  { id: "op_org", category: "整理篇", emotion: "__all", rarity: "__all", type: "opening", text: "你为生活减去了一些冗余，系统和心灵都更清爽了。" },
  { id: "op_habit", category: "习惯篇", emotion: "__all", rarity: "__all", type: "opening", text: "你今天又执行了一次你的日常程序，习惯回路正在加固中。" },
  { id: "op_low", category: "低谷篇", emotion: "__all", rarity: "__all", type: "opening", text: "在不太好的日子里，你还是完成了一件事。" },
  { id: "op_joy", category: "小确幸篇", emotion: "__all", rarity: "__all", type: "opening", text: "生活中的一点小美好被你抓住了。" },
  { id: "op_rejected", category: "__all", emotion: "rejected", rarity: "__all", type: "opening", text: "被拒绝确实会让人失落，真心没有被接住的时候，难免会有一点难过。" },
  { id: "op_failed", category: "__all", emotion: "failed", rarity: "__all", type: "opening", text: "这次没有达到预期的结果，但尝试本身没有被浪费。" },
  { id: "op_finally", category: "__all", emotion: "finally", rarity: "__all", type: "opening", text: "那件一直被你放在心里的事，今天终于有了一个句号。" },
  { id: "op_epic", category: "__all", emotion: "__all", rarity: "史诗", type: "opening", text: "这是一个值得被特别记录的瞬间——你完成了一件有分量的事。" },
  { id: "op_legend", category: "__all", emotion: "__all", rarity: "传说", type: "opening", text: "有些成就不是每天都会发生的。今天你做到的这件事值得被放在更高的位置。" },
  { id: "op_still", category: "__all", emotion: "still-did", rarity: "__all", type: "opening", text: "你有无数个理由可以不做，但你还是选择了去做。" },
  { id: "op_smallwin", category: "__all", emotion: "small-win", rarity: "__all", type: "opening", text: "一件很小的事，你认真完成了。小事情的累计最终会形成大改变。" },
  { id: "op_didbest", category: "__all", emotion: "did-best", rarity: "__all", type: "opening", text: "你今天已经尽力了，不需要再多做什么了。" },

  // === BODY ===
  { id: "bd_all_1", category: "__all", emotion: "__all", rarity: "__all", type: "body", text: "也许在别人看来这只是件小事，但你知道它意味着什么。" },
  { id: "bd_all_2", category: "__all", emotion: "__all", rarity: "__all", type: "body", text: "这些微小的行动正在悄悄重塑你与世界相处的方式。" },
  { id: "bd_all_3", category: "__all", emotion: "__all", rarity: "__all", type: "body", text: "不需要和别人比较，你为自己的生活又做了一件好事。" },
  { id: "bd_love", category: "恋爱篇", emotion: "__all", rarity: "__all", type: "body", text: "主动表达永远没错，因为你在为自己想要的关系写下自己的剧本。" },
  { id: "bd_grow", category: "成长篇", emotion: "__all", rarity: "__all", type: "body", text: "成长是在每一次微小选择中，选了一个更难但更对的选项。" },
  { id: "bd_heal", category: "自愈篇", emotion: "__all", rarity: "__all", type: "body", text: "你正在学会照顾自己，这不是自私，而是对自己最基本的善意。" },
  { id: "bd_nervous", category: "__all", emotion: "nervous", rarity: "__all", type: "body", text: "紧张没有消失，但它没有阻止你。这就是一种很真实的勇敢。" },
  { id: "bd_lowgen", category: "低谷篇", emotion: "__all", rarity: "__all", type: "body", text: "在低落的情绪里还能行动，这是最被低估的一种坚强。" },
  { id: "bd_relieved", category: "__all", emotion: "relieved", rarity: "__all", type: "body", text: "那种终于可以放下的感觉不是逃避，而是你终于跨过了那一步。" },
  { id: "bd_proud", category: "__all", emotion: "proud", rarity: "__all", type: "body", text: "这份骄傲是真实的，因为它来自于一件你真正做到的事。" },
  { id: "bd_rejected", category: "__all", emotion: "rejected", rarity: "__all", type: "body", text: "你的用心虽然没有被接住，但你表达自己的勇气不会因为结果而失效。" },
  { id: "bd_failed", category: "__all", emotion: "failed", rarity: "__all", type: "body", text: "结果不等于价值。你尝试了，你行动了，这本身就是一种胜利。" },
  { id: "bd_embarrassed", category: "__all", emotion: "embarrassed", rarity: "__all", type: "body", text: "尴尬也是体验的一部分。你做了这件事本身比别人的看法重要得多。" },
  { id: "bd_wantcry", category: "__all", emotion: "want-cry", rarity: "__all", type: "body", text: "想哭的时候就让它流出来吧。眼泪不是脆弱，是你认真对待自己的证据。" },
  { id: "bd_still", category: "__all", emotion: "still-did", rarity: "__all", type: "body", text: "即使有一万个理由不做，你还是迈出了那一步。这就是进步的样子。" },
  { id: "bd_smallwin", category: "__all", emotion: "small-win", rarity: "__all", type: "body", text: "小胜利也是胜利。你不必每次都要做得惊天动地才值得被认可。" },
  { id: "bd_mood", category: "情绪篇", emotion: "__all", rarity: "__all", type: "body", text: "情绪不是敌人。你开始觉察它、和它共处，这比压抑它更成熟。" },
  { id: "bd_org", category: "整理篇", emotion: "__all", rarity: "__all", type: "body", text: "整理不只是打扫，是你在主动选择自己的环境和注意力。" },
  { id: "bd_habit", category: "习惯篇", emotion: "__all", rarity: "__all", type: "body", text: "每一个微小习惯的坚持，都在帮你搭建想要的生活系统。" },
  { id: "bd_joy", category: "小确幸篇", emotion: "__all", rarity: "__all", type: "body", text: "小确幸不是运气，是你还能被生活打动。" },
  { id: "bd_rare", category: "__all", emotion: "__all", rarity: "稀有", type: "body", text: "这不是一件人人都会做的事，而你选择了去做。" },
  { id: "bd_epic", category: "__all", emotion: "__all", rarity: "史诗", type: "body", text: "这件事需要的不只是一点点勇气。你做到了，你比自己想象中更强大。" },
  { id: "bd_legend", category: "__all", emotion: "__all", rarity: "传说", type: "body", text: "很少有人能做到这一步。你不只是在完成成就，你在重新定义认真生活。" },
  { id: "bd_notalk", category: "__all", emotion: "no-talk", rarity: "__all", type: "body", text: "不想说话的时候可以不说话。安静也是你保护自己的方式。" },
  { id: "bd_tired", category: "__all", emotion: "tired", rarity: "__all", type: "body", text: "为自己而累和被动消耗不一样。你消耗的能量正在变成你的底气。" },
  { id: "bd_anxious", category: "__all", emotion: "anxious", rarity: "__all", type: "body", text: "焦虑和行动可以共存。焦虑没有拦住你，而你证明了这一点。" },
  { id: "bd_accept", category: "__all", emotion: "accepting", rarity: "__all", type: "body", text: "接受是一个过程，不需要一步到位。你在一点点走向它。" },
  { id: "bd_lighter", category: "__all", emotion: "lighter", rarity: "__all", type: "body", text: "哪怕只是轻松了一点点，那也是今天的一个正向信号。" },
  { id: "bd_slow", category: "__all", emotion: "slow-down", rarity: "__all", type: "body", text: "慢不是退步。你选择自己的节奏，不被外界带着跑，这需要定力。" },
  { id: "bd_encourage", category: "__all", emotion: "need-encourage", rarity: "__all", type: "body", text: "你做得足够好了，不需要等到完美才被认可。" },
  { id: "bd_didbest", category: "__all", emotion: "did-best", rarity: "__all", type: "body", text: "你今天已经付出了所有。不需要再对自己说不够好了。" },
  { id: "bd_bravegen", category: "勇气篇", emotion: "__all", rarity: "__all", type: "body", text: "很多时候缺的不是能力，而是先试一下的那个瞬间。你找到了那个瞬间。" },
  { id: "bd_health", category: "健康篇", emotion: "__all", rarity: "__all", type: "body", text: "身体不会说话，但你做的每一件好事它都会用更好的状态回应你。" },
  { id: "bd_study", category: "学习篇", emotion: "__all", rarity: "__all", type: "body", text: "学习最好的时机不是准备好了，而是开始了。你已经在路上了。" },
  { id: "bd_notsure", category: "__all", emotion: "not-sure", rarity: "__all", type: "body", text: "你不需要做得完美才配叫完成。完成了就是完成了，系统确认你的行动。" },
  { id: "bd_numb", category: "__all", emotion: "numb", rarity: "__all", type: "body", text: "麻木不是你的错。你只是在储存能量，等待感受重新来临的时机。" },
  { id: "bd_regret", category: "__all", emotion: "regretful", rarity: "__all", type: "body", text: "后悔也可以被允许。它不是错误信号，而是你正在成长的回声。" },
  { id: "bd_finally", category: "__all", emotion: "finally", rarity: "__all", type: "body", text: "拖了这么久不是因为你懒，而是你一直在等一个对的时机。而那个时机就是现在。" },

  // === ENDINGS ===
  { id: "en_all_1", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "地球 Online 正在记录你的每一次成长。继续走下去吧。" },
  { id: "en_all_2", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "你的生命进度条又前进了一点。明天也请继续认真地生活。" },
  { id: "en_all_3", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "今天的打卡已完成。你做得很好，该休息一下了。" },
  { id: "en_all_4", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "一切都在变好，因为你一直在行动。" },
  { id: "en_all_5", category: "__all", emotion: "__all", rarity: "__all", type: "ending", text: "恭喜你，又在这个世界上留下了一个属于自己的印记。" },
  { id: "en_encourage", category: "__all", emotion: "need-encourage", rarity: "__all", type: "ending", text: "你需要被鼓励是完全正常的。记住，你今天已经做了一件了不起的事。" },
  { id: "en_reward", category: "__all", emotion: "reward", rarity: "__all", type: "ending", text: "给自己一点奖励吧。你完全值得。" },
  { id: "en_epic", category: "__all", emotion: "__all", rarity: "史诗", type: "ending", text: "这个成就级任务你都完成了，还有什么能难倒你呢？" },
  { id: "en_legend", category: "__all", emotion: "__all", rarity: "传说", type: "ending", text: "传说中的成就已经被你收入囊中。你的旅程正在变得不平凡。" },
  { id: "en_brave", category: "__all", emotion: "brave", rarity: "__all", type: "ending", text: "你今天很勇敢。记得这一点。" },
  { id: "en_didbest", category: "__all", emotion: "did-best", rarity: "__all", type: "ending", text: "今天你已经尽了全力。无论如何，你值得对自己说一声辛苦了。" },
  { id: "en_still", category: "__all", emotion: "still-did", rarity: "__all", type: "ending", text: "你选择了去做而不是放弃。这个选择本身就值得被庆祝。" },
  { id: "en_heal", category: "自愈篇", emotion: "__all", rarity: "__all", type: "ending", text: "自愈不是一天的事，但每一次主动照顾自己都在缩短过程。" },
  { id: "en_mood", category: "情绪篇", emotion: "__all", rarity: "__all", type: "ending", text: "情绪会来也会走。今天的你已经学会了不被打倒。" },
  { id: "en_joy", category: "小确幸篇", emotion: "__all", rarity: "__all", type: "ending", text: "小确幸不需要很多，但每一次都值得被装进心里。" },
  { id: "en_lowrest", category: "低谷篇", emotion: "__all", rarity: "__all", type: "ending", text: "低谷不会永远停留。你正在一点点爬上来。" },
  { id: "en_habit", category: "习惯篇", emotion: "__all", rarity: "__all", type: "ending", text: "习惯的养成不在速度，在持续。你正在积累自己的复利。" },
  { id: "en_lowdone", category: "__all", emotion: "low", rarity: "__all", type: "ending", text: "今天你已经做得很好了。如果累了，就好好休息吧。" },
  { id: "en_small", category: "__all", emotion: "small-win", rarity: "__all", type: "ending", text: "小事的完成同样值得被记录。一次一步，你已经在路上了。" },
  { id: "en_notsure", category: "__all", emotion: "not-sure", rarity: "__all", type: "ending", text: "就算不确定自己算不算完成，系统也已经确认了你的行动。" },
];

export function getSegments(cat: string, em: string, ra: string, type: "opening" | "body" | "ending"): string[] {
  return segments.filter((s) =>
    s.type === type &&
    (s.category === cat || s.category === "__all") &&
    (!s.emotion || s.emotion === em || s.emotion === "__all") &&
    (!s.rarity || s.rarity === ra || s.rarity === "__all")
  ).map((s) => s.text);
}

export function getRandomText(cat: string, em: string, ra: string, type: "opening" | "body" | "ending"): string {
  const texts = getSegments(cat, em, ra, type);
  return texts[Math.floor(Math.random() * texts.length)] || "";
}