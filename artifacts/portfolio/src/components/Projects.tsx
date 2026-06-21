import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "RAG-Based Document Q&A System",
    category: "AI",
    description: "Retrieval-augmented generation pipeline for semantic document search and QA. 85%+ answer relevance on domain-specific queries.",
    tech: ["LangChain", "FAISS", "Gemini", "Python", "Streamlit"],
    github: "https://github.com/Savani888/RAG-Based-Document-Q-A-System"
  },
  {
    id: 2,
    title: "AI Voice Agent for Insurance Collections",
    category: "AI + Backend",
    description: "Automated voice bot with real-time intent detection. Reduced manual follow-ups by 40%+, improved engagement 30%.",
    tech: ["Twilio", "Dialogflow", "Google Cloud STT/TTS"],
    github: "https://github.com/Savani888/bc-app"
  },
  {
    id: 3,
    title: "TravelEval — LLM Evaluation System",
    category: "NLP",
    description: "End-to-end evaluation framework for hallucinations, bias, and trust in LLMs. 200–300+ queries, statistically significant results (t-tests/ANOVA).",
    tech: ["Python", "NLP", "Statistics"],
    github: "https://github.com/Savani888/GenAI-Travel-Evaluation"
  }
];

const FILTERS = ["All", "AI", "Backend", "NLP"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => 
    activeFilter === "All" || p.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-secondary"></span>
              Deployed Instances
            </h2>
            <p className="text-muted-foreground font-mono">Selected projects and architecture implementations.</p>
          </div>

          <div className="flex gap-2 p-1 glass-panel rounded-full w-fit">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-white/10 text-white'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium">
                    {project.category}
                  </span>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono text-secondary px-2 py-1 rounded border border-secondary/20 bg-secondary/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
