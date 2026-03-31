import { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background, skills, and experience as a Full Stack Developer.",
};

export default function AboutPage() {
  return <AboutContent skills={skills} />;
}
