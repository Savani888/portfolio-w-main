import { motion } from 'framer-motion';

const FOCUS_AREAS = [
  "AI Agents",
  "LLM Pipelines",
  "Backend Systems",
  "FastAPI + LangChain",
  "RAG Systems"
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              System Configuration
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                <strong className="text-white">BTech AI/ML student (2023–2027)</strong> at Vishwakarma University with a CGPA of 8.09.
              </p>
              <p>
                Previously, Technical Manager Intern at <span className="text-secondary">Skyflo</span>, where I triaged GitHub issues, conducted ecosystem analysis, and designed architecture diagrams for scalable systems.
              </p>
              <p className="text-2xl text-white font-medium border-l-4 border-primary pl-6 py-2 mt-8 bg-gradient-to-r from-primary/10 to-transparent">
                "Building real-world AI systems, not demos."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[60px]" />
            <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-widest">Active Modules</h3>
            <div className="flex flex-wrap gap-3">
              {FOCUS_AREAS.map((area, idx) => (
                <div
                  key={area}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-white/90 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                >
                  {area}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
