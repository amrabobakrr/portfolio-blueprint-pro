import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Functional Testing",
    problem: "Inconsistent checkout behavior and payment flow failures.",
    solution: "Full functional and exploratory testing across product browsing, cart management, and checkout flow.",
    tools: ["Manual Testing", "Chrome DevTools", "Jira"],
    results: ["18 functional bugs identified", "Prevented checkout failures pre-launch", "Improved payment flow stability"],
  },
  {
    title: "API Validation for Web App",
    problem: "Backend API responses causing inconsistent frontend data display.",
    solution: "Structured API testing to validate endpoints, response structures, and data integrity.",
    tools: ["Postman", "JSON Validation"],
    results: ["Critical validation issues found", "Improved API reliability", "Reduced frontend data errors"],
  },
  {
    title: "SaaS Platform Regression Testing",
    problem: "Frequent updates were breaking existing features.",
    solution: "Designed and executed regression test cycles before each release.",
    tools: ["Manual Testing", "Jira", "Test Case Docs"],
    results: ["Multiple regressions caught", "Maintained stable releases", "Reduced post-deploy bugs"],
  },
  {
    title: "Mobile Web App Usability Testing",
    problem: "Users reported navigation difficulties and inconsistent UI behavior.",
    solution: "Exploratory testing focusing on real user interaction scenarios.",
    tools: ["Manual Testing", "Browser Testing"],
    results: ["Major usability issues identified", "Improved navigation flow", "Enhanced user experience"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Case studies from real testing engagements showing measurable quality improvements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 group hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">{project.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>

              <div className="mb-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Challenge</span>
                <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
              </div>

              <div className="mb-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Solution</span>
                <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
              </div>

              <div className="mb-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Results</span>
                <ul className="mt-1 space-y-1">
                  {project.results.map((r) => (
                    <li key={r} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
