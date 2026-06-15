export type AchievementCategory =
  | "恋爱篇" | "生活篇" | "成长篇" | "自愈篇" | "社交篇"
  | "学习篇" | "勇气篇" | "健康篇" | "亲情篇" | "校园篇" | "情绪篇" | "整理篇" | "习惯篇" | "低谷篇" | "小确幸篇" | "其他";

export type Rarity = "普通" | "稀有" | "史诗" | "传说" | "自定义";

export type Achievement = {
  id: string;
  title: string;
  category: AchievementCategory;
  rarity: Rarity;
  description: string;
  unlockCondition: string;
  icon: string;
  tags: string[];
  aiTone: string;
};

export type EmotionTag = {
  id: string;
  label: string;
  description: string;
  praiseDirection: string;
};

export type CheckInRecord = {
  id: string;
  source: "preset" | "custom";
  achievementId?: string;
  achievementTitle: string;
  category: string;
  rarity: string;
  description?: string;
  userNote: string;
  emotionTag?: string;
  aiPraise: string;
  completedAt: string;
};

export type Stats = {
  totalCompleted: number;
  currentStreak: number;
  completedByCategory: Record<string, number>;
  rareCompletedCount: number;
  lastCompletedAt: string | null;
};

export type PraiseTone = "地球Online" | "温柔治愈" | "轻游戏感" | "认真鼓励" | "幽默一点";

export type EarthOnlineAchievement = {
  id: string; title: string; category: string; rarity: "普通" | "稀有" | "史诗" | "传说" | "隐藏";
  description: string; unlockCondition: string; systemComment: string; tags: string[]; icon: string;
};