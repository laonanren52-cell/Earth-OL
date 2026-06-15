"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Star, Heart } from "lucide-react";

interface Props {
  icon?: React.ReactNode;
  rarity: string;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  animated?: boolean;
}

function getBadgeStyle(rarity: string, size: string) {
  const isSm = size === "sm";
  const isMd = size === "md";
  const isLg = size === "lg";

  const container = isLg ? "w-16 h-16" : isMd ? "w-9 h-9" : "w-7 h-7";
  const iconSize = isLg ? 28 : isMd ? 17 : 13;

  // Common
  if (rarity === "普通") {
    return {
      container: container + " bg-sage-50 border border-sage-200/60",
      icon: "text-sage-400",
      iconSize,
      glow: "",
    };
  }
  // Rare
  if (rarity === "稀有") {
    return {
      container: container + " bg-gradient-to-br from-emerald-50 to-sage-50 border border-emerald-200/60 shadow-sm",
      icon: "text-emerald-500",
      iconSize,
      glow: isLg ? "shadow-emerald-200/40 shadow-lg" : "",
    };
  }
  // Epic
  if (rarity === "史诗") {
    return {
      container: container + " bg-gradient-to-br from-amethyst-50 to-amethyst-50 border border-amethyst-200/60 shadow-sm",
      icon: "text-amethyst-500",
      iconSize,
      glow: isLg ? "shadow-amethyst-200/40 shadow-lg" : "",
    };
  }
  // Legendary
  if (rarity === "传说") {
    return {
      container: container + " bg-gradient-to-br from-gold-100 to-gold-50 border border-gold-300/60 shadow-sm",
      icon: "text-gold-500",
      iconSize,
      glow: isLg ? "shadow-gold-200/50 shadow-lg premium-glow" : "premium-glow",
    };
  }
  // Custom / fallback
  return {
    container: container + " bg-gradient-to-br from-sky-50 to-sage-50 border border-sky-200/60 shadow-sm",
    icon: "text-sky-500",
    iconSize,
    glow: isLg ? "shadow-sky-200/30 shadow-lg" : "",
  };
}

export default function AchievementIconBadge({ icon, rarity, size = "md", glow = false, animated = false }: Props) {
  const style = getBadgeStyle(rarity, size);

  const badge = (
    <div className={"shrink-0 flex items-center justify-center rounded-lg transition-all " + style.container + (glow ? " " + style.glow : "")}>
      {icon || <Sparkles size={style.iconSize} strokeWidth={1.5} className={style.icon} />}
    </div>
  );

  if (animated && size === "lg") {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
        className={style.container + " rounded-full flex items-center justify-center " + style.container.replace("rounded-lg", "rounded-full") + (glow ? " " + style.glow : "")}
      >
        {icon || <Award size={style.iconSize} strokeWidth={1.5} className={style.icon} />}
      </motion.div>
    );
  }

  return badge;
}

export function getRarityBadgeBg(rarity: string): string {
  switch (rarity) {
    case "普通": return "bg-sky-50/80 text-sky-600";
    case "稀有": return "bg-sage-50/80 text-sage-500";
    case "史诗": return "bg-amethyst-50/80 text-amethyst-500";
    case "传说": return "bg-gold-50/80 text-gold-500";
    default: return "bg-sky-50/80 text-sky-600";
  }
}
