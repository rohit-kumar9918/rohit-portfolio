import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "../../data/resumeData";

const Footer = () => {
  const { personal } = resumeData;

  return (
    <footer className="relative border-t border-white/5 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {personal.name}. Built with React + Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a href={personal.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent-cyan transition-colors">
            <Github size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent-cyan transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${personal.email}`} className="text-gray-500 hover:text-accent-cyan transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;