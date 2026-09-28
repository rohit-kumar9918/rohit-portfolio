import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import TiltCard from "../ui/TiltCard";
import { resumeData } from "../../data/resumeData";
import { Code2, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <SectionWrapper id="projects" subtitle="Things I've Built" title="Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {resumeData.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="h-full">
              <div className="glass rounded-2xl p-6 h-full group relative overflow-hidden hover:border-accent-glow/40 transition-colors duration-300">
                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/10 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-500/30 flex items-center justify-center">
                      <Code2 size={16} className="text-accent-glow" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">{project.date}</span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-white mb-2 flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={14} className="text-gray-600 group-hover:text-accent-cyan transition-colors" />
                  </h3>

                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-gray-400 flex gap-2">
                        <span className="text-accent-glow">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono text-accent-glow bg-white/[0.04] border border-white/[0.08] group-hover:border-accent-glow/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;