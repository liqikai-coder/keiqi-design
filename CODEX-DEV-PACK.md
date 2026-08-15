# KEIQI DESIGN — Codex 开发包（Master Prompt）

> **这是给 Codex（或等效代码生成模型）的主执行包。** 把它与 `docs/03-prd.md`、`docs/01-brand-manual-v3.md` 一起提供给 Codex 即可启动整个官网工程。
> **关键原则**：不要一次性生成全站。按「Sprint 执行顺序」逐批开发，每个 Sprint 对应 `prompts/sprint-xx.md`，跑通一个再做下一个。这是为保证 UI 统一、接口一致、质量可控。

---

## 0. 如何使用本开发包

1. 将本文件 + `docs/03-prd.md`（完整 PRD）+ `docs/01-brand-manual-v3.md`（品牌标准手册 V3）作为上下文提供给 Codex。
2. 从 **Sprint 01** 开始，读取 `prompts/sprint-01.md` 并执行。
3. 每个 Sprint 完成后，确保 `npm run build` / `npm run dev` 通过、无 TS/ESLint 报错，再进入下一 Sprint。
4. 每 Sprint 结束提交一次 Git（见 §7）。

---

## 1. 项目简介

| 项 | 内容 |
|----|------|
| 品牌 | 凯奇设计 / KEIQI DESIGN |
| 定位 | 高端住宅空间定制机构（别墅 · 大平层 · 顶层复式 · 私人会所） |
| 核心理念 | 设计的不只是房子，而是未来十年的生活方式 |
| 口号 | 设计美好生活方式 / Designing Better Living |
| 差异化护城河 | **高端住宅 × 健康住宅 × 日本整体厨卫 × AI设计顾问**（四体系组合） |
| 本期范围 | 官网 Web（响应式），含 4 个 P0 页面（HOME / PROJECTS / AI DESIGNER / CONTACT）与 5 个 P1 页面骨架 |
| 后续扩展 | AI 顾问后端、自动报价、户型识别、CRM、微信、SaaS 多租户（见 Sprint 表） |

---

## 2. 技术栈

| 层 | 选型 |
|----|------|
| 框架 | Next.js 14+（App Router，用 `app/`，不用 `pages/`） |
| 语言 | TypeScript（strict） |
| 样式 | Tailwind CSS 3 + CSS 变量（设计令牌） |
| 组件 | shadcn/ui（Radix + Tailwind） |
| 动画 | Framer Motion |
| 图标 | Lucide React |
| 字体 | `next/font`：思源黑体（中文）/ Cormorant Garamond（英文标题）/ Montserrat（英文正文） |
| 部署 | Vercel（官网） |
| 后续后端 | PostgreSQL + Prisma（Sprint 09+）、OpenAI（Sprint 07） |

---

## 3. 品牌红线（内联关键，完整见 V3 手册）

> 违反以下任一条即判不合格。

- **色彩**：凯奇红 `#C1121F` 为**唯一强调色**，全站占比 ≤ 10%，仅用于 Logo / 关键 CTA / 重点分隔线。主背景暖白 `#F8F5F0`，文字深黑 `#111111`，边框浅灰 `#E5E5E5`。
- **风格**：国际高端设计事务所路线 —— 留白、克制、极简、高级。
- **禁止**：大红大紫铺满、满屏文字、装修公司促销广告、套餐价格字眼、「免费/秒杀/特价」等词。
- **字体**：中文思源黑体（字重 300–500 克制），英文标题 Cormorant Garamond，英文正文 Montserrat。
- **Logo**：`KQ` Monogram，矢量；安全间距 ≥ 标识高 1/2，最小高度数字 16px；禁止拉伸/改色/加阴影。
- **影像**：自然光、留白、真实材质特写；禁止网图/水印/重度滤镜/促销拼图。
- **商标**：凯奇精工体系™ / 凯奇健康住宅体系™ / 日本整体厨卫体系™ / 凯奇AI设计顾问™ 须带 ™。

---

## 4. PRD 摘要（完整见 `docs/03-prd.md`）

