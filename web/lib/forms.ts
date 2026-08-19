// 免费表单服务：Web3Forms（无需后端，提交后线索直接发到您邮箱）
// -----------------------------------------------------------------------------
// 获取免费 key（1 分钟，只要邮箱，不用密码）：
//   打开 https://web3forms.com → 输入您的邮箱 → 复制 access_key
// 然后在 Vercel 项目 Settings → Environment Variables 添加一条：
//   名称：NEXT_PUBLIC_WEB3FORMS_KEY   值：您复制的 key
// 保存后重新部署（Redeploy）即生效。
// 未配置 key 时，表单仍会写入本地「需求汇总」（演示态），不会报错。

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

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
