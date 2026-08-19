// 免费表单服务：Web3Forms（无需后端，提交后线索直接发到您邮箱）
// -----------------------------------------------------------------------------
// access_key 已内置在下方（Web3Forms 的 key 可公开，放在前端代码里安全）。
// 如需更换邮箱 / key，可在 Vercel 项目 Settings → Environment Variables 添加
//   NEXT_PUBLIC_WEB3FORMS_KEY 覆盖（不配则自动使用内置值）。
// 未配置环境变量时，表单使用内置 key 直接发信，不会报错。

export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "11ccbb8f-c9de-434a-9ae2-fd70e425a047";

export interface LeadInput {
  name: string;
  phone: string;
  type?: string;
  message?: string;
  source?: string;
}

/** 提交线索到 Web3Forms（异步、失败不阻塞本地保存） */
export async function submitLead(data: LeadInput): Promise<boolean> {
  if (!WEB3FORMS_KEY) return false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `凯奇设计新线索 · ${data.source ?? "官网"} · ${data.name}`,
        from_name: "凯奇设计官网",
        name: data.name,
        phone: data.phone,
        project_type: data.type ?? "未指定",
        message: data.message ?? "（无）",
        source: data.source ?? "官网",
      }),
    });
    const json = (await res.json().catch(() => null)) as {
      success?: boolean;
    } | null;
    return res.ok && json?.success !== false;
  } catch {
    return false;
  }
}
