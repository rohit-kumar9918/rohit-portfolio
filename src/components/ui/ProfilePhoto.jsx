import { motion } from "framer-motion";

const ProfilePhoto = ({ src = "/images/profile.jpeg", alt = "Rohit Kumar Gupta" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    //   className="relative mx-auto mb-10 w-40 h-40 md:w-48 md:h-48"
      className="relative w-full aspect-square max-w-[420px]"
    >
      {/* Rotating gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#7c3aed,#22d3ee,#a78bfa,#7c3aed)] blur-md opacity-70"
      />

      {/* Soft glow */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-600/40 to-cyan-500/40 blur-xl" />

      {/* Photo frame */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(124,58,237,0.4)]"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {/* Subtle inner gradient overlay for style */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Online badge dot */}
      <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-400 border-4 border-ink shadow-lg" />
    </motion.div>
  );
};

export default ProfilePhoto;