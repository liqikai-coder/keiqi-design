/**
 * 凯奇吉祥物「小匠 KQ」
 * ---------------------------------------------
 * 房屋为冠（行业）· 圆脸大眼（亲切）· 铅笔为饰（设计）
 * 暗金描边 + 墨夜底 + 暖白脸，与品牌 VI 一致。
 * 用于：AI 顾问浮标、AI 对话头像、预约入口。
 */

export function Mascot({
  size = 56,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      role="img"
      aria-label="凯奇吉祥物小匠"
      className={className}
    >
      <defs>
        <linearGradient id="kq-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e3cf9f" />
          <stop offset="55%" stopColor="#c9a96b" />
          <stop offset="100%" stopColor="#a8864d" />
        </linearGradient>
      </defs>

      {/* 底圆 · 墨夜 + 暗金描边 */}
      <circle cx="36" cy="36" r="34" fill="#121216" stroke="url(#kq-gold)" strokeWidth="2" />

      {/* 铅笔（烟囱位 · 设计师身份） */}
      <g transform="rotate(18 52 22)">
        <rect x="50" y="8" width="4.6" height="12" rx="1" fill="url(#kq-gold)" />
        <path d="M50 20 L52.3 24 L54.6 20 Z" fill="#F8F5F0" />
        <path d="M51.3 22.4 L52.3 24 L53.3 22.4 Z" fill="#C1121F" />
      </g>

      {/* 屋顶 · 人字顶 */}
      <path
        d="M16 35 L36 17.5 L56 35"
        stroke="url(#kq-gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 脸 · 暖白圆 */}
      <circle cx="36" cy="43" r="14.5" fill="#F8F5F0" />

      {/* 眼睛 */}
      <circle cx="30.5" cy="41.5" r="2" fill="#111111" />
      <circle cx="41.5" cy="41.5" r="2" fill="#111111" />
      <circle cx="31.2" cy="40.8" r="0.7" fill="#F8F5F0" />
      <circle cx="42.2" cy="40.8" r="0.7" fill="#F8F5F0" />

      {/* 微笑 */}
      <path
        d="M31.5 46.5 Q36 50.5 40.5 46.5"
        stroke="#111111"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* 腮红 · 暗金 */}
      <ellipse cx="26.5" cy="45.5" rx="2.3" ry="1.3" fill="#c9a96b" opacity="0.55" />
      <ellipse cx="45.5" cy="45.5" rx="2.3" ry="1.3" fill="#c9a96b" opacity="0.55" />
    </svg>
  );
}
