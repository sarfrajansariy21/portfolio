import { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/ProjectsContent";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "View my latest work, from e-commerce platforms to AI-powered dashboards.",
};

export default function ProjectsPage() {
  return <ProjectsContent projects={projects} />;
}
