import { createProjectMetadata, ProjectLayout } from "@/lib/project-seo";

export const metadata = createProjectMetadata("datta");

export default function DattaLayout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout slug="datta">{children}</ProjectLayout>;
}
