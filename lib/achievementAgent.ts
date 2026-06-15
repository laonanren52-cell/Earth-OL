import { Achievement, CheckInRecord } from "@/types/achievement";
import { segments } from "@/data/praiseTemplates";
import { cleanGeneratedText, safeFallback } from "./textGuard";

export type EmotionAnalysis = {
  primaryEmotion: string;
  intensity: "low" | "medium" | "high";
  keywords: string[];
  toneSuggestion: string;
  shouldComfort: boolean;
  shouldCelebrate: boolean;
  shouldAcknowledgeFailure: boolean;
};

type AgentInput = {
  achievement: Achievement;
  userNote: string;
  emotionTag?: string;
  records: CheckInRecord[];
};

export function detectEmotionFromText(text: string): EmotionAnalysis {
  if (/\u88AB\u62D2\u7EDD|\u6CA1\u6210\u529F|\u5931\u8D25\u4E86|\u641E\u7838|\u62D2\u7EDD/.test(text)) {
    return { primaryEmotion: "\u5931\u843D", intensity: "high", keywords: ["\u88AB\u62D2\u7EDD"], toneSuggestion: "\u5148\u627F\u8BA4\u88AB\u62D2\u7EDD\u7684\u5931\u843D\uFF0C\u518D\u80AF\u5B9A\u7528\u6237\u7684\u52C7\u6C14", shouldComfort: true, shouldCelebrate: true, shouldAcknowledgeFailure: true };
  }
  if (/\u5931\u8D25|\u4E0D\u884C|\u505A\u4E0D\u5230/.test(text)) {
    return { primaryEmotion: "\u632B\u6298", intensity: "high", keywords: ["\u5931\u8D25"], toneSuggestion: "\u627F\u8BA4\u632B\u6298\uFF0C\u4F46\u5F3A\u8C03\u5373\u4F7F\u56F0\u96BE\u4E5F\u884C\u52A8\u4E86", shouldComfort: true, shouldCelebrate: true, shouldAcknowledgeFailure: true };
  }
  if (/\u5F00\u5FC3|\u5FEB\u4E50|\u9AD8\u5174/.test(text)) {
    return { primaryEmotion: "\u5F00\u5FC3", intensity: "medium", keywords: ["\u5F00\u5FC3"], toneSuggestion: "\u653E\u5927\u79EF\u6781\u60C5\u7EEA", shouldComfort: false, shouldCelebrate: true, shouldAcknowledgeFailure: false };
  }
  if (/\u7D27\u5F20|\u5BB3\u6015|\u62C5\u5FC3/.test(text)) {
    return { primaryEmotion: "\u7D27\u5F20", intensity: "medium", keywords: ["\u7D27\u5F20"], toneSuggestion: "\u7D27\u5F20\u6CA1\u6709\u963B\u6B62\u884C\u52A8\uFF0C\u8FD9\u5C31\u662F\u52C7\u6562", shouldComfort: true, shouldCelebrate: true, shouldAcknowledgeFailure: false };
  }
  if (/\u96BE\u8FC7|\u60F3\u54ED|\u59D4\u5C48|\u4F24\u5FC3/.test(text)) {
    return { primaryEmotion: "\u96BE\u8FC7", intensity: "high", keywords: ["\u96BE\u8FC7"], toneSuggestion: "\u5148\u6E29\u67D4\u63A5\u7EB3\u96BE\u8FC7\uFF0C\u518D\u80AF\u5B9A\u5B8C\u6210", shouldComfort: true, shouldCelebrate: true, shouldAcknowledgeFailure: false };
  }
  if (/\u51FA\u53BB\u73A9|\u51FA\u95E8|\u4E0D\u77E5\u9053\u7B97\u4E0D\u7B97|\u4E0D\u786E\u5B9A/.test(text)) {
    return { primaryEmotion: "\u4E0D\u786E\u5B9A", intensity: "low", keywords: ["\u51FA\u53BB\u73A9"], toneSuggestion: "\u76F4\u63A5\u544A\u8BC9\u7528\u6237\u8FD9\u4E5F\u7B97\u5B8C\u6210", shouldComfort: false, shouldCelebrate: true, shouldAcknowledgeFailure: false };
  }
  if (/\u666E\u901A|\u6CA1\u4EC0\u4E48|\u4E00\u822C/.test(text)) {
    return { primaryEmotion: "\u5E73\u9759", intensity: "low", keywords: ["\u666E\u901A"], toneSuggestion: "\u666E\u901A\u4E5F\u503C\u5F97\u88AB\u8BB0\u5F55", shouldComfort: false, shouldCelebrate: true, shouldAcknowledgeFailure: false };
  }
  return { primaryEmotion: "\u5E73\u9759", intensity: "low", keywords: [], toneSuggestion: "\u5E73\u6DE1\u786E\u8BA4\u5B8C\u6210", shouldComfort: false, shouldCelebrate: true, shouldAcknowledgeFailure: false };
}

