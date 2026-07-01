import { createProjectMetadata, ProjectLayout } from "@/lib/project-seo";

export const metadata = createProjectMetadata("vajra-avant");

export default function VajraAvantLayout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout slug="vajra-avant">{children}</ProjectLayout>;
}
