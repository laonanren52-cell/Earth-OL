import { EmotionTag } from "@/types/achievement";

export const emotionTags: EmotionTag[] = [
  {
    id: "happy",
    label: "开心",
    description: "用户完成任务时感到快乐和满足",
    praiseDirection: "确认这种开心的合理性，让用户觉得自己的快乐是被允许和有价值的，不要扫兴，而是放大这种积极感受。"
  },
  {
    id: "nervous",
    label: "紧张",
    description: "用户完成任务时有压力或不安",
    praiseDirection: "重点夸用户在紧张状态下仍然行动了，不要否定紧张，而是承认紧张也可以继续前进。"
  },
  {
    id: "shy",
    label: "害羞",
    description: "用户完成了一些让人不好意思的事情",
    praiseDirection: "温柔地承认害羞，但告诉用户这些事本身值得肯定，害羞也是可爱的特质。"
  },
  {
    id: "wronged",
    label: "委屈",
    description: "用户完成任务时感到委屈或不被理解",
    praiseDirection: "共情委屈，但不沉溺，把委屈转化成对自己好的动力，强调用户是在为自己而做。"
  },
  {
    id: "low",
    label: "低落",
    description: "用户在心情不好的情况下完成了任务",
    praiseDirection: "认可在低落时行动更难，这是一种更深的勇敢，比开心时完成更需要被看见。"
  },
  {
    id: "relieved",
    label: "释然",
    description: "用户完成了一件纠结已久的事，感到轻松",
    praiseDirection: "描绘释放感，强调放下比坚持更需要智慧，释然本身就是一种成长信号。"
  },
  {
    id: "proud",
    label: "骄傲",
    description: "用户为自己感到骄傲和自豪",
    praiseDirection: "确认这份骄傲是应得的，不要谦虚地说'不算什么'，而是大方地恭喜用户。"
  },
  {
    id: "anxious",
    label: "焦虑",
    description: "用户完成任务的同时伴随焦虑",
    praiseDirection: "承认焦虑的存在，但不让它成为主角，告诉用户行动本身就是对抗焦虑最好的方式。"
  },
  {
    id: "ordinary",
    label: "普普通通",
    description: "用户觉得这件事实在没什么特别的",
    praiseDirection: "温和地告诉用户，普通也值得被记录，不是每件事都要轰轰烈烈才算数。"
  },
  {
    id: "tired",
    label: "有点累",
    description: "用户完成任务后感到疲惫",
    praiseDirection: "认可用户的疲惫，但将它重新定义为一种充实的累，是在为自己而消耗能量。"
  },
  {
    id: "brave",
    label: "很勇敢",
    description: "用户完成了需要勇气的事情",
    praiseDirection: "放大勇敢的意义，让用户意识到这份勇气正在潜移默化地改变ta。"
  },
  {
    id: "sigh",
    label: "松了一口气",
    description: "用户完成任务后如释重负",
    praiseDirection: "把这种松一口气描绘成一种有力量的释放，不是逃避的轻松，而是跨越的轻松。"
  },
  {
    id: "not-sure",
    label: "不知道算不算完成",
    description: "用户不确定自己的行动是否算完成了成就",
    praiseDirection: "温柔地重新定义'完成'，让用户知道过程本身就是一种完成，不需要完美的标准答案。"
  },
  {
    id: "finally",
    label: "终于做到了",
    description: "用户拖了很久终于完成了",
    praiseDirection: "强调拖延后的完成更有分量，因为用户一直在心里记着这件事，只是需要自己的节奏。"
  },
];

export function getEmotionById(id: string): EmotionTag | undefined {
  return emotionTags.find((e) => e.id === id);
}

export function getRandomEmotions(count: number = 5): EmotionTag[] {
  const shuffled = [...emotionTags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
