"use client";

import { useState, useEffect, useCallback } from "react";
import { achievements } from "@/data/achievements";
import { getCompletedCount, getStreakDays, getCompletedAchievementIds } from "@/lib/storage";
import { getDailyRecommendations, DailyTask } from "@/data/dailyTasks";
import { Achievement } from "@/types/achievement";
import AchievementCard from "@/components/AchievementCard";
import CheckInDialog from "@/components/CheckInDialog";
import CustomCheckInDialog from "@/components/CustomCheckInDialog";
import BottomNav from "@/components/BottomNav";
import { Sparkles, RefreshCw, MessageCircleHeart, ArrowRight, Feather } from "lucide-react";

function getLevel(count: number) {
  if (count >= 80) return { level: 6, title: "人生大师" };
  if (count >= 50) return { level: 5, title: "成长达人" };
  if (count >= 30) return { level: 4, title: "生活玩家" };
  if (count >= 15) return { level: 3, title: "认真生活者" };
  if (count >= 5) return { level: 2, title: "初行者" };
  return { level: 1, title: "探索者" };
}

const WISDOM_TEXT = [
  "今天不用完成很多事，认真完成一件小事也算数。",
  "慢慢来也没关系，你已经在路上了。",
  "重要的不是走得多快，是还在往前走。",
  "今天，给自己一个温和的开始。",
];

function pickFeatured(all: typeof achievements, completed: Set<string>, count: number) {
  const pending = all.filter((a) => !completed.has(a.id)).sort(() => Math.random() - 0.5);
  return pending.slice(0, count);
}

