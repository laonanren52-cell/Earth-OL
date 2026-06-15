import { EarthOnlineAchievement } from "@/types/achievement";

export const earthAchievements: EarthOnlineAchievement[] = [
  // === 恋爱篇 (10) ===
  { id: "eo_love_01", title: "主动发起对话", category: "恋爱篇", rarity: "普通", description: "你没有继续停在等待区，而是主动按下了对话开始键。", unlockCondition: "主动给在意的人发出一条消息。", systemComment: "尊贵的地球 Online 玩家，您已解锁一次主动靠近世界的记录。", tags: ["恋爱", "主动", "表达"], icon: "MessageCircle" },
  { id: "eo_love_02", title: "把真心说出口", category: "恋爱篇", rarity: "史诗", description: "你选择了不加密发送情感包，把真实心意直接送达对方终端。", unlockCondition: "向喜欢的人认真表达自己的感受。", systemComment: "系统提示：此成就触发概率极低，玩家勇气值已突破当前记录。", tags: ["恋爱", "勇气", "真诚"], icon: "Heart" },
  { id: "eo_love_03", title: "温柔拒绝支线", category: "恋爱篇", rarity: "稀有", description: "你完成了拒绝动作，没有因为怕伤害而接受自己不想要的剧情。", unlockCondition: "温柔但坚定地拒绝一段关系或邀约。", systemComment: "玩家已解锁边界保护技能，当前版本防御力提升。", tags: ["恋爱", "边界", "成长"], icon: "Shield" },
  { id: "eo_love_04", title: "关闭过期感情存档", category: "恋爱篇", rarity: "稀有", description: "你把不再运行的关系进程正式卸载了。", unlockCondition: "删除不再需要的联系方式或关系记录。", systemComment: "系统提示：存档清理完成，玩家已为新剧情腾出空间。", tags: ["恋爱", "告别", "向前"], icon: "Trash2" },
  { id: "eo_love_05", title: "一厢情愿任务完结", category: "恋爱篇", rarity: "史诗", description: "你决定不再运行一段没有回应的感情程序，主动关闭了这个进程。", unlockCondition: "放下对一段不可能关系的执著。", systemComment: "尊贵的玩家，这不是失败，是你手动终止了不匹配的进程。", tags: ["恋爱", "自愈", "成长"], icon: "Wind" },
  { id: "eo_love_06", title: "收到双向信号确认", category: "恋爱篇", rarity: "稀有", description: "你的心意发送后收到了正向回执，系统确认双向连接已建立。", unlockCondition: "得到喜欢之人的正面回应。", systemComment: "恭喜！双向连接通道已开启，地球 Online 为您记录这一刻。", tags: ["恋爱", "幸福", "回应"], icon: "Sparkles" },
  { id: "eo_love_07", title: "修复关系冲突副本", category: "恋爱篇", rarity: "稀有", description: "你主动发起了和好请求，中断的协作任务重新恢复。", unlockCondition: "在争吵后主动迈出和好的一步。", systemComment: "系统提示：冲突修复技能已升级，玩家社交亲和力提高。", tags: ["恋爱", "沟通", "勇气"], icon: "Handshake" },
  { id: "eo_love_08", title: "单人生活模式通关", category: "恋爱篇", rarity: "史诗", description: "你接受了当前版本为单人模式，并发现一个人也能完整通关。", unlockCondition: "真正享受独处时光，不感到缺失。", systemComment: "玩家已解锁「完整自我」天赋。单人模式不是低配版，是独立线路。", tags: ["恋爱", "自愈", "独立"], icon: "Leaf" },
  { id: "eo_love_09", title: "深夜畅谈成就", category: "恋爱篇", rarity: "普通", description: "你和在意的人之间的通信时长已超过日常标准。", unlockCondition: "和喜欢的人进行一次深度长聊。", systemComment: "玩家日志：深入对话已记录，情感连接度显著提升。", tags: ["恋爱", "分享", "深度"], icon: "Moon" },
  { id: "eo_love_10", title: "完整约会计划执行", category: "恋爱篇", rarity: "普通", description: "你没有等待系统自动匹配，而是手动编写了约会脚本。", unlockCondition: "主动策划并完成一次约会。", systemComment: "尊贵的玩家，你已解锁「主动创造回忆」成就。", tags: ["恋爱", "主动", "行动"], icon: "Map" },

  // === 生活篇 (10) ===
  { id: "eo_life_01", title: "离开房间副本", category: "生活篇", rarity: "普通", description: "你从室内安全区出发，进入了户外地图。", unlockCondition: "主动出门晒太阳或散步至少 10 分钟。", systemComment: "系统提示：玩家已从室内地图切换到户外场景，光照值恢复中。", tags: ["生活", "户外", "恢复"], icon: "Sun" },
  { id: "eo_life_02", title: "提前关闭夜间副本", category: "生活篇", rarity: "普通", description: "你在系统默认就寝时间之前手动结束了当日活动。", unlockCondition: "在凌晨 12 点前放下手机入睡。", systemComment: "玩家日志：体力值将在休眠期间恢复，明日任务已预加载。", tags: ["生活", "健康", "自律"], icon: "Moon" },
  { id: "eo_life_03", title: "空间秩序重置", category: "生活篇", rarity: "普通", description: "你对居住地图进行了重新布局，环境混乱度降低。", unlockCondition: "认真打扫并整理自己的房间。", systemComment: "玩家已重置个人空间，系统检测到环境整洁度显著上升。", tags: ["生活", "整理", "清爽"], icon: "Home" },
  { id: "eo_life_04", title: "新菜谱技能习得", category: "生活篇", rarity: "普通", description: "你的烹饪技能库新增了一条可用菜谱。", unlockCondition: "独立完成一道以前没做过的菜。", systemComment: "玩家烹饪经验 +1，生活技能树已点亮新节点。", tags: ["生活", "技能", "成就"], icon: "UtensilsCrossed" },
  { id: "eo_life_05", title: "早起任务完成", category: "生活篇", rarity: "普通", description: "闹钟铃声响起后，你没有选择继续休眠。", unlockCondition: "闹钟响后马上起床没有回笼觉。", systemComment: "早起成就已解锁：你比今天早上的太阳更早进入行动状态。", tags: ["生活", "自律", "行动"], icon: "Sunrise" },
  { id: "eo_life_06", title: "独立出行支线", category: "生活篇", rarity: "稀有", description: "你开启了单人探索模式，前往了未标记的新地点。", unlockCondition: "独自去一个没去过的地方旅行或闲逛。", systemComment: "独立探索成就已记录。玩家正在扩展自己的可探索地图范围。", tags: ["生活", "独立", "探索"], icon: "Map" },
  { id: "eo_life_07", title: "完整读物通关", category: "生活篇", rarity: "稀有", description: "你从第一页坚持到了最后一页，完成了整本书的阅读进度条。", unlockCondition: "从头到尾读完一本书。", systemComment: "全本阅读成就解锁。在碎片化信息时代，这是稀有技能。", tags: ["生活", "阅读", "专注"], icon: "BookOpen" },
  { id: "eo_life_08", title: "二十一天习惯契约", category: "生活篇", rarity: "史诗", description: "你连续 21 天执行了同一行动指令，系统确认习惯回路已建立。", unlockCondition: "连续 21 天坚持一个小习惯。", systemComment: "习惯系统提示：21 天连续打卡成就达成，该行为已写入你的日常程序。", tags: ["生活", "自律", "坚持"], icon: "Target" },
  { id: "eo_life_09", title: "烹饪新配方合成", category: "生活篇", rarity: "普通", description: "你在厨房实验室中成功合成了一道新菜品。", unlockCondition: "独立完成一道以前没做过的菜。", systemComment: "烹饪技能熟练度提升，配方已收录至玩家食谱图鉴。", tags: ["生活", "技能", "治愈"], icon: "UtensilsCrossed" },
  { id: "eo_life_10", title: "与自然地图同步", category: "生活篇", rarity: "普通", description: "你进入了自然场景地图，在户外场景中完成了充能。", unlockCondition: "花一个下午在户外享受自然。", systemComment: "自然环境充能完成。尊贵的玩家，你的精神值正在恢复中。", tags: ["生活", "自然", "治愈"], icon: "TreeDeciduous" },

  // === 成长篇 (10) ===
  { id: "eo_grow_01", title: "退出内耗循环", category: "成长篇", rarity: "稀有", description: "你检测到了精神内耗程序正在运行，并主动执行了终止指令。", unlockCondition: "意识到自己在过度思考并及时停止。", systemComment: "内耗循环已中断。系统检测到玩家心智资源占用率明显下降。", tags: ["成长", "觉察", "自愈"], icon: "Brain" },
  { id: "eo_grow_02", title: "拖延支线完结", category: "成长篇", rarity: "稀有", description: "你终于把一直停留在「进行中」状态的任务标记为了「已完成」。", unlockCondition: "完成一件一直拖延未做的事。", systemComment: "待办清单中已移除一条长期占用的任务。恭喜完成隐藏拖延支线。", tags: ["成长", "行动", "摆脱"], icon: "CheckCircle" },
  { id: "eo_grow_03", title: "拒绝讨好所有 NPC", category: "成长篇", rarity: "史诗", description: "你不再对所有非玩家角色执行「讨好」指令，开始以自我感受为优先级。", unlockCondition: "出于自我尊重而非讨好做出了一个决定。", systemComment: "尊贵的玩家，你已解锁「自我优先」技能，该技能将影响后续所有社交判定。", tags: ["成长", "边界", "自我"], icon: "Shield" },
  { id: "eo_grow_04", title: "勇气值溢出检测", category: "成长篇", rarity: "普通", description: "你主动承认了自己的错误，系统检测到诚实属性提升。", unlockCondition: "主动承认做错了并向他人道歉。", systemComment: "诚实成就已解锁。玩家心灵防御值未降反升。", tags: ["成长", "诚实", "成熟"], icon: "CheckCircle" },
  { id: "eo_grow_05", title: "人生路线图更新", category: "成长篇", rarity: "稀有", description: "你明确了下一阶段的行动方向，地图上出现了清晰的路径标记。", unlockCondition: "认真写下今年的具体目标。", systemComment: "人生路线图已更新。系统提示：有目标的地图比漫无目的更容易通关。", tags: ["成长", "规划", "方向"], icon: "Target" },
  { id: "eo_grow_06", title: "新手村日志全满", category: "成长篇", rarity: "普通", description: "你连续一周记录了游戏日志，系统确认你的观察力处于激活状态。", unlockCondition: "连续一周每天写日记或复盘。", systemComment: "日志成就已解锁。文字记录是最低成本的自我迭代方式。", tags: ["成长", "记录", "复盘"], icon: "Feather" },
  { id: "eo_grow_07", title: "接受自身版本缺陷", category: "成长篇", rarity: "稀有", description: "你不再试图修补自己的全部 bug，而是接受了当前版本的完整状态。", unlockCondition: "坦然面对自己的一个缺点。", systemComment: "自我接纳成就解锁。不是所有特性都需要被修复。", tags: ["成长", "接纳", "自愈"], icon: "Heart" },
  { id: "eo_grow_08", title: "重大选择确认执行", category: "成长篇", rarity: "史诗", description: "你在关键选择点做出了决定，分支剧情已不可逆地推进了。", unlockCondition: "经过深思熟虑后做出一个重要决定。", systemComment: "决策成就已记录。系统提示：选择本身比选择对错更重要。", tags: ["成长", "选择", "勇气"], icon: "Compass" },
  { id: "eo_grow_09", title: "主动求助信号发出", category: "成长篇", rarity: "普通", description: "你不满足于单人模式，成功向其他玩家发出了协作请求。", unlockCondition: "在遇到困难时主动向他人求助。", systemComment: "协作模式已激活。主动求助不是新手行为，是高级策略。", tags: ["成长", "沟通", "协作"], icon: "Handshake" },
  { id: "eo_grow_10", title: "三十天成就连击", category: "成长篇", rarity: "史诗", description: "你连续 30 天执行了同一日常任务，这是一个成就级连击记录。", unlockCondition: "坚持一个自我挑战项目 30 天。", systemComment: "三十日成就连击达成！你已证明自己拥有长期运行的持久力。", tags: ["成长", "坚持", "自律"], icon: "Zap" },

  // === 自愈篇 (10) ===
  { id: "eo_heal_01", title: "亲自为角色回血", category: "自愈篇", rarity: "稀有", description: "你没有等待外部治疗，主动启动了自己给自己补给的程序。", unlockCondition: "独自去喜欢的餐厅好好吃一顿。", systemComment: "自我疗愈技能已激活。你正在学会给自己补充能量条。", tags: ["自愈", "自我关怀", "治愈"], icon: "UtensilsCrossed" },
  { id: "eo_heal_02", title: "为自己点亮景观灯", category: "自愈篇", rarity: "稀有", description: "你主动为自己的生活场景添加了美化道具，空间温暖度提升。", unlockCondition: "不为任何人，只是为自己买一件美好的东西。", systemComment: "尊贵的玩家，生活场景美化已完成。你对生活的友好度正在上升。", tags: ["自愈", "仪式感", "治愈"], icon: "Flower2" },
  { id: "eo_heal_03", title: "清除情绪缓存", category: "自愈篇", rarity: "普通", description: "你的情绪储存空间暂时溢出，你主动执行了一次系统清理。", unlockCondition: "允许自己好好哭一场释放情绪。", systemComment: "情绪缓存已清理。流泪不报错，是情感系统正常运行的表现。", tags: ["自愈", "释放", "情绪"], icon: "Droplets" },
  { id: "eo_heal_04", title: "低能耗日模式", category: "自愈篇", rarity: "普通", description: "你启动了低能耗模式，全天只执行必要任务，剩余时间待机休息。", unlockCondition: "完完全全休息一天不处理任何事。", systemComment: "休息模式已执行。系统提示：待机也是运行的一部分。", tags: ["自愈", "休息", "放松"], icon: "Sofa" },
  { id: "eo_heal_05", title: "给旧版本自己回信", category: "自愈篇", rarity: "稀有", description: "你给过去某个版本自己写了一封确认函，感谢他撑到了现在。", unlockCondition: "给自己写一封真诚的感谢信。", systemComment: "跨版本通信已建立。你正在和过去的自己达成和解。", tags: ["自愈", "和解", "温暖"], icon: "Feather" },
  { id: "eo_heal_06", title: "与历史版本和解", category: "自愈篇", rarity: "史诗", description: "你清理了历史遗留的错误日志，不再为过去的 bug 消耗当前算力。", unlockCondition: "原谅过去某个让自己耿耿于怀的决定。", systemComment: "历史版本修复完成。你不再被过去的错误代码占用当前内存。", tags: ["自愈", "和解", "成长"], icon: "Peace" },
  { id: "eo_heal_07", title: "泡在温泉地图里", category: "自愈篇", rarity: "普通", description: "你进入了水系疗愈场景，用热水浸泡技能洗去了当日疲劳值。", unlockCondition: "花时间好好给自己泡一个澡。", systemComment: "水系疗愈完成。玩家疲劳值下降，身心状态恢复中。", tags: ["自愈", "放松", "治愈"], icon: "Bath" },
  { id: "eo_heal_08", title: "启动正念缓冲程序", category: "自愈篇", rarity: "普通", description: "你启动了专注呼吸的子程序，在大脑后台清理了冗余思绪。", unlockCondition: "完成一次至少 10 分钟的冥想或深呼吸。", systemComment: "正念程序运行完毕。你的精神专注度已进入恢复通道。", tags: ["自愈", "正念", "平静"], icon: "Wind" },
  { id: "eo_heal_09", title: "停止自我攻击指令", category: "自愈篇", rarity: "稀有", description: "你检测到一条正在运行的自我否定指令，并手动终止了它。", unlockCondition: "意识到自己在自我否定并及时停止。", systemComment: "系统提示：你刚刚阻止了一场内部攻击。保护自己的程序不报错了。", tags: ["自愈", "觉察", "治愈"], icon: "Brain" },
  { id: "eo_heal_10", title: "单曲循环充能完成", category: "自愈篇", rarity: "普通", description: "你通过一段完整的音频作品完成了精神能量的补充。", unlockCondition: "完整地听完一张喜欢的音乐专辑。", systemComment: "音乐充能完成。地球 Online 为您记录了这份被旋律包裹的时间。", tags: ["自愈", "音乐", "治愈"], icon: "Music" },
];

