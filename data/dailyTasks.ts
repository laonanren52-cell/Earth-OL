import { achievements } from "./achievements";
import { getRecords } from "@/lib/storage";

export type DailyTask = {
  achievementId: string;
  title: string;
  category: string;
  rarity: string;
  description: string;
};

export function getDailyRecommendations(count: number = 3): DailyTask[] {
  const records = getRecords();
  const completed = new Set(records.map((r) => r.achievementId));
  const pending = achievements.filter((a) => !completed.has(a.id));

  if (pending.length === 0) {
    // All done — recommend random achievements
    const shuffled = [...achievements].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map((a) => ({
      achievementId: a.id,
      title: a.title,
      category: a.category,
      rarity: a.rarity,
      description: a.description,
    }));
  }

  const shuffled = [...pending].sort(() => Math.random() - 0.5);

  // Prefer different categories for variety
  const result: DailyTask[] = [];
  const usedCategories = new Set<string>();

  for (const a of shuffled) {
    if (result.length >= count) break;
    if (!usedCategories.has(a.category) || result.length < count - 1) {
      result.push({
        achievementId: a.id,
        title: a.title,
        category: a.category,
        rarity: a.rarity,
        description: a.description,
      });
      usedCategories.add(a.category);
    }
  }

  while (result.length < count && shuffled.length > 0) {
    const remaining = shuffled.filter(
      (a) => !result.find((r) => r.achievementId === a.id)
    );
    if (remaining.length === 0) break;
    result.push({
      achievementId: remaining[0].id,
      title: remaining[0].title,
      category: remaining[0].category,
      rarity: remaining[0].rarity,
      description: remaining[0].description,
    });
  }

  return result;
}
