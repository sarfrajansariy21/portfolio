"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Globe, User, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function ContactContent() {
  return (
    <div className="flex flex-col">
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase tracking-widest"
            >
              Get in <span className="text-primary italic">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed font-light"
            >
              Have a project in mind? I'm available for new opportunities.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-1 space-y-6"
            >
              <ContactInfoItem 
                icon={<Mail className="h-6 w-6" />}
                title="Email"
                detail={personalInfo.emails[0]}
                link={`mailto:${personalInfo.emails[0]}`}
                linkText="Send an email"
                content={
                  <div className="flex flex-col space-y-1 mt-2">
                    <a key={personalInfo.emails[1]} href={`mailto:${personalInfo.emails[1]}`} className="text-muted-foreground hover:text-primary text-sm transition-colors">{personalInfo.emails[1]}</a>
                  </div>
                }
              />
              <ContactInfoItem 
                icon={<Phone className="h-6 w-6" />}
                title="Phone"
                detail={personalInfo.phones[0]}
                link={`tel:${personalInfo.phones[0].replace(/\s/g, '')}`}
                linkText="Call me"
                content={
                  <div className="flex flex-col space-y-1 mt-2">
                    <a key={personalInfo.phones[1]} href={`tel:${personalInfo.phones[1].replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary text-sm transition-colors">{personalInfo.phones[1]}</a>
                  </div>
                }
              />
              <ContactInfoItem 
                icon={<User className="h-6 w-6" />}
                title="Social Media"
                content={
                  <div className="flex flex-col gap-2 mt-2">
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors border-b border-white/5 pb-1 w-fit">LinkedIn Profile</a>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors border-b border-white/5 pb-1 w-fit">GitHub Repositories</a>
                  </div>
                }
              />
              <ContactInfoItem 
                icon={<Globe className="h-6 w-6" />}
                title="Location"
                detail={personalInfo.location}
                subtext="Available for remote work"
                subtextClass="text-primary italic"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-secondary/30 backdrop-blur-sm p-10 rounded-2xl border border-white/5 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-10">
                <div className="h-10 w-1 bg-primary rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                <h2 className="text-3xl font-bold tracking-tight">Send a Message</h2>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map / Location Imagery */}
      {/* <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] bg-secondary/50 rounded-2xl flex items-center justify-center text-muted-foreground italic text-center p-8 border border-border relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
             <span className="relative z-10">[Interactive Map or Local Atmosphere Photography]</span>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}

function ContactInfoItem({ icon, title, detail, link, linkText, content, subtext, subtextClass }: any) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border transition-all hover:border-primary/30 hover:shadow-lg">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        {detail && <p className="text-muted-foreground">{detail}</p>}
        {content}
        {link && <a href={link} className="text-primary text-sm font-medium hover:underline">{linkText}</a>}
        {subtext && <span className={`text-sm font-medium ${subtextClass}`}>{subtext}</span>}
      </div>
    </div>
  );
}
