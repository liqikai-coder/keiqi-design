# Sprint 01 — 初始化 Next.js 工程、UI 设计系统、首页

> **使用说明**：将本文件完整内容复制给 Codex（或等效代码生成模型），在其工作区执行即可。本 Sprint 不依赖后端，产出可独立 `npm run dev` 运行。所有品牌规范以 `docs/01-brand-manual-v3.md`（品牌标准手册 V3，现行权威）为准；`docs/01-brand-guide.md` 为 V2 原始素材。

---

## 0. 角色与约束

你是一名资深前端工程师，正在为高端住宅空间定制机构 **凯奇设计（KEIQI DESIGN）** 搭建官网。

**硬性约束**（来自品牌 VI 手册，违反即不合格）：

- 风格：国际高端设计事务所路线 —— 留白、克制、极简、高级。
- 禁止：大红大紫铺满、满屏文字、装修公司促销广告、套餐价格字眼。
- 凯奇红 `#C1121F` 为**唯一强调色**，仅用于 Logo、关键 CTA、重点分隔线，克制使用。
- 大面积底色只用：暖白 `#F8F5F0`、深黑 `#111111`、浅灰 `#E5E5E5`。
- 文案使用中文为主、英文点缀；口号用「设计美好生活方式 / Designing Better Living」。

---

## 1. 技术栈与版本

- Next.js **14+**（App Router，**必须用** `app/` 目录，不用 `pages/`）
- TypeScript（strict 模式）
- Tailwind CSS **3.x**
- shadcn/ui（基于 Radix UI + Tailwind，按需添加组件）
- Framer Motion（滚动入场动画）
- Lucide React（图标）
- `next/font` 加载字体（见 §4）

---

## 2. 工程初始化

在仓库根目录执行（不要新建子目录包裹）：

```bash
# 若当前目录非空，先确认在仓库根；用以下命令初始化 Next.js
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --use-npm
```

初始化后安装依赖：

```bash
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate framer-motion lucide-react
npx shadcn@latest init   # 选 "Default" 风格，base color 选 "Neutral"
npx shadcn@latest add button card separator
```

确认 `tailwind.config.ts` 中存在 `content` 扫描 `./app/**` 与 `./components/**`，且已引入 `tailwindcss-animate`。

---

## 3. 设计令牌（写入 `app/globals.css` 的 `:root` 与 `tailwind.config.ts`）

在 `tailwind.config.ts` 的 `theme.extend.colors` 中注册（用 CSS 变量映射，便于后续换肤）：

```ts
colors: {
  keiqi: {
    red:    "hsl(var(--keiqi-red))",     // 强调色 #C1121F
    cream:  "hsl(var(--keiqi-cream))",   // 暖白 #F8F5F0
    ink:    "hsl(var(--keiqi-ink))",     // 深黑 #111111
    mist:   "hsl(var(--keiqi-mist))",    // 浅灰 #E5E5E5
  },
}
```

在 `app/globals.css` 顶部 `:root` 定义 HSL 变量（把 HEX 转 HSL）：

```css
:root {
  --keiqi-red:   8 79% 42%;   /* #C1121F */
  --keiqi-cream: 36 43% 96%;  /* #F8F5F0 */
  --keiqi-ink:   0 0% 7%;     /* #111111 */
  --keiqi-mist:  0 0% 90%;    /* #E5E5E5 */
  /* shadcn 需要的 background/foreground 映射 */
  --background: var(--keiqi-cream);
  --foreground: var(--keiqi-ink);
  --primary: var(--keiqi-red);
  --primary-foreground: 0 0% 100%;
}
```

> 要求：全站默认背景用 `bg-keiqi-cream`（暖白），文字 `text-keiqi-ink`（深黑）。凯奇红只出现在 CTA 按钮、Logo、分隔线。

---

## 4. 字体（用 `next/font/google`，不引外链）

在 `app/layout.tsx` 中：

```ts
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-display",
});
const body = Montserrat({
  subsets: ["latin"], weight: ["300","400","500"], variable: "--font-body",
});
// 中文字体用系统思源黑体兜底：font-family: "Source Han Sans SC","Noto Sans SC",system-ui,sans-serif
```

- 英文大标题：用 `var(--font-display)`（Cormorant Garamond），呈现优雅衬线感。
- 英文正文 / 标签：用 `var(--font-body)`（Montserrat）。
- 中文：CSS `font-family` 设 `"Source Han Sans SC","Noto Sans SC","PingFang SC",system-ui,sans-serif`，字重 300–500 体现克制。

---

## 5. 目录结构（本 Sprint 产出）

