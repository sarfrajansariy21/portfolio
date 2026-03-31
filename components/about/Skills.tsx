"use client";

import { Skill } from "@/types";
import { motion } from "framer-motion";
import { Code, Server, Layout, Database, Terminal, Cpu, Globe, Smartphone } from "lucide-react";

interface SkillsProps {
  skills: Skill[];
}

const SkillIcon = ({ name, className }: { name: string; className?: string }) => {
  const iconMap: Record<string, any> = {
    "React": Layout,
    "Next.js": Globe,
    "TypeScript": Code,
    "Tailwind CSS": Layout,
    "Node.js": Server,
    "PostgreSQL": Database,
    "Prisma": Database,
    "Docker": Cpu,
    "Git": Terminal,
    "JavaScript": Code,
    "HTML": Code,
    "CSS": Layout,
    "Python": Code,
    "AWS": Cloud,
  };

  const Icon = iconMap[name] || Code;
  return <Icon className={className} />;
};

const Cloud = Globe; // Fallback

export function Skills({ skills }: SkillsProps) {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Skills & Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack, 
            focusing on modern frameworks and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="group">
              <div className="flex flex-col h-full bg-background p-8 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-6 text-primary border-b pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-secondary/30 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.05)] text-center group"
                      >
                        <div className="h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 border border-primary/10 group-hover:scale-110 transition-transform">
                          <SkillIcon name={skill.name} className="h-7 w-7" />
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-widest bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">{skill.name}</h3>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
