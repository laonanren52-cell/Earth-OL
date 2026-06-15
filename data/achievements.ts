import { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  // === 恋爱篇 (12) ===
  { id: "love_01", title: "第一次主动发消息", category: "恋爱篇", rarity: "普通", description: "主动开启一次对话，不再只是等待别人靠近。", unlockCondition: "主动给在意的人发一条消息", icon: "message-circle", tags: ["恋爱", "主动", "勇气"], aiTone: "温柔地鼓励主动" },
  { id: "love_02", title: "主动表达喜欢", category: "恋爱篇", rarity: "史诗", description: "认真表达自己的心意，不让遗憾替你开口。", unlockCondition: "向喜欢的人坦诚自己的感受", icon: "heart", tags: ["恋爱", "勇气", "真诚"], aiTone: "郑重而温柔" },
  { id: "love_03", title: "拒绝了不喜欢的人", category: "恋爱篇", rarity: "稀有", description: "不再因为怕伤害别人而委屈自己。", unlockCondition: "温柔但坚定地拒绝一段关系", icon: "shield", tags: ["恋爱", "边界", "成长"], aiTone: "肯定边界感" },
  { id: "love_04", title: "和喜欢的人拍了合照", category: "恋爱篇", rarity: "稀有", description: "把这一刻留在相册里，以后回头看会笑出来。", unlockCondition: "主动邀请喜欢的人一起拍照", icon: "camera", tags: ["恋爱", "记录"], aiTone: "轻松可爱" },
  { id: "love_05", title: "放下了一段单恋", category: "恋爱篇", rarity: "史诗", description: "不是所有的喜欢都需要有结果，很多时候放下也是一种成熟。", unlockCondition: "决定不再执著于一个不可能的人", icon: "wind", tags: ["恋爱", "自愈", "成长"], aiTone: "释然而温柔" },
  { id: "love_06", title: "收到了喜欢的回应", category: "恋爱篇", rarity: "史诗", description: "你的心意被好好接住了，这种感觉真好。", unlockCondition: "得到喜欢之人的正面回应", icon: "sparkles", tags: ["恋爱", "幸福"], aiTone: "甜蜜而温暖" },
  { id: "love_07", title: "和对象吵完架主动和好", category: "恋爱篇", rarity: "稀有", description: "比吵架更需要勇气的是主动伸手和好。", unlockCondition: "在争吵后主动迈出和解的一步", icon: "handshake", tags: ["恋爱", "沟通", "勇气"], aiTone: "温柔地肯定沟通" },
  { id: "love_08", title: "写了一段真心话给喜欢的人", category: "恋爱篇", rarity: "稀有", description: "有些话说出来需要很大勇气，但你写了。", unlockCondition: "认真写一段真心话发给在意的人", icon: "pen-line", tags: ["恋爱", "真诚"], aiTone: "真诚而坚定" },
  { id: "love_09", title: "接受单身并享受独处", category: "恋爱篇", rarity: "史诗", description: "单身不是一种缺失，而是一种完整的自由。", unlockCondition: "真正享受一段独处的时光", icon: "leaf", tags: ["恋爱", "自愈", "成长"], aiTone: "平和而释然" },
  { id: "love_10", title: "删掉了前任的联系方式", category: "恋爱篇", rarity: "普通", description: "不是绝情，是终于决定往前走了。", unlockCondition: "为了自己删除不再需要的联系", icon: "trash-2", tags: ["恋爱", "告别"], aiTone: "释然地鼓励向前" },
  { id: "love_11", title: "第一次约会主动安排了行程", category: "恋爱篇", rarity: "普通", description: "不再是等着被安排，而是主动为两个人创造美好回忆。", unlockCondition: "主动计划和安排一次约会", icon: "map", tags: ["恋爱", "主动"], aiTone: "轻松而肯定" },
  { id: "love_12", title: "和喜欢的人聊到深夜", category: "恋爱篇", rarity: "普通", description: "有说不完的话本身就是一种很美好的信号。", unlockCondition: "和喜欢的人进行一次深入的长聊", icon: "moon", tags: ["恋爱", "分享"], aiTone: "温暖而甜蜜" },

  // === 生活篇 (12) ===
  { id: "life_01", title: "走出宿舍晒太阳", category: "生活篇", rarity: "普通", description: "离开房间，和真实世界重新连接。", unlockCondition: "今天主动出门晒太阳或散步至少 10 分钟", icon: "sun", tags: ["生活", "户外", "恢复能量"], aiTone: "治愈轻松" },
  { id: "life_02", title: "今天没有熬夜", category: "生活篇", rarity: "普通", description: "提前结束一天，把身体放在第一位。", unlockCondition: "在凌晨 12 点前放下手机睡觉", icon: "moon", tags: ["生活", "健康", "自律"], aiTone: "温和地肯定自律" },
  { id: "life_03", title: "整理了自己的房间", category: "生活篇", rarity: "普通", description: "整理生活空间，也是整理内心秩序。", unlockCondition: "认真打扫并整理自己的房间", icon: "home", tags: ["生活", "整理"], aiTone: "清爽而轻松" },
  { id: "life_04", title: "学会了一道新菜", category: "生活篇", rarity: "普通", description: "给自己做顿饭，是最具体的生活方式。", unlockCondition: "独立完成一道以前没做过的菜", icon: "utensils-crossed", tags: ["生活", "技能"], aiTone: "轻松可爱" },
  { id: "life_05", title: "早起了没有赖床", category: "生活篇", rarity: "普通", description: "不是和闹钟作对，而是和自己签了一个小小的约定。", unlockCondition: "闹钟响后马上起床没有回笼觉", icon: "sunrise", tags: ["生活", "自律"], aiTone: "温柔鼓励" },
  { id: "life_06", title: "拍到了一张很满意的照片", category: "生活篇", rarity: "普通", description: "生活中那些不经意的美，被你捕捉到了。", unlockCondition: "用心拍下一张让自己满意的照片", icon: "camera", tags: ["生活", "发现美"], aiTone: "欣赏而轻松" },
  { id: "life_07", title: "一个人完成了短途旅行", category: "生活篇", rarity: "稀有", description: "一个人上路，去一个陌生的地方。这是独立最具体的样子。", unlockCondition: "独自去一个没去过的地方旅行", icon: "map", tags: ["生活", "独立", "探险"], aiTone: "自由而治愈" },
  { id: "life_08", title: "看完了一整本书", category: "生活篇", rarity: "稀有", description: "在碎片化的时代，完整地读完一本书是一件值得骄傲的事。", unlockCondition: "从头到尾读完一本纸质书或电子书", icon: "book", tags: ["生活", "阅读", "专注"], aiTone: "安静而充实" },
  { id: "life_09", title: "坚持了一个好习惯 21 天", category: "生活篇", rarity: "史诗", description: "21 天是一个习惯养成的最小周期，你做到了。", unlockCondition: "连续 21 天坚持一个小习惯", icon: "habit", tags: ["生活", "自律", "坚持"], aiTone: "骄傲而稳重" },
  { id: "life_10", title: "给自己的生活换了新的布置", category: "生活篇", rarity: "普通", description: "换一种布置，换一种心情。生活需要新鲜感。", unlockCondition: "重新布置或装饰自己的空间", icon: "palette", tags: ["生活", "创意"], aiTone: "轻松可爱" },
  { id: "life_11", title: "自己做了一个手工或DIY", category: "生活篇", rarity: "普通", description: "亲手做出来的东西，有一种特别的温度。", unlockCondition: "完成一次手工或DIY作品", icon: "brush", tags: ["生活", "创意"], aiTone: "治愈而温暖" },
  { id: "life_12", title: "在自然中待了一整个下午", category: "生活篇", rarity: "普通", description: "什么都不做，只是在自然里待着。这是最好的充电方式。", unlockCondition: "花一个下午在户外享受自然", icon: "tree-deciduous", tags: ["生活", "治愈", "自然"], aiTone: "宁静治愈" },

  // === 成长篇 (12) ===
  { id: "grow_01", title: "拒绝无效内耗", category: "成长篇", rarity: "稀有", description: "发现自己想太多时，及时按下暂停键。", unlockCondition: "意识到自己在过度思考并主动停止", icon: "brain", tags: ["成长", "自愈", "觉察"], aiTone: "觉察而温和" },
  { id: "grow_02", title: "完成了一件拖了很久的事", category: "成长篇", rarity: "稀有", description: "把一直挂在心里的事情真正做完。", unlockCondition: "完成那件你一直在拖延的任务", icon: "check-circle", tags: ["成长", "执行力"], aiTone: "肯定执行力" },
  { id: "grow_03", title: "不再讨好所有人", category: "成长篇", rarity: "史诗", description: "开始把自己的感受放回重要位置。", unlockCondition: "出于自我尊重而非讨好他人做出了一个决定", icon: "shield", tags: ["成长", "边界", "自我"], aiTone: "坚定而温柔" },
  { id: "grow_04", title: "承认自己的错误", category: "成长篇", rarity: "普通", description: "承认错误不是示弱，是内心有力量的信号。", unlockCondition: "主动承认自己做错了并道歉", icon: "check", tags: ["成长", "诚实"], aiTone: "肯定诚实" },
  { id: "grow_05", title: "制定了明确的年度目标", category: "成长篇", rarity: "稀有", description: "知道自己想去哪里，是一切改变的第一步。", unlockCondition: "认真写下今年的具体目标", icon: "target", tags: ["成长", "规划"], aiTone: "稳重而鼓励" },
  { id: "grow_06", title: "坚持写日记一周", category: "成长篇", rarity: "普通", description: "记录生活，是和自己对话的最好方式。", unlockCondition: "连续一周每天写日记", icon: "notebook", tags: ["成长", "记录"], aiTone: "安静陪伴" },
  { id: "grow_07", title: "接受了自己的不完美", category: "成长篇", rarity: "稀有", description: "不完美不是缺陷，是你和有血有肉的生命达成了和解。", unlockCondition: "坦然面对自己的一个缺点", icon: "heart", tags: ["成长", "自愈", "接纳"], aiTone: "温柔接纳" },
  { id: "grow_08", title: "做出了一个不后悔的决定", category: "成长篇", rarity: "史诗", description: "人生就是一连串的选择。这次你选择了不后悔。", unlockCondition: "经过深思熟虑后做出一个重要决定", icon: "compass", tags: ["成长", "独立"], aiTone: "稳重而坚定" },
  { id: "grow_09", title: "制定了时间管理计划", category: "成长篇", rarity: "普通", description: "主动管理时间，而不是被时间推着走。", unlockCondition: "制定并坚持一天的时间计划", icon: "clock", tags: ["成长", "自律"], aiTone: "鼓励自律" },
  { id: "grow_10", title: "主动寻求了帮助", category: "成长篇", rarity: "普通", description: "承认自己需要帮助，是一种更成熟的独立。", unlockCondition: "在自己做不到时主动向他人求助", icon: "hand", tags: ["成长", "沟通"], aiTone: "温柔肯定" },
  { id: "grow_11", title: "从失败中总结了经验", category: "成长篇", rarity: "稀有", description: "失败不是终点，是把经验装进口袋继续上路。", unlockCondition: "从一次失败中认真总结经验教训", icon: "refresh-cw", tags: ["成长", "韧性"], aiTone: "鼓励韧性" },
  { id: "grow_12", title: "完成了 30 天自我挑战", category: "成长篇", rarity: "史诗", description: "30 天的坚持，你在用行动证明给自己看。", unlockCondition: "坚持一个自我挑战项目 30 天", icon: "zap", tags: ["成长", "坚持", "自律"], aiTone: "骄傲而温暖" },

  // === 自愈篇 (12) ===
  { id: "heal_01", title: "一个人吃顿好的", category: "自愈篇", rarity: "稀有", description: "不等别人，自己认真照顾自己。", unlockCondition: "独自去一家喜欢的餐厅好好吃一顿", icon: "utensils-crossed", tags: ["自愈", "自我关怀"], aiTone: "温暖治愈" },
  { id: "heal_02", title: "给自己买一束花", category: "自愈篇", rarity: "稀有", description: "生活不一定盛大，但可以被自己点亮。", unlockCondition: "不为任何人，只是为自己买一件美好的东西", icon: "flower-2", tags: ["自愈", "仪式感"], aiTone: "治愈而温暖" },
  { id: "heal_03", title: "大哭了一场然后好了", category: "自愈篇", rarity: "普通", description: "哭不是软弱，是情绪找到了出口。", unlockCondition: "允许自己好好哭一场并释放情绪", icon: "droplets", tags: ["自愈", "情绪释放"], aiTone: "温柔接纳" },
  { id: "heal_04", title: "给自己放了完整的假", category: "自愈篇", rarity: "普通", description: "什么也不做，也是对自己的一种负责。", unlockCondition: "完完全全休息一天不处理任何事", icon: "sofa", tags: ["自愈", "休息"], aiTone: "轻松治愈" },
  { id: "heal_05", title: "写了封感谢信给自己", category: "自愈篇", rarity: "稀有", description: "你从来没有认真对自己说过谢谢，今天是第一次。", unlockCondition: "给自己写一封真诚的感谢信", icon: "feather", tags: ["自愈", "自我关怀"], aiTone: "温暖治愈" },
  { id: "heal_06", title: "不再责怪过去的自己", category: "自愈篇", rarity: "史诗", description: "和过去的自己和解，是人生最重要的一次自愈。", unlockCondition: "原谅过去某个让自己耿耿于怀的决定", icon: "peace", tags: ["自愈", "和解", "成长"], aiTone: "释然而温暖" },
  { id: "heal_07", title: "好好泡了一个热水澡", category: "自愈篇", rarity: "普通", description: "用最温柔的方式，洗去一天的疲惫。", unlockCondition: "花时间好好给自己泡一个澡", icon: "bath", tags: ["自愈", "放松"], aiTone: "温暖治愈" },
  { id: "heal_08", title: "冥想或深呼吸了十分钟", category: "自愈篇", rarity: "普通", description: "安静下来，和自己待一会儿。", unlockCondition: "完成一次至少 10 分钟的冥想或深呼吸", icon: "wind", tags: ["自愈", "正念"], aiTone: "宁静治愈" },
  { id: "heal_09", title: "停止了一次自我否定", category: "自愈篇", rarity: "稀有", description: "当负面念头出现时，你选择了对自己手下留情。", unlockCondition: "意识到自己在自我否定并及时停止", icon: "brain", tags: ["自愈", "觉察"], aiTone: "温柔接纳" },
  { id: "heal_10", title: "听了一整张喜欢的专辑", category: "自愈篇", rarity: "普通", description: "让音乐包裹自己，是最好的自我疗愈之一。", unlockCondition: "完整地听完一张喜欢的音乐专辑", icon: "music", tags: ["自愈", "治愈"], aiTone: "轻松治愈" },
  { id: "heal_11", title: "写下了自己的情绪", category: "自愈篇", rarity: "普通", description: "把说不出口的情绪写下来，是一种深层的整理。", unlockCondition: "认真记录和梳理自己的情绪", icon: "pen-tool", tags: ["自愈", "表达"], aiTone: "安静而治愈" },
  { id: "heal_12", title: "被一首诗或一段话治愈了", category: "自愈篇", rarity: "普通", description: "文字的力量有时候比拥抱更温柔。", unlockCondition: "记录下一段真正触动你的文字", icon: "quote", tags: ["自愈", "治愈"], aiTone: "安静治愈" },

  // === 社交篇 (10) ===
  { id: "soc_01", title: "和朋友认真聊一次", category: "社交篇", rarity: "普通", description: "不是敷衍寒暄，而是真正交流一次。", unlockCondition: "和好友进行一次有深度的对话", icon: "message-square", tags: ["社交", "深度交流"], aiTone: "温暖肯定" },
  { id: "soc_02", title: "主动认识了一个新朋友", category: "社交篇", rarity: "稀有", description: "在不熟悉的环境里主动迈出第一步，比想象中需要更多勇气。", unlockCondition: "主动结识一个新朋友", icon: "user-plus", tags: ["社交", "勇气"], aiTone: "鼓励社交" },
  { id: "soc_03", title: "参加了集体活动", category: "社交篇", rarity: "普通", description: "走进人群本身，就是一种主动的选择。", unlockCondition: "参加一次集体聚会或活动", icon: "users", tags: ["社交", "参与"], aiTone: "温暖肯定" },
  { id: "soc_04", title: "拒绝了不喜欢的社交邀约", category: "社交篇", rarity: "普通", description: "不是所有的社交都值得参加，保护自己的时间也是一种成熟。", unlockCondition: "委婉拒绝一个不想去的社交活动", icon: "x-circle", tags: ["社交", "边界"], aiTone: "肯定自我保护" },
  { id: "soc_05", title: "在公开场合表达了观点", category: "社交篇", rarity: "稀有", description: "你的声音值得被听到。", unlockCondition: "在会议或讨论中主动表达自己的想法", icon: "mic", tags: ["社交", "表达", "勇气"], aiTone: "鼓励表达" },
  { id: "soc_06", title: "给朋友准备了惊喜", category: "社交篇", rarity: "普通", description: "用心对待朋友，是这世界上最温暖的投资。", unlockCondition: "为朋友准备一个小惊喜", icon: "gift", tags: ["社交", "用心"], aiTone: "温暖而可爱" },
  { id: "soc_07", title: "主动和老朋友恢复了联系", category: "社交篇", rarity: "普通", description: "有些友谊不需要天天联系，但需要有人先开口。", unlockCondition: "主动联系一个很久没见的朋友", icon: "repeat", tags: ["社交", "维系"], aiTone: "温暖肯定" },
  { id: "soc_08", title: "帮助了一个陌生人", category: "社交篇", rarity: "稀有", description: "对陌生人伸出援手，是人性中最温暖的光。", unlockCondition: "主动帮助一个不认识的陌生人", icon: "hand", tags: ["社交", "善意"], aiTone: "温暖而崇高" },
  { id: "soc_09", title: "维持了一段异地的友谊", category: "社交篇", rarity: "稀有", description: "距离不会稀释真正的友谊，但经营它需要你的用心。", unlockCondition: "和异地好友保持定期联系和分享", icon: "globe", tags: ["社交", "维系"], aiTone: "温暖肯定" },
  { id: "soc_10", title: "在社交中自然地做自己", category: "社交篇", rarity: "史诗", description: "不用迎合、不用表演，真实本身就是最好的社交状态。", unlockCondition: "在社交场合完全做自己而不感到压力", icon: "smile", tags: ["社交", "自信"], aiTone: "温柔肯定" },

  // === 学习篇 (12) ===
  { id: "study_01", title: "认真复习了一门课", category: "学习篇", rarity: "普通", description: "不是临时抱佛脚，而是真正花时间去理解。", unlockCondition: "花至少 2 小时认真复习课程内容", icon: "book-open", tags: ["学习", "专注"], aiTone: "认真鼓励" },
  { id: "study_02", title: "学会了新技能", category: "学习篇", rarity: "稀有", description: "主动学习新技能，是你和这个世界保持连接的方式。", unlockCondition: "学会一项新的实用技能", icon: "lightbulb", tags: ["学习", "成长"], aiTone: "鼓励成长" },
  { id: "study_03", title: "顺利通过了重要考试", category: "学习篇", rarity: "稀有", description: "那些熬过的夜、背过的知识点，在今天变成了结果。", unlockCondition: "通过一次重要的考试或考核", icon: "trophy", tags: ["学习", "成果"], aiTone: "骄傲而温暖" },
  { id: "study_04", title: "养成了每日学习的习惯", category: "学习篇", rarity: "稀有", description: "每天进步一点点，比一次大量学习更有效。", unlockCondition: "坚持每天学习至少 30 分钟连续一周", icon: "graduation-cap", tags: ["学习", "自律"], aiTone: "鼓励自律" },
  { id: "study_05", title: "写完了论文或报告", category: "学习篇", rarity: "普通", description: "把脑子里的想法变成文字，本身就是一种巨大的成就感。", unlockCondition: "完成一篇论文或报告的写作", icon: "file-text", tags: ["学习", "成果"], aiTone: "肯定成果" },
  { id: "study_06", title: "课堂上主动回答了问题", category: "学习篇", rarity: "普通", description: "从听到说，从被动到主动，这个跨越很重要。", unlockCondition: "在课堂上主动举手回答问题", icon: "hand", tags: ["学习", "勇气", "表达"], aiTone: "温柔鼓励" },
  { id: "study_07", title: "做了详细的学习笔记", category: "学习篇", rarity: "普通", description: "好记性不如烂笔头，你的笔记是你最好的老师。", unlockCondition: "花时间整理一份详细的学习笔记", icon: "notebook-pen", tags: ["学习", "方法"], aiTone: "肯定方法" },
  { id: "study_08", title: "参加了感兴趣的讲座", category: "学习篇", rarity: "普通", description: "主动去接触课堂之外的知识，是探索世界的方式。", unlockCondition: "参加一次课外讲座或分享会", icon: "speaker", tags: ["学习", "探索"], aiTone: "鼓励探索" },
  { id: "study_09", title: "和同学组队完成了项目", category: "学习篇", rarity: "普通", description: "学会合作，是学习中最重要的一课。", unlockCondition: "和同学协作完成一个小组项目", icon: "users", tags: ["学习", "合作"], aiTone: "温暖地鼓励合作" },
  { id: "study_10", title: "向老师请教了一个问题", category: "学习篇", rarity: "普通", description: "敢于提问，是最好的学习态度。", unlockCondition: "主动向老师提问或请教", icon: "help-circle", tags: ["学习", "主动"], aiTone: "鼓励主动学习" },
  { id: "study_11", title: "看完了一门在线课程", category: "学习篇", rarity: "稀有", description: "在线课程很难坚持到底，你做到了。", unlockCondition: "完整看完一门在线课程", icon: "monitor", tags: ["学习", "自律"], aiTone: "肯定坚持" },
  { id: "study_12", title: "用学到的知识解决了一个实际问题", category: "学习篇", rarity: "稀有", description: "学以致用，是学习最有成就感的一刻。", unlockCondition: "用学到的知识解决生活中的实际问题", icon: "wrench", tags: ["学习", "应用"], aiTone: "鼓励应用" },

  // === 勇气篇 (12) ===
  { id: "brave_01", title: "第一次上台发言", category: "勇气篇", rarity: "稀有", description: "站在人群面前说出自己想说的话，这本身就是一件值得骄傲的事。", unlockCondition: "在公众场合进行第一次正式发言", icon: "mic", tags: ["勇气", "表达"], aiTone: "鼓励勇气" },
  { id: "brave_02", title: "说出了不敢说的话", category: "勇气篇", rarity: "史诗", description: "有些话在心里藏了很久，今天你决定不再沉默。", unlockCondition: "把一直藏在心里的话说出口", icon: "message-circle", tags: ["勇气", "真诚"], aiTone: "郑重而温暖" },
  { id: "brave_03", title: "走出舒适区尝试了新事物", category: "勇气篇", rarity: "稀有", description: "舒适区外也许不一定更好，但你选择了去看看。", unlockCondition: "尝试一件以前从不敢尝试的事", icon: "arrow-right", tags: ["勇气", "探索"], aiTone: "鼓励探索" },
  { id: "brave_04", title: "为自己发声了一次", category: "勇气篇", rarity: "史诗", description: "在被忽视或不被理解的时候，你选择了站出来为自己说话。", unlockCondition: "在被误解时勇敢为自己辩解", icon: "shield", tags: ["勇气", "自我"], aiTone: "坚定而温柔" },
  { id: "brave_05", title: "承认了自己的脆弱", category: "勇气篇", rarity: "稀有", description: "脆弱不是缺口，是另一扇窗。", unlockCondition: "向信任的人展现真实的脆弱", icon: "heart", tags: ["勇气", "信任"], aiTone: "温柔接纳" },
  { id: "brave_06", title: "在陌生环境里主动开口", category: "勇气篇", rarity: "普通", description: "未知的环境本身就让人紧张，而你选择了先开口。", unlockCondition: "在陌生场合主动开始一段对话", icon: "message-square", tags: ["勇气", "社交"], aiTone: "鼓励突破" },
  { id: "brave_07", title: "结束了一段不健康的关系", category: "勇气篇", rarity: "传说", description: "离开比留下更需要勇气。你选择了爱自己。", unlockCondition: "勇敢地结束一段消耗自己的关系", icon: "door-open", tags: ["勇气", "自愈", "边界"], aiTone: "坚定而温柔" },
  { id: "brave_08", title: "选择了和别人不一样的路", category: "勇气篇", rarity: "史诗", description: "不盲从、不跟风，选择一条少有人走的路需要真正的勇气。", unlockCondition: "追随内心做出与众不同的选择", icon: "map", tags: ["勇气", "独立"], aiTone: "鼓励独立" },
  { id: "brave_09", title: "在失败后再次尝试", category: "勇气篇", rarity: "稀有", description: "跌倒后站起来，比从未跌倒更需要勇气。", unlockCondition: "在经历失败后重新开始尝试", icon: "rotate-ccw", tags: ["勇气", "韧性"], aiTone: "鼓励韧性" },
  { id: "brave_10", title: "为自己设定了底线", category: "勇气篇", rarity: "稀有", description: "知道什么不能妥协，是一种成熟的勇气。", unlockCondition: "明确告诉别人自己的底线和原则", icon: "shield", tags: ["勇气", "边界"], aiTone: "坚定肯定" },
  { id: "brave_11", title: "面对了恐惧的事情", category: "勇气篇", rarity: "史诗", description: "恐惧没有消失，但你不再是它的囚徒。", unlockCondition: "直面一件一直让你害怕的事情", icon: "eye", tags: ["勇气", "面对"], aiTone: "鼓励面对" },
  { id: "brave_12", title: "对一个重要的人说了真心话", category: "勇气篇", rarity: "传说", description: "在重要的关系里说出真心话，是最需要勇气的行动之一。", unlockCondition: "对生命中重要的人坦诚自己的真实感受", icon: "heart", tags: ["勇气", "真诚"], aiTone: "郑重而温暖" },

  // === 健康篇 (10) ===
  { id: "health_01", title: "坚持运动了一周", category: "健康篇", rarity: "普通", description: "身体在慢慢变好，而你正在参与这个过程。", unlockCondition: "连续一周每天运动至少 20 分钟", icon: "activity", tags: ["健康", "自律"], aiTone: "鼓励自律" },
  { id: "health_02", title: "喝了八杯水", category: "健康篇", rarity: "普通", description: "最简单的习惯，但坚持做就是对自己最好的照顾。", unlockCondition: "今天喝够了 8 杯水", icon: "cup-soda", tags: ["健康", "习惯"], aiTone: "轻松肯定" },
  { id: "health_03", title: "去体检了", category: "健康篇", rarity: "稀有", description: "了解自己的身体状况，是对自己负责的第一步。", unlockCondition: "完成一次全面的身体检查", icon: "stethoscope", tags: ["健康", "负责"], aiTone: "稳重鼓励" },
  { id: "health_04", title: "戒掉了高糖饮料", category: "健康篇", rarity: "稀有", description: "你不只是在戒饮料，你在为自己的长期健康做选择。", unlockCondition: "坚持一周不喝含糖饮料", icon: "coffee", tags: ["健康", "自律"], aiTone: "鼓励自律" },
  { id: "health_05", title: "尝试了新的运动方式", category: "健康篇", rarity: "普通", description: "运动不只有一种形式，找到自己喜欢的才是关键。", unlockCondition: "尝试一种以前没做过的运动", icon: "running", tags: ["健康", "探索"], aiTone: "轻松鼓励" },
  { id: "health_06", title: "规律作息了一周", category: "健康篇", rarity: "稀有", description: "规律作息是对身体最基础也最重要的承诺。", unlockCondition: "连续一周保持规律作息", icon: "clock", tags: ["健康", "自律"], aiTone: "温和肯定" },
  { id: "health_07", title: "做了一次拉伸放松", category: "健康篇", rarity: "普通", description: "给身体一点拉伸的空间，也是给紧绷的神经松绑。", unlockCondition: "花 15 分钟做拉伸或放松运动", icon: "stretch", tags: ["健康", "放松"], aiTone: "轻松治愈" },
  { id: "health_08", title: "减少了屏幕使用时间", category: "健康篇", rarity: "稀有", description: "放下屏幕，把注意力还给真实世界。", unlockCondition: "今天屏幕使用时间比平时减少 2 小时", icon: "smartphone", tags: ["健康", "自律"], aiTone: "温和鼓励" },
  { id: "health_09", title: "吃了健康的早餐", category: "健康篇", rarity: "普通", description: "好好吃早餐，是一天对自己最好的开场。", unlockCondition: "今天认真吃了一顿营养早餐", icon: "sunrise", tags: ["健康", "习惯"], aiTone: "轻松温暖" },
  { id: "health_10", title: "散步代替了坐车", category: "健康篇", rarity: "普通", description: "多走一段路，多呼吸一口新鲜空气。", unlockCondition: "用步行代替一次短途乘车", icon: "walk", tags: ["健康", "环保"], aiTone: "轻松肯定" },

  // === 亲情篇 (10) ===
  { id: "fam_01", title: "给父母打了通电话", category: "亲情篇", rarity: "普通", description: "一通电话，对父母来说可能是一整天的好心情。", unlockCondition: "主动给家人打一通电话聊聊近况", icon: "phone", tags: ["亲情", "关心"], aiTone: "温暖治愈" },
  { id: "fam_02", title: "和父母说了我爱你", category: "亲情篇", rarity: "史诗", description: "中国人不常说爱，但你说出来了。这比什么都珍贵。", unlockCondition: "对父母直接说出我爱你", icon: "heart", tags: ["亲情", "勇气"], aiTone: "温暖而郑重" },
  { id: "fam_03", title: "帮家里做了一件家务", category: "亲情篇", rarity: "普通", description: "不是被要求的，而是主动去做的。", unlockCondition: "主动完成一件家务事", icon: "home", tags: ["亲情", "分担"], aiTone: "温暖肯定" },
  { id: "fam_04", title: "和父母一起散步", category: "亲情篇", rarity: "普通", description: "一起慢慢走一段路，比什么礼物都珍贵。", unlockCondition: "陪父母散步或出门走走", icon: "walk", tags: ["亲情", "陪伴"], aiTone: "温暖平静" },
  { id: "fam_05", title: "给家人准备了一顿饭", category: "亲情篇", rarity: "稀有", description: "在饭桌上有你亲手做的菜，是最具体的心意。", unlockCondition: "亲手为家人做一顿饭", icon: "utensils", tags: ["亲情", "用心"], aiTone: "温暖治愈" },
  { id: "fam_06", title: "教父母用新科技", category: "亲情篇", rarity: "普通", description: "耐心教父母使用新东西，是最温柔的孝顺。", unlockCondition: "耐心教家人使用手机或电脑新功能", icon: "smartphone", tags: ["亲情", "耐心"], aiTone: "温暖肯定" },
  { id: "fam_07", title: "给父母买了礼物", category: "亲情篇", rarity: "普通", description: "不是节日，只是想让他们开心。", unlockCondition: "没有特殊原因也给父母准备礼物", icon: "gift", tags: ["亲情", "用心"], aiTone: "温暖治愈" },
  { id: "fam_08", title: "和家人拍了全家福", category: "亲情篇", rarity: "稀有", description: "一家人在一起的时刻，最值得被定格。", unlockCondition: "组织或参与一张全家福的拍摄", icon: "camera", tags: ["亲情", "记录"], aiTone: "温暖感人" },
  { id: "fam_09", title: "原谅了父母的某个不完美", category: "亲情篇", rarity: "史诗", description: "父母也是第一次当父母，原谅不完美是一种深刻的成长。", unlockCondition: "理解和接纳父母的一个缺点", icon: "heart", tags: ["亲情", "和解", "成长"], aiTone: "温柔深刻" },
  { id: "fam_10", title: "和兄弟姐妹好好聊了一次", category: "亲情篇", rarity: "普通", description: "从小一起长大的人，值得一次认真的对话。", unlockCondition: "和手足进行一次非表面的交流", icon: "message-square", tags: ["亲情", "沟通"], aiTone: "温暖治愈" },

  // === 校园篇 (10) ===
  { id: "campus_01", title: "参加了社团活动", category: "校园篇", rarity: "普通", description: "大学生活不只在上课中度过。", unlockCondition: "积极参与一次社团或组织活动", icon: "users", tags: ["校园", "社交"], aiTone: "温暖鼓励" },
  { id: "campus_02", title: "在课上做了精彩的展示", category: "校园篇", rarity: "稀有", description: "站在所有人面前展示自己的成果，你做得很棒。", unlockCondition: "完成一次让老师同学印象深刻的课堂展示", icon: "presentation", tags: ["校园", "表达", "勇气"], aiTone: "肯定表现" },
  { id: "campus_03", title: "和舍友和谐相处了一学期", category: "校园篇", rarity: "稀有", description: "和不同的人住在一起本身就是一种功课，而你做得不赖。", unlockCondition: "和舍友维持了一学期的良好关系", icon: "home", tags: ["校园", "社交"], aiTone: "温暖肯定" },
  { id: "campus_04", title: "没有逃课坚持到期末", category: "校园篇", rarity: "普通", description: "每一节课都准时出现，本身就是一种自律。", unlockCondition: "本学期没有一次无故缺课", icon: "calendar", tags: ["校园", "自律"], aiTone: "温和鼓励" },
  { id: "campus_05", title: "参与了志愿活动", category: "校园篇", rarity: "稀有", description: "用课余时间去帮助别人，这是校园里最有意义的事之一。", unlockCondition: "参加一次志愿者或公益活动", icon: "hand-heart", tags: ["校园", "善意"], aiTone: "温暖而崇高" },
  { id: "campus_06", title: "拿了一次奖学金", category: "校园篇", rarity: "史诗", description: "努力的成果不仅属于你，也得到了正式的认可。", unlockCondition: "获得一次奖学金或荣誉", icon: "award", tags: ["校园", "成果"], aiTone: "骄傲肯定" },
  { id: "campus_07", title: "参加了校园比赛", category: "校园篇", rarity: "普通", description: "结果不重要，敢于报名参赛已经是勇敢的开始。", unlockCondition: "报名参加一项校园比赛或竞赛", icon: "trophy", tags: ["校园", "勇气"], aiTone: "鼓励参与" },
  { id: "campus_08", title: "找到了未来方向", category: "校园篇", rarity: "史诗", description: "在大学里找到自己想走的路，比任何高分都重要。", unlockCondition: "确定了自己的职业或学业方向", icon: "compass", tags: ["校园", "成长"], aiTone: "稳重祝福" },
  { id: "campus_09", title: "策划了一场校园活动", category: "校园篇", rarity: "稀有", description: "从策划到落地，你证明了自己的组织能力。", unlockCondition: "独立或合作策划一场活动并成功举办", icon: "calendar-check", tags: ["校园", "组织"], aiTone: "肯定能力" },
  { id: "campus_10", title: "认真完成了毕业设计", category: "校园篇", rarity: "传说", description: "大学的最后一份答卷，你用心完成了。", unlockCondition: "顺利完成自己的毕业设计或毕业论文", icon: "graduation-cap", tags: ["校园", "成果", "终结"], aiTone: "骄傲而感慨" },
];

