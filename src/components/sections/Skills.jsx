import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { resumeData } from "../../data/resumeData";

const Skills = () => {
  return (
    <SectionWrapper id="skills" subtitle="Toolbox" title="Technical Skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(resumeData.skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-accent-glow/30 transition-colors duration-300 group"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent-cyan mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + j * 0.05 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-3 py-1.5 rounded-lg text-xs text-gray-200 bg-white/[0.03] border border-white/[0.08] hover:border-accent-glow/50 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Courses */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 glass rounded-2xl p-6"
      >
        <h3 className="text-sm font-mono uppercase tracking-wider text-accent-cyan mb-4">
          Key Courses Taken
        </h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.courses.map((c) => (
            <span
              key={c}
              className="px-3 py-1.5 rounded-lg text-xs text-gray-300 bg-white/[0.03] border border-white/[0.08]"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;