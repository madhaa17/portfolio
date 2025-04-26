import React from "react";
import Introduction from "./Introduction";
import ServiceList from "./ServiceList";
import Breakline from "./elements/BreaklineProps";

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
      <ServiceList />
    </>
  );
}
