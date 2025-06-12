"use client";

import { FaServicestack } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import SectionHeading from "./elements/SectionHeading";
import SectionSubHeading from "./elements/SectionSubHeading";
import { sampleProjects } from "@/common/mocks/project";
import { ProjectCard } from "@/modules/projects/components/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

export default function ProjectList() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const onDotClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  return (
    <section>
      <div className="space-y-2">
        <SectionHeading
          title="Projects"
          icon={<FaServicestack className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            Here are some of the projects I have worked on, showcasing my skills
            in web development, design, and problem-solving.
          </p>
        </SectionSubHeading>
      </div>
      <Carousel setApi={setApi} className="w-full mt-6">
        <CarouselContent className="-ml-2 md:-ml-4">
          {sampleProjects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
              <ProjectCard {...project} classname="h-full w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index + 1 === current
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => onDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
