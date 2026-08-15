"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = ["别墅", "大平层", "顶层复式", "私人会所", "其他"];

export function ContactForm() {
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 演示态：本地提交成功。Sprint 08 将接入 CRM（详见 docs/03-prd.md §7.4）。
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-keiqi-mist bg-white p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-keiqi-red text-2xl text-white">
          ✓
        </div>
        <h3 className="font-display text-2xl text-keiqi-ink">已收到您的预约</h3>
        <p className="mt-3 text-sm text-keiqi-ink/60">
          凯奇顾问将在 1 个工作日内与您联系。本表单为演示态，正式提交将写入 CRM。
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-keiqi-red underline-offset-4 hover:underline"
        >
          再填一份
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-xl border border-keiqi-mist bg-white p-8"
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
        <label className="mb-2 block text-sm text-keiqi-ink/70">
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
                  ? "border-keiqi-red bg-keiqi-red text-white"
                  : "border-keiqi-ink/20 text-keiqi-ink/70 hover:border-keiqi-red hover:text-keiqi-red"
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
        className="mt-6 w-full rounded-full bg-keiqi-red py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        提交预约
      </button>
      <p className="mt-3 text-center text-xs text-keiqi-ink/40">
        提交即表示同意凯奇与您电话联系。演示阶段数据不会上传。
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
      <span className="mb-2 block text-sm text-keiqi-ink/70">
        {label}
        {required && <span className="text-keiqi-red"> *</span>}
      </span>
      {children}
    </label>
  );
}
