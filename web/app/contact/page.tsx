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
        title="预约咨询"
        subtitle="预约一次专属空间设计咨询，或留下联系方式，凯奇顾问将在 1 个工作日内与您联系。"
        bgImage="https://images.pexels.com/photos/7045918/pexels-photo-7045918.jpeg"
      />

      <section className="bg-keiqi-night px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* 联系方式 */}
          <div>
            <div className="mb-6 h-px w-16 bg-keiqi-gold" />
            <h2 className="font-display text-3xl text-keiqi-cream">
              联系方式
            </h2>
            <ul className="mt-8 space-y-5">
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-keiqi-line bg-keiqi-night-2">
                      <Icon
                        className="h-5 w-5 text-keiqi-gold-soft"
                        strokeWidth={1.5}
                      />
                    </span>
                    <div>
                      <div className="text-xs tracking-wide text-keiqi-cream/45">
                        {c.label}
                      </div>
                      <div className="text-base text-keiqi-cream">
                        {c.value}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-sm leading-7 text-keiqi-cream/45">
              提交的需求将汇总至「需求汇总」看板，正式上线后将自动同步 CRM 建档跟进。
            </p>
          </div>

          {/* 表单 */}
          <ContactForm />
        </div>

        {/* 地图占位 */}
        <div className="mt-20">
          <div className="mb-6 h-px w-16 bg-keiqi-gold" />
          <h2 className="font-display text-3xl text-keiqi-cream">到访指引</h2>
          <div className="mt-6 grid aspect-[21/9] w-full place-items-center rounded-lg border border-dashed border-keiqi-line bg-keiqi-night-2/60">
            <div className="text-center">
              <MapPin
                className="mx-auto h-8 w-8 text-keiqi-gold-soft"
                strokeWidth={1.4}
              />
              <p className="mt-4 text-sm tracking-wide text-keiqi-cream/50">
                地图服务接入中 · 预约到访请先联系顾问
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
