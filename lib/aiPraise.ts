import { Achievement, CheckInRecord } from "@/types/achievement";
import { defaultAgent } from "./achievementAgent";
import { cleanGeneratedText, safeFallback } from "./textGuard";

export type GenerateInput = {
  achievement: Achievement;
  userNote: string;
  emotionTag?: string;
  records: CheckInRecord[];
};

export async function generatePraise(input: GenerateInput): Promise<string> {
  const { achievement, userNote, emotionTag, records } = input;
  await new Promise((resolve) => setTimeout(resolve, 1200 + Math.random() * 800));
  const raw = defaultAgent.generate({ achievement, userNote, emotionTag, records });
  return cleanGeneratedText(raw, safeFallback(achievement.title));
}

export { defaultAgent } from "./achievementAgent";
