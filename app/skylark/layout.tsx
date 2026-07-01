import { createProjectMetadata, ProjectLayout } from "@/lib/project-seo";

export const metadata = createProjectMetadata("skylark");

export default function SkylarkLayout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout slug="skylark">{children}</ProjectLayout>;
}
