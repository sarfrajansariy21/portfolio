import NextImage from "next/image";
import Link from "next/link";
import { Globe, Code, ArrowRight } from "lucide-react";
import { Project } from "@/types";
import { Button } from "@/components/ui/Button";

import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-secondary/30 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <NextImage
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
      </div>
      <div className="p-8 relative">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-muted-foreground border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Code className="h-5 w-5" />
            </a>
          </div>
          <Button variant="ghost" size="sm" className="text-xs uppercase tracking-widest font-bold group/btn" asChild>
            <Link href={`/projects/${project.id}`}>
              Details
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
