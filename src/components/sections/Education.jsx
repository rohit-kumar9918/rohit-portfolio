import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import TiltCard from "../ui/TiltCard";
import { resumeData } from "../../data/resumeData";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <SectionWrapper id="education" subtitle="Academic Journey" title="Education">
      <div className="grid gap-6 md:grid-cols-3">
        {resumeData.education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="h-full">
              <div className="glass rounded-2xl p-6 h-full group hover:border-accent-glow/40 transition-colors duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/30 flex items-center justify-center">
                    <GraduationCap size={18} className="text-accent-glow" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">{edu.year}</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-white leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-400 mt-2">{edu.institute}</p>
                <p className="mt-5 text-sm font-mono text-accent-cyan">{edu.score}</p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;