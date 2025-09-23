"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Perfume } from "@/types/perfume";

import ServiceHighlights from "@/components/feature/service/highlights";
import { Button } from "@/components/ui/button";

import UsageGuide from "./usage-guide";
import PerfumeDescription from "./description";
import RelatedProducts from "./related-products";
import Policy from "./policy";
import CapacitySection from "./details/capacity-section";
import SummarySection from "./details/summary-section";
import SexOriginSection from "./details/sex-origin-section";

import { getMessengerUrl } from "@/utils/string";
import { cn } from "@/utils/style";

import relatedProducts from "@/data/related-products/data.json" assert { type: "json" };
import socialLinks from "@/data/social/data.json" assert { type: "json" };

interface ProductDetailProps {
  data: Perfume;
}

const inStock = true;

const ProductDetail: React.FC<ProductDetailProps> = ({ data }) => {
  const {
    name,
    detailImages,
    image,
    content,
    origin,
    capacities,
    description,
    sex,
    price,
  } = data;

  const [tab, setTab] = useState<"info" | "usage" | "return">("info");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedCapacityIndex, setSelectedCapacityIndex] = useState<
    number | undefined
  >(() => {
    if (data?.capacities && data?.capacities.length > 0) {
      return data.capacities[0].value;
    }
    return undefined;
  });

  const tabs = React.useMemo(
    () => [
      {
        key: "info",
        label: "THÔNG TIN SẢN PHẨM",
      },
      {
        key: "usage",
        label: "HƯỚNG DẪN SỬ DỤNG & BẢO QUẢN",
      },
      {
        key: "return",
        label: "CHÍNH SÁCH ĐỔI TRẢ - BẢO HÀNH",
      },
    ],
    []
  );

  return (
    <div className="container mx-auto px-1.5 py-4 md:px-0">
      <div className="flex flex-col gap-8 border bg-white p-2.5 md:flex-row">
        <div className="flex flex-1 flex-col">
          <div className="group relative cursor-zoom-in">
            <img
              src={detailImages[activeImageIndex]}
              alt={name}
              className="aspect-[9/8] w-full object-contain px-12 py-8"
            />

            {/* Zoomed Image (only shows on hover) */}
            <div className="absolute top-0 left-[105%] hidden h-[450px] w-[450px] overflow-hidden border-2 border-[#42495B] bg-white p-5 transition-all duration-200 group-hover:flex">
              <img
                src={detailImages[activeImageIndex]}
                alt={name}
                className="h-full w-full object-contain duration-300"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-2">
            {detailImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumb-1"
                className="h-[82px] w-[100px] border object-contain p-3"
                onClick={() => setActiveImageIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full md:w-2/3 flex-col gap-4">
          <SummarySection
            name={name}
            description={description}
            capacities={capacities}
            selectedCapacityIndex={selectedCapacityIndex}
            inStock={inStock}
            price={price}
          />

          <SexOriginSection sex={sex} origin={origin} />

          <CapacitySection
            capacities={capacities}
            selectedCapacityIndex={selectedCapacityIndex}
            setSelectedCapacityIndex={setSelectedCapacityIndex}
          />

          <Link href={getMessengerUrl(socialLinks) || "#"} target="_blank">
            <Button className="w-full py-6 text-lg font-bold md:w-1/2 md:text-xl">
              MUA NGAY
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div className="h-fit flex-1 border p-2.5">
          <div className="md:bg-primary-default flex flex-col md:flex-row border-0 md:border-b py-2">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.key}
                className={cn(
                  "relative p-1.5 md:px-4 md:py-2 md:font-medium md:text-white text-sm md:text-base",
                  tab === tabItem.key
                    ? "bg-primary-default md:bg-transparent text-white"
                    : "text-[#2c2c43] md:text-white"
                )}
                onClick={() => setTab(tabItem.key as typeof tab)}
              >
                {tabItem.label}

                {tab === tabItem.key && (
                  <div
                    className={cn(
                      "absolute hidden md:block top-[90%] left-1/2 h-0.5 w-10 -translate-x-1/2 bg-white"
                    )}
                  ></div>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4">
            {tab === "info" && <PerfumeDescription content={content} />}
            {tab === "usage" && <UsageGuide />}
            {tab === "return" && <Policy />}
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <ServiceHighlights />
        </div>
      </div>

      <div className="mt-8">
        <RelatedProducts products={relatedProducts as Perfume[]} />
      </div>
    </div>
  );
};

export default ProductDetail;
