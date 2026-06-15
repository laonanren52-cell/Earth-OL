"use client";

import { Achievement } from "@/types/achievement";
import { getRarityBg } from "@/data/achievements";
import { motion } from "framer-motion";
import {
  MessageCircle, Sun, UtensilsCrossed, Brain, Heart,
  MessageSquare, Moon, CheckCircle, Shield, Flower2,
  Sparkles, ChevronRight, Book, Camera, Target, Award,
  Mic, Users, Home, Activity, Phone, GraduationCap,
  Hand, Leaf, Wind, Compass, RefreshCw, Eye, DoorOpen,
} from "lucide-react";

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

interface AchievementCardProps {
  achievement: Achievement;
  completed: boolean;
  onCheckIn: (a: Achievement) => void;
}

export default function AchievementCard({ achievement, completed, onCheckIn }: AchievementCardProps) {
  const IconComp = iconMap[achievement.icon] || Sparkles;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -2 }}
      onClick={() => !completed && onCheckIn(achievement)}
      className={`w-full text-left rounded-xl border transition-all duration-300 ${
        completed
          ? achievement.rarity === "传说"
            ? "bg-white border-gold-300/60"
            : achievement.rarity === "史诗"
            ? "bg-white border-amethyst-300/50"
            : "bg-white border-sage-200/50"
          : "bg-white border-ivory-200/60 hover:bg-ivory-50/80"
      }`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border ${
              completed
                ? achievement.rarity === "传说"
                  ? "bg-gold-50 border-gold-200/60 text-gold-500"
                  : achievement.rarity === "史诗"
                  ? "bg-amethyst-50 border-amethyst-200/60 text-amethyst-500"
                  : "bg-sage-50 border-sage-200/60 text-sage-400"
                : "bg-ivory-50 border-ivory-200/60 text-ivory-300"
            }`}
          >
            <IconComp size={17} strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`text-[10px] font-medium tracking-[0.04em] ${completed ? "text-sage-400" : "text-ivory-400"}`}>
                {achievement.category}
              </span>
              <span className={`inline-block text-[10px] font-medium px-1.5 py-0.5 rounded-md ${getRarityBg(achievement.rarity)}`}>
                {achievement.rarity}
              </span>
            </div>
            <h3 className={`text-[14px] font-semibold leading-snug ${completed ? "text-sage-600" : "text-[#2D2A28]"}`}>
              {achievement.title}
            </h3>
            <p className="text-[12px] text-ivory-400 leading-relaxed mt-0.5 line-clamp-2">
              {achievement.description}
            </p>
          </div>
          {completed ? (
            <div className="shrink-0 mt-1">
              <CheckCircle size={16} className="text-sage-400" strokeWidth={1.5} />
            </div>
          ) : (
            <div className="shrink-0 mt-1 text-ivory-300">
              <ChevronRight size={16} strokeWidth={1.5} />
            </div>
          )}
        </div>
        {!completed && (
          <div className="mt-3 pt-3 border-t border-ivory-100">
            <p className="text-[11px] text-ivory-300 leading-relaxed truncate">
              {achievement.unlockCondition}
            </p>
          </div>
        )}
      </div>
    </motion.button>
  );
}
