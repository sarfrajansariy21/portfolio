import Link from "next/link";
import { Code, User, Mail, Globe, Share } from "lucide-react";
import { navItems } from "@/lib/data";

import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-[1000] tracking-tighter text-primary uppercase italic">
              {personalInfo.name.split(' ')[0]}
            </Link>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed font-light">
              {personalInfo.role} passionate about building high-quality, performant, and user-friendly web applications with a focus on Web3.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Code className="h-5 w-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <User className="h-5 w-5" />
              </a>
              <a href={`mailto:${personalInfo.emails[0]}`} className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Contact</h3>
            <ul className="space-y-4">
              {personalInfo.emails.map(email => (
                <li key={email} className="text-sm text-muted-foreground break-all">{email}</li>
              ))}
              <li className="text-sm text-muted-foreground">{personalInfo.location}</li>
            </ul>
          </div>
        </div>
        <div className="mt-20 border-t border-white/5 pt-8">
          <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground/50">
            &copy; {currentYear} {personalInfo.name}. Site handcrafted in Midnight Gold.
          </p>
        </div>
      </div>
    </footer>
  );
}
