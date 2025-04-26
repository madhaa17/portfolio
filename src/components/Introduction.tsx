import React from "react";
import TypeAnimation from "./elements/TypeAnimation";

export default function Introduction() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="font-sora flex gap-2 text-2xl font-bold lg:text-3xl">
        <TypeAnimation
          sequence={["Hi, I'm Mika Mada", "Hi, I'm Software Engineer"]}
          delay={3000}
        />
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-8">
          <li>Remote worker</li>
          <li>
            Based in Jakarta <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Passionate and seasoned Software Engineer with a strong focus on
          frontend development. Proficient in TypeScript and well-versed in all
          aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web
          applications.
        </p>
      </div>
    </section>
  );
}
