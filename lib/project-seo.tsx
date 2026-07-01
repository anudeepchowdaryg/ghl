import type { Metadata } from "next";
import { StructuredData } from "@/app/components/StructuredData";
import { breadcrumbJsonLd, PROJECTS, projectJsonLd, projectMetadata, type ProjectSlug } from "@/lib/seo";

type ProjectLayoutProps = {
  children: React.ReactNode;
  slug: ProjectSlug;
};

export function ProjectLayout({ children, slug }: ProjectLayoutProps) {
  const project = PROJECTS[slug];

  return (
    <>
      <StructuredData
        data={[
          projectJsonLd(slug),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: project.name, path: project.path },
          ]),
        ]}
      />
      {children}
    </>
  );
}

export function createProjectMetadata(slug: ProjectSlug): Metadata {
  return projectMetadata(slug);
}
