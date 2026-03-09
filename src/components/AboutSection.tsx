import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Shield, Eye, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Eye, text: "Testing from a real user perspective" },
  { icon: FileText, text: "Clear, actionable bug reports" },
  { icon: Shield, text: "Security-aware testing mindset" },
  { icon: CheckCircle, text: "Regression testing for stable releases" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Helping Teams Ship{" "}
              <span className="text-gradient">Stable Software</span>{" "}
              Users Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I help companies release reliable, bug-free software by identifying issues before they reach real users. 
              As a freelance QA tester, I work with startups, product teams, and development companies to improve 
              the stability, usability, and overall quality of their web and mobile applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I combine real-world freelance testing experience with cybersecurity awareness, allowing me to detect 
              both functional issues and potential security weaknesses before they impact users.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <a href="/resume.pdf" download="Amr_Abobakr_QA_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download Full Resume
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="glass-card p-8 space-y-6">
              <h3 className="font-heading font-semibold text-lg text-foreground">Education & Training</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground text-sm">B.S. Software Engineering</h4>
                  <p className="text-muted-foreground text-sm">Egyptian Chinese University</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground text-sm">Professional Testing Training</h4>
                  <p className="text-muted-foreground text-sm">Digital Egypt Pioneers Initiative (MCIT)</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground text-sm">Cybersecurity Training</h4>
                  <p className="text-muted-foreground text-sm">SOC Monitoring & Threat Detection</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground text-sm mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Postman", "Jira", "Selenium", "Chrome DevTools", "Git", "MySQL", "Cucumber"].map((tool) => (
                    <span key={tool} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
