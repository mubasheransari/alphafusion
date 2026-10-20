type IconProps = { className?: string };

export function ArrowUpRight({ className = "size-[14px]" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className = "size-[15px]" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Check({ className = "size-[16px]" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Sparkle({ className = "size-[18px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1.5c.7 4.9 2.1 8.3 3.6 9.6 1.5 1.5 4.9 2.9 7.9 3.4-3 .5-6.4 1.9-7.9 3.4-1.5 1.3-2.9 4.7-3.6 9.6-.7-4.9-2.1-8.3-3.6-9.6-1.5-1.5-4.9-2.9-7.9-3.4 3-.5 6.4-1.9 7.9-3.4 1.5-1.3 2.9-4.7 3.6-9.6Z" />
    </svg>
  );
}

export function ChevronDown({ className = "size-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconAnimation({ className = "size-6" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3.5" />
      <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" />
    </svg>
  );
}
export function IconMarketing({ className = "size-6" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}
export function IconWeb({ className = "size-6" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18M8 14h3" />
    </svg>
  );
}
export function IconMobile({ className = "size-6" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="7" y="2.5" width="10" height="19" rx="3" />
      <path d="M11 18.5h2" />
    </svg>
  );
}
export function IconEducation({ className = "size-6" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" />
      <path d="M6.5 12v4.5c0 1 2.5 2.5 5.5 2.5s5.5-1.5 5.5-2.5V12" />
    </svg>
  );
}
export function IconMail({ className = "size-5" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 8 8 5.5L20 8" />
    </svg>
  );
}
export function IconPhone({ className = "size-5" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
export function IconPin({ className = "size-5" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
export function IconClock({ className = "size-5" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export const SERVICE_ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  animation: IconAnimation,
  "digital-marketing": IconMarketing,
  "web-design-development": IconWeb,
  "mobile-app-development": IconMobile,
  "education-tutoring": IconEducation,
};
