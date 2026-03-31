"use client";

import { Hero } from "@/components/home/Hero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">
                A selection of my best work, from complex web platforms to interactive dashboards.
              </p>
            </div>
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/projects" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              LET'S BUILD <br className="md:hidden" />
              <span className="text-primary italic">SOMETHING LEGENDARY</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto font-light">
              Available for full-time positions and select freelance projects. 
              Let's create the next big thing together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="rounded-full bg-primary text-black hover:bg-primary/90 px-10 py-7 text-lg shadow-[0_0_25px_rgba(245,158,11,0.1)]" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 px-10 py-7 text-lg" asChild>
                <Link href="/about">My History</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
