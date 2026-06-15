"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/achievements";

interface FilterBarProps {
  active: string;
  onChange: (value: string) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex gap-1.5 overflow-x-auto px-6 scrollbar-none">
      {categories.map((cat) => {
        const isActive = active === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className="relative shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-[0.03em] transition-all duration-300"
          >
            {isActive && (
              <motion.div
                layoutId="filter-active"
                className="absolute inset-0 rounded-full bg-sage-400"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
            <span className={`relative z-10 ${
              isActive ? "text-white" : "text-ivory-400 hover:text-ivory-500"
            }`}>
              {cat.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
