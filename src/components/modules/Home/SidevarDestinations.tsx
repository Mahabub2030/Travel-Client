"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import React from "react";

const CATEGORIES = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://i.ibb.co/xt4jqfzv/istockphoto-675172642-612x612.jpg",
    count: "200+ Travelers",
  },

  {
    id: 2,
    name: "Paris, France",
    image: "https://i.ibb.co/1fKWgKh2/istockphoto-635758088-612x612.jpg",
    count: "500+ Travelers",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image:
      "https://i.ibb.co/tMy2nNv1/67b7b12ace55b1bf141eb8f3-638e6beeed8f00344dc59789-japademy-kyoto-kinkakuji-temple-one.jpg",
    count: "150+ Travelers",
  },

  {
    id: 4,
    name: "Santorini, Greece",
    image: "https://i.ibb.co/ZRmXc3y1/istockphoto-1145450965-612x612.jpg",
    count: "80+ Travelers",
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: "https://i.ibb.co/Xr9WCVWt/rhv1pjxdhgpajzsszcfb.jpg",
    count: "300+ Travelers",
  },
];

const SidevarDestinations = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <section className=" relative min-h-[85vh] w-full items-center justify-center overflow-hidden py-20 md:py-0">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div className="mx-auto text-center"></div>
        {/* need to added the text for hero section */}
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {CATEGORIES?.map((cat) => (
            <CarouselItem
              key={cat.id}
              className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Link href="/travel-plans">
                <Card className=" group relative overflow-hidden rounded-xl border-none cursor-pointer aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
                  {/* Background Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <CardContent className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary-foreground/90 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-300 opacity-90">
                      {cat.count} Waiting
                    </p>

                    {/* Hover Effect Line */}
                    <div className="w-0 group-hover:w-full h-1 bg-primary mt-3 transition-all duration-500 rounded-full" />
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 h-8 w-8" />
        <CarouselNext className="hidden md:flex -right-4 h-8 w-8" />
      </Carousel>
    </section>
  );
};

export default SidevarDestinations;
