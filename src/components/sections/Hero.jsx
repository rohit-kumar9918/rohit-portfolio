import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { resumeData } from "../../data/resumeData";
import AnimatedText from "../ui/AnimatedText";
import MagneticButton from "../ui/MagneticButton";
import ProfilePhoto from "../ui/ProfilePhoto";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-scrubbed parallax
  const yName = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);

  const { personal } = resumeData;

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20 py-24"
    >
      {/* Ambient gradient orbs */}
      <motion.div
        style={{ y: yName }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px]"
      />
      <motion.div
        style={{ y: ySub }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        style={{ opacity, scale, filter: blur }}
        // className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 lg:gap-14 items-center"
        className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-20 items-center"
      >
        {/* ============ LEFT: PHOTO (30%) ============ */}
        <motion.div
          style={{ y: yPhoto }}
          // className="flex justify-center lg:justify-start order-1"
          className="flex justify-center order-1"
        >
          <ProfilePhoto />
        </motion.div>

        {/* ============ RIGHT: TEXT (70%) ============ */}
        <div className="order-2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-accent-glow mb-6"
          >
            <Sparkles size={13} />
            {personal.role}
          </motion.div>

          <motion.h1
            style={{ y: yName }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight"
          >
            <AnimatedText text="Rohit Kumar" className="text-white" />
            <br />
            <span className="text-gradient">
              <AnimatedText text="Gupta" delay={0.4} />
            </span>
          </motion.h1>

          <motion.p
            style={{ y: ySub }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="glass">
              Get in Touch
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;