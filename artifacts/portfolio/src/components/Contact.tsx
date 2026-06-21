import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-t-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="font-mono text-sm tracking-widest text-primary uppercase">
            End of transmission
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Let's build something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">intelligent together.</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available for opportunities in AI engineering, agent development, and scalable backend architecture.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <a
              href="mailto:bhimellu.savani@gmail.com"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/savanibhimellu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 hover:text-[#0077b5] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/Savani888"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <SiGithub size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
