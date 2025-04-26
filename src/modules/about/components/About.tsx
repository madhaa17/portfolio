import React from "react";
import Breakline from "@/components/elements/BreaklineProps";
import Summary from "./Summary";
import SkillList from "./SkillList";
import CareerList from "./CareerList";
// import GithubCalendarComponent from "./GithubCalendar";
export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Breakline />
      <CareerList />
      <Breakline />
      <SkillList />
    </section>
  );
}
