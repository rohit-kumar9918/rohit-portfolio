import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const SectionWrapper = ({ id, title, subtitle, children }) => {
  const { ref, inView } = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        {(title || subtitle) && (
          <div className="mb-14">
            {subtitle && (
              <p className="text-xs tracking-[0.3em] uppercase text-accent-cyan mb-3 font-mono">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                {title}
              </h2>
            )}
            <div className="h-[2px] w-24 mt-6 bg-gradient-to-r from-violet-500 to-cyan-400" />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;