import { achievements } from "./achievements";
import { getRecords } from "@/lib/storage";

export type DailyTask = { achievementId: string; title: string; category: string; rarity: string; description: string; };

export type DailyTaskPreset = {
  id: string;
  title: string;
  description: string;
  category: string;
  recommendedEmotionTags: string[];
  relatedAchievementIds: string[];
};

export const dailyTaskPresets: DailyTaskPreset[] = [
  { id: "dp_001", title: "给自己一个低难度开始", description: "选一件 5 分钟内能完成的小事，让今天先启动起来。", category: "成长篇", recommendedEmotionTags: ["普普通通", "但还是做了"], relatedAchievementIds: ["grow_02", "habit_01"] },
  { id: "dp_002", title: "主动联系一位朋友", description: "给一个很久没联系的朋友发条消息，不需要长篇大论。", category: "社交篇", recommendedEmotionTags: ["紧张", "轻松了一点"], relatedAchievementIds: ["soc_01", "soc_07"] },
  { id: "dp_003", title: "出门呼吸新鲜空气", description: "离开室内场景，去户外待上 10 分钟，不需要特定目的地。", category: "生活篇", recommendedEmotionTags: ["累了", "普普通通"], relatedAchievementIds: ["life_01", "life_12"] },
  { id: "dp_004", title: "整理一处小空间", description: "不需要全屋整理，只整理一个抽屉、一角桌面就够了。", category: "整理篇", recommendedEmotionTags: ["轻松了一点", "想奖励自己"], relatedAchievementIds: ["org_01", "org_04"] },
  { id: "dp_005", title: "放下手机半小时", description: "选一个时段把手机放远，让自己有一段不被推送打扰的时间。", category: "健康篇", recommendedEmotionTags: ["轻松了一点", "没那么糟"], relatedAchievementIds: ["health_08", "habit_01"] },
  { id: "dp_006", title: "做一件一直拖着的事", description: "那件挂在你心里很久的事，今天只要开始做 5 分钟就算成功。", category: "成长篇", recommendedEmotionTags: ["不知道算不算完成", "松了一口气"], relatedAchievementIds: ["grow_02", "grow_05"] },
  { id: "dp_007", title: "给自己做一顿饭", description: "不需要复杂，煮一碗面、煎一个蛋也算自己照顾了自己。", category: "生活篇", recommendedEmotionTags: ["普普通通", "想奖励自己"], relatedAchievementIds: ["life_04", "heal_01"] },
  { id: "dp_008", title: "把心里的话写下来", description: "不管是开心的还是烦的，写下来就已经理清了一半。", category: "情绪篇", recommendedEmotionTags: ["想哭", "委屈", "释然"], relatedAchievementIds: ["mood_03", "heal_11"] },
  { id: "dp_009", title: "主动完成一件需要勇气的事", description: "说出一句一直不敢说的话，或主动开启一个困难的对话。", category: "勇气篇", recommendedEmotionTags: ["紧张", "很勇敢", "松了一口气"], relatedAchievementIds: ["brave_01", "brave_02"] },
  { id: "dp_010", title: "只做一件让自己开心的事", description: "今天的目标不是完成义务，而是做一件真正让自己感到快乐的事。", category: "小确幸篇", recommendedEmotionTags: ["开心", "轻松了一点"], relatedAchievementIds: ["joy_01", "joy_05"] },
  { id: "dp_011", title: "给父母或家人打个电话", description: "不用聊什么大事，哪怕只是问问今天吃了什么。", category: "亲情篇", recommendedEmotionTags: ["普普通通", "轻松了一点"], relatedAchievementIds: ["fam_01", "fam_04"] },
  { id: "dp_012", title: "学习一个很小的新知识", description: "看一篇科普、学一个单词、了解一个冷知识都算。", category: "学习篇", recommendedEmotionTags: ["普普通通", "虽然很小但完成了"], relatedAchievementIds: ["study_08", "study_04"] },
  { id: "dp_013", title: "记录一件今天的小幸运", description: "今天有没有发生一件让你觉得还不错的小事？记下来。", category: "小确幸篇", recommendedEmotionTags: ["开心", "轻松了一点", "没那么糟"], relatedAchievementIds: ["joy_01", "joy_04"] },
  { id: "dp_014", title: "完成一个微小运动", description: "做 10 个深蹲、拉伸 5 分钟、散步一圈都算你赢了。", category: "健康篇", recommendedEmotionTags: ["有点累", "但还是做了"], relatedAchievementIds: ["health_01", "health_07"] },
  { id: "dp_015", title: "不评价自己的一天", description: "今天不给自己打分、不复盘、不批评，只是让它过去。", category: "自愈篇", recommendedEmotionTags: ["有点累", "不想说话", "今天已经尽力了"], relatedAchievementIds: ["heal_04", "low_02"] },
  { id: "dp_016", title: "勇敢说出一句真心话", description: "对某个人说出你真实的感受，哪怕只有一句。", category: "勇气篇", recommendedEmotionTags: ["紧张", "害羞", "松了一口气"], relatedAchievementIds: ["brave_02", "brave_12"] },
  { id: "dp_017", title: "做一次深呼吸练习", description: "闭上眼睛，深呼吸 5 次，把注意力拉回自己身上。", category: "自愈篇", recommendedEmotionTags: ["焦虑", "紧张", "有点累"], relatedAchievementIds: ["heal_08", "mood_01"] },
  { id: "dp_018", title: "对镜中的自己说辛苦了", description: "对镜子里的自己认真说一句今天辛苦了，可以不习惯但值得试一次。", category: "自愈篇", recommendedEmotionTags: ["有点累", "想哭", "需要被鼓励"], relatedAchievementIds: ["heal_05", "mood_02"] },
  { id: "dp_019", title: "整理手机里的截图", description: "把相册里无用的截图删掉一批，给手机和眼睛都腾点空间。", category: "整理篇", recommendedEmotionTags: ["轻松了一点", "普普通通"], relatedAchievementIds: ["org_06", "org_01"] },
  { id: "dp_020", title: "做一个不消费的放松", description: "今天试试不花一分钱也能放松的活动：散步、听歌、发呆。", category: "生活篇", recommendedEmotionTags: ["普普通通", "轻松了一点"], relatedAchievementIds: ["joy_02", "heal_03"] },
  { id: "dp_021", title: "停止一条自我批评的声音", description: "注意到脑中正在批评自己的声音，然后对它说停。", category: "情绪篇", recommendedEmotionTags: ["焦虑", "想哭", "需要被鼓励"], relatedAchievementIds: ["mood_08", "heal_09"] },
  { id: "dp_022", title: "记录今天的情绪数值", description: "用 1-10 给自己的心情打个分，不用分析原因。", category: "情绪篇", recommendedEmotionTags: ["普普通通", "有点麻木"], relatedAchievementIds: ["mood_01", "mood_04"] },
  { id: "dp_023", title: "提前做好明天的准备", description: "提前把明天要穿的衣服、要带的东西准备好，让明天的自己轻松一点。", category: "习惯篇", recommendedEmotionTags: ["轻松了一点", "想奖励自己"], relatedAchievementIds: ["habit_01", "habit_06"] },
  { id: "dp_024", title: "今天不说消极的话", description: "挑战自己一天不说抱怨或消极的话，只说中性或正面表达。", category: "情绪篇", recommendedEmotionTags: ["普普通通", "但还是做了"], relatedAchievementIds: ["mood_05", "habit_01"] },
  { id: "dp_025", title: "关注一个美好的小细节", description: "拍下或记住今天一个让你感到美好的瞬间，路边的花、窗外的云。", category: "小确幸篇", recommendedEmotionTags: ["普普通通", "轻松了一点"], relatedAchievementIds: ["joy_01", "joy_03"] },
  { id: "dp_026", title: "放下完美主义一次", description: "允许自己今天完成一件事的时候不用做到 100 分，80 分就够了。", category: "成长篇", recommendedEmotionTags: ["不知道算不算完成", "但还是做了"], relatedAchievementIds: ["grow_07", "heal_06"] },
  { id: "dp_027", title: "在低谷中完成最小行动", description: "即使不想动，只完成一个最小动作：起床、刷牙、喝一杯水。", category: "低谷篇", recommendedEmotionTags: ["有点累", "不想说话", "虽然很小但完成了"], relatedAchievementIds: ["low_01", "low_05"] },
  { id: "dp_028", title: "主动向一个人表达感谢", description: "对今天帮助过你的人、或者一直在支持你的人说一声谢谢。", category: "社交篇", recommendedEmotionTags: ["害羞", "需要被鼓励"], relatedAchievementIds: ["soc_01", "soc_06"] },
  { id: "dp_029", title: "给旧物找新主人", description: "把一件不再需要但还完好的物品送给需要的人或捐赠。", category: "整理篇", recommendedEmotionTags: ["轻松了一点", "想奖励自己"], relatedAchievementIds: ["org_08", "org_02"] },
  { id: "dp_030", title: "参加一次线上或线下分享", description: "听一场讲座、参与一次讨论、分享一个想法都可以。", category: "学习篇", recommendedEmotionTags: ["紧张", "轻松了一点"], relatedAchievementIds: ["study_08", "study_09"] },
  { id: "dp_031", title: "做一件只为自己做的事", description: "不是为了别人，不是为了义务，只因为你想做。", category: "自愈篇", recommendedEmotionTags: ["开心", "想奖励自己", "轻松了一点"], relatedAchievementIds: ["heal_01", "heal_02"] },
  { id: "dp_032", title: "主动开启一次学习", description: "打开一本想读的书、点开一个收藏的课程，只看 5 分钟也算。", category: "学习篇", recommendedEmotionTags: ["普普通通", "虽然很小但完成了"], relatedAchievementIds: ["study_04", "study_11"] },
  { id: "dp_033", title: "和舍友或家人一起做一件事", description: "一起做饭、一起看一集综艺、一起散步 10 分钟。", category: "亲情篇", recommendedEmotionTags: ["普普通通", "轻松了一点"], relatedAchievementIds: ["fam_03", "fam_04"] },
  { id: "dp_034", title: "停止一次无效社交", description: "拒绝一个你不想去的邀约，把时间留给自己。", category: "社交篇", recommendedEmotionTags: ["松了一口气", "轻松了一点"], relatedAchievementIds: ["soc_04", "grow_03"] },
  { id: "dp_035", title: "早起后不碰手机 15 分钟", description: "起床后的 15 分钟不看手机，先和自己待一会儿。", category: "习惯篇", recommendedEmotionTags: ["普普通通", "轻松了一点"], relatedAchievementIds: ["habit_01", "health_08"] },
  { id: "dp_036", title: "承认今天状态不好", description: "直接对自己或对别人说：今天状态不太好。不掩饰不硬撑。", category: "低谷篇", recommendedEmotionTags: ["不想说话", "需要被鼓励", "今天已经尽力了"], relatedAchievementIds: ["low_02", "low_03"] },
  { id: "dp_037", title: "邀请朋友一起做一件小事", description: "约上朋友一起做一件事，哪怕只是云同步看一部短片。", category: "社交篇", recommendedEmotionTags: ["开心", "普普通通"], relatedAchievementIds: ["soc_01", "soc_03"] },
  { id: "dp_038", title: "清理一项数字订阅", description: "退订一个不再看的公众号、取消一个不必要的通知或自动续费。", category: "整理篇", recommendedEmotionTags: ["松了一口气", "轻松了一点"], relatedAchievementIds: ["org_05", "org_07"] },
  { id: "dp_039", title: "用一件小事开启新一周", description: "周一早上完成一件 5 分钟内的小任务，让整周有启动感。", category: "习惯篇", recommendedEmotionTags: ["普普通通", "但还是做了"], relatedAchievementIds: ["habit_01", "grow_02"] },
  { id: "dp_040", title: "把烦恼具象化写下来", description: "把脑中凌乱的担忧一条条写下来，写出来就没那么可怕了。", category: "情绪篇", recommendedEmotionTags: ["焦虑", "不知道算不算完成"], relatedAchievementIds: ["mood_03", "heal_11"] },
  { id: "dp_041", title: "选择原谅自己一次", description: "对某个让自己耿耿于怀的失误说一句：没关系，我原谅自己了。", category: "自愈篇", recommendedEmotionTags: ["释然", "轻松了一点", "开始接受了"], relatedAchievementIds: ["heal_06", "mood_08"] },
  { id: "dp_042", title: "主动在关系中示好", description: "对喜欢或在意的一个人主动释放一个善意信号。", category: "恋爱篇", recommendedEmotionTags: ["紧张", "害羞", "很勇敢"], relatedAchievementIds: ["love_01", "love_08"] },
  { id: "dp_043", title: "给自己一个不完美的允许", description: "允许自己今天做一个不完美的人，允许自己搞砸一件事。", category: "成长篇", recommendedEmotionTags: ["普普通通", "但还是做了"], relatedAchievementIds: ["grow_07", "low_02"] },
  { id: "dp_044", title: "记录一件今天被治愈的事", description: "今天有没有哪件事让你觉得被治愈了？哪怕只是听到了好听的歌。", category: "小确幸篇", recommendedEmotionTags: ["开心", "轻松了一点"], relatedAchievementIds: ["joy_06", "joy_03"] },
  { id: "dp_045", title: "和自己进行一次对话", description: "问自己三个问题：我现在感觉怎么样？我需要什么？我能为自己做什么？", category: "自愈篇", recommendedEmotionTags: ["不知道算不算完成", "需要被鼓励"], relatedAchievementIds: ["heal_05", "mood_01"] },
  { id: "dp_046", title: "完成一次校园小探索", description: "在学校里走一条没走过的路，或去一个没去过的角落看看。", category: "校园篇", recommendedEmotionTags: ["普普通通", "轻松了一点"], relatedAchievementIds: ["campus_01", "life_01"] },
  { id: "dp_047", title: "把今天做得好的事列出来", description: "写 3 件今天做得好的事，不管多小都算。", category: "成长篇", recommendedEmotionTags: ["有点骄傲", "今天已经尽力了"], relatedAchievementIds: ["grow_09", "joy_01"] },
  { id: "dp_048", title: "不熬夜挑战", description: "在今天设定的就寝时间前放下一切电子设备。", category: "健康篇", recommendedEmotionTags: ["有点累", "松了一口气"], relatedAchievementIds: ["life_02", "health_06"] },
  { id: "dp_049", title: "做一件让自己害羞但想做的事", description: "不敢做但还是想做的事，今天试一次，哪怕只有 1 分钟。", category: "勇气篇", recommendedEmotionTags: ["害羞", "紧张", "很勇敢"], relatedAchievementIds: ["brave_03", "brave_06"] },
  { id: "dp_050", title: "安静地坐在窗前 5 分钟", description: "什么都不做，只是坐着看窗外，让自己静止 5 分钟。", category: "自愈篇", recommendedEmotionTags: ["有点累", "不想说话", "需要被鼓励"], relatedAchievementIds: ["heal_08", "heal_04"] },
];

export function getDailyRecommendations(count: number = 3): DailyTask[] {
  const records = getRecords();
  const completed = new Set(records.map((r) => r.achievementId));
  const pending = achievements.filter((a) => !completed.has(a.id));
  if (pending.length > 0) {
    const shuffled = [...pending].sort(() => Math.random() - 0.5);
    const usedCats = new Set<string>();
    const result: DailyTask[] = [];
    for (const a of shuffled) {
      if (result.length >= count) break;
      if (!usedCats.has(a.category) || result.length < count - 1) {
        result.push({ achievementId: a.id, title: a.title, category: a.category, rarity: a.rarity, description: a.description });
        usedCats.add(a.category);
      }
    }
    while (result.length < count && pending.length > 0) {
      const remain = pending.filter((a) => !result.find((r) => r.achievementId === a.id));
      if (remain.length === 0) break;
      result.push({ achievementId: remain[0].id, title: remain[0].title, category: remain[0].category, rarity: remain[0].rarity, description: remain[0].description });
    }
    return result;
  }
  // All done — cycle through presets
  const shuffled = [...dailyTaskPresets].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((p) => ({
    achievementId: p.id, title: p.title, category: p.category, rarity: "普通", description: p.description,
  }));
}
