/** Prefix an absolute in-site path with the configured base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}${path}`;
}

export const SITE_NAME = 'An Nhịp';

export type Lang = 'vi' | 'en';

/** Wording of the vi strings mirrors the in-app policy/crisis screens.
 *  115 is the only verified emergency number; the app targets Vietnam,
 *  so the English copy keeps 115 and says so explicitly. */
export const STRINGS = {
  vi: {
    crisis:
      'Nếu bạn đang có ý nghĩ làm hại bản thân hoặc người khác, gặp khủng hoảng nghiêm trọng, đau ngực, khó thở hoặc triệu chứng nguy hiểm, hãy liên hệ ngay với người thân, cơ sở y tế hoặc gọi cấp cứu 115.',
    disclaimer:
      'An Nhịp không phải thiết bị y tế, không cung cấp chẩn đoán và không thay thế tư vấn của bác sĩ hoặc chuyên gia tâm lý.',
    footerAbout:
      'Ứng dụng quản lý lo âu dựa trên liệu pháp nhận thức hành vi (CBT), phát triển trong khuôn khổ luận văn thạc sĩ. Miễn phí, không quảng cáo, không tài khoản.',
    nav: { blog: 'Bài viết', demo: 'Demo', download: 'Tải app', main: 'Điều hướng chính' },
    footerNav: {
      label: 'Liên kết chân trang',
      home: 'Trang chủ',
      download: 'Tải app',
      blog: 'Bài viết',
      demo: 'Demo',
      privacy: 'Quyền riêng tư',
    },
    skipLink: 'Bỏ qua tới nội dung chính',
    switchLabel: 'English version',
  },
  en: {
    crisis:
      'If you are having thoughts of harming yourself or others, are going through a serious crisis, or have chest pain, trouble breathing or other dangerous symptoms, contact someone you trust or a medical facility right away, or call 115 (Vietnam’s medical emergency number).',
    disclaimer:
      'An Nhịp is not a medical device, does not provide diagnoses, and does not replace advice from a doctor or mental health professional.',
    footerAbout:
      'An anxiety self-management app based on cognitive behavioral therapy (CBT), developed as part of a master’s thesis. Free, no ads, no account.',
    nav: { blog: 'Articles', demo: 'Demo', download: 'Get the app', main: 'Main navigation' },
    footerNav: {
      label: 'Footer links',
      home: 'Home',
      download: 'Get the app',
      blog: 'Articles',
      demo: 'Demo',
      privacy: 'Privacy',
    },
    skipLink: 'Skip to main content',
    switchLabel: 'Bản tiếng Việt',
  },
} as const;

/** In-site paths per locale, used by nav, footer and the language switcher. */
export const PATHS = {
  vi: { home: '/', download: '/tai-app/', privacy: '/quyen-rieng-tu/', demo: '/demo/', blog: '/blog/' },
  en: { home: '/en/', download: '/en/download/', privacy: '/en/privacy/', demo: '/en/demo/', blog: '/en/blog/' },
} as const;

// Backwards-compatible aliases used by the Vietnamese pages.
export const SITE_TAGLINE =
  'Ứng dụng CBT giúp bạn tự quản lý lo âu, dữ liệu ở lại trên điện thoại của bạn.';
export const CRISIS_TEXT = STRINGS.vi.crisis;
export const MEDICAL_DISCLAIMER = STRINGS.vi.disclaimer;
export const CRISIS_TEXT_EN = STRINGS.en.crisis;
export const MEDICAL_DISCLAIMER_EN = STRINGS.en.disclaimer;
