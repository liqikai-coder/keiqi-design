import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import {
  CookingPot,
  Bath,
  Boxes,
  Broom,
  PersonStanding,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "日本整体厨卫™",
  description:
    "日本整体厨卫体系™ · 整体厨房、整体卫浴、收纳系统、家政系统与适老化系统。以日本住宅设计逻辑，重构居住效率。",
};

const MODULES = [
  {
    icon: CookingPot,
    title: "整体厨房",
    desc: "人机工学动线、模块化收纳与高效排烟，烹饪变成享受。",
  },
  {
    icon: Bath,
    title: "整体卫浴",
    desc: "干湿分离、同层排水与一体成型，洁净易打理。",
  },
  {
    icon: Boxes,
    title: "收纳系统",
    desc: "按家庭物品逻辑规划收纳，让家越住越大。",
  },
  {
    icon: Broom,
    title: "家政系统",
    desc: "洗衣、清洁与污净分流动线，家务效率倍增。",
  },
  {
    icon: PersonStanding,
    title: "适老化系统",
    desc: "无障碍动线、安防与辅助设施，陪伴长久居住。",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
