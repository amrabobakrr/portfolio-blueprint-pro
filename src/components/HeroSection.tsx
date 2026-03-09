import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Bug, CheckCircle, Download } from "lucide-react";

const stats = [
  { value: "50+", label: "Bugs Caught" },
  { value: "10+", label: "Projects Tested" },
  { value: "100%", label: "Client Satisfaction" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
              <Shield className="w-3 h-3" />
              QA Tester & Bug Hunter
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-foreground leading-tight mb-6"
          >
            Delivering Reliable, Secure &{" "}
            <span className="text-gradient">High-Quality Software</span>{" "}
            Through Expert Testing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-hero-muted mb-10 max-w-2xl leading-relaxed"
          >
            I help companies release bug-free software by identifying issues before they reach real users. 
            Manual Testing · API Testing · Bug Reporting · Selenium Automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">{stat.value}</div>
                <div className="text-sm text-hero-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 flex-col gap-6"
        >
          <div className="glass-card p-4 bg-hero/80 border-hero-muted/20">
            <Bug className="w-8 h-8 text-primary" />
          </div>
          <div className="glass-card p-4 bg-hero/80 border-hero-muted/20">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div className="glass-card p-4 bg-hero/80 border-hero-muted/20">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
