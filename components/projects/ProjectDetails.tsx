"use client";

import NextImage from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Code, ExternalLink, Calendar, User, Zap } from "lucide-react";
import { Project } from "@/types";
import { Button } from "@/components/ui/Button";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Button variant="ghost" asChild className="group text-muted-foreground hover:text-primary pl-0">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
              <NextImage
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center text-muted-foreground/20 italic text-xs text-center p-4">
                  [View {i}]
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Zap className="h-3 w-3" />
                <span>Featured Project</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-[0.9]">
                {project.title.split(' -- ')[0]} <br/> 
                <span className="text-primary italic">{project.title.split(' -- ')[1] || 'Edition'}</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary/60">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-secondary/80 border border-white/5 text-sm font-medium hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="rounded-full bg-primary text-black hover:bg-primary/90 px-8 py-7 text-base font-bold shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                  <Globe className="mr-2 h-5 w-5" />
                  Live Preview
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/10 hover:bg-white/5 px-8 py-7 text-base font-bold">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Code className="mr-2 h-5 w-5" />
                  Source Code
                </a>
              </Button>
            </div>

            <div className="pt-10 border-t border-white/5 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Category</span>
                <span className="text-sm font-bold">Blockchain & Web3</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Duration</span>
                <span className="text-sm font-bold">4 Months</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