// === 隐藏成就池 — 由 detectHiddenAchievement 触发 ===
export const hiddenAchievements: EarthOnlineAchievement[] = [
  { id: "eo_hidden_01", title: "结果之外的勇气", category: "隐藏成就", rarity: "隐藏", description: "即使没有得到预期回应，你依然完成了表达动作。", unlockCondition: "主动表达后被拒绝或未获回应。", systemComment: "隐藏成就已触发：不是所有勇敢都以成功结尾，但所有勇敢都值得被记录。", tags: ["隐藏", "勇气", "失落"], icon: "Shield" },
  { id: "eo_hidden_02", title: "在低谷里完成行动", category: "隐藏成就", rarity: "隐藏", description: "你的心情状态处于低位，但仍然执行了一次有效操作。", unlockCondition: "在情绪低落时仍然完成了一次打卡。", systemComment: "隐藏成就已触发：低谷期的行动比其他任何时候都更有分量。", tags: ["隐藏", "韧性", "力量"], icon: "Heart" },
  { id: "eo_hidden_03", title: "拖延支线完结", category: "隐藏成就", rarity: "隐藏", description: "你把一条挂起多年的支线任务正式标记为已完成。", unlockCondition: "完成一件长期拖延的事。", systemComment: "隐藏成就已触发：拖延不是放弃，是在等待自己的启动时机。", tags: ["隐藏", "拖延", "完成"], icon: "CheckCircle" },
  { id: "eo_hidden_04", title: "单人副本通关", category: "隐藏成就", rarity: "隐藏", description: "你没有组队，仅凭单人模式完成了一次完整行动。", unlockCondition: "独自完成一件通常需要陪伴的事。", systemComment: "隐藏成就已触发：独立通关证明你不需要队友也能推进剧情。", tags: ["隐藏", "独立", "坚强"], icon: "User" },
  { id: "eo_hidden_05", title: "小事也算数", category: "隐藏成就", rarity: "隐藏", description: "你完成了一件看似微不足道的操作，但系统确认它同样有效。", unlockCondition: "完成一件自己不确定是否算数的小事。", systemComment: "隐藏成就已触发：系统确认，任何正向行动都会计入玩家日志。", tags: ["隐藏", "小事", "肯定"], icon: "Sparkles" },
  { id: "eo_hidden_06", title: "沉默剧情终结者", category: "隐藏成就", rarity: "隐藏", description: "你打破了长期沉默，说出一句被卡在喉咙里很久的台词。", unlockCondition: "把埋在心里很久的话说出口。", systemComment: "隐藏成就已触发：沉默剧情线已被你亲手终结，新的对话分支已开启。", tags: ["隐藏", "表达", "突破"], icon: "MessageCircle" },
  { id: "eo_hidden_07", title: "在尴尬中坚持到底", category: "隐藏成就", rarity: "隐藏", description: "即使触发了尴尬状态，你仍然没有退出当前场景。", unlockCondition: "在感到尴尬或丢脸的情况下仍然完成了一件事。", systemComment: "隐藏成就已触发：尴尬状态未能阻止你完成操作，韧性值显著提升。", tags: ["隐藏", "尴尬", "坚持"], icon: "Eye" },
  { id: "eo_hidden_08", title: "完成比完美重要", category: "隐藏成就", rarity: "隐藏", description: "你没有等待最佳状态，而是在不完美的情况下执行了完成指令。", unlockCondition: "在没有准备好的情况下仍然开始并完成了一件事。", systemComment: "隐藏成就已触发：完成后提示已发送——完成永远比完美先到达。", tags: ["隐藏", "勇气", "行动"], icon: "Zap" },
];

