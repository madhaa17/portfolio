import { FaServicestack } from "react-icons/fa";
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
} from "@/components/ui/carousel";

export default function ProjectList() {
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
      <div className="mt-6 w-full">
        <Carousel className="w-full">
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
        </Carousel>
      </div>
    </section>
  );
}
