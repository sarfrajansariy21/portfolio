"use client";

import * as React from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      setStatus("success");
    } catch (error: any) {
      console.error("Form Error:", error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-12 text-center bg-primary/5 rounded-3xl border border-primary/20 backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.05)]"
          >
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Gold Standard <span className="text-primary italic">Sent</span></h3>
            <p className="text-muted-foreground mb-10 max-w-sm font-light text-lg">
              Thank you for reaching out. I've received your transmission and will respond with speed and precision.
            </p>
            <Button size="lg" onClick={() => setStatus("idle")} className="rounded-full bg-primary text-black hover:bg-primary/90 px-10">
              Send Another
            </Button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-8"
          >
            {status === "error" && (
              <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                <AlertCircle className="mr-2 h-4 w-4" />
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 px-1">
                  Your Identity
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Sarfraj Ansari"
                  required
                  className="flex h-14 w-full rounded-2xl border border-white/5 bg-secondary/50 px-5 py-2 text-base ring-offset-background transition-all placeholder:text-muted-foreground/30 focus-visible:outline-none focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0 disabled:opacity-50"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 px-1">
                  Electronic Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contact@sarfraj.com"
                  required
                  className="flex h-14 w-full rounded-2xl border border-white/5 bg-secondary/50 px-5 py-2 text-base ring-offset-background transition-all placeholder:text-muted-foreground/30 focus-visible:outline-none focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 px-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="Collaboration Proposal"
                required
                className="flex h-14 w-full rounded-2xl border border-white/5 bg-secondary/50 px-5 py-2 text-base ring-offset-background transition-all placeholder:text-muted-foreground/30 focus-visible:outline-none focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0 disabled:opacity-50"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 px-1">
                Message Body
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your next digital gold venture..."
                required
                rows={6}
                className="flex min-h-[160px] w-full rounded-2xl border border-white/5 bg-secondary/50 px-5 py-4 text-base ring-offset-background transition-all placeholder:text-muted-foreground/30 focus-visible:outline-none focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0 disabled:opacity-50 resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full h-16 rounded-2xl bg-primary text-black hover:bg-primary/80 text-lg font-black uppercase tracking-widest shadow-[0_0_30px_rgba(245,158,11,0.2)]" 
              disabled={status === "loading"}
            >
              {status === "loading" ? "Transmitting..." : (
                <>
                  <Send className="mr-3 h-5 w-5" />
                  Initiate Reach Out
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
