import React from "react";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";
import CareerCard from "./CareerCard";
import { careerMock } from "@/common/mocks/career";

export default function CareerList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My professional career journey
          </p>
        </SectionSubHeading>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {careerMock?.map((career, idx) => (
          <CareerCard key={idx} {...career} />
        ))}
      </div>
    </section>
  );
}