export const categories: { label: string; value: string }[] = [
  { label: "全部", value: "all" },
  { label: "恋爱篇", value: "恋爱篇" },
  { label: "生活篇", value: "生活篇" },
  { label: "成长篇", value: "成长篇" },
  { label: "自愈篇", value: "自愈篇" },
  { label: "社交篇", value: "社交篇" },
  { label: "学习篇", value: "学习篇" },
  { label: "勇气篇", value: "勇气篇" },
  { label: "健康篇", value: "健康篇" },
  { label: "亲情篇", value: "亲情篇" },
  { label: "校园篇", value: "校园篇" },
];

export function getRarityColor(rarity: string): string {
  switch (rarity) {
    case "普通": return "common";
    case "稀有": return "rare";
    case "史诗": return "epic";
    case "传说": return "legendary";
    default: return "common";
  }
}

export function getRarityBg(rarity: string): string {
  switch (rarity) {
    case "普通": return "bg-sky-50/80 text-sky-600";
    case "稀有": return "bg-sage-50/80 text-sage-500";
    case "史诗": return "bg-amethyst-50/80 text-amethyst-500";
    case "传说": return "bg-gold-50/80 text-gold-500";
    default: return "bg-gray-50/80 text-gray-600";
  }
}

export function getCategoryLabel(category: string): string {
  return categories.find(c => c.value === category)?.label || category;
}