```text
app/
├── layout.tsx              # 根布局：字体、Header、Footer、metadata
├── page.tsx                # 首页（组合各 section）
├── globals.css             # 设计令牌 + Tailwind 指令
├── about/page.tsx          # 关于我们（占位，Sprint 02 补全）
├── services/page.tsx       # 服务（占位）
├── projects/page.tsx       # 案例（占位）
├── contact/page.tsx        # 联系（占位）
components/
├── layout/
│   ├── site-header.tsx     # 顶部导航（sticky，滚动变实心）
│   └── site-footer.tsx     # 页脚
├── ui/                     # shadcn 生成的 button/card/separator
├── brand/
│   └── logo.tsx            # KQ Monogram + KEIQI DESIGN 文字标
└── sections/
    ├── hero.tsx            # 首屏
    ├── services.tsx        # 四大体系
    ├── projects.tsx        # 案例预览（用占位图）
    ├── philosophy.tsx      # 核心理念金句
    ├── stats.tsx           # 数据/信任背书
    └── cta.tsx             # 预约咨询
lib/
└── utils.ts                # cn() 工具（shadcn 自带）
public/
└── og.jpg                  # 首页 OG 图（占位，可用纯色 + Logo SVG）
```

> 导航项（来自 VI 手册 §15）：HOME / PROJECTS / DESIGN / CRAFTSMANSHIP / HEALTHY HOME / JAPANESE LIVING / AI DESIGNER / ABOUT / CONTACT。
> 本 Sprint 仅 HOME 与 ABOUT/CONTACT 有真实页面；其余导航链接指向对应占位路由（`/projects`、`/services` 等），保证点击不 404。

---

## 6. 组件详细规格

### 6.1 Logo（`components/brand/logo.tsx`）

- 用 SVG 绘制 `KQ` Monogram：两个字母负空间组合，线条纤细、高级。
- 右侧可选文字 `KEIQI DESIGN`（Montserrat，字距加宽 `tracking-[0.2em]`，字号小）。
- 颜色：默认 `text-keiqi-ink`；落在凯奇红背景上时用白色。
- 导出一个 `<Logo variant="full" />`（带文字）与 `<Logo variant="mark" />`（仅 KQ）。

### 6.2 SiteHeader（`components/layout/site-header.tsx`）

- `sticky top-0 z-50`，初始半透明、滚动后背景变 `bg-keiqi-cream/90` + `backdrop-blur` + 底部 1px `keiqi-mist` 分隔线（用 scroll listener 或 `useScroll`）。
- 左侧 Logo（mark + 可选文字），右侧导航（桌面横排，移动端汉堡菜单 → 抽屉）。
- 最右一个凯奇红实心按钮「预约咨询」→ 锚点 `#contact` 或跳转 `/contact`。
- 移动端：用 shadcn `Sheet` 或自建抽屉，不要引入额外 UI 库。

### 6.3 Hero（`components/sections/hero.tsx`）

- 全屏高 `min-h-[88vh]`，暖白底，大量留白。
- 主标题（Cormorant Garamond + 中文思源黑体混排）：**「设计美好生活方式」**
- 副标题（Montserrat，灰）：**Designing Better Living**
- 一段克制的中文描述（≤ 40 字）：如「凯奇设计 · 高端住宅空间定制 · 别墅 / 大平层 / 顶层复式 / 私人会所」。
- 两个 CTA：主按钮「预约咨询」（凯奇红实心）、次按钮「查看案例」（描边）。
- 背景：极淡的 `KQ` 辅助图形水印（SVG，opacity 极低）或一张高质量留白室内图占位。
- Framer Motion：标题/副标题/CTA 依次 `fade-up` 入场（stagger）。

### 6.4 Services（`components/sections/services.tsx`）

四大体系，来自 VI 手册 §17–19 + 定制设计：

1. **定制设计** — 一户一案
2. **凯奇精工体系™** — 标准化工艺 · 精细化施工
3. **凯奇健康住宅体系™** — 无醛辅材 · 无醛板材 · 环保交付
4. **日本整体厨卫体系™** — 整体厨房 · 整体卫浴 · 收纳系统

- 用 `Card` 网格（桌面 4 列 / 平板 2 列 / 移动 1 列）。
- 每卡：细线图标（Lucide，描边风）+ 标题 + 一句话说明。图标颜色默认 `text-keiqi-ink`，hover 时标题变凯奇红。
- 区块标题：「四大体系 · 凯奇标准」。

### 6.5 Projects（`components/sections/projects.tsx`）

