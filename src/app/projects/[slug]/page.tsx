import { sampleProjects } from "@/common/mocks/project";
import { matchBySlug, slugify } from "@/common/helpers/slug";
import Container from "@/components/elements/Container";
import PageHeading from "@/components/elements/PageHeading";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ParamsPromise = Promise<{ slug: string }>;

export function generateStaticParams() {
  return sampleProjects.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = matchBySlug(sampleProjects, slug);
  if (!project) return {};
  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: ParamsPromise;
}) {
  const { slug } = await params;
  const project = matchBySlug(sampleProjects, slug);
  if (!project) return notFound();

  return (
    <Container data-aos="fade-left">
      <PageHeading title={project.title} description={project.description} />

      <div className="grid gap-6 md:grid-cols-2 mt-4">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-base font-semibold mb-2">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge
                  key={i}
                  className="bg-muted border border-border text-muted-foreground">
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4">
                Visit site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4">
                View code
              </a>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
