"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Banner() {
  return (
    <div className="bg-[#f5f8fa] w-full h-[550px]">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[Autoplay({ delay: 3000 })]} // autoplay added
        className="max-w-7xl mx-auto"
      >
        <CarouselContent>
          <CarouselItem>
            <img
              className="w-full h-[550px] object-cover"
              src="/assets/image1.jpg"
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full h-[550px] object-cover"
              src="/assets/image3.jpg"
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full h-[550px] object-cover"
              src="/assets/image4.jpg"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
