import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { resumeData } from "../../data/resumeData";
import { Trophy, Award, Users } from "lucide-react";

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" subtitle="Recognition" title="Achievements & Roles">
      {/* Achievements */}
      <div className="grid gap-4 md:grid-cols-2 mb-12">
        {resumeData.achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="flex gap-4 glass rounded-xl p-5 hover:border-accent-glow/30 transition-colors group"
          >
            <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-500/30 flex items-center justify-center">
              <Trophy size={15} className="text-accent-glow" />
            </div>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
              {ach}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Positions */}
      <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
        <Users size={18} className="text-accent-cyan" />
        Positions of Responsibility
      </h3>
      <div className="grid gap-4 md:grid-cols-3 mb-12">
        {resumeData.positions.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-xl p-5 hover:border-accent-glow/30 transition-colors group"
          >
            <h4 className="text-white font-medium mb-1">{pos.title}</h4>
            <p className="text-xs text-accent-cyan font-mono mb-3">{pos.org}</p>
            <p className="text-xs text-gray-400">{pos.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
        <Award size={18} className="text-accent-cyan" />
        Certifications
      </h3>
      <div className="space-y-3">
        {resumeData.certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-3 text-sm text-gray-300 glass rounded-lg px-5 py-3.5 hover:border-accent-glow/30 transition-colors"
          >
            <span className="text-accent-glow">✦</span>
            {cert}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;