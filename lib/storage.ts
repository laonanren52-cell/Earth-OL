import { CheckInRecord, Stats } from "@/types/achievement";
import { hasMojibake } from "./textGuard";

const STORAGE_KEY = "life-checkin-records";
const ALL_KEYS = [
  "life-checkin-records", "life-checkin-profile", "life-checkin-stats",
  "life-checkin-achievements", "life-checkin-checkins", "life-checkin-dailyTask",
  "life-checkin-settings",
];

function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    if (hasMojibake(raw)) { localStorage.removeItem(key); return fallback; }
    return JSON.parse(raw) as T;
  } catch { return fallback; }
}

export function resetAllLocalData(): void {
  if (typeof window === "undefined") return;
  for (const key of ALL_KEYS) localStorage.removeItem(key);
  // Also clear any key containing "checkin" or "achievement"
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && (k.toLowerCase().includes("checkin") || k.toLowerCase().includes("achievement") || k.toLowerCase().includes("life-checkin"))) {
      localStorage.removeItem(k);
    }
  }
}

export function migrateAndCleanStorage(): void {
  if (typeof window === "undefined") return;
  for (const key of ALL_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      if (hasMojibake(raw)) { localStorage.removeItem(key); continue; }
      // Try to parse as JSON — if fails, remove
      JSON.parse(raw);
    } catch { localStorage.removeItem(key); }
  }
}

export function getRecords(): CheckInRecord[] {
  return safeGet<CheckInRecord[]>(STORAGE_KEY, []);
}

export function saveRecord(record: CheckInRecord): void {
  if (typeof window === "undefined") return;
  const records = getRecords();
  records.unshift(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function deleteRecord(id: string): void {
  if (typeof window === "undefined") return;
  const records = getRecords().filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function isAchievementCompleted(achievementId: string): boolean {
  return getRecords().some((r) => r.achievementId === achievementId);
}

export function getCompletedAchievementIds(): Set<string> {
  return new Set(getRecords().map((r) => r.achievementId).filter(Boolean) as string[]);
}

export function getRecordByAchievementId(achievementId: string): CheckInRecord | undefined {
  return getRecords().find((r) => r.achievementId === achievementId);
}

export function getCompletedCount(): number {
  return getCompletedAchievementIds().size;
}

export function getStreakDays(): number {
  const records = getRecords();
  if (records.length === 0) return 0;
  const dates = Array.from(new Set(records.map((r) => r.completedAt.split("T")[0]))).sort((a, b) => b.localeCompare(a));
  if (dates.length === 0) return 0;
  let streak = 1;
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  if (dates[0] !== today && dates[0] !== yesterday) return 0;
  for (let i = 1; i < dates.length; i++) {
    const diff = (new Date(dates[i - 1]).getTime() - new Date(dates[i]).getTime()) / 86400000;
    if (Math.abs(diff - 1) < 0.1) streak++;
    else break;
  }
  return streak;
}

export function getStats(): Stats {
  const records = getRecords();
  const completedIds = getCompletedAchievementIds();
  const completedByCategory: Record<string, number> = {};
  let rareCompletedCount = 0;
  let lastCompletedAt: string | null = null;
  for (const r of records) {
    if (r.category) completedByCategory[r.category] = (completedByCategory[r.category] || 0) + 1;
    if (r.rarity === "稀有" || r.rarity === "史诗" || r.rarity === "传说") rareCompletedCount++;
    if (!lastCompletedAt || r.completedAt > lastCompletedAt) lastCompletedAt = r.completedAt;
  }
  return { totalCompleted: completedIds.size, currentStreak: getStreakDays(), completedByCategory, rareCompletedCount, lastCompletedAt };
}

export function clearRecords(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
