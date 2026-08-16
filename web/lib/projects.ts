/**
 * 凯奇案例库（lib/projects.ts）
 * ---------------------------------------------
 * 唯一数据源：首页「精选作品」、/projects 案例中心、/projects/[slug] 详情页
 * 全部从这里读取。替换真实案例时，只改本文件的字段即可，页面自动更新。
 *
 * 图片素材：已本地化到 public/images/pexels/（Pexels 免费商用）。
 * 上线替换为真实工地/交付实景照：把 image/gallery 改为本地路径（/images/xxx.jpg）即可。
 */

export type ProjectCategory = "别墅" | "大平层" | "会所";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  area: string;
  location: string;
  year: string;
  /** 主图（卡片 + 详情页头图） */
  image: string;
  /** 详情页组图 */
  gallery: string[];
  summary: string;
  intro: string;
  highlights: string[];
}

const px = (id: number) => `/images/pexels/${id}.jpg`;

/** 案例数据（占位命名体系，详见品牌手册 V3 §16）。正式上线替换为真实案例 + 实景图。 */
export const PROJECTS: Project[] = [
  {
    slug: "lake-villa",
    name: "某湖景别墅",
    category: "别墅",
    area: "680㎡",
    location: "杭州 · 西湖区",
    year: "2025",
    image: px(13722826),
    gallery: [px(13722826), px(7166640), px(37042958)],
    summary: "以湖为景的当代东方墅居，留白与禅意贯穿全屋。",
    intro:
      "本案临湖而建，设计以「借景」为核心，将湖光引入室内。一层公共区采用大尺度留白与天然石材，强调空间的呼吸感；地下层规划为家庭社交与茶空间，延续东方含蓄的秩序美学。",
    highlights: ["临湖借景", "东方留白", "地下社交层", "整木定制"],
  },
  {
    slug: "mountain-villa",
    name: "某山水别墅",
    category: "别墅",
    area: "520㎡",
    location: "莫干山",
    year: "2024",
    image: px(16846487),
    gallery: [px(16846487), px(8135503), px(7045918)],
    summary: "依山而居的度假墅，自然材质与温润光环境。",
    intro:
      "建筑藏于山势之中，室内以原木、微水泥与暖光构建温润基调。庭院与室内的边界被刻意模糊，让居住者在四季流转中与自然共处。",
    highlights: ["山景融合", "自然材质", "暖光系统", "庭院一体"],
  },
  {
    slug: "manor-villa",
    name: "某庄园别墅",
    category: "别墅",
    area: "900㎡",
    location: "上海 · 佘山",
    year: "2025",
    image: px(20418771),
    gallery: [px(20418771), px(14011664), px(7174386)],
    summary: "家族庄园的礼序与当代生活方式的平衡。",
    intro:
      "以家族礼序为线索，规划出会客、家族聚会与私享三层空间。精工体系保障大体量施工的精度，健康住宅体系覆盖全屋无醛交付。",
    highlights: ["家族礼序", "大体量精工", "无醛交付", "智能中枢"],
  },
  {
    slug: "top-flat",
    name: "某顶层大平层",
    category: "大平层",
    area: "320㎡",
    location: "深圳 · 福田",
    year: "2025",
    image: px(8572163),
    gallery: [px(8572163), px(32389433), px(29012720)],
    summary: "城市天际线下的通透大平层，极简而克制。",
    intro:
      "利用顶层高度与环绕采光，打造通透一体的起居长轴。收纳系统隐藏生活痕迹，让空间始终保持极简的高级感。",
    highlights: ["环绕采光", "长轴起居", "隐形收纳", "极简基调"],
  },
  {
    slug: "river-flat",
    name: "某江景大平层",
    category: "大平层",
    area: "280㎡",
    location: "广州 · 珠江",
    year: "2024",
    image: px(32389433),
    gallery: [px(32389433), px(7045918), px(4933154)],
    summary: "江景资源的最大化利用与舒适尺度。",
    intro:
      "主轴线正对江景，客餐厅与主卧共享景观面。日本整体厨卫体系提升日常效率，适老化细节照顾长辈居住。",
    highlights: ["江景主轴", "整体厨卫", "适老细节", "舒适尺度"],
  },
  {
    slug: "city-mansion",
    name: "某城市豪宅",
    category: "大平层",
    area: "360㎡",
    location: "北京 · 朝阳",
    year: "2025",
    image: px(34688219),
    gallery: [px(34688219), px(15247374), px(33944304)],
    summary: "都会核心的沉稳府邸，材质叙事见功底。",
    intro:
      "以深色木作与金属线条构建沉稳调性，艺术品陈设成为空间主角。全案统筹硬软装，避免风格断层。",
    highlights: ["沉稳调性", "艺术陈设", "全案统筹", "金属细部"],
  },
  {
    slug: "private-club",
    name: "某私人会所",
    category: "会所",
    area: "450㎡",
    location: "成都",
    year: "2024",
    image: px(34239719),
    gallery: [px(34239719), px(31680055), px(27591295)],
    summary: "私享社交场域，东方礼序与现代舒适。",
    intro:
      "以茶空间为核心组织动线，融合商务会客与私享宴饮。灯光与材质共同营造低饱和的尊贵氛围。",
    highlights: ["茶空间核心", "社交动线", "低饱和尊贵", "定制家具"],
  },
  {
    slug: "tea-space",
    name: "某茶空间",
    category: "会所",
    area: "180㎡",
    location: "苏州",
    year: "2025",
    image: px(35680939),
    gallery: [px(35680939), px(38432857), px(31218428)],
    summary: "城市中的一方静室，茶香与光影。",
    intro:
      "以「小中见大」的造境手法，在有限面积内营造多重意境。自然材质与冥想式留白，让人慢下来。",
    highlights: ["造境手法", "自然材质", "冥想留白", "光影叙事"],
  },
  {
    slug: "business-club",
    name: "某商务会馆",
    category: "会所",
    area: "600㎡",
    location: "南京",
    year: "2024",
    image: px(31214951),
    gallery: [px(31214951), px(33944304), px(8135503)],
    summary: "企业接待与商务社交的高端载体。",
    intro:
      "兼顾正式接待与轻松社交，会议、餐饮与休憩分区清晰。凯奇精工体系保障大尺度木作与金属收口的精度。",
    highlights: ["接待分区", "精工收口", "商务社交", "智能会议"],
  },
];

export const CATEGORIES: ProjectCategory[] = ["别墅", "大平层", "会所"];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeatured(count = 3): Project[] {
  return PROJECTS.slice(0, count);
}
