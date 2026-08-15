"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import {
  getSubmissions,
  clearSubmissions,
  type Submission,
} from "@/lib/submissions";
import { Download, Trash2, RefreshCw, ArrowRight } from "lucide-react";

const TYPES = ["别墅", "大平层", "顶层复式", "私人会所", "其他"];

function dateKey(iso: string) {
  return new Date(iso).toDateString();
}

function fmtTime(iso: string) {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getMonth() + 1}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(
    d.getMinutes()
  )}`;
}

function maskPhone(phone: string) {
  if (phone.length < 7) return phone;
  return phone.slice(0, 3) + "****" + phone.slice(-4);
}

export default function SubmissionsPage() {
  const [items, setItems] = useState<Submission[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(getSubmissions());
    setLoaded(true);
  }, []);

  const total = items.length;
  const todayCount = items.filter(
    (s) => dateKey(s.createdAt) === new Date().toDateString()
  ).length;
  const aiCount = items.filter((s) => s.source === "ai").length;
  const contactCount = total - aiCount;

  const byType = TYPES.map((t) => ({
    type: t,
    count: items.filter((s) => s.projectType === t).length,
  }));
  const maxType = Math.max(1, ...byType.map((b) => b.count));

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const byDay = days.map((d) => ({
    label: `${d.getMonth() + 1}/${d.getDate()}`,
    count: items.filter((s) => dateKey(s.createdAt) === d.toDateString())
      .length,
  }));
  const maxDay = Math.max(1, ...byDay.map((b) => b.count));

  function refresh() {
    setItems(getSubmissions());
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(items, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `keiqi-submissions-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function clear() {
    if (confirm("确认清空所有提交记录？此操作不可撤销。")) {
      clearSubmissions();
      setItems([]);
    }
  }

  return (
    <>
      <PageHero
        en="Submissions"
        title="需求汇总"
        subtitle="预约咨询与 AI 留资统一汇总于此，支持按类型、时间分布查看与导出。"
      />

      <section className="bg-keiqi-night px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* 操作栏 */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-keiqi-cream/50">
              数据保存在本地浏览器，正式上线后将同步至 CRM。
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={refresh}
                className="inline-flex items-center gap-2 rounded-full border border-keiqi-line px-4 py-2 text-xs text-keiqi-cream/70 transition-colors hover:border-keiqi-gold/50 hover:text-keiqi-gold-soft"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                刷新
              </button>
              <button
                onClick={exportJson}
                disabled={total === 0}
                className="inline-flex items-center gap-2 rounded-full border border-keiqi-line px-4 py-2 text-xs text-keiqi-cream/70 transition-colors hover:border-keiqi-gold/50 hover:text-keiqi-gold-soft disabled:opacity-40"
              >
                <Download className="h-3.5 w-3.5" />
                导出 JSON
              </button>
              <button
                onClick={clear}
                disabled={total === 0}
                className="inline-flex items-center gap-2 rounded-full border border-keiqi-red/40 px-4 py-2 text-xs text-keiqi-red/80 transition-colors hover:bg-keiqi-red/10 disabled:opacity-40"
              >
                <Trash2 className="h-3.5 w-3.5" />
                清空
              </button>
            </div>
          </div>

          {loaded && total === 0 ? (
            /* 空状态 */
            <div className="rounded-xl border border-keiqi-line bg-keiqi-night-2 py-20 text-center">
              <p className="font-display text-2xl text-keiqi-cream">
                暂无提交记录
              </p>
              <p className="mt-3 text-sm text-keiqi-cream/50">
                访问者通过预约咨询或 AI 设计顾问提交后，数据将出现在这里。
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-keiqi-gold px-6 py-3 text-sm font-medium text-keiqi-night transition-opacity hover:opacity-90"
                >
                  前往预约咨询
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ai-designer"
                  className="rounded-full border border-keiqi-gold/60 px-6 py-3 text-sm font-medium text-keiqi-gold-soft transition-colors hover:bg-keiqi-gold/10"
                >
                  体验 AI 顾问
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* 统计卡片 */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="总提交" value={total} />
                <StatCard label="今日新增" value={todayCount} />
                <StatCard label="预约咨询" value={contactCount} />
                <StatCard label="AI 留资" value={aiCount} />
              </div>

              {/* 图表区 */}
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {/* 项目类型分布 */}
                <div className="rounded-xl border border-keiqi-line bg-keiqi-night-2 p-6">
                  <h3 className="font-display text-xl text-keiqi-cream">
                    项目类型分布
                  </h3>
                  <div className="mt-6 space-y-4">
                    {byType.map((b) => (
                      <div key={b.type} className="flex items-center gap-3">
                        <span className="w-20 shrink-0 text-sm text-keiqi-cream/70">
                          {b.type}
                        </span>
                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-keiqi-night-3">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-keiqi-gold to-keiqi-gold-soft transition-all duration-500"
                            style={{
                              width: `${(b.count / maxType) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="w-8 shrink-0 text-right text-sm text-keiqi-gold-soft">
                          {b.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 最近 7 天趋势 */}
                <div className="rounded-xl border border-keiqi-line bg-keiqi-night-2 p-6">
                  <h3 className="font-display text-xl text-keiqi-cream">
                    最近 7 天趋势
                  </h3>
                  <div className="mt-6 flex h-40 items-end justify-between gap-2">
                    {byDay.map((d, i) => (
                      <div
                        key={i}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <span className="text-xs text-keiqi-gold-soft">
                          {d.count > 0 ? d.count : ""}
                        </span>
                        <div className="flex w-full items-end justify-center">
                          <div
                            className="w-full max-w-[2.5rem] rounded-t bg-gradient-to-t from-keiqi-gold to-keiqi-gold-soft transition-all duration-500"
                            style={{
                              height: `${Math.max(
                                4,
                                (d.count / maxDay) * 120
                              )}px`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-keiqi-cream/45">
                          {d.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 提交明细表格 */}
              <div className="mt-8 rounded-xl border border-keiqi-line bg-keiqi-night-2">
                <div className="border-b border-keiqi-line px-6 py-4">
                  <h3 className="font-display text-xl text-keiqi-cream">
                    提交明细
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-sm">
                    <thead>
                      <tr className="border-b border-keiqi-line text-left text-xs uppercase tracking-wide text-keiqi-cream/45">
                        <th className="px-6 py-3 font-medium">来源</th>
                        <th className="px-6 py-3 font-medium">姓名</th>
                        <th className="px-6 py-3 font-medium">电话</th>
                        <th className="px-6 py-3 font-medium">类型</th>
                        <th className="px-6 py-3 font-medium">需求</th>
                        <th className="px-6 py-3 font-medium">时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((s) => (
                        <tr
                          key={s.id}
                          className="border-b border-keiqi-line/40 transition-colors hover:bg-keiqi-night-3/50"
                        >
                          <td className="px-6 py-4">
                            <span
                              className={
                                s.source === "ai"
                                  ? "rounded-full bg-keiqi-gold/15 px-2 py-0.5 text-xs text-keiqi-gold-soft"
                                  : "rounded-full bg-keiqi-cream/10 px-2 py-0.5 text-xs text-keiqi-cream/60"
                              }
                            >
                              {s.source === "ai" ? "AI" : "咨询"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-keiqi-cream">
                            {s.name}
                          </td>
                          <td className="px-6 py-4 text-keiqi-cream/70">
                            {maskPhone(s.phone)}
                          </td>
                          <td className="px-6 py-4 text-keiqi-cream/70">
                            {s.projectType || "—"}
                          </td>
                          <td className="max-w-[240px] truncate px-6 py-4 text-keiqi-cream/55">
                            {s.message || "—"}
                          </td>
                          <td className="px-6 py-4 text-keiqi-cream/55">
                            {fmtTime(s.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-keiqi-line bg-keiqi-night-2 p-6">
      <div className="text-xs uppercase tracking-wide text-keiqi-cream/45">
        {label}
      </div>
      <div className="font-display mt-2 text-4xl text-keiqi-gold-soft">
        {value}
      </div>
    </div>
  );
}