function pick(arr: any[], exclude?: any) {
  const pool = exclude ? arr.filter((x) => x !== exclude) : arr;
  return pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : arr[Math.floor(Math.random() * arr.length)];
}

function segs(cat: string, em: string, ra: string, type: string) {
  return segments.filter((s) => s.type === type && (s.category === cat || s.category === "__all") && (!s.emotion || s.emotion === em || s.emotion === "__all") && (!s.rarity || s.rarity === ra || s.rarity === "__all"));
}

export class AchievementPraiseAgent {
  private last: string = "";
  private count: number = 0;

  generate(input: AgentInput): string {
    this.count++;
    const { achievement, userNote, emotionTag } = input;
    const a = detectEmotionFromText(userNote);
    const em = emotionTag || a.primaryEmotion;
    const title = achievement.title;

    let parts: string[];
    if (a.shouldAcknowledgeFailure) {
      const o = pick(segs(achievement.category, em, achievement.rarity, "opening"));
      const b = segs(achievement.category, em, achievement.rarity, "body");
      const e = pick(segs(achievement.category, em, achievement.rarity, "ending"));
      const fail = ["被拒绝确实会让人失落，真心没有被接住的时候，难免会有一点难过。", "不是每一次勇敢都能得偿所愿，但你依然选择了去尝试。", "你把自己的真实感受说了出来，这已经比沉默勇敢太多了。"];
      parts = [(o?.text || "").replace("【title】", title), pick(fail), pick(b)?.text || "", e?.text || ""];
    } else if (/出去玩|出门/.test(userNote) && (emotionTag === "not-sure" || a.primaryEmotion === "不确定")) {
      const o = pick(segs(achievement.category, em, achievement.rarity, "opening"));
      const e = pick(segs(achievement.category, em, achievement.rarity, "ending"));
      parts = [(o?.text || "").replace("【title】", title), "你出去玩当然也算完成，因为你真的把时间还给了自己。什么也不做、暂时离开压力，本来就是一种认真休息。", e?.text || ""];
    } else {
      const o = pick(segs(achievement.category, em, achievement.rarity, "opening"));
      const b = segs(achievement.category, em, achievement.rarity, "body");
      const b1 = pick(b);
      const b2 = pick(b, b1);
      const e = pick(segs(achievement.category, em, achievement.rarity, "ending"));
      parts = [(o?.text || "").replace("【title】", title), b1?.text || "", b2?.text || "", e?.text || ""];
    }

    const header = "🎉 成就解锁：" + title;
    let body = parts.filter(Boolean).join("\n");
    body = header + "\n" + body;
    body = cleanGeneratedText(body, safeFallback(title));

    if (body === this.last && this.count < 5) {
      const o = pick(segs(achievement.category, em, achievement.rarity, "opening"));
      const b = segs(achievement.category, em, achievement.rarity, "body");
      const e = pick(segs(achievement.category, em, achievement.rarity, "ending"));
      body = header + "\n" + [(o?.text || "").replace("【title】", title), pick(b)?.text || "", pick(b, pick(b))?.text || "", e?.text || ""].filter(Boolean).join("\n");
      body = cleanGeneratedText(body, safeFallback(title));
    }

    this.last = body;
    return body;
  }

  reset() { this.last = ""; this.count = 0; }
}

export const defaultAgent = new AchievementPraiseAgent();