- 案例预览，桌面 3 列网格，用**占位图**（纯色块 + 案例名文字，命名体系见 VI §16：某湖景别墅 / 某顶层大平层 / 某私人会所）。
- 每张卡：占位图 + 案例类型标签（小字、凯奇红）+ 案例名（Cormorant 英文感或思源黑体）+ 「查看详情 →」。
- 区块标题：「精选案例」+ 右侧「全部案例 →」链接到 `/projects`。
- 占位图用 `bg-keiqi-mist` 或渐变，不要外链真实图片（避免版权/失效）。

### 6.6 Philosophy（`components/sections/philosophy.tsx`）

- 大留白区块，居中金句：**「设计的不只是房子，而是未来十年的生活方式。」**
- 字体：Cormorant Garamond 英文感 + 思源黑体，大字号，深黑，可选顶部一条短凯奇红分隔线。

### 6.7 Stats（`components/sections/stats.tsx`）

- 一行 3–4 个数据（占位真实感数字，如「15+ 年定制经验」「200+ 交付案例」「100% 无醛交付」）。
- 数字用 Cormorant 大字号，标签用 Montserrat 小字灰。
- 背景 `bg-keiqi-ink`（深黑），文字暖白，数字可点缀凯奇红。

### 6.8 CTA（`components/sections/cta.tsx`）

- 区块：`#contact` 锚点。标题「预约一次专属空间设计咨询」。
- 一个凯奇红实心大按钮「立即预约」→ `/contact`（Sprint 08 接表单）。
- 配一句 VI 口号「健康不是选配，而是住宅的基础标准。」作副文案（克制）。

### 6.9 SiteFooter（`components/layout/site-footer.tsx`）

- 深黑底 `bg-keiqi-ink`，暖白文字。
- 四列：品牌简介 + Logo / 快速导航 / 四大体系 / 联系信息（电话·微信·邮箱占位）。
- 底部版权行：「© 2026 KEIQI DESIGN 凯奇设计 · 高端住宅空间定制机构」。

---

## 7. 根布局与 SEO（`app/layout.tsx`）

- `<html lang="zh-CN">`，`metadata`：
  - title: `凯奇设计 KEIQI DESIGN | 高端住宅空间定制`
  - description: `凯奇设计，专注别墅、大平层、顶层复式与私人会所的高端住宅空间定制。一户一案，凯奇精工体系、健康住宅体系与日本整体厨卫体系。`
  - openGraph: 同上 + `og:image: /og.jpg`
- 引入 `globals.css`、`SiteHeader`、`SiteFooter`，包裹 `<main>`。

---

## 8. 占位页面（避免 404）

`/about`、`/services`、`/projects`、`/contact` 各返回一个简洁页面：
- 顶部一个 `min-h-[40vh]` 的标题区（品牌红分隔线 + Cormorant 大标题 + 一句话）。
- 正文区放「本页面将在后续 Sprint 完善」+ 返回首页链接。
- 保持同一设计语言（暖白底、深黑字、凯奇红点缀）。

---

## 9. 验收标准（Definition of Done）

- [ ] `npm install && npm run dev` 可启动，无 TypeScript / ESLint 报错。
- [ ] 首页包含：Header（sticky）、Hero、Services（四大体系）、Projects 预览、Philosophy 金句、Stats、CTA、Footer，共 8 个区块。
- [ ] 凯奇红仅出现在 Logo、CTA 按钮、分隔线；无大红大紫铺满。
- [ ] 全站背景暖白 `#F8F5F0`、文字深黑 `#111111`；设计令牌走 CSS 变量。
- [ ] 字体：英文标题 Cormorant Garamond、英文正文 Montserrat、中文系统思源黑体兜底。
- [ ] 响应式：移动端导航为汉堡抽屉；网格在 375 / 768 / 1280 三档正常。
- [ ] 导航 9 项均可点击，无 404（未实现页面显示占位）。
- [ ] SEO metadata 已设置，`lang="zh-CN"`。
- [ ] 所有文案来自 VI 手册，无促销 / 套餐价格字眼。

---

## 10. 提交要求

完成后（在 Codex 环境内或本地）：

```bash
git add -A
git commit -m "Sprint 01: init Next.js, design tokens, homepage"
```

并汇报：本 Sprint 产出的文件清单、是否全部满足 §9 验收标准、以及 Next.js 初始化时的任何偏离（如 create-next-app 版本差异）。

---

## 附：与后续 Sprint 的接口约定

- 设计令牌沉淀在 `app/globals.css` + `tailwind.config.ts`，后续 Sprint 直接复用 `bg-keiqi-red/cream/ink/mist`。
- 首页 section 组件放在 `components/sections/`，后续页面（案例中心、AI 顾问等）复用同一布局与组件。
- 占位页面 `/projects`、`/contact` 将在 Sprint 03 / 08 被真实功能替换，结构已留好路由。
