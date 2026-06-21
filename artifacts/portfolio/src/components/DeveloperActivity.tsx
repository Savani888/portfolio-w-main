import { motion } from 'framer-motion';
import { Github, Star, GitFork, CircleDot } from 'lucide-react';

const REPOS = [
  {
    name: "RAG-Based-Document-Q-A-System",
    desc: "Retrieval-augmented generation pipeline for semantic document search and QA.",
    language: "Python",
    url: "https://github.com/Savani888/RAG-Based-Document-Q-A-System"
  },
  {
    name: "bc-app",
    desc: "AI Voice Agent for Insurance Collections using Twilio and Dialogflow.",
    language: "TypeScript",
    url: "https://github.com/Savani888/bc-app"
  },
  {
    name: "GenAI-Travel-Evaluation",
    desc: "End-to-end evaluation framework for hallucinations, bias, and trust in LLMs.",
    language: "Jupyter Notebook",
    url: "https://github.com/Savani888/GenAI-Travel-Evaluation"
  }
];

export function DeveloperActivity() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white/20"></span>
              Developer Activity
            </h2>
            <a 
              href="https://github.com/Savani888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-white transition-colors"
            >
              <Github size={16} />
              @Savani888
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {REPOS.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-black/40 hover:border-white/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <Github className="text-muted-foreground group-hover:text-white transition-colors" size={24} />
              </div>
              <a 
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-primary hover:underline mb-2 block truncate"
              >
                {repo.name}
              </a>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                {repo.desc}
              </p>
              
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CircleDot size={12} className="text-secondary" />
                  {repo.language}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
