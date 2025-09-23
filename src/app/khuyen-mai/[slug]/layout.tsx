import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết khuyến mãi | Andy Perfume",
  description:
    "Xem chi tiết chương trình khuyến mãi, ưu đãi và giảm giá tại Andy Perfume. Tìm hiểu thêm về các chương trình khuyến mãi nước hoa và dịch vụ mới nhất.",
  keywords: [
    "khuyến mãi",
    "ưu đãi",
    "giảm giá",
    "nước hoa",
    "Andy Perfume",
    "chương trình khuyến mãi",
    "sale",
    "chi tiết khuyến mãi",
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
    type: "article",
    locale: "vi_VN",
    url: "https://andyperfume.com/khuyen-mai",
    siteName: "Andy Perfume",
    title: "Chi tiết khuyến mãi | Andy Perfume",
    description:
      "Xem chi tiết chương trình khuyến mãi, ưu đãi và giảm giá tại Andy Perfume. Tìm hiểu thêm về các chương trình khuyến mãi nước hoa và dịch vụ mới nhất.",
    images: [
      {
        url: "https://andyperfume.com/og-khuyen-mai.jpg",
        width: 1200,
        height: 630,
        alt: "Chi tiết khuyến mãi - Andy Perfume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi tiết khuyến mãi | Andy Perfume",
    description:
      "Xem chi tiết chương trình khuyến mãi, ưu đãi và giảm giá tại Andy Perfume. Tìm hiểu thêm về các chương trình khuyến mãi nước hoa và dịch vụ mới nhất.",
    images: ["https://andyperfume.com/og-khuyen-mai.jpg"],
    creator: "@andyperfume",
  },
  alternates: {
    canonical: "https://andyperfume.com/khuyen-mai",
  },
};

interface InformationLayoutProps {
  children: React.ReactNode;
}

export default function InformationLayout({
  children,
}: InformationLayoutProps) {
  return <div className="h-full w-full">{children}</div>;
}
