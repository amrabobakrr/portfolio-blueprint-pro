import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Amr delivered extremely detailed bug reports that helped our developers resolve issues quickly. His testing significantly improved the stability of our application.",
    name: "Product Manager",
    company: "SaaS Startup",
    initials: "PM",
  },
  {
    quote: "Very professional tester. The issues he discovered during exploratory testing saved us from releasing several critical bugs.",
    name: "Lead Developer",
    company: "Web Application Project",
    initials: "LD",
  },
  {
    quote: "Clear communication, organized reports, and strong attention to detail. A reliable QA tester we would definitely work with again.",
    name: "Project Manager",
    company: "Digital Product Team",
    initials: "PM",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed flex-1 mb-6 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-heading font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
