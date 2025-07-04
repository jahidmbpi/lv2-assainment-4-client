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
      <Carousel className="max-w-7xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <div>
              <div>
                <img
                  className=" w-full h-[550px]"
                  src="../../src/assets/thought-catalog-qkCTQFXidV8-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <div>
                <img
                  className=" w-full h-[550px]"
                  src="../../src/assets/florencia-viadana-DG6TzGH_1eY-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <div>
                <img
                  className=" w-full h-[550px]"
                  src="../../src/assets/thought-catalog-EzGm2wtyiC4-unsplash (1).jpg"
                  alt=""
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
