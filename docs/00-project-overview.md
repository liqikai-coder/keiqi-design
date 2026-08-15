# KEIQI Design OS — 项目总览

> 企业级高端住宅空间定制平台。官网 + AI 设计顾问 + CRM + RAG 知识库 + 微信生态 + SaaS 多租户。
> 开发方式：**PRD + Sprint 迭代**，每个 Sprint 输出一份可直接复制给 Codex 执行的 Prompt（`prompts/sprint-xx.md`）。

---

## 一、产品定位

| 项 | 内容 |
|----|------|
| 品牌 | 凯奇设计 / KEIQI DESIGN |
| 定位 | 高端住宅空间定制机构（别墅 · 大平层 · 顶层复式 · 私人会所） |
| 核心理念 | 设计的不只是房子，而是未来十年的生活方式 |
| Slogan | 设计美好生活方式 / Designing Better Living |
| 数字化入口 | 凯奇AI设计顾问™ |

---

## 二、技术栈（基线，Sprint 01 落地）

| 层 | 选型 |
|----|------|
| 框架 | Next.js 14+（App Router）+ TypeScript |
| 样式 | Tailwind CSS 3 + CSS 变量（设计令牌） |
| 组件库 | shadcn/ui（Radix + Tailwind） |
| 动画 | Framer Motion |
| 图标 | Lucide React |
| 字体 | 思源黑体（中文）/ Cormorant Garamond + Montserrat（英文） |
| 部署 | Vercel（官网）/ Docker（后续后端） |
| AI | OpenAI（Sprint 07 接入） |

> 后端 / 数据库 / 微信 / 多租户等技术选型在对应 Sprint 文档中细化（docs/04-database.md、05-api-spec.md、07-crm.md、08-wechat.md、09-deployment.md）。

---

## 三、目录结构

```text
KEIQI-Design-OS/
├── docs/
│   ├── 00-project-overview.md     # 本文
│   ├── 01-brand-guide.md          # 品牌 VI 手册 V2（原始素材）
│   ├── 01-brand-manual-v3.md       # 品牌标准手册 V3（权威依据，现行）
│   ├── 02-ui-design-system.md     # UI 设计系统（Sprint 01 输出后补全）
│   ├── 03-prd.md                   # 产品需求文档
│   ├── 04-database.md             # 数据库设计
│   ├── 05-api-spec.md             # API 规范
│   ├── 06-ai-rag.md               # AI / RAG 设计
│   ├── 07-crm.md                  # CRM 设计
│   ├── 08-wechat.md               # 微信生态设计
│   ├── 09-deployment.md           # 部署与运维
│   └── sprint/
│       ├── sprint-01.md           # Sprint 计划 + 验收标准
│       └── ...
├── prompts/
│   ├── sprint-01.md               # Codex 可执行 Prompt（核心交付物）
│   └── ...
├── CODEX-DEV-PACK.md              # ★ Codex 开发包（主 Prompt + PRD/品牌引用 + 20 Sprint 顺序）
└── README.md
```

---

## 四、20 个 Sprint 路线图

| Sprint | 内容 | 状态 |
|--------|------|------|
| 01 | 初始化 Next.js 工程、UI、首页 | 🔜 进行中 |
| 02 | 关于我们、服务、品牌页面 | ⬜ |
| 03 | 案例中心、详情页 | ⬜ |
| 04 | AI 设计顾问聊天 | ⬜ |
| 05 | 自动报价 | ⬜ |
| 06 | 户型上传 | ⬜ |
| 07 | OpenAI API 接入 | ⬜ |
| 08 | 用户留资 | ⬜ |
| 09 | CRM 基础 | ⬜ |
| 10 | 登录权限 | ⬜ |
| 11 | 管理后台 | ⬜ |
| 12 | RAG 知识库 | ⬜ |
| 13 | Vision 户型识别 | ⬜ |
| 14 | 企业微信 | ⬜ |
| 15 | 微信公众号 | ⬜ |
| 16 | SEO 与性能优化 | ⬜ |
| 17 | Docker 与部署 | ⬜ |
| 18 | 自动化测试 | ⬜ |
| 19 | SaaS 多租户 | ⬜ |
| 20 | 发布版与文档 | ⬜ |

---

## 五、工作流约定

1. 每个 Sprint 交付两份文件：
   - `prompts/sprint-xx.md` —— 给 Codex 的完整执行 Prompt。
   - `docs/sprint/sprint-xx.md` —— 给人类看的计划、验收标准、产出清单。
2. 所有视觉 / 文案以 `docs/01-brand-manual-v3.md`（品牌标准手册 V3，现行权威）为准；`docs/01-brand-guide.md` 为 V2 原始素材。
3. 启动开发：把 `CODEX-DEV-PACK.md` + `docs/03-prd.md` + `docs/01-brand-manual-v3.md` 交给 Codex，按 Sprint 顺序执行 `prompts/sprint-xx.md`。
4. 设计令牌（颜色 / 字体 / 间距）沉淀到 `docs/02-ui-design-system.md`，后续 Sprint 复用。

---

## 六、当前进度

### 三份核心文件（地基）
- ✅ 《凯奇品牌标准手册 V3》— `docs/01-brand-manual-v3.md`
- ✅ 《凯奇官网完整PRD》（核心页面版）— `docs/03-prd.md`
- ✅ 《Codex 开发包》— `CODEX-DEV-PACK.md`

### 工程与 Sprint
- ✅ 项目总览已建立（本文）
- ✅ Sprint 01 Prompt 已写（`prompts/sprint-01.md`）
- ⬜ Sprint 01 待 Codex 执行：Next.js 工程初始化 + 设计系统 + 首页
