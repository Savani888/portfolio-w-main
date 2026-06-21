import { motion } from 'framer-motion';
import { Database, Layout, Terminal, BrainCircuit, Cpu } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="text-primary w-6 h-6" />,
    skills: ["PyTorch", "LangChain", "LangGraph", "LlamaIndex", "Transformers", "vLLM", "PEFT (LoRA)", "spaCy", "MLflow"]
  },
  {
    title: "Web & Backend",
    icon: <Layout className="text-secondary w-6 h-6" />,
    skills: ["React", "Next.js", "Node.js", "FastAPI", "NestJS", "Flask", "Express", "Tailwind CSS"]
  },
  {
    title: "Languages",
    icon: <Terminal className="text-accent w-6 h-6" />,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C"]
  },
  {
    title: "Databases & Vector Stores",
    icon: <Database className="text-primary w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Neo4j"]
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Cpu className="text-secondary w-6 h-6" />,
    skills: ["Kubernetes", "Docker", "Git", "Linux"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            Capability Matrix
          </h2>
          <p className="text-muted-foreground font-mono">Technical competencies and system proficiency.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-black/40 rounded border border-white/5 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
