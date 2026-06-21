import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const ACHIEVEMENTS = [
  "1st Prize Arduino Robot (2023)",
  "Google GenAI Study Jams (2025)",
  "Deloitte Forage Simulations (2025)",
  "HackerRank Python/SQL/Problem Solving (2025)",
  "Coursera .NET/C#/Software Engineering (2025)"
];

export function Achievements() {
  return (
    <section className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <Award className="text-primary" />
              Certifications & Awards
            </h2>
            
            <ul className="space-y-4">
              {ACHIEVEMENTS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <BookOpen className="text-primary" />
              Publications
            </h2>
            
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                "Multidisciplinary Emerging Trends in Engineering and Technology"
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                ICMETET 2024, ISBM College, August 2024
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-secondary">
                DOI: 10.17492/jpi.ISBM.082401
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
