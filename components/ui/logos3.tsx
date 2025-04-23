"use client";
import zotac from "@/public/zotac_white.svg"
import amd from "@/public/amd.svg"
import nvidia from "@/public/nvidia.svg"
import intel from "@/public/intel.png"
import proof from "@/public/proof.png"
import vastai from "@/public/vastai.png"
import ryzen from "@/public/ryzen1.svg"
import msi from "@/public/msi-5-logo-black-and-white.png"

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: zotac.src,
      className: "h-5 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: amd.src,
      className: "h-9 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: nvidia.src,
      className: "h-25 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: intel.src,
      className: "h-10 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: proof.src,
      className: "h-5 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: vastai.src,
      className: "h-32 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: ryzen.src,
      className: "h-10 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: msi.src,
      className: "h-4 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="pb-10">
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
