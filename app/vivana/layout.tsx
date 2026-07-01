import { createProjectMetadata, ProjectLayout } from "@/lib/project-seo";

export const metadata = createProjectMetadata("vivana");

export default function VivanaLayout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout slug="vivana">{children}</ProjectLayout>;
}
