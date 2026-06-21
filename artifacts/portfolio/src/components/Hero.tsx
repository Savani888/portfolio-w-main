import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animated Grid & Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm tracking-wider text-primary"
          >
            System Status: Online
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-glow text-white">
            Savani Bhimellu
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            AI-ML Engineer
          </h2>

          <div className="font-mono text-base md:text-lg text-secondary max-w-2xl h-[60px]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Building autonomous agents, RAG systems, and scalable backend AI systems.
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="https://github.com/Savani888"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsla(260,100%,60%,0.3)] hover:shadow-[0_0_30px_hsla(260,100%,60%,0.5)]"
            >
              View GitHub
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              Explore Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
