"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { saveSubmission } from "@/lib/submissions";

interface Msg {
  role: "user" | "bot";
  text: string;
}

const SEED: Msg[] = [
  {
    role: "bot",
    text: "您好，我是凯奇 AI 设计顾问。可以聊聊您的户型、家庭成员与风格偏好，我帮您做初步的空间规划建议。",
  },
];

const REPLIES = [
  "感谢分享。针对您的需求，我会优先保证动线的通透与收纳效率，这正是日本整体厨卫体系的强项。",
  "从健康住宅角度，建议全屋采用无醛板材与水性涂装，交付前做空气检测并出具验收报告。",
  "可以先上传户型图，我会给出空间重组与采光优化的初步建议。",
  "结合您的预算，我可以为您生成一份自动报价初稿，供您参考。",
];

export function AiChat() {
  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [input, setInput] = useState("");
  const [lead, setLead] = useState({ name: "", phone: "" });
  const [leadSent, setLeadSent] = useState(false);

  function send() {
    const text = input.trim();
    if (!text) return;
    const next = [...messages, { role: "user" as const, text }];
    setMessages(next);
    setInput("");
    setTimeout(() => {
      const reply = REPLIES[(next.length - 1) % REPLIES.length];
      setMessages((m) => [...m, { role: "bot" as const, text: reply }]);
    }, 600);
  }

  function submitLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    saveSubmission({
      source: "ai",
      name: lead.name,
      phone: lead.phone,
      message: lastUser?.text || "AI 设计顾问对话留资",
    });
    setLeadSent(true);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-keiqi-line bg-keiqi-night-2">
      <div className="border-b border-keiqi-line bg-keiqi-night-3 px-5 py-3 text-sm text-keiqi-gold-soft">
        凯奇 AI 设计顾问 · 在线演示
      </div>

      {/* 对话区 */}
      <div className="flex h-[360px] flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "flex",
                m.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-7",
                  m.role === "user"
                    ? "bg-keiqi-gold text-keiqi-night"
                    : "border border-keiqi-line bg-keiqi-night-3 text-keiqi-cream/85"
                )}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="flex items-center gap-2 border-t border-keiqi-line p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="描述您的户型或需求…"
            className="flex-1 rounded-full border border-keiqi-line bg-keiqi-night-3 px-4 py-2.5 text-sm text-keiqi-cream outline-none placeholder:text-keiqi-cream/30 focus:border-keiqi-gold"
          />
          <button
            type="submit"
            aria-label="发送"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-keiqi-gold text-keiqi-night transition-opacity hover:opacity-90"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* 留资区 · 保存需求 */}
      <div className="border-t border-keiqi-line bg-keiqi-night-3/50 p-4">
        {leadSent ? (
          <p className="py-2 text-center text-sm text-keiqi-gold-soft">
            已保存您的需求，凯奇顾问将尽快联系您。
          </p>
        ) : (
          <form onSubmit={submitLead} className="space-y-3">
            <p className="text-xs tracking-wide text-keiqi-cream/50">
              留下联系方式，获取 AI 详细方案与人工跟进
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                value={lead.name}
                onChange={(e) => setLead({ ...lead, name: e.target.value })}
                required
                placeholder="姓名"
                className="flex-1 rounded-lg border border-keiqi-line bg-keiqi-night-2 px-3 py-2 text-sm text-keiqi-cream outline-none placeholder:text-keiqi-cream/30 focus:border-keiqi-gold"
              />
              <input
                value={lead.phone}
                onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                required
                inputMode="tel"
                placeholder="电话"
                className="flex-1 rounded-lg border border-keiqi-line bg-keiqi-night-2 px-3 py-2 text-sm text-keiqi-cream outline-none placeholder:text-keiqi-cream/30 focus:border-keiqi-gold"
              />
              <button
                type="submit"
                className="rounded-lg bg-keiqi-gold px-5 py-2 text-sm font-medium text-keiqi-night transition-opacity hover:opacity-90"
              >
                保存需求
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
