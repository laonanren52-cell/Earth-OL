import { EmotionTag } from "@/types/achievement";

export const emotionTags: EmotionTag[] = [
  { id: "happy", label: "开心", description: "用户完成任务时感到快乐和满足。", praiseDirection: "确认这种开心的合理性，放大积极感受，不要扫兴。" },
  { id: "nervous", label: "紧张", description: "用户完成任务时有压力或不安。", praiseDirection: "夸用户在紧张下仍然行动了，紧张也可以继续前进。" },
  { id: "shy", label: "害羞", description: "用户完成了一些让人不好意思的事。", praiseDirection: "温柔承认害羞，告诉用户害羞也是可爱的特质。" },
  { id: "wronged", label: "委屈", description: "用户完成任务时感到委屈或不被理解。", praiseDirection: "共情委屈但不沉溺，把委屈转化成对自己好的动力。" },
  { id: "low", label: "低落", description: "用户在心情不好的情况下完成了任务。", praiseDirection: "认可低落时行动更难，这是一种更深的勇敢。" },
  { id: "relieved", label: "释然", description: "用户完成了一件纠结已久的事，感到轻松。", praiseDirection: "描绘释放感，强调放下比坚持更需要智慧。" },
  { id: "proud", label: "有点骄傲", description: "用户为自己感到骄傲和自豪。", praiseDirection: "确认这份骄傲是应得的，大方地恭喜用户。" },
  { id: "anxious", label: "焦虑", description: "用户完成任务的同时伴随焦虑。", praiseDirection: "承认焦虑存在，但告诉用户行动是应对焦虑最好的方式。" },
  { id: "ordinary", label: "普普通通", description: "用户觉得这件事没什么特别的。", praiseDirection: "温和告诉用户普通也值得被记录，不用每件事都轰轰烈烈。" },
  { id: "tired", label: "有点累", description: "用户完成任务后感到疲惫。", praiseDirection: "将疲惫重新定义为一种充实的累，是在为自己消耗能量。" },
  { id: "brave", label: "很勇敢", description: "用户完成了需要勇气的事情。", praiseDirection: "放大勇敢的意义，让用户意识到勇气在改变ta。" },
  { id: "sigh", label: "松了一口气", description: "用户完成任务后如释重负。", praiseDirection: "将松一口气描绘成有力量的释放，不是逃避是跨越。" },
  { id: "not-sure", label: "不知道算不算完成", description: "用户不确定自己的行动是否算成就。", praiseDirection: "温柔重新定义完成，让用户知道过程本身就算数。" },
  { id: "finally", label: "终于做到了", description: "用户拖了很久终于完成了。", praiseDirection: "强调拖延后的完成更有分量，用户只是需要自己的节奏。" },
  { id: "rejected", label: "被拒绝了", description: "用户经历了不理想的结果，可能有失落感。", praiseDirection: "先承认被拒绝会难受，再肯定行动的勇气，不假装结果很好。" },
  { id: "failed", label: "没成功", description: "用户尝试了但没有达到预期结果。", praiseDirection: "结果不等于价值，肯定尝试本身，不要以成败定义用户。" },
  { id: "embarrassed", label: "很尴尬", description: "用户在完成任务过程中感到丢脸或尴尬。", praiseDirection: "尴尬也是体验的一部分，做了就是赢了，不必在意别人的看法。" },
  { id: "want-cry", label: "想哭", description: "用户情绪积累到一定程度，需要释放。", praiseDirection: "温柔接纳想哭的情绪，告诉用户哭不是软弱，是太认真了。" },
  { id: "no-talk", label: "不想说话", description: "用户完成任务后不想交流或被打扰。", praiseDirection: "不想说话是合理的充电方式，安静也是对自己的一种保护。" },
  { id: "still-did", label: "但还是做了", description: "用户虽然犹豫但最终还是行动了。", praiseDirection: "即使有各种理由不做，你还是选择了去做，这就是进步。" },
  { id: "regretful", label: "有点后悔", description: "用户对已完成的事情感到后悔。", praiseDirection: "允许后悔存在，但不要被后悔定义，每个选择都是当时最好的。" },
  { id: "lighter", label: "轻松了一点", description: "用户完成后的沉重感有所减轻。", praiseDirection: "哪怕只轻松了一点点也是好的，慢慢来，不需要一步到位。" },
  { id: "reward", label: "想奖励自己", description: "用户认为自己值得一点奖励。", praiseDirection: "你当然值得奖励。给自己一个小奖励是对自己的正向回应。" },
  { id: "not-bad", label: "没那么糟", description: "用户发现结果比预想的好一些。", praiseDirection: "有时候没那么糟就是很好的结果了，你值得安心。" },
  { id: "accepting", label: "开始接受了", description: "用户正在慢慢接受某个事实或状态。", praiseDirection: "接受不是放弃，是你不再和现实较劲，开始保存能量了。" },
  { id: "slow-down", label: "慢慢来", description: "用户决定不急于求成，放慢节奏。", praiseDirection: "慢不是退步，是你选择了自己的节奏。慢慢来也是一种力量。" },
  { id: "need-encourage", label: "需要被鼓励", description: "用户完成任务后需要他人的认可。", praiseDirection: "你需要鼓励，这是完全正常的。你已经做得足够好了。" },
  { id: "did-best", label: "今天已经尽力了", description: "用户认为自己已经尽了最大努力。", praiseDirection: "你今天已经尽力了，不需要再苛责自己。尽力本身就很了不起。" },
  { id: "small-win", label: "虽然很小但完成了", description: "用户完成了一件很小但意义重大的事。", praiseDirection: "小事情也是胜利。人生不是每次都要做大事，小切口也能撬动改变。" },
  { id: "no-more-drain", label: "不想再内耗了", description: "用户决定停止精神内耗。", praiseDirection: "你意识到内耗在消耗你，并选择了停止，这是非常了不起的觉察。" },
  { id: "numb", label: "有点麻木", description: "用户感到情绪麻木或什么都提不起劲。", praiseDirection: "麻木也是一种信号，不需要强行让自己兴奋起来，安静也是状态。" },
];

export function getEmotionById(id: string): EmotionTag | undefined {
  return emotionTags.find((e) => e.id === id);
}

export function getRandomEmotions(count: number = 6): EmotionTag[] {
  const shuffled = [...emotionTags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
