"use client";

import { useState } from "react";
import { Achievement } from "@/types/achievement";
import { generatePraise } from "@/lib/aiPraise";
import { saveRecord } from "@/lib/storage";
import { getRarityBg } from "@/data/achievements";
import { emotionTags } from "@/data/emotionTags";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Sparkles, Loader2, Award, Clock, MessageSquare,
  RefreshCw, ArrowLeft, Bookmark, Heart,
} from "lucide-react";

interface CheckInDialogProps {
  achievement: Achievement | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  records?: { achievementId: string }[];
}

export default function CheckInDialog({
  achievement,
  open,
  onClose,
  onSaved,
  records = [],
}: CheckInDialogProps) {
  const [step, setStep] = useState<"form" | "loading" | "result">("form");
  const [userNote, setUserNote] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [praise, setPraise] = useState("");
  const [generatedAt, setGeneratedAt] = useState("");

  if (!achievement) return null;

  const handleGenerate = async () => {
    if (!userNote.trim()) return;
    setStep("loading");
    try {
      const result = await generatePraise({
        achievement,
        userNote,
        emotionTag: selectedEmotion || undefined,
        records: records.map((r) => ({
          id: r.achievementId,
          achievementId: r.achievementId,
          achievementTitle: "",
          category: achievement.category,
          rarity: achievement.rarity,
          userNote: "",
          aiPraise: "",
          completedAt: "",
        })),
      });
      setPraise(result);
      setGeneratedAt(new Date().toISOString());
      setStep("result");
    } catch {
      setStep("form");
    }
  };

  const handleSave = () => {
    saveRecord({
      id: crypto.randomUUID?.() || Date.now().toString(36),
      achievementId: achievement.id,
      achievementTitle: achievement.title,
      category: achievement.category,
      rarity: achievement.rarity,
      userNote,
      emotionTag: selectedEmotion || undefined,
      aiPraise: praise,
      completedAt: generatedAt,
    });
    onSaved();
    handleReset();
  };

  const handleRegenerate = () => {
    setStep("form");
    setPraise("");
    setGeneratedAt("");
  };

  const handleReset = () => {
    setStep("form");
    setUserNote("");
    setSelectedEmotion("");
    setPraise("");
    setGeneratedAt("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/20 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget && step === "form") handleReset(); }}
        >
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.9 }}
            className="relative w-full max-w-sm mx-3 rounded-2xl bg-white shadow-modal overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              {step === "result" ? (
                <button onClick={handleRegenerate} className="flex items-center gap-1.5 text-sm text-ivory-400 hover:text-ivory-500 transition-colors">
                  <ArrowLeft size={16} />
                  <span>&#x8FD4;&#x56DE;&#x4FEE;&#x6539;</span>
                </button>
              ) : <div />}
              {step !== "loading" && (
                <button onClick={handleReset} className="flex items-center justify-center w-8 h-8 rounded-full text-ivory-400 hover:text-ivory-500 hover:bg-ivory-100 transition-colors">
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Achievement info */}
            <div className="px-5 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded-full ${getRarityBg(achievement.rarity)}`}>
                  {achievement.rarity}
                </span>
                <span className="text-[11px] text-ivory-300">{achievement.category}</span>
              </div>
              <h2 className="text-lg font-bold text-[#2D2A28] leading-snug">{achievement.title}</h2>
              <p className="text-[13px] text-ivory-400 mt-1 leading-relaxed">{achievement.description}</p>
              {step === "form" && (
                <p className="text-[11px] text-ivory-300 mt-2 leading-relaxed">{achievement.unlockCondition}</p>
              )}
            </div>

            <div className="border-t border-ivory-100" />

            {/* Content */}
            <div className="px-5 py-4">
              {step === "form" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  {/* Emotion Tags */}
                  <label className="block text-sm font-medium text-[#2D2A28] mb-2">
                    &#x4F60;&#x73B0;&#x5728;&#x7684;&#x611F;&#x53D7;&#x662F;&#xFF1F;
                  </label>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {emotionTags.map((em) => {
                      const active = selectedEmotion === em.id;
                      return (
                        <button
                          key={em.id}
                          onClick={() => setSelectedEmotion(active ? "" : em.id)}
                          className={`rounded-full px-3 py-1 text-[12px] font-medium transition-all duration-200 ${
                            active
                              ? "bg-sage-400 text-white shadow-sm"
                              : "bg-ivory-100 text-ivory-400 hover:bg-ivory-150"
                          }`}
                        >
                          {em.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* User Note */}
                  <label className="block text-sm font-medium text-[#2D2A28] mb-2">
                    &#x8BB0;&#x5F55;&#x4E00;&#x4E0B;&#x8FD9;&#x4E00;&#x523B;
                  </label>
                  <textarea
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="&#x6BD4;&#x5982;&#xFF1A;&#x4ECA;&#x5929;&#x771F;&#x7684;&#x6709;&#x70B9;&#x7D27;&#x5F20;&#xFF0C;&#x4F46;&#x6211;&#x8FD8;&#x662F;&#x53D1;&#x51FA;&#x53BB;&#x4E86;&#x2026;&#x2026;"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-ivory-200 bg-ivory-50/50 px-4 py-3 text-sm text-[#2D2A28] placeholder:text-ivory-300 focus:outline-none focus:ring-2 focus:ring-sage-300/40 focus:border-sage-300 transition-all duration-200"
                  />
                  <div className="flex items-center justify-between mt-1.5 mb-4">
                    <p className="text-[11px] text-ivory-300">
                      {userNote.length > 0 ? `${userNote.length} &#x5B57;` : "&#x5199;&#x4E0B;&#x4F60;&#x7684;&#x771F;&#x5B9E;&#x611F;&#x53D7;&#x5427;"}
                    </p>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={!userNote.trim()}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                      userNote.trim()
                        ? "bg-sage-400 text-white hover:bg-sage-500 active:scale-[0.98] shadow-sm"
                        : "bg-ivory-100 text-ivory-300 cursor-not-allowed"
                    }`}
                  >
                    <Sparkles size={16} />
                    &#x751F;&#x6210;&#x6211;&#x7684;&#x6210;&#x5C31;&#x8BC4;&#x4EF7;
                  </button>

                  <button onClick={handleReset} className="w-full text-center text-sm text-ivory-400 hover:text-ivory-500 py-2.5 mt-1 transition-colors">
                    &#x53D6;&#x6D88;
                  </button>
                </motion.div>
              )}

              {step === "loading" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-8">
                  <div className="relative mb-5">
                    <Loader2 size={36} className="text-sage-400 animate-spin" />
                    <div className="absolute inset-0 rounded-full border-2 border-sage-200/30" />
                  </div>
                  <p className="text-sm font-medium text-[#2D2A28] mb-1">AI &#x5938;&#x5938;&#x5B98;&#x6B63;&#x5728;&#x8BB0;&#x5F55;&#x4F60;&#x7684;&#x6210;&#x957F;&#x2026;&#x2026;</p>
                  <p className="text-[12px] text-ivory-300">&#x6B63;&#x5728;&#x751F;&#x6210;&#x4E13;&#x5C5E;&#x6210;&#x5C31;&#x8BC4;&#x4EF7;</p>
                  <div className="flex gap-1 mt-4">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
                        className="w-1.5 h-1.5 rounded-full bg-sage-400"
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {step === "result" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
                    className="flex flex-col items-center mb-5"
                  >
                    <motion.div
                      className={`flex items-center justify-center w-16 h-16 rounded-full mb-2 shadow-lg ${
                        achievement.rarity === "传说"
                          ? "bg-gradient-to-br from-gold-200 to-gold-50 shadow-amber-200/50"
                          : achievement.rarity === "史诗"
                          ? "bg-gradient-to-br from-amethyst-200 to-amethyst-50 shadow-amethyst-200/40"
                          : achievement.rarity === "稀有"
                          ? "bg-gradient-to-br from-sage-200 to-sage-50 shadow-sage-200/40"
                          : "bg-gradient-to-br from-sky-100 to-ivory-100"
                      }`}
                    >
                      <Award size={30} className={
                        achievement.rarity === "传说" ? "text-gold-500" :
                        achievement.rarity === "史诗" ? "text-amethyst-500" :
                        achievement.rarity === "稀有" ? "text-sage-500" :
                        "text-sky-500"
                      } />
                    </motion.div>
                    <h3 className="text-lg font-bold text-[#2D2A28]">&#x6210;&#x5C31;&#x89E3;&#x9501;</h3>
                    <p className={`text-[13px] font-medium ${
                      achievement.rarity === "传说" ? "text-gold-500" :
                      achievement.rarity === "史诗" ? "text-amethyst-500" :
                      achievement.rarity === "稀有" ? "text-sage-500" :
                      "text-sky-500"
                    }`}>
                      {achievement.title}
                    </p>
                  </motion.div>

                  {/* AI Praise Card */}
                  <div className={`rounded-xl border p-4 mb-3 ${
                    achievement.rarity === "传说"
                      ? "bg-gradient-to-br from-gold-50/80 to-ivory-50 border-gold-200/50"
                      : achievement.rarity === "史诗"
                      ? "bg-gradient-to-br from-amethyst-50/80 to-ivory-50 border-amethyst-200/40"
                      : "bg-sage-50/60 border-sage-200/30"
                  }`}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles size={13} className="text-sage-400" />
                      <span className="text-[10px] font-medium text-sage-500 tracking-[0.05em] uppercase">&#x5730;&#x7403; Online &#x6210;&#x5C31;&#x8BC4;&#x4EF7;</span>
                    </div>
                    <p className="text-[14px] text-[#2D2A28] leading-relaxed whitespace-pre-line">{praise}</p>
                  </div>

                  {/* User Note */}
                  <div className="rounded-xl bg-ivory-50 border border-ivory-150 p-3.5 mb-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <MessageSquare size={13} className="text-ivory-400" />
                      <span className="text-[10px] font-medium text-ivory-400 tracking-[0.05em] uppercase">&#x4F60;&#x7684;&#x611F;&#x53D7;</span>
                    </div>
                    <p className="text-[13px] text-ivory-500 leading-relaxed">{userNote}</p>
                    {selectedEmotion && (
                      <div className="flex items-center gap-1 mt-2">
                        <Heart size={11} className="text-sage-400" />
                        <span className="text-[11px] text-sage-500">{emotionTags.find(e => e.id === selectedEmotion)?.label}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 mt-1.5 text-[11px] text-ivory-300">
                      <Clock size={11} />
                      <span>{new Date(generatedAt).toLocaleString("zh-CN")}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <button onClick={handleSave} className="w-full flex items-center justify-center gap-2 rounded-xl bg-sage-400 text-white px-5 py-3 text-sm font-semibold hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 shadow-sm mb-2">
                    <Bookmark size={16} />
                    &#x4FDD;&#x5B58;&#x8BB0;&#x5F55;
                  </button>

                  <div className="flex gap-2">
                    <button onClick={handleReset} className="flex-1 rounded-xl border border-ivory-200 text-ivory-400 hover:text-ivory-500 hover:bg-ivory-50 px-4 py-2.5 text-sm font-medium transition-all duration-200">
                      &#x7EE7;&#x7EED;&#x63A2;&#x7D22;
                    </button>
                    <button onClick={handleRegenerate} className="flex-1 rounded-xl border border-ivory-200 text-ivory-400 hover:text-ivory-500 hover:bg-ivory-50 px-4 py-2.5 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5">
                      <RefreshCw size={14} />
                      &#x518D;&#x751F;&#x6210;&#x4E00;&#x6B21;
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
