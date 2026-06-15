export type IconPreset = {
  key: string;
  icon: string;
  label: string;
  categories: string[];
  suitableTags: string[];
};

export const iconPresets: IconPreset[] = [
  { key: "sun", icon: "Sun", label: "太阳", categories: ["生活篇", "健康篇"], suitableTags: ["户外", "阳光", "活力"] },
  { key: "moon", icon: "Moon", label: "月亮", categories: ["生活篇", "自愈篇"], suitableTags: ["夜晚", "休息", "睡眠"] },
  { key: "heart", icon: "Heart", label: "心", categories: ["恋爱篇", "亲情篇", "自愈篇"], suitableTags: ["爱", "情感", "温暖"] },
  { key: "msg-circle", icon: "MessageCircle", label: "消息", categories: ["恋爱篇", "社交篇"], suitableTags: ["沟通", "主动", "表达"] },
  { key: "book-open", icon: "BookOpen", label: "书", categories: ["学习篇", "成长篇"], suitableTags: ["学习", "阅读", "知识"] },
  { key: "sparkles", icon: "Sparkles", label: "星光", categories: ["小确幸篇", "情绪篇", "自愈篇"], suitableTags: ["美好", "感动", "小确幸"] },
  { key: "feather", icon: "Feather", label: "羽毛笔", categories: ["成长篇", "情绪篇", "自愈篇"], suitableTags: ["记录", "表达", "写作"] },
  { key: "coffee", icon: "Coffee", label: "咖啡", categories: ["生活篇"], suitableTags: ["日常", "放松", "仪式感"] },
  { key: "home", icon: "Home", label: "家", categories: ["生活篇", "亲情篇", "整理篇"], suitableTags: ["家", "整理", "环境"] },
  { key: "shield", icon: "Shield", label: "盾牌", categories: ["勇气篇", "成长篇", "低谷篇"], suitableTags: ["勇气", "保护", "边界"] },
  { key: "leaf", icon: "Leaf", label: "叶子", categories: ["自愈篇", "情绪篇", "生活篇"], suitableTags: ["治愈", "自然", "平静"] },
  { key: "compass", icon: "Compass", label: "指南针", categories: ["成长篇", "校园篇"], suitableTags: ["方向", "规划", "探索"] },
  { key: "trophy", icon: "Trophy", label: "奖杯", categories: ["校园篇", "勇气篇"], suitableTags: ["成就", "荣誉", "努力"] },
  { key: "smile", icon: "Smile", label: "微笑", categories: ["小确幸篇", "情绪篇"], suitableTags: ["开心", "快乐", "治愈"] },
  { key: "star", icon: "Star", label: "星星", categories: ["小确幸篇", "自愈篇"], suitableTags: ["美好", "希望", "温暖"] },
  { key: "brain", icon: "Brain", label: "大脑", categories: ["成长篇", "情绪篇"], suitableTags: ["思考", "觉察", "内耗"] },
  { key: "target", icon: "Target", label: "靶心", categories: ["习惯篇", "成长篇", "学习篇"], suitableTags: ["目标", "专注", "自律"] },
  { key: "check-circle", icon: "CheckCircle", label: "完成", categories: ["成长篇", "习惯篇", "低谷篇"], suitableTags: ["完成", "达成", "成就"] },
  { key: "gift", icon: "Gift", label: "礼物", categories: ["小确幸篇", "亲情篇", "社交篇"], suitableTags: ["惊喜", "善意", "温暖"] },
  { key: "pen-line", icon: "PenLine", label: "笔", categories: ["成长篇", "情绪篇", "自愈篇"], suitableTags: ["写作", "记录", "表达"] },
  { key: "refresh-ccw", icon: "RefreshCcw", label: "刷新", categories: ["成长篇", "习惯篇"], suitableTags: ["重启", "恢复", "改变"] },
  { key: "users", icon: "Users", label: "人群", categories: ["社交篇", "校园篇"], suitableTags: ["社交", "群体", "参与"] },
  { key: "mic", icon: "Mic", label: "麦克风", categories: ["勇气篇", "社交篇", "校园篇"], suitableTags: ["表达", "发言", "勇气"] },
  { key: "handshake", icon: "Handshake", label: "握手", categories: ["社交篇", "情绪篇"], suitableTags: ["合作", "沟通", "和解"] },
  { key: "flower-2", icon: "Flower2", label: "花", categories: ["自愈篇", "小确幸篇", "生活篇"], suitableTags: ["治愈", "美好", "仪式感"] },
  { key: "moon", icon: "Moon", label: "月亮", categories: ["习惯篇", "生活篇"], suitableTags: ["睡眠", "夜间", "休息"] },
  { key: "sunrise", icon: "Sunrise", label: "日出", categories: ["习惯篇", "健康篇", "生活篇"], suitableTags: ["早起", "早晨", "活力"] },
  { key: "running", icon: "Running", label: "跑步", categories: ["健康篇", "生活篇"], suitableTags: ["运动", "活力", "健康"] },
  { key: "zap", icon: "Zap", label: "闪电", categories: ["勇气篇", "成长篇"], suitableTags: ["行动", "能量", "突破"] },
  { key: "eye", icon: "Eye", label: "眼睛", categories: ["勇气篇", "成长篇"], suitableTags: ["面对", "看见", "觉察"] },
  { key: "phone", icon: "Phone", label: "电话", categories: ["亲情篇", "社交篇"], suitableTags: ["联系", "沟通", "关心"] },
  { key: "camera", icon: "Camera", label: "相机", categories: ["生活篇", "小确幸篇"], suitableTags: ["记录", "拍照", "回忆"] },
  { key: "clock", icon: "Clock", label: "时钟", categories: ["习惯篇", "健康篇", "生活篇"], suitableTags: ["时间", "自律", "作息"] },
  { key: "utensils-crossed", icon: "UtensilsCrossed", label: "餐具", categories: ["生活篇", "自愈篇"], suitableTags: ["美食", "治愈", "自己做"] },
  { key: "sofa", icon: "Sofa", label: "沙发", categories: ["自愈篇", "低谷篇"], suitableTags: ["休息", "放松", "充电"] },
  { key: "wind", icon: "Wind", label: "风", categories: ["情绪篇", "自愈篇"], suitableTags: ["放松", "冥想", "深呼吸"] },
  { key: "tree-deciduous", icon: "TreeDeciduous", label: "树", categories: ["生活篇", "小确幸篇", "健康篇"], suitableTags: ["自然", "户外", "治愈"] },
  { key: "music", icon: "Music", label: "音乐", categories: ["自愈篇", "情绪篇", "小确幸篇"], suitableTags: ["音乐", "治愈", "放松"] },
  { key: "arrow-right", icon: "ArrowRight", label: "向前", categories: ["成长篇", "勇气篇"], suitableTags: ["前进", "方向", "突破"] },
  { key: "hand", icon: "Hand", label: "手", categories: ["勇气篇", "社交篇", "亲情篇"], suitableTags: ["帮助", "求助", "支持"] },
  { key: "quote", icon: "Quote", label: "引号", categories: ["小确幸篇", "情绪篇", "自愈篇"], suitableTags: ["文字", "共鸣", "触动"] },
  { key: "calendar-check", icon: "CalendarCheck", label: "日程完成", categories: ["习惯篇", "成长篇", "健康篇"], suitableTags: ["坚持", "打卡", "完成"] },
  { key: "lightbulb", icon: "Lightbulb", label: "灯泡", categories: ["小确幸篇", "学习篇", "成长篇"], suitableTags: ["灵感", "创意", "洞察"] },
  { key: "door-open", icon: "DoorOpen", label: "开门", categories: ["勇气篇", "成长篇", "自愈篇"], suitableTags: ["离开", "开始", "改变"] },
  { key: "message-square", icon: "MessageSquare", label: "对话", categories: ["社交篇", "情绪篇"], suitableTags: ["交流", "倾听", "分享"] },
];

export function getIcon(key: string): IconPreset | undefined {
  return iconPresets.find((i) => i.key === key);
}

export function getIconsForCategory(category: string): IconPreset[] {
  return iconPresets.filter((i) => i.categories.includes(category));
}