export default function HomePage() {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [customDialogOpen, setCustomDialogOpen] = useState(false);
  const [streak, setStreak] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [dailyTask, setDailyTask] = useState<DailyTask | null>(null);
  const [featured, setFeatured] = useState<Achievement[]>([]);

  const refreshAll = useCallback(() => {
    const ids = getCompletedAchievementIds();
    setCompletedIds(ids);
    setStreak(getStreakDays());
    setCompletedCount(getCompletedCount());
    const tasks = getDailyRecommendations(1);
    if (tasks.length > 0) setDailyTask(tasks[0]);
    setFeatured(pickFeatured(achievements, ids, 3));
  }, []);

  useEffect(() => { refreshAll(); }, [refreshAll]);

  const levelInfo = getLevel(completedCount);
  const totalCount = achievements.length;
  const progress = Math.min(completedCount / totalCount, 1);
  const circumference = 2 * Math.PI * 36;
  const offset = circumference * (1 - progress);
  const wisdom = WISDOM_TEXT[completedCount % WISDOM_TEXT.length];

  const handleOpenCheckIn = (a: Achievement) => { setSelectedAchievement(a); setDialogOpen(true); };
  const handleTaskCheckIn = () => {
    if (!dailyTask) return;
    const a = achievements.find((x) => x.id === dailyTask.achievementId);
    if (a) handleOpenCheckIn(a);
  };
  const handleRefreshTask = () => { const tasks = getDailyRecommendations(1); if (tasks.length > 0) setDailyTask(tasks[0]); };

  return (
    <>
      {/* 1. Hero */}
      <section className="hero-gradient px-6 pt-10 pb-6 rounded-b-[1.5rem]">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[24px] font-bold tracking-tight text-[#2D2A28] leading-tight">人生打卡</h1>
            <p className="text-[13px] text-ivory-400 mt-0.5">今天也在认真生活</p>
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/60 backdrop-blur-sm border border-white/40"><Sparkles size={16} className="text-sage-400" /></div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative w-[88px] h-[88px] shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(124,171,154,0.15)" strokeWidth="6" />
              <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="text-sage-400 transition-all duration-700" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[18px] font-bold text-[#2D2A28] leading-none">{completedCount}</span>
              <span className="text-[9px] text-ivory-300 mt-0.5">/{totalCount}</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 px-3 py-1 mb-2">
              <Sparkles size={11} className="text-sage-400" />
              <span className="text-[11px] font-semibold text-sage-500">Lv.{levelInfo.level} {levelInfo.title}</span>
            </div>
            <p className="text-[12px] text-ivory-400 leading-relaxed">{wisdom}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/40">
          <div><p className="text-[20px] font-bold text-[#2D2A28] tracking-tight">{streak}</p><p className="text-[10px] text-ivory-400 tracking-[0.04em] mt-0.5">连续打卡</p></div>
          <div className="w-px h-6 bg-white/40" />
          <div><p className="text-[20px] font-bold text-[#2D2A28] tracking-tight">{completedCount}</p><p className="text-[10px] text-ivory-400 tracking-[0.04em] mt-0.5">已解锁</p></div>
          <div className="w-px h-6 bg-white/40" />
          <div><p className="text-[20px] font-bold text-[#2D2A28] tracking-tight">{levelInfo.level}</p><p className="text-[10px] text-ivory-400 tracking-[0.04em] mt-0.5">人生等级</p></div>
        </div>
      </section>

      {/* 2. Daily recommendation */}
      {dailyTask && (
        <section className="px-6 pt-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[13px] font-semibold text-[#2D2A28] tracking-[0.03em]">今日推荐</h2>
            <button onClick={handleRefreshTask} className="flex items-center gap-1 text-[11px] text-ivory-400 hover:text-sage-400 transition-colors"><RefreshCw size={12} />换一个</button>
          </div>
          <div className="rounded-xl bg-white border border-sage-200/40 overflow-hidden">
            <div className="shimmer-card p-4">
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-medium text-sage-400">{dailyTask.category}</span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-ivory-100 text-ivory-400">{dailyTask.rarity}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#2D2A28]">{dailyTask.title}</h3>
                  <p className="text-[12px] text-ivory-400 mt-1 leading-relaxed">{dailyTask.description}</p>
                </div>
              </div>
              <button onClick={handleTaskCheckIn} className="mt-3 w-full rounded-lg bg-sage-400 text-white py-2.5 text-sm font-medium hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 sheen-button">开始打卡</button>
            </div>
          </div>
        </section>
      )}

      {/* 3. Custom check-in entry */}
      <section className="px-6 pt-4">
        <button onClick={() => setCustomDialogOpen(true)}
          className="w-full rounded-xl border border-ivory-200/60 bg-white p-3.5 flex items-center gap-3 hover:bg-ivory-50/80 hover:border-sage-300/40 transition-all duration-200 text-left">
          <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-sky-50 to-sage-50 border border-sky-200/60">
            <Feather size={16} className="text-sky-500" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <span className="text-[13px] font-semibold text-[#2D2A28]">记录我的一件小事</span>
            <p className="text-[11px] text-ivory-400 mt-0.5">自己写一条打卡内容，AI 也会为你生成评价</p>
          </div>
          <ArrowRight size={16} className="text-ivory-300 shrink-0" />
        </button>
      </section>

      {/* 4. AI夸夸官 prompt */}
      <section className="px-6 pt-4">
        <div className="rounded-xl bg-ivory-50/70 border border-ivory-200/50 p-3.5">
          <div className="flex items-start gap-2.5">
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-sage-50 border border-sage-200/50 mt-0.5"><MessageCircleHeart size={15} className="text-sage-400" /></div>
            <div>
              <span className="text-[12px] font-semibold text-sage-500">AI 夸夸官</span>
              <p className="text-[12px] text-ivory-400 mt-0.5 leading-relaxed">完成打卡后，我会根据你的真实感受写一段专属成就评价。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured achievements */}
      <section className="px-6 pt-5 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[13px] font-semibold text-[#2D2A28] tracking-[0.03em]">精选成就</h2>
          <a href="/achievements" className="flex items-center gap-0.5 text-[11px] text-sage-400 hover:text-sage-500 transition-colors">查看全部 <ArrowRight size={12} /></a>
        </div>
        <div className="space-y-2.5">
          {featured.map((a) => (
            <AchievementCard key={a.id} achievement={a} completed={completedIds.has(a.id)} onCheckIn={handleOpenCheckIn} />
          ))}
        </div>
      </section>

      <BottomNav />

      <CheckInDialog achievement={selectedAchievement} open={dialogOpen} onClose={() => { setDialogOpen(false); setSelectedAchievement(null); }} onSaved={refreshAll} records={[]} />
      <CustomCheckInDialog open={customDialogOpen} onClose={() => setCustomDialogOpen(false)} onSaved={refreshAll} />
    </>
  );
}
