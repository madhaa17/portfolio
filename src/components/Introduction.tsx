import React from "react";
import TypeAnimation from "./elements/TypeAnimation";
import Link from "next/link";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/madhaa17",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mikamada17",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281380973918",
  },
  {
    name: "Email",
    href: "mailto:mikamada17@gmail",
  },
];

export const SocialLink = ({ name, href }: { name: string; href: string }) => (
  <Link
    href={href}
    target="_blank"
    className="relative text-neutral-600 transition-all duration-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 lg:flex group">
    <span>{name}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-600 dark:bg-neutral-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

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
          <li>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <SocialLink key={link.name} name={link.name} href={link.href} />
              ))}
            </div>
          </li>
        </ul>
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Experienced Software Engineer specializing in frontend development,
          with deep expertise in TypeScript and modern web technologies.
          Committed to building responsive, maintainable, and user-focused web
          solutions through teamwork and innovation.
        </p>
      </div>
    </section>
  );
}
