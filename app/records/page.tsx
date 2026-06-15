"use client";

import { useState, useEffect } from "react";
import { getRecords, clearRecords } from "@/lib/storage";
import { categories, getRarityBg } from "@/data/achievements";
import { CheckInRecord } from "@/types/achievement";
import BottomNav from "@/components/BottomNav";
import {
  ClipboardList, Clock, Sparkles, MessageSquare, Trash2,
} from "lucide-react";

export default function RecordsPage() {
  const [records, setRecords] = useState<CheckInRecord[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const refresh = () => setRecords(getRecords());
  useEffect(() => { refresh(); }, []);

  const filtered = categoryFilter === "all"
    ? records
    : records.filter((r) => r.category === categoryFilter);

  const handleClear = () => {
    if (records.length === 0) return;
    if (window.confirm("确定要清除所有打卡记录吗？此操作无法撤销。")) {
      clearRecords();
      refresh();
    }
  };

  return (
    <>
      <section className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight text-[#2D2A28] leading-tight">我的成就记录</h1>
            <p className="text-[13px] text-ivory-400 mt-0.5">每一次打卡，都是成长的痕迹</p>
          </div>
          {records.length > 0 && (
            <button onClick={handleClear} className="flex items-center gap-1 text-[12px] text-ivory-300 hover:text-clay-400 transition-colors">
              <Trash2 size={13} strokeWidth={1.5} />
              <span>清除</span>
            </button>
          )}
        </div>

        {/* Category filter */}
        {records.length > 0 && (
          <div className="flex gap-1.5 overflow-x-auto mt-4 pb-1 scrollbar-none -mx-6 px-6">
            {categories.map((cat) => {
              const isActive = categoryFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setCategoryFilter(cat.value)}
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.03em] transition-all duration-200 ${
                    isActive ? "bg-sage-400 text-white" : "text-ivory-400 bg-ivory-150/60"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {records.length === 0 ? (
        <div className="flex flex-col items-center px-6 pt-16 text-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-ivory-150 mb-4">
            <ClipboardList size={24} className="text-ivory-300" strokeWidth={1.5} />
          </div>
          <p className="text-sm font-medium text-ivory-400">还没有解锁成就</p>
          <p className="text-[13px] text-ivory-300 mt-1.5 max-w-[220px] leading-relaxed">
            还没有解锁成就。没关系，地球 Online 的第一步也可以很小。
          </p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center px-6 pt-12 text-center">
          <p className="text-sm text-ivory-400">这个分类还没有打卡记录</p>
        </div>
      ) : (
        <section className="px-6 pb-6 space-y-3">
          {filtered.map((record) => (
            <div key={record.id} className="rounded-xl bg-white border border-ivory-200/60 p-4">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[14px] font-semibold text-[#2D2A28] leading-snug">{record.achievementTitle}</h3>
                {record.rarity && (
                  <span className={`shrink-0 ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded ${getRarityBg(record.rarity)}`}>
                    {record.rarity}
                  </span>
                )}
              </div>
              {record.category && (
                <p className="text-[10px] text-ivory-400 mb-2">{record.category}</p>
              )}

              <div className="rounded-lg bg-sage-50/60 border border-sage-200/30 p-3 mb-2">
                <div className="flex items-center gap-1 mb-1.5">
                  <Sparkles size={12} className="text-sage-400" strokeWidth={1.5} />
                  <span className="text-[10px] font-medium text-sage-500 tracking-[0.05em] uppercase">AI 成就评价</span>
                </div>
                <p className="text-[13px] text-[#2D2A28] leading-relaxed">{record.aiPraise}</p>
              </div>

              <div className="rounded-lg bg-ivory-50 border border-ivory-150 p-2.5 mb-2">
                <div className="flex items-center gap-1 mb-1">
                  <MessageSquare size={11} className="text-ivory-400" strokeWidth={1.5} />
                  <span className="text-[10px] font-medium text-ivory-400 tracking-[0.05em] uppercase">我的感受</span>
                </div>
                <p className="text-[12px] text-ivory-500 leading-relaxed">{record.userNote}</p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-ivory-300">
                <Clock size={11} strokeWidth={1.5} />
                <span>
                  {new Date(record.completedAt).toLocaleString("zh-CN", {
                    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      <BottomNav />
    </>
  );
}
