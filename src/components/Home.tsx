import React from "react";
import Introduction from "./Introduction";
import ServiceList from "./ServiceList";
import Breakline from "./elements/BreaklineProps";
// import CareerList from "@/modules/about/components/CareerList";

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
      <ServiceList />
      {/* <Breakline className="my-6" />
      <CareerList /> */}
    </>
  );
}
