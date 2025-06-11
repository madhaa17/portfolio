"use client";

import { sampleProjects } from "@/common/mocks/project";
import { ProjectCard } from "./ProjectCard";

const Project = () => {
  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {sampleProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
