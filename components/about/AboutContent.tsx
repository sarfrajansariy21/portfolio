"use client";

import NextImage from "next/image";
import { Skills } from "@/components/about/Skills";
import { Skill } from "@/types";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail, Code } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

interface AboutContentProps {
  skills: Skill[];
}

export function AboutContent({ skills }: AboutContentProps) {
  return (
    <div className="flex flex-col">
      {/* About Hero Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/50 border border-white/5 shadow-2xl group">
                {personalInfo.profileImage ? (
                  <NextImage 
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground italic p-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
                    [Professional Profile Image Showcase]
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-5xl md:text-8xl font-[1000] mb-8 tracking-tighter uppercase leading-[0.8]">
                About <span className="text-primary italic pr-4">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed space-y-6 font-light">
                <p>
                  I'm a <span className="text-white font-medium">{personalInfo.role}</span> with a passion for creating impactful digital experiences. 
                  With several years of experience in the industry, I've had the pleasure of working 
                  on a wide range of projects, from small business websites to large-scale enterprise applications.
                </p>
                <p>
                  My journey started with a curiosity for how things work on the web, 
                  which led me to master modern front-end frameworks like React and Next.js, 
                  and robust back-end technologies like Node.js and PostgreSQL.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-full bg-primary text-black hover:bg-primary/90 px-10 py-7 text-base font-bold shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full border-white/10 hover:bg-white/5 px-10 py-7 text-base font-bold">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer">
                    <Code className="mr-2 h-5 w-5" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Experience / Education Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Experience & Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceItem 
              title="Associate Software Engineer" 
              date="Apr-2023 - Present" 
              company="Antier Solutions Pvt. Ltd." 
              description="Building production-grade full-stack applications with Next.js, TypeScript, and Node.js. Implementing REST APIs, integrating blockchain services, optimizing database queries in PostgreSQL, and developing responsive, high-performance user interfaces." 
            />
            <ExperienceItem 
              title="Assistant Software Engineer" 
              date="Jan-2022 - OCT-2022" 
              company="Bayatree Infocomm Pvt. Ltd." 
              description="Built responsive and user-friendly web applications while adhering to UI/UX best practices. Integrated and consumed RESTful APIs for real-time data, authentication flows, and backend service communication." 
            />
            <ExperienceItem 
              title="Master of Computer Applications" 
              date="Aug-2019 - Jul-2021" 
              company="Lovely Professional University" 
              description="Studied core computer science principles, algorithms, and software engineering." 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperienceItem({ title, date, company, description }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 border-l-2 border-primary/30 py-4"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm font-medium px-2 py-1 bg-secondary rounded-md">{date}</span>
      </div>
      <p className="text-primary font-medium mb-2">{company}</p>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
