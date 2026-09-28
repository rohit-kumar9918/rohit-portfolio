import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import MagneticButton from "../ui/MagneticButton";
import { resumeData } from "../../data/resumeData";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const { personal } = resumeData;

  const contactItems = [
    { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
    { icon: Github, label: "GitHub", href: personal.github },
    { icon: Linkedin, label: "LinkedIn", href: personal.linkedin },
  ];

  return (
    <SectionWrapper id="contact" subtitle="Let's Talk" title="Get in Touch">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Animated gradient blob */}
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-violet-600/20 blur-[100px] animate-float" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-cyan-500/20 blur-[100px] animate-float" />

        <div className="relative">
          <p className="text-gray-400 max-w-xl mb-8">
            I'm currently working as a Software Engineer Trainee in the Managed Services
            (SRE) practice at GSPANN. Always open to conversations about
            reliability engineering, full-stack development, and interesting problems.
          </p>

          <div className="grid gap-3 md:grid-cols-2 mb-10">
            {contactItems.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 glass rounded-xl px-4 py-3 text-sm text-gray-300 hover:text-white hover:border-accent-glow/40 transition-all group"
              >
                <Icon size={16} className="text-accent-cyan" />
                <span className="truncate">{label}</span>
                <ArrowUpRight
                  size={14}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <MagneticButton href={`mailto:${personal.email}`} variant="primary">
              Send an Email
            </MagneticButton>
            <MagneticButton href={personal.linkedin} variant="glass">
              Connect on LinkedIn
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;