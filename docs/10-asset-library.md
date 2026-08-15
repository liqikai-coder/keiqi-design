# 素材库整理规范

> 支撑 V2 上线的内容资产库。三库齐备后，即可输出《凯奇官网V2完整PRD》、AI设计顾问知识库与配套 Codex 开发提示词。

## 01 品牌素材库 `assets/brand-assets/`（已有 logo 在 `assets/logo/`）

| 素材 | 说明 | 状态 |
|------|------|------|
| Logo SVG | 4 套概念 + 预览页 `assets/logo/preview.html` | 待 Lee 确认定稿 |
| 品牌色 | 凯奇红 #C1121F / 暖白 #F8F5F0 / 深黑 #111111 / 浅灰 #E5E5E5 | ✅ 已固化于 `web/app/globals.css` |
| 字体规范 | Cormorant Garamond + Montserrat + 思源黑体兜底 | ✅ `web/app/layout.tsx` |
| VI 手册 | `docs/01-brand-manual-v3.md` | ✅ |

## 02 工艺素材库 `assets/photos/craftsmanship/`

按精工五大标准归集现场照片，命名规范：

```
water-electric-01.jpg    水电标准
waterproof-01.jpg        防水标准
joinery-01.jpg           木作标准
paint-01.jpg             涂装标准
delivery-01.jpg          交付标准
```

每个文件建议配一句话工艺说明（后续可放入页面标题 alt / 图注）。

## 03 案例素材库 `assets/photos/projects/`

按案例命名体系归集（见 `docs/01-brand-manual-v3.md` §16），命名规范：

```
villa-lakeview-01.jpg         某湖景别墅
penthouse-riverside-01.jpg    某江景大平层
club-tea-01.jpg               某茶空间
```

每个案例至少 8–12 张实景：外景 / 玄关 / 客厅 / 餐厨 / 卧室 / 卫浴 / 收纳细节 / 施工过程。

## V2 上线最低素材门槛

- 工艺素材：5 类各 3–5 张 → 支撑 CRAFTSMANSHIP 页
- 案例素材：5 个别墅 + 3 个大平层 + 2 个会所 → 支撑案例中心上线
- 品牌素材：Logo 定稿 + 至少 1 张品牌主视觉（Hero 用）

素材到位后，案例中心即可从「案例持续更新中」切换到真实列表。