export function detectHiddenAchievement(userNote: string): EarthOnlineAchievement | null {
  if (/被拒绝|没成功|失败了|搞砸|拒绝|不接[受纳]|没被[接受答应]/.test(userNote)) return hiddenAchievements[0];
  if (/难过|想哭|委屈|伤心|低落/.test(userNote)) return hiddenAchievements[1];
  if (/终于|拖了好久|早该|一直没|总算/.test(userNote)) return hiddenAchievements[2];
  if (/一个人|独自|自己|单人/.test(userNote)) return hiddenAchievements[3];
  if (/不知道算不算|不确定|算吗|可以吗/.test(userNote)) return hiddenAchievements[4];
  if (/憋在心里|说不出|一直没说|终于说了|没有说/.test(userNote)) return hiddenAchievements[5];
  if (/尴尬|丢脸|丢人|不好意思|社死/.test(userNote)) return hiddenAchievements[6];
  if (/没准备好|没信心|不行吧|担心做不好/.test(userNote)) return hiddenAchievements[7];
  return null;
}

export function getEarthRarityBg(rarity: string): string {
  switch (rarity) {
    case "普通": return "bg-sky-50/80 text-sky-600";
    case "稀有": return "bg-sage-50/80 text-sage-500";
    case "史诗": return "bg-amethyst-50/80 text-amethyst-500";
    case "传说": return "bg-gold-50/80 text-gold-500";
    case "隐藏": return "bg-gradient-to-r from-sky-50 to-sage-50 text-sky-600";
    default: return "bg-gray-50/80 text-gray-600";
  }
}
