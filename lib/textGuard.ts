export function hasMojibake(text: string): boolean {
  if (!text || text.length === 0) return false;
  const bad = ["锟斤拷", "\uFFFD"];
  for (const b of bad) { if (text.includes(b)) return true; }
  const single = "\u6EE8\u87AB\u7489\u5A9B\u6EE6\u954E\u52EB";
  for (const c of single) { if (text.includes(c)) return true; }
  let boxCount = 0;
  for (const ch of text) {
    if (ch === "\u25A1") boxCount++;
    if (boxCount >= 2) return true;
  }
  let latinCount = 0;
  const cjk = /[\u4E00-\u9FFF]/;
  const latin = /[\u00C0-\u00FF]/;
  let totalCJK = 0;
  for (const ch of text) {
    if (cjk.test(ch)) totalCJK++;
    if (latin.test(ch)) latinCount++;
  }
  if (totalCJK > 0 && latinCount > 0 && latinCount / totalCJK > 0.03) return true;
  return false;
}

export function sanitizeText(text: string, fallback: string): string {
  if (!text || text.trim().length === 0) return fallback;
  if (hasMojibake(text)) return fallback;
  const cjk = (text.match(/[\u4E00-\u9FFF]/g) || []).length;
  if (cjk > 0 && cjk / text.length < 0.05) return fallback;
  return text;
}

export function dedupeSentences(text: string): string {
  if (!text) return "";
  const parts = text.split(/(?<=[。！？\n])/);
  const seen: string[] = [];
  const out: string[] = [];
  for (const p of parts) {
    const t = p.trim();
    if (!t) continue;
    const dup = seen.some((s) => s === t || (t.length > 8 && s.includes(t)) || (s.length > 8 && t.includes(s)));
    if (!dup) { seen.push(t); out.push(t); }
  }
  return out.join("");
}

export function cleanGeneratedText(text: string, fallback: string): string {
  let cleaned = sanitizeText(text, fallback);
  cleaned = dedupeSentences(cleaned);
  // Remove duplicate "地球 Online" sentences
  const parts = cleaned.split(/(?<=[。！？\n])/);
  let earthCount = 0;
  const filtered = parts.filter((p) => {
    if (/地球 Online/.test(p)) {
      earthCount++;
      return earthCount <= 1;
    }
    return true;
  });
  cleaned = filtered.join("");
  if (cleaned.length < 20) return fallback;
  if (cleaned.length > 300) cleaned = cleaned.slice(0, 280);
  cleaned = sanitizeText(cleaned, fallback);
  return cleaned;
}

export function safeFallback(title: string): string {
  return "🎉 成就解锁：" + title + "\n\n你认真完成了这件事，也认真留下了这一刻。也许它只是生活里很小的一步，但它确实属于你。地球 Online 已记录：今天的你，又往前走了一点。";
}
