import React from "react";
import MobileIlustration from "./elements/MobileIlustration";
import WebIlustration from "./elements/WebIlustration";
import { Card } from "./elements/Card";

interface ServicesCardProps {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  tag,
  title,
  description,
  id,
}: ServicesCardProps) {
  return (
    <Card className="relative border border-neutral-200 p-4 dark:border-neutral-700 md:p-6">
      <div className="mb-5 flex items-center justify-center px-6 py-4">
        {id === "a" ? <WebIlustration /> : null}
        {id === "b" ? <MobileIlustration /> : null}
      </div>
      <div className="w-full">
        <span className="right-3 top-3 mb-1 flex w-max items-center justify-center rounded-lg border border-neutral-200 bg-neutral-200 bg-opacity-40 px-2 text-xs text-neutral-500 dark:border-teal-200  dark:bg-teal-900 dark:text-teal-200 md:absolute">
          {tag}
        </span>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
    </Card>
  );
}
