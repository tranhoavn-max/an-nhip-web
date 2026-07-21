# An Nhịp — website giới thiệu (marketing/landing)

Static site (Astro, zero-JS) cho ứng dụng An Nhịp / m-Mental-Health.
Repo này là **repo public riêng cho website**, tách từ repo luận văn private
(`tranhoavn-max/an-nhip`, thư mục `web/` cũ). Source app Flutter và spec vẫn
nằm trong repo luận văn; không sửa app từ đây.

## Lệnh

```bash
npm install        # lần đầu
npm run dev        # http://localhost:4321/an-nhip-web/
npm run build      # xuất ra dist/
npm run preview    # xem thử bản build
```

## Cấu trúc

- `src/pages/` — Trang chủ, `tai-app`, `quyen-rieng-tu`, `demo`, `blog/*`.
- `src/layouts/BaseLayout.astro` — toàn bộ SEO head (title/description/canonical/OG/JSON-LD).
- `src/lib/site.ts` — helper `withBase()` + các chuỗi dùng chung (disclaimer, crisis 115).
- `public/demo/an-nhip-prototype.html` — **bản sao** prototype v4 từ repo luận văn
  (`App/m-Mental-Health v4.html`). Khi prototype đổi, copy đè lại.
- `public/tai-ve/an-nhip-arm64-v8a.apk` — **bản sao** APK release (arm64, minSdk 24,
  v0.1.0) build từ repo luận văn. Khi build APK mới, copy đè lại. Về lâu dài nên
  chuyển sang GitHub Releases của repo này rồi trỏ nút tải trong
  `src/pages/tai-app.astro` sang URL release.
- `public/og.png` — ảnh social card 1200x630.

## Domain-agnostic

Mặc định build cho GitHub Pages: `https://tranhoavn-max.github.io/an-nhip-web/`.
Khi có domain riêng:

```bash
SITE_URL=https://ten-mien-cua-ban BASE_PATH=/ npm run build
```

và cập nhật 2 chỗ hardcode trong `public/robots.txt` (dòng `Sitemap:` và dòng
`Disallow:` cho file prototype).

## Deploy

Tự động: `.github/workflows/deploy.yml` chạy khi push lên `main`, tự bật Pages
lần đầu (`configure-pages` với `enablement: true`). Site lên tại
`https://tranhoavn-max.github.io/an-nhip-web/`.

## Google Search Console (làm sau khi deploy)

1. Vào https://search.google.com/search-console → Add property → chọn
   **URL prefix** → nhập `https://tranhoavn-max.github.io/an-nhip-web/`.
2. Xác minh bằng **HTML tag**: Google đưa một thẻ
   `<meta name="google-site-verification" content="...">`. Dán thẻ đó vào
   `<head>` trong `src/layouts/BaseLayout.astro`, push để deploy lại, bấm Verify.
3. Sidebar → **Sitemaps** → nhập `sitemap-index.xml` → Submit.
4. Dùng **URL Inspection** với trang chủ và 2 bài blog → Request indexing để
   được crawl sớm.
5. Sau vài tuần, xem tab **Performance** để biết từ khóa nào đang ra impression.

Khi chuyển domain riêng: thêm property mới theo domain, verify qua DNS, submit
lại sitemap; giữ property cũ và dùng Change of Address.

## Analytics

Chưa gắn gì, đúng với định hướng không theo dõi của app. Nếu về sau cần số
liệu, chỉ dùng loại tôn trọng quyền riêng tư, không cookie:

- **GoatCounter** (miễn phí): thêm 1 thẻ script của goatcounter vào
  `BaseLayout.astro`.
- **Plausible** (trả phí hoặc tự host): tương tự, 1 thẻ script.

Tuyệt đối không dùng Google Analytics / Facebook Pixel — trái với cam kết
"không theo dõi" đã in trên trang.

## Ghi chú nội dung

- Copy quyền riêng tư bám theo widget policy trong app
  (`m_mental_health/lib/presentation/widgets/policy/` ở repo luận văn); nếu copy
  trong app đổi, cập nhật `quyen-rieng-tu.astro` cho khớp.
- Số khẩn cấp duy nhất được phép nêu là **115** (đã xác minh trong app). Không
  thêm hotline khác khi chưa xác minh.
- Mọi trang y tế phải giữ disclaimer "không phải thiết bị y tế" (đã có sẵn
  trong `MEDICAL_DISCLAIMER`).
- Google Play sẽ yêu cầu trang chính sách có **email liên hệ** — thêm vào mục
  "Thay đổi chính sách và liên hệ" của `quyen-rieng-tu.astro` trước khi nộp.
