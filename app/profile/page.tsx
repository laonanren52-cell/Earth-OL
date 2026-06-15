"use client";

import { useState, useEffect } from "react";
import { getRecords, resetAllLocalData } from "@/lib/storage";
import BottomNav from "@/components/BottomNav";
import { User, Flame, Award, BookOpen, Trash2 } from "lucide-react";

export default function ProfilePage() {
  const [stats, setStats] = useState({ streak: 0, achievements: 0, total: 0 });

  const refresh = () => {
    const records = getRecords();
    const unique = new Set(records.map((r) => r.achievementId));
    const dates = Array.from(new Set(records.map((r) => r.completedAt.split("T")[0]))).sort((a, b) => b.localeCompare(a));
    let streak = 0;
    if (dates.length > 0) {
      const today = new Date().toISOString().split("T")[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (dates[0] === today || dates[0] === yesterday) { streak = 1; for (let i = 1; i < dates.length; i++) { const diff = (new Date(dates[i - 1]).getTime() - new Date(dates[i]).getTime()) / 86400000; if (Math.abs(diff - 1) < 0.1) streak++; else break; } }
    }
    setStats({ streak, achievements: unique.size, total: records.length });
  };

  useEffect(() => { refresh(); }, []);

  const handleClear = () => {
    if (window.confirm("确定要清除所有本地数据吗？此操作无法撤销，所有打卡记录将被删除。")) {
      resetAllLocalData();
      refresh();
    }
  };

  return (
    <>
      <section className="hero-gradient px-6 pt-12 pb-8 rounded-b-[1.5rem]">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-subtle mb-3">
            <User size={28} className="text-sage-400" />
          </div>
          <h1 className="text-[20px] font-bold text-[#2D2A28]">认真生活的人</h1>
          <p className="text-[13px] text-ivory-400 mt-0.5">今天也在慢慢升级</p>
        </div>
      </section>

      <section className="px-6 -mt-4 mb-6">
        <div className="rounded-xl bg-white border border-ivory-200/50 p-4 shadow-subtle">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sage-50 mx-auto mb-1.5">
                <Flame size={16} className="text-sage-400" />
              </div>
              <p className="text-lg font-bold text-[#2D2A28]">{stats.streak}</p>
              <p className="text-[10px] text-ivory-300 mt-0.5">连续打卡</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sage-50 mx-auto mb-1.5">
                <Award size={16} className="text-sage-400" />
              </div>
              <p className="text-lg font-bold text-[#2D2A28]">{stats.achievements}</p>
              <p className="text-[10px] text-ivory-300 mt-0.5">已解锁成就</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-ivory-100 mx-auto mb-1.5">
                <BookOpen size={16} className="text-ivory-400" />
              </div>
              <p className="text-lg font-bold text-[#2D2A28]">{stats.total}</p>
              <p className="text-[10px] text-ivory-300 mt-0.5">历史记录</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-4">
        <div className="rounded-xl bg-white border border-ivory-200/50 p-4 shadow-subtle">
          <h2 className="text-sm font-semibold text-[#2D2A28] mb-2">关于人生打卡</h2>
          <p className="text-[13px] text-ivory-400 leading-relaxed">这是一个把生活小事做成成就系统的 App。每一次打卡，AI 都会根据你的真实感受写下一段专属评价。</p>
        </div>
      </section>

      <section className="px-6 pb-6">
        <button
          onClick={handleClear}
          className="w-full flex items-center justify-center gap-2 rounded-xl border border-ivory-200 text-ivory-400 hover:text-rose-400 hover:border-rose-200 px-4 py-3 text-sm font-medium transition-all duration-200"
        >
          <Trash2 size={15} />
          清除本地数据
        </button>
      </section>

      <BottomNav />
    </>
  );
}
