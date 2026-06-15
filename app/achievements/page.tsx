"use client";

import { useState, useEffect } from "react";
import { achievements, categories, getRarityBg } from "@/data/achievements";
import { getCompletedAchievementIds } from "@/lib/storage";
import { Achievement } from "@/types/achievement";
import BottomNav from "@/components/BottomNav";
import CheckInDialog from "@/components/CheckInDialog";
import {
  MessageCircle, Sun, UtensilsCrossed, Brain, Heart,
  MessageSquare, Moon, CheckCircle, Shield, Flower2,
  Book, Camera, Target, Award, Mic, Users, Home,
  Activity, Phone, GraduationCap, Hand, Leaf, Wind,
  Compass, RefreshCw, Eye, DoorOpen, Sparkles, Search,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  "message-circle": MessageCircle, sun: Sun, "utensils-crossed": UtensilsCrossed,
  brain: Brain, heart: Heart, "message-square": MessageSquare,
  moon: Moon, "check-circle": CheckCircle, shield: Shield, "flower-2": Flower2,
  book: Book, camera: Camera, target: Target, award: Award,
  mic: Mic, users: Users, home: Home, activity: Activity,
  phone: Phone, "graduation-cap": GraduationCap, hand: Hand,
  leaf: Leaf, wind: Wind, compass: Compass, "refresh-cw": RefreshCw,
  eye: Eye, "door-open": DoorOpen, sparkles: Sparkles,
};

const rarityOptions = ["全部", "普通", "稀有", "史诗", "传说"];

export default function AchievementsPage() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [rarityFilter, setRarityFilter] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setCompletedIds(getCompletedAchievementIds());
  }, []);

  const filtered = achievements.filter((a) => {
    if (categoryFilter !== "all" && a.category !== categoryFilter) return false;
    if (rarityFilter !== "全部" && a.rarity !== rarityFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const matches = a.title.includes(q) || a.description.includes(q) || a.tags.some((t) => t.includes(q));
      if (!matches) return false;
    }
    return true;
  });

  const totalCompleted = completedIds.size;
  const totalCount = achievements.length;

  return (
    <>
      <section className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight text-[#2D2A28] leading-tight">成就图鉴</h1>
            <p className="text-[13px] text-ivory-400 mt-0.5">已解锁 {totalCompleted}/{totalCount}</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory-300" strokeWidth={1.5} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索成就名称、描述或标签..."
            className="w-full rounded-xl border border-ivory-200 bg-white pl-9 pr-4 py-2.5 text-[13px] text-[#2D2A28] placeholder:text-ivory-300 focus:outline-none focus:ring-2 focus:ring-sage-300/40 focus:border-sage-300 transition-all"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-1.5 overflow-x-auto mt-3 pb-1 scrollbar-none -mx-6 px-6">
          {categories.map((cat) => {
            const isActive = categoryFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setCategoryFilter(cat.value)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-[0.03em] transition-all duration-200 ${
                  isActive ? "bg-sage-400 text-white" : "text-ivory-400 bg-ivory-150/60"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Rarity filter */}
        <div className="flex gap-1.5 mt-2">
          {rarityOptions.map((r) => {
            const isActive = rarityFilter === r;
            return (
              <button
                key={r}
                onClick={() => setRarityFilter(r)}
                className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-medium transition-all duration-200 ${
                  isActive ? "bg-sage-100 text-sage-600" : "text-ivory-400 bg-transparent"
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-6">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center">
            <Search size={20} className="text-ivory-300 mb-3" />
            <p className="text-sm text-ivory-400">没有找到匹配的成就</p>
            <p className="text-[12px] text-ivory-300 mt-1">试试换个关键词或筛选条件吧</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2.5">
            {filtered.map((achievement) => {
              const IconComp = iconMap[achievement.icon] || Sparkles;
              const completed = completedIds.has(achievement.id);
              return (
                <motion.button
                  key={achievement.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => { setSelectedAchievement(achievement); setDialogOpen(true); }}
                  className={`rounded-xl border p-3 text-left transition-all duration-200 ${
                    completed
                      ? "bg-white border-sage-200/50"
                      : "bg-white border-ivory-200/60 hover:border-sage-300/50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg border ${
                      completed
                        ? "bg-sage-50 border-sage-200/60 text-sage-400"
                        : "bg-ivory-50 border-ivory-200/60 text-ivory-300"
                    }`}>
                      <IconComp size={15} strokeWidth={1.5} />
                    </div>
                    {completed && <CheckCircle size={13} className="text-sage-400" strokeWidth={1.5} />}
                  </div>
                  <h3 className={`text-[13px] font-semibold leading-snug mb-0.5 ${completed ? "text-sage-600" : "text-[#2D2A28]"}`}>
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className={`inline-block text-[10px] font-medium px-1.5 py-0.5 rounded ${getRarityBg(achievement.rarity)}`}>
                      {achievement.rarity}
                    </span>
                    <span className="text-[9px] text-ivory-300">{achievement.category}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}
      </section>

      <BottomNav />

      <CheckInDialog
        achievement={selectedAchievement}
        open={dialogOpen}
        onClose={() => { setDialogOpen(false); setSelectedAchievement(null); }}
        onSaved={() => setCompletedIds(getCompletedAchievementIds())}
        records={[]}
      />
    </>
  );
}
