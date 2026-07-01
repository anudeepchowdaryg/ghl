import { createProjectMetadata, ProjectLayout } from "@/lib/project-seo";

export const metadata = createProjectMetadata("gk-senate");

export default function GkSenateLayout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout slug="gk-senate">{children}</ProjectLayout>;
}
