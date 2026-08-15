"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { saveSubmission } from "@/lib/submissions";

const PROJECT_TYPES = ["别墅", "大平层", "顶层复式", "私人会所", "其他"];

export function ContactForm() {
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    saveSubmission({
      source: "contact",
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      projectType: type,
      message: String(data.get("message") || ""),
    });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-keiqi-line bg-keiqi-night-2 p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-keiqi-gold text-2xl text-keiqi-night">
          ✓
        </div>
        <h3 className="font-display text-2xl text-keiqi-cream">已收到您的预约</h3>
        <p className="mt-3 text-sm text-keiqi-cream/55">
          凯奇顾问将在 1 个工作日内与您联系。您的需求已记录，可在「需求汇总」查看。
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-sm">
          <button
            type="button"
            onClick={() => setSent(false)}
            className="text-keiqi-gold-soft underline-offset-4 hover:underline"
          >
            再填一份
          </button>
          <Link
            href="/submissions"
            className="text-keiqi-cream/55 underline-offset-4 hover:text-keiqi-gold-soft hover:underline"
          >
            查看汇总 →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-xl border border-keiqi-line bg-keiqi-night-2 p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="姓名" required>
          <input
            required
            name="name"
            className="input"
            placeholder="您的称呼"
          />
        </Field>
        <Field label="电话" required>
          <input
            required
            name="phone"
            inputMode="tel"
            className="input"
            placeholder="便于回拨的手机号"
          />
        </Field>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm text-keiqi-cream/70">
          项目类型
        </label>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                type === t
                  ? "border-keiqi-gold bg-keiqi-gold text-keiqi-night"
                  : "border-keiqi-line text-keiqi-cream/60 hover:border-keiqi-gold/50 hover:text-keiqi-gold-soft"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <Field label="需求描述">
          <textarea
            name="message"
            rows={4}
            className="input resize-none"
            placeholder="户型面积、风格偏好、预算区间或任何想聊的…"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-keiqi-gold py-3 text-sm font-medium text-keiqi-night transition-opacity hover:opacity-90"
      >
        提交预约
      </button>
      <p className="mt-3 text-center text-xs text-keiqi-cream/40">
        提交即表示同意凯奇与您电话联系。
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-keiqi-cream/70">
        {label}
        {required && <span className="text-keiqi-gold-soft"> *</span>}
      </span>
      {children}
    </label>
  );
}
