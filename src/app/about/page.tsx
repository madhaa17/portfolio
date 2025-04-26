import React from "react";
import About from "@/modules/about";
import Container from "@/components/elements/Container";
import PageHeading from "@/components/elements/PageHeading";

const PAGE_TITLE = "About";
const PAGE_DESCRIPTION = "A short story of me";

export default function AboutPage() {
  return (
    <Container data-aos="fade-left">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <About />
    </Container>
  );
}
