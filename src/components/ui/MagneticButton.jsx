import { useMagnetic } from "../../hooks/useMagnetic";

const MagneticButton = ({ children, href, variant = "primary" }) => {
  const ref = useMagnetic(0.25);

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
      : "glass text-white hover:border-white/20 hover:bg-white/5";

  return (
    <a
      ref={ref}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${base} ${styles}`}
      style={{ transition: "transform 0.25s ease-out, box-shadow 0.3s" }}
    >
      {children}
    </a>
  );
};

export default MagneticButton;