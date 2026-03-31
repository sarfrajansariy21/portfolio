"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background is now handled by ThreeBackground in layout */}

      <div className="container-custom relative text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-4xl mx-auto"
        >
          

          <motion.h1
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 40 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            className="text-6xl md:text-[7rem] font-[1000] tracking-tight mb-8 leading-[0.8] uppercase"
          >
            SARFRAJ <br />
            <span className="bg-gradient-to-br from-primary via-amber-400 to-primary/60 bg-clip-text text-transparent italic uppercase pr-2">
              ANSARI
            </span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-light"
          >
            {personalInfo.role} <br className="hidden md:block" /> 
            Building cutting-edge digital experiences with code.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button size="lg" asChild className="rounded-full bg-primary text-black hover:bg-primary/90 px-8 py-6 text-lg shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Link href="/projects">
                Explore Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-primary/20 hover:bg-primary/5 px-8 py-6 text-lg">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
