# KEIQI Design OS

> 凯奇设计（KEIQI DESIGN）—— 高端住宅空间定制机构的企业级平台。
> **官网 + AI 设计顾问 + CRM + RAG 知识库 + 微信生态 + SaaS 多租户。**

以 **PRD + Sprint 迭代** 方式交付。每个 Sprint 输出一份可直接复制给 Codex 执行的 Prompt。

**三份核心地基文件已就绪**：品牌标准手册 V3（`docs/01-brand-manual-v3.md`）、完整 PRD（`docs/03-prd.md`）、Codex 开发包（`CODEX-DEV-PACK.md`）。

> **当前状态**：V1.0 品牌官网已本地构建完成并跑通（`web/` 子目录，Next.js 16 + Tailwind v4）。
> 首页按设计事务所定位重构为 **8 屏结构**（Hero → 品牌理念 → 服务领域 → 设计体系 → 精工体系™ → 健康住宅™ → 日本厨卫™ → AI设计顾问），案例中心为「案例持续更新中」状态，含 AI 顾问全局浮标。可直接部署上线。

## 品牌一句话

设计的不只是房子，而是未来十年的生活方式。

## 技术栈（基线）

Next.js 16（App Router） · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons · OpenAI（Sprint 07 接入）

## 目录结构

```text
KEIQI-Design-OS/
├── docs/                 # 规范与文档（品牌/PRD/数据库/API/AI/CRM/微信/部署）
│   ├── 00-project-overview.md
│   ├── 01-brand-guide.md        # V2 原始素材
│   ├── 01-brand-manual-v3.md    # 品牌标准手册 V3（权威）
│   ├── 02-ui-design-system.md
│   ├── 03-prd.md
│   ├── 04-database.md
│   ├── 05-api-spec.md
│   ├── 06-ai-rag.md
│   ├── 07-crm.md
│   ├── 08-wechat.md
│   ├── 09-deployment.md
│   └── sprint/           # 每个 Sprint 的计划 + 验收标准
├── prompts/              # 每个 Sprint 给 Codex 的可执行 Prompt
├── assets/
│   ├── logo/             # KQ Logo 方案（4 套概念 SVG + 预览页）
│   ├── brand-assets/     # 品牌素材库（V2 上线支撑）
│   └── photos/           # 工艺素材 / 案例素材库（见 docs/10-asset-library.md）
├── web/                  # ★ Next.js 前端工程（可独立部署）
│   ├── app/              # 页面（首页 + 8 内页 + 案例详情）
│   ├── components/       # 布局 / 区块 / 品牌组件
│   └── lib/              # 工具与数据（案例数据等）
├── CODEX-DEV-PACK.md     # ★ Codex 开发包（主 Prompt + PRD/品牌引用 + 20 Sprint 顺序）
├── wrangler.toml        # Cloudflare Pages 配置（可选）
└── README.md
```

## Sprint 进度（官网前端）

| # | 内容 | 状态 |
|---|------|------|
| 01 | 初始化 Next.js 工程、设计系统、首页 | ✅ 已完成（本地） |
| 02 | 关于我们、服务、品牌页面 | ✅ 已完成（/about /design /craftsmanship） |
| 03 | 案例中心、详情页 | ✅ 已完成（列表为「案例持续更新中」+ 三分类预留，详情模板就绪） |
| 04 | AI 设计顾问聊天（演示 UI） | ✅ 已完成（/ai-designer） |
| 05 | 自动报价 | ⬜（UI 已在 AI 页占位） |
| 06 | 户型上传 | ⬜（UI 已在 AI 页占位） |
| 07 | OpenAI API 接入 | ⬜ |
| 08 | 用户留资 → CRM | ⬜（表单演示态） |
| 09 | CRM 基础 | ⬜ |
| 10 | 登录权限 | ⬜ |
| 11 | 管理后台 | ⬜ |
| 12 | RAG 知识库 | ⬜ |
| 13 | Vision 户型识别 | ⬜ |
| 14 | 企业微信 | ⬜ |
| 15 | 微信公众号 | ⬜ |
| 16 | SEO 与性能优化 | 🔜（metadata 已基础配置） |
| 17 | Docker 与部署 | 🔜（见下方部署章节） |
| 18 | 自动化测试 | ⬜ |
| 19 | SaaS 多租户 | ⬜ |
| 20 | 发布版与文档 | ⬜ |

## 本地运行

```bash
cd web
npm install
npm run dev        # 开发，默认 http://localhost:3000
npm run build && npm run start   # 生产构建预览
```

## 部署上线

本仓库已同时适配 **Cloudflare Pages** 与 **GitHub 推送**，二选一即可。

### 方案 A：Cloudflare Pages（推荐，原生支持 Next.js + 未来 Workers 接 AI/CRM）

1. 在 Cloudflare Pages 后台「连接 Git」选择本仓库。
2. 构建设置：
   - Framework preset：**Next.js**
   - 根目录（Root directory）：`web`
   - 构建命令（Build command）：`npx @cloudflare/next-on-pages`
   - 输出目录由框架自动识别。
3. 保存并部署。后续每次 push 主分支自动触发。

> 本地预览部署：`cd web && npm i -D wrangler @cloudflare/next-on-pages && npx @cloudflare/next-on-pages && wrangler pages deploy .vercel/output/public`

### 方案 B：GitHub Pages（需静态导出，适合纯展示站）

1. 在 `web/next.config.ts` 增加 `output: "export"`，并处理静态资源。
2. 用 `gh-pages` 或 GitHub Actions 将 `web/out` 发布到 `gh-pages` 分支。
3. 注意：静态导出不支持未来 Server/API 路由，AI 与 CRM 后端需另部署。

### 推送 GitHub（由你执行，需要你的账号授权）

仓库已 `git init` 并做初始提交。你只需：

```bash
git remote add origin <你的仓库地址>
git push -u origin main
```

之后在 Cloudflare Pages / Vercel 连接该仓库即可。

## 品牌权威依据

所有视觉、配色、字体、文案以 [`docs/01-brand-manual-v3.md`](docs/01-brand-manual-v3.md)（品牌标准手册 V3）为准；[`docs/01-brand-guide.md`](docs/01-brand-guide.md) 为 V2 原始素材。Logo 方案见 [`assets/logo/preview.html`](assets/logo/preview.html)。品牌 / 工艺 / 案例三素材库整理规范见 [`docs/10-asset-library.md`](docs/10-asset-library.md)。

---

© 2026 KEIQI DESIGN 凯奇设计 · 高端住宅空间定制机构