### P0 页面（本包详写，须完整实现）
- **HOME**：Hero（口号）+ 四大体系 + 案例预览 + 核心理念金句 + 数据背书 + 预约 CTA + Header/Footer。
- **PROJECTS**：列表（筛选：类型/风格/排序）+ 详情（`/projects/[id]`，图廊/信息/相关推荐/CTA）。
- **AI DESIGNER**（`/ai-designer`）：凯奇AI设计顾问™ 对话 UI + 三大入口（对话/报价/户型上传），前端交互完整，后端占位。
- **CONTACT**（`/contact`）：留资表单（姓名/手机/微信/需求类型/备注）+ 校验 + 成功/失败态。

### P1 页面（骨架，Sprint 02 补全）
- DESIGN、CRAFTSMANSHIP、HEALTHY HOME、JAPANESE LIVING、ABOUT —— Sprint 01 以占位路由存在，Sprint 02 填内容。

### 全局组件
- SiteHeader（sticky + 移动抽屉 + 预约按钮）、SiteFooter（深黑 4 列）、Button（主红/次描边）、Card、Form/Input、Section 标题规范。

---

## 5. 执行策略（质量优先）

- **禁止**把全站需求塞进一个 Prompt 让模型一次性生成——会导致前后不一致、UI 不统一、接口冲突。
- **必须**按 Sprint 顺序执行：`prompts/sprint-01.md` → `sprint-02.md` → …。
- 每个 Sprint 独立可运行、可构建；完成并自检通过后再继续。
- 设计令牌（颜色/字体/间距）在 Sprint 01 落地于 `app/globals.css` + `tailwind.config.ts`，后续 Sprint 复用，不得重复定义。

---

## 6. Sprint 总表（20 个，逐批执行）

| # | 内容 | 对应 Prompt |
|---|------|-------------|
| 01 | 初始化 Next.js 工程、UI、首页 | `prompts/sprint-01.md` ✅ 已写 |
| 02 | 关于/服务/品牌页面（P1 填充） | `prompts/sprint-02.md` |
| 03 | 案例中心、详情页 | `prompts/sprint-03.md` |
| 04 | AI 设计顾问聊天 UI | `prompts/sprint-04.md` |
| 05 | 自动报价 | `prompts/sprint-05.md` |
| 06 | 户型上传 | `prompts/sprint-06.md` |
| 07 | OpenAI API 接入 | `prompts/sprint-07.md` |
| 08 | 用户留资后端 + CRM 基础 | `prompts/sprint-08.md` |
| 09 | CRM 基础 / 登录权限 | `prompts/sprint-09.md` |
| 10 | 登录权限 | `prompts/sprint-10.md` |
| 11 | 管理后台 | `prompts/sprint-11.md` |
| 12 | RAG 知识库 | `prompts/sprint-12.md` |
| 13 | Vision 户型识别 | `prompts/sprint-13.md` |
| 14 | 企业微信 | `prompts/sprint-14.md` |
| 15 | 微信公众号 | `prompts/sprint-15.md` |
| 16 | SEO 与性能优化 | `prompts/sprint-16.md` |
| 17 | Docker 与部署 | `prompts/sprint-17.md` |
| 18 | 自动化测试 | `prompts/sprint-18.md` |
| 19 | SaaS 多租户 | `prompts/sprint-19.md` |
| 20 | 发布版与文档 | `prompts/sprint-20.md` |

> 只有 Sprint 01 的 Prompt 已产出；后续 Sprint Prompt 在对应阶段由团队（Buddy）补全后提供给 Codex。

---

## 7. 提交约定

每 Sprint 完成后：

```bash
git add -A
git commit -m "Sprint XX: <一句话说明>"
```

并在 `docs/00-project-overview.md` 与本开发包（或 README）更新 Sprint 状态。

---

## 8. 全局验收红线（任一 Sprint 均适用）

- [ ] 无 TypeScript / ESLint 报错，`npm run build` 通过。
- [ ] 凯奇红仅作强调，占比 ≤ 10%；暖白底 + 深黑字。
- [ ] 响应式在 375 / 768 / 1280 三档正常。
- [ ] 导航 9 项无 404。
- [ ] 无促销 / 套餐价格 / 免费等违禁词。
- [ ] 所有文案来自品牌手册 V3 与 PRD，不杜撰。
- [ ] 设计令牌统一引用，无硬编码色值散落。

---

**一句话给 Codex**：你是资深全栈工程师，依据本包 + PRD + 品牌手册 V3，用 Next.js 14 + TS + Tailwind + shadcn/ui 搭建凯奇设计高端官网，按 Sprint 顺序高质量逐批交付，严守品牌红线。
