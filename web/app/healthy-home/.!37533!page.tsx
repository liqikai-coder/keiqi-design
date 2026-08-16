import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import {
  ShieldCheck,
  Leaf,
  Wind,
  FlaskConical,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "凯奇健康住宅体系™",
  description:
    "凯奇健康住宅体系™ · 无醛板材与辅材、水性环保涂装、空气质量检测与环保验收报告。健康不是选配，而是住宅的基础标准。",
};

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "无醛板材",
    desc: "全屋板材采用无醛添加基材，从源头控制甲醛释放。",
  },
  {
    icon: Leaf,
    title: "无醛辅材",
    desc: "胶黏剂、腻子等辅材同步无醛标准，避免叠加污染。",
  },
  {
    icon: Wind,
    title: "水性环保涂装",
    desc: "墙面与木作涂装采用水性环保材料，低 VOC 更安全。",
  },
  {
    icon: FlaskConical,
    title: "空气质量检测",
    desc: "交付前进行室内空气检测，数据可视化呈现。",
  },
  {
    icon: FileCheck2,
    title: "环保验收报告",
    desc: "出具一户一档的环保验收报告，健康交付有据可依。",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
