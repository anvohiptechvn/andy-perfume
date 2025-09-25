"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideSwiperProps {
  images: {
    url: string;
    redirectedUrl?: string;
  }[];
}

const SlideSwiper: React.FC<SlideSwiperProps> = ({ images }) => {
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={false}
      pagination={{
        clickable: true,
        renderBullet: (_, className) => {
          return `<span class="${className} px-2 py-1 text-sm border rounded"></span>`;
        },
      }}
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx} className="cursor-pointer">
          {image?.redirectedUrl ? (
            <a href={`${image.redirectedUrl}`}>
              <img src={image.url} alt={`Slide ${idx}`} className="w-full" />
            </a>
          ) : (
            <img src={image.url} alt={`Slide ${idx}`} className="w-full" />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideSwiper;
