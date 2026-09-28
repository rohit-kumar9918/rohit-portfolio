import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { resumeData } from "../../data/resumeData";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll-scrubbed vertical line height
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <SectionWrapper id="experience" subtitle="Where I've Been" title="Experience">
      <div ref={containerRef} className="relative pl-6 md:pl-10">
        {/* Static base line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5" />
        {/* Animated gradient line — scrubbed by scroll */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400"
        />

        <div className="space-y-14">
          {resumeData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative"
            >
              {/* Node dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-ink border-2 border-accent-glow shadow-[0_0_20px_rgba(167,139,250,0.8)]"
              />

              <div className="glass rounded-2xl p-6 hover:border-accent-glow/30 transition-colors duration-300 group">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-500/30 flex items-center justify-center">
                    <Briefcase size={15} className="text-accent-glow" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white">
                    {exp.role}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mb-4">
                  <span className="text-accent-cyan font-medium">{exp.company}</span>
                  <span>·</span>
                  <span className="font-mono text-xs">{exp.period}</span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
                {exp.practice && (
                  <p className="text-xs font-mono text-accent-glow mb-3">
                    Practice: {exp.practice}
                  </p>
                )}
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-accent-glow mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;