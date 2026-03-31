import { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me for project inquiries, collaboration opportunities, or just to say hello.",
};

export default function ContactPage() {
  return <ContactContent />;
}
