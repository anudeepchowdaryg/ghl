import { createProjectMetadata, ProjectLayout } from "@/lib/project-seo";

export const metadata = createProjectMetadata("falcon");

export default function FalconLayout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout slug="falcon">{children}</ProjectLayout>;
}
