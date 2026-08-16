import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "关于凯奇",
  description:
    "关于凯奇设计 · 高端住宅空间定制机构。以定制设计、凯奇精工、健康住宅与日本整体厨卫，改善居住品质。",
};

const VALUES = [
  {
    en: "Vision",
    title: "愿景",
    desc: "成为中国高端住宅空间定制领域值得信赖的品牌。",
  },
  {
    en: "Mission",
    title: "使命",
    desc: "通过设计与工艺改善居住品质。",
  },
  {
    en: "Belief",
    title: "核心理念",
    desc: "设计的不只是房子，而是未来十年的生活方式。",
  },
];

const EDGES = [
  "高端住宅",
  "健康住宅",
  "日本整体厨卫",
  "AI 设计顾问",
];

const NUMBERS = [
  { v: "15+", l: "年定制经验" },
  { v: "200+", l: "交付案例" },
  { v: "4", l: "大标准体系" },
  { v: "100%", l: "无醛交付" },
];

const STEPS = ["初次咨询", "现场勘测", "定制设计", "精工施工", "验收交付"];

const REGIONS = ["杭州", "上海", "深圳", "苏州", "南京", "宁波"];

const VALUES_LIST = ["匠人精神", "长期主义", "一户一案", "健康优先"];

export default function Page() {
  return (
    <>
      <PageHero
        en="About"
