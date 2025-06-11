import React from "react";
import { Project } from "@/modules/projects";
import Container from "@/components/elements/Container";
import PageHeading from "@/components/elements/PageHeading";

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION = "Projects I've worked on";

export default function AboutPage() {
  return (
    <Container data-aos="fade-left">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Project />
    </Container>
  );
}
