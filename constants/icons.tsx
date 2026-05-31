// ── SVG Icons ──────────────────────────────────────────────────────────────
export const LogoIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
    <path d="M4 6h16M4 12h10M4 18h6" />
    <circle cx="18" cy="16" r="3" />
    <path d="M21 19l-2-2" />
  </svg>
);

export const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

// Article card icons keyed by tag
export const ARTICLE_ICONS: Record<string, (stroke: string) => React.ReactNode> = {
  product: (stroke) => (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" /><path d="M6.5 10v4h11v-4" />
    </svg>
  ),
  opensource: (stroke) => (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  ai: (stroke) => (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5H5a2.5 2.5 0 01-2.5-2.5v-15A2.5 2.5 0 015 2h4.5z" />
      <path d="M14.5 2H19a2.5 2.5 0 012.5 2.5v7A2.5 2.5 0 0119 14h-4.5" />
    </svg>
  ),
  security: (stroke) => (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2L4 6v6c0 5.25 3.75 10.15 8 11 4.25-.85 8-5.75 8-11V6l-8-4z" />
    </svg>
  ),
  casestudy: (stroke) => (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  company: (stroke) => (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
};

export const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  blue: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2563D4" strokeWidth="1.75" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/><path d="M6.5 10v4h11v-4"/>
    </svg>
  ),
  violet: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#7C3AED" strokeWidth="1.75" strokeLinecap="round">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5H5a2.5 2.5 0 01-2.5-2.5v-15A2.5 2.5 0 015 2h4.5z"/>
      <path d="M14.5 2H19a2.5 2.5 0 012.5 2.5v7A2.5 2.5 0 0119 14h-4.5"/>
    </svg>
  ),
  green: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0A8F4A" strokeWidth="1.75" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
  ),
  teal: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D7FA5" strokeWidth="1.75" strokeLinecap="round">
      <path d="M12 2L4 6v6c0 5.25 3.75 10.15 8 11 4.25-.85 8-5.75 8-11V6l-8-4z"/>
    </svg>
  ),
};

// Sidebar icon helpers
export const SidebarIcon = ({ d }: { d: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563D4" strokeWidth="2" strokeLinecap="round">
    <path d={d} />
  </svg>
);
