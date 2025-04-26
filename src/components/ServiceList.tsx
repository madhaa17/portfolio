import { FaServicestack } from "react-icons/fa";
import ServicesCard from "@/components/ServiceCard";
import SectionHeading from "./elements/SectionHeading";
import SectionSubHeading from "./elements/SectionSubHeading";

export default function ServiceList() {
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading
          title="Services"
          icon={<FaServicestack className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            I can deliver the following services
          </p>
        </SectionSubHeading>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <ServicesCard
          id="a"
          tag="Web"
          title="Website Development"
          description="Create stunning, user-friendly fullstack web applications using modern technologies."
        />

        <ServicesCard
          id="b"
          tag="Mobile"
          title="Mobile App Development"
          description="Create smooth and cross-platform mobile applications using React Native."
        />
      </div>
    </section>
  );
}
