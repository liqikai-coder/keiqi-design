import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Droplets, Plug, Trees, Paintbrush, ClipboardCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "凯奇精工体系™",
  description:
    "凯奇精工体系™ · 标准化工艺与精细化施工，建立水电、防水、木作、涂装、交付五大标准，让高端可被验收。",
};

const STANDARDS = [
  {
    icon: Plug,
    title: "水电标准",
    desc: "活线工艺、强弱电分离、给排水压力测试，隐蔽工程可追溯、可检修。",
    points: ["强弱电间距规范", "给水管打压验收", "回路负荷测算"],
  },
  {
    icon: Droplets,
    title: "防水标准",
    desc: "厨卫与阳台多层防水、闭水试验 ≥ 48 小时，杜绝渗漏隐患。",
