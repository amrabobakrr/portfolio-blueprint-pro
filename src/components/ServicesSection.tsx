import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Bug, Compass, Wifi, RefreshCw, FileCheck, Bot } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Manual Software Testing",
    desc: "Comprehensive testing of web or mobile applications to detect functional issues, UI defects, and usability problems before your users encounter them.",
  },
  {
    icon: Bug,
    title: "Bug Detection & Reports",
    desc: "Clear, structured bug reports including reproduction steps, expected vs actual behavior, and supporting evidence to help developers fix issues quickly.",
  },
  {
    icon: Compass,
    title: "Exploratory Testing",
    desc: "Deep exploratory testing to uncover hidden defects that automated tests and basic test cases often miss.",
  },
  {
    icon: Wifi,
    title: "API Testing",
    desc: "Validation of API endpoints using Postman to ensure requests, responses, and data flow function correctly across your system.",
  },
  {
    icon: RefreshCw,
    title: "Regression Testing",
    desc: "Verification that new updates or bug fixes do not break existing functionality in your application.",
  },
  {
    icon: FileCheck,
    title: "Test Case Design",
    desc: "Creation of structured testing documentation to support development teams with organized and repeatable testing processes.",
  },
  {
    icon: Bot,
    title: "Basic Automation Support",
    desc: "Implementation or assistance with basic Selenium test automation for repetitive testing workflows.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">Services</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            How I Can Help Your Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From manual testing to API validation, I provide thorough quality assurance that helps you ship with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
