import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thương Hiệu | Andy Perfume",
  description:
    "Khám phá các thương hiệu nước hoa chính hãng nổi tiếng tại Andy Perfume. Đa dạng lựa chọn, đảm bảo chất lượng và giá tốt.",
  keywords: [
    "thương hiệu",
    "andy perfume",
    "nước hoa chính hãng",
    "nước hoa cao cấp",
    "perfume brands",
    "nước hoa nhập khẩu",
    "perfume store",
    "brand perfume",
    "nước hoa nổi tiếng",
  ],
  authors: [{ name: "Andy Perfume" }],
  openGraph: {
    title: "Thương Hiệu | Andy Perfume",
    description:
      "Khám phá các thương hiệu nước hoa chính hãng nổi tiếng tại Andy Perfume.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thương Hiệu | Andy Perfume",
    description:
      "Khám phá các thương hiệu nước hoa chính hãng nổi tiếng tại Andy Perfume.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
