/**
 * 需求提交数据层（localStorage · 纯前端）
 * 联系表单与 AI 留资统一存于此，/submissions 页汇总展示。
 * 正式上线后可替换为 CRM API，数据结构保持兼容。
 */

export interface Submission {
  id: string;
  source: "contact" | "ai";
  name: string;
  phone: string;
  projectType?: string;
  message?: string;
  createdAt: string; // ISO 时间戳
}

const KEY = "keiqi:submissions";

export function getSubmissions(): Submission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Submission[]) : [];
  } catch {
    return [];
  }
}

export function saveSubmission(
  data: Omit<Submission, "id" | "createdAt">
): Submission {
  const sub: Submission = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  const all = getSubmissions();
  all.unshift(sub);
  localStorage.setItem(KEY, JSON.stringify(all));
  return sub;
}

export function clearSubmissions(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
