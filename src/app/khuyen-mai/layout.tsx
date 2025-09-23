import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khuyến mãi | Andy Perfume",
  description:
    "Khám phá các chương trình khuyến mãi, ưu đãi và giảm giá hấp dẫn tại Andy Perfume. Cập nhật thông tin mới nhất về các chương trình khuyến mãi nước hoa và dịch vụ của chúng tôi.",
  keywords: [
    "khuyến mãi",
    "ưu đãi",
    "giảm giá",
    "nước hoa",
    "Andy Perfume",
    "chương trình khuyến mãi",
    "sale",
  ],
  authors: [{ name: "Andy Perfume Team" }],
  creator: "Andy Perfume Team",
  publisher: "Andy Perfume",
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
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://andyperfume.com/khuyen-mai",
    siteName: "Andy Perfume",
    title: "Khuyến mãi | Andy Perfume",
    description:
      "Khám phá các chương trình khuyến mãi, ưu đãi và giảm giá hấp dẫn tại Andy Perfume. Cập nhật thông tin mới nhất về các chương trình khuyến mãi nước hoa và dịch vụ của chúng tôi.",
    images: [
      {
        url: "https://andyperfume.com/og-khuyen-mai.jpg",
        width: 1200,
        height: 630,
        alt: "Khuyến mãi - Andy Perfume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khuyến mãi | Andy Perfume",
    description:
      "Khám phá các chương trình khuyến mãi, ưu đãi và giảm giá hấp dẫn tại Andy Perfume. Cập nhật thông tin mới nhất về các chương trình khuyến mãi nước hoa và dịch vụ của chúng tôi.",
    images: ["https://andyperfume.com/og-khuyen-mai.jpg"],
    creator: "@andyperfume",
  },
  alternates: {
    canonical: "https://andyperfume.com/khuyen-mai",
  },
};

interface SaleLayoutProps {
  children: React.ReactNode;
}

export default function SaleLayout({ children }: SaleLayoutProps) {
  return <div className="h-full w-full">{children}</div>;
}
