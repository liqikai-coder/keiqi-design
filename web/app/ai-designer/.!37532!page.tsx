import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { AiChat } from "@/components/sections/ai-chat";
import { MessageSquare, Calculator, Upload, ArrowRight } from "lucide-react";

export const metadata = {
  title: "凯奇AI设计顾问™",
  description:
    "凯奇AI设计顾问™ · 智能对话、自动报价与户型上传识别。以 AI 重新定义高端住宅设计的前端体验。",
};

const CAPABILITIES = [
  {
    icon: MessageSquare,
    title: "AI 设计对话",
    desc: "用自然语言描述需求，获取空间规划与风格建议的初步方案。",
  },
  {
    icon: Calculator,
    title: "自动报价",
    desc: "基于面积、风格与体系选择，生成透明的预算初稿。",
  },
  {
    icon: Upload,
    title: "户型上传",
    desc: "上传户型图，AI 辅助识别并给出空间重组建议。",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
