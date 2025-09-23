"use client";

import { useMemo } from "react";

import { Perfume } from "@/types/perfume";

import SlideSwiper from "@/components/ui/swiper";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import RightPointerIcon from "@/components/icons/right-pointer";
import PerfumeCarousel from "@/components/feature/perfume/perfume-carousel";
import BlogListView from "@/components/feature/blog/blog-list-view";

import products from "@/data/products/data.json" assert { type: "json" };

export default function Home() {
  const images = [
    "/images/slide/slider_1.webp",
    "/images/slide/slider_2.webp",
    "/images/slide/slider_3.webp",
    "/images/slide/slider_4.webp",
  ];

  const perfumeGroups = useMemo(
    () => [
      {
        key: "male",
        title: "NƯỚC HOA NAM",
        subtitle: "Nước hoa Nam",
        imageUrl: "/images/perfumes/nuochoanam.jpg",
        perfumes: (products as Perfume[])
          .filter((p) => p.sex === "male")
          .slice(0, 10),
      },
      {
        key: "female",
        title: "NƯỚC HOA NỮ",
        subtitle: "Nước hoa Nữ",
        imageUrl: "/images/perfumes/nuochoawomen.jpg",
        perfumes: (products as Perfume[])
          .filter((p) => p.sex === "female")
          .slice(0, 10),
      },
      {
        key: "unisex",
        title: "NƯỚC HOA UNISEX",
        subtitle: "Nước hoa Unisex",
        imageUrl: "/images/perfumes/nuochoaunisex.jpg",
        perfumes: (products as Perfume[])
          .filter((p) => p.sex === "unisex")
          .slice(0, 10),
      },
    ],
    []
  );

  return (
    <>
      <SlideSwiper images={images} />

      <div className="bg-[rgb(245,245,245)]">
        <div className="container mx-auto flex flex-col gap-8 px-1.5 py-6 md:px-0">
          {perfumeGroups.map(({ key, title, subtitle, imageUrl, perfumes }) => (
            <div key={key}>
              <Banner title={title} subtitle={subtitle} imageUrl={imageUrl} />
              <div className="flex w-full flex-col border-[0.5px] border-b-[1px]">
                <PerfumeCarousel perfumes={perfumes} />
                <div className="flex h-fit w-full justify-center border-t-[0.75px]">
                  <a href={`/products?sex=${key}`}>
                    <Button>
                      <RightPointerIcon />
                      <span>Xem Tất Cả</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <BlogListView />
        </div>
      </div>
    </>
  );
}
