import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "预约咨询",
  description:
    "预约凯奇设计专属空间咨询。电话、微信、邮箱多渠道联系，1 个工作日内回拨。",
};

const CHANNELS = [
  { icon: Phone, label: "电话", value: "400-888-0688" },
  { icon: MessageCircle, label: "微信", value: "keiqi-design" },
  { icon: Mail, label: "邮箱", value: "hello@keiqi.design" },
  { icon: MapPin, label: "地址", value: "杭州市西湖区西溪谷国际中心" },
];

export default function Page() {
  return (
    <>
      <PageHero
        en="Contact"
