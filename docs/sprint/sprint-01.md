# Sprint 01 — 计划与验收

> 配套可执行 Prompt：`prompts/sprint-01.md`（复制给 Codex 执行）

## 目标

搭建 KEIQI Design OS 官网工程骨架：Next.js 14 + TypeScript + Tailwind + shadcn/ui，落地品牌设计令牌，完成首页 8 区块与全站布局。本 Sprint **不依赖后端**，产出可独立运行。

## 范围

**In Scope**

- Next.js 工程初始化（App Router、TS、Tailwind、ESLint）
- 设计令牌：凯奇红 / 暖白 / 深黑 / 浅灰（CSS 变量 + Tailwind 映射）
- 字体：Cormorant Garamond + Montserrat + 思源黑体兜底
- 布局：SiteHeader（sticky）、SiteFooter
- 首页 8 区块：Hero / Services / Projects / Philosophy / Stats / CTA（+ Header/Footer）
- 导航 9 项（来自 VI §15），未实现页面用占位路由避免 404
- SEO metadata、响应式（375 / 768 / 1280）

**Out of Scope（后续 Sprint）**

- 真实案例数据（Sprint 03）
- AI 设计顾问（Sprint 04）
- 联系表单后端（Sprint 08）
- `/about` `/services` 完整内容（Sprint 02）

## 技术决策

| 决策 | 选择 | 理由 |
|------|------|------|
| 框架 | Next.js 14 App Router | 官网 + 后续 RSC/SEO 友好 |
| 组件库 | shadcn/ui | 可定制、无黑盒、契合极简风格 |
| 动画 | Framer Motion | 滚动入场，提升高级感 |
| 字体 | next/font | 自托管、零外链、性能优 |
| 设计令牌 | CSS 变量 | 后续换肤 / 多租户基础 |

## 验收标准

见 `prompts/sprint-01.md` §9。核心红线：

- 凯奇红仅作强调色，禁止大红大紫铺满。
- 暖白底 + 深黑字，留白克制。
- 无促销 / 套餐价格字眼。

## 产出文件清单

```text
app/layout.tsx
app/page.tsx
app/globals.css
app/about/page.tsx
app/services/page.tsx
app/projects/page.tsx
app/contact/page.tsx
components/layout/site-header.tsx
components/layout/site-footer.tsx
components/brand/logo.tsx
components/sections/hero.tsx
components/sections/services.tsx
components/sections/projects.tsx
components/sections/philosophy.tsx
components/sections/stats.tsx
components/sections/cta.tsx
lib/utils.ts
tailwind.config.ts (修改)
```

## 完成后的下一步

1. 提交 GitHub，更新 `docs/00-project-overview.md` 的 Sprint 状态为 ✅。
2. 把实际落地的设计令牌补进 `docs/02-ui-design-system.md`。
3. 进入 **Sprint 02**：关于我们、服务、品牌页面（替换占位路由）。
