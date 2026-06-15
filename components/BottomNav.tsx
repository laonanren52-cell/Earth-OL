"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Trophy, ClipboardList, User } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "首页", href: "/", icon: Home },
  { label: "成就", href: "/achievements", icon: Trophy },
  { label: "记录", href: "/records", icon: ClipboardList },
  { label: "我的", href: "/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-md">
      <div className="relative mx-4 mb-3 rounded-2xl nav-glass px-1.5 py-1">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className="relative flex flex-col items-center gap-0.5 px-4 py-2 min-w-[56px]"
              >
                <div className="relative flex items-center justify-center w-5 h-5">
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute inset-0 rounded-full bg-sage-100/80"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  <Icon
                    size={17}
                    strokeWidth={isActive ? 2 : 1.5}
                    className={`relative transition-colors duration-300 ${
                      isActive ? "text-sage-400" : "text-ivory-300"
                    }`}
                  />
                </div>
                <span
                  className={`text-[9px] font-medium tracking-[0.06em] transition-colors duration-300 ${
                    isActive ? "text-sage-400" : "text-ivory-300"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
