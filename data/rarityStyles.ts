export type RarityStyle = {
  rarity: string;
  label: string;
  badgeClass: string;
  cardBorderClass: string;
  glowClass: string;
  description: string;
};

export const rarityStyles: RarityStyle[] = [
  { rarity: "普通", label: "普通", badgeClass: "bg-sky-50/80 text-sky-600", cardBorderClass: "border-ivory-200/60", glowClass: "", description: "浅蓝灰，日常小成就" },
  { rarity: "稀有", label: "稀有", badgeClass: "bg-sage-50/80 text-sage-500", cardBorderClass: "border-sage-200/60", glowClass: "shadow-sage-100/50", description: "薄荷青，值得记录的成长" },
  { rarity: "史诗", label: "史诗", badgeClass: "bg-amethyst-50/80 text-amethyst-500", cardBorderClass: "border-amethyst-300/50", glowClass: "shadow-amethyst-100/50", description: "淡紫，人生重要节点" },
  { rarity: "传说", label: "传说", badgeClass: "bg-gold-50/80 text-gold-500", cardBorderClass: "border-gold-300/60", glowClass: "shadow-gold-100/50 premium-glow", description: "柔金，极少达成的成就" },
  { rarity: "自定义", label: "自定义", badgeClass: "bg-sky-50/80 text-sky-600", cardBorderClass: "border-sky-200/60", glowClass: "shadow-sky-100/30", description: "青蓝紫渐变，用户自己记录的特别时刻" },
  { rarity: "隐藏", label: "隐藏", badgeClass: "bg-gradient-to-r from-sky-50 to-sage-50 text-sky-600", cardBorderClass: "border-sky-200/60", glowClass: "shadow-sky-100/30", description: "银紫渐变，触发了特定条件的特殊成就" },
];

export function getStyle(rarity: string): RarityStyle {
  return rarityStyles.find((s) => s.rarity === rarity) || rarityStyles[0];
}
