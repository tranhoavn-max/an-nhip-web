/** Prefix an absolute in-site path with the configured base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}${path}`;
}

export const SITE_NAME = 'An Nhịp';

export const SITE_TAGLINE =
  'Ứng dụng CBT giúp bạn tự quản lý lo âu, dữ liệu ở lại trên điện thoại của bạn.';

/** Wording mirrors the in-app crisis screen: 115 is the only verified number. */
export const CRISIS_TEXT =
  'Nếu bạn đang có ý nghĩ làm hại bản thân hoặc người khác, gặp khủng hoảng nghiêm trọng, đau ngực, khó thở hoặc triệu chứng nguy hiểm, hãy liên hệ ngay với người thân, cơ sở y tế hoặc gọi cấp cứu 115.';

export const MEDICAL_DISCLAIMER =
  'An Nhịp không phải thiết bị y tế, không cung cấp chẩn đoán và không thay thế tư vấn của bác sĩ hoặc chuyên gia tâm lý.';
