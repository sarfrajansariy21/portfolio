"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Project } from "@/types";
import { motion } from "framer-motion";
import NextImage from "next/image";

interface ProjectsContentProps {
  projects: Project[];
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
  return (
    <div className="flex flex-col">
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              My Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              A collection of my latest work, focusing on performance, scalability, 
              and exceptional user experience.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Story */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">The Vision Behind My Work</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Every project I undertake is an opportunity to solve a unique problem 
                  and deliver a seamless experience to the end user. I approach development 
                  with a holistic mindset, considering everything from the data model 
                  to the final pixel on the screen.
                </p>
                <p>
                  I'm particularly interested in how modern web technologies can be 
                  leveraged to create high-performance applications that feel native 
                  and intuitive. This led me to specialize in Next.js and the React ecosystem.
                </p>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video overflow-hidden rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <NextImage 
                src="/development_process_showcase.png"
                alt="Development Process & Code Architecture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
