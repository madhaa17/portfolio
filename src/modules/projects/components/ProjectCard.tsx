"use client";

import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ProjectCardProps } from "@/common/types/project";
import { Card } from "@/components/elements/Card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { slugify } from "@/common/helpers/slug";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  url,
  githubUrl,
  title,
  description,
  technologies,
  classname,
}) => {
  return (
    <Card
      className={`group relative bg-card overflow-hidden border border-border hover:border-border transition-all duration-500 hover:shadow-xl hover:shadow-card/50 hover:-translate-y-1 ${classname}`}>
      <div className="relative overflow-hidden bg-gradient-to-br from-muted to-secondary aspect-video">
        <Image
          width={400}
          height={225}
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkJGQkZCO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGM0Y0RjY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMjUiIGZpbGw9InVybCgjZ3JhZCkiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTEyLjUiIHI9IjMwIiBmaWxsPSIjRTVFN0VCIiBvcGFjaXR5PSIwLjUiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTEyLjUiIHI9IjE1IiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {(url || githubUrl) && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {url && (
              <Link href={url} target="_blank">
                <Button variant={"outline"}>
                  <ExternalLink size={16} className="text-foreground" />
                </Button>
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank">
                <Button variant={"outline"}>
                  <Github size={16} className="text-foreground" />
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-card-foreground leading-tight">
            <Link
              href={`/projects/${slugify(title)}`}
              className="hover:underline">
              {title}
            </Link>
          </h3>
          <ArrowUpRight
            size={18}
            className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5"
          />
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {technologies.slice(0, 4).map((tech, index) => (
            <Badge
              key={index}
              className="px-2.5 py-1 bg-muted hover:bg-secondary text-muted-foreground text-xs font-medium transition-colors duration-200 border border-border">
              {tech.name}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium border border-border">
              +{technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
};
