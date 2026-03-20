/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  ChevronRight, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Trophy,
  Menu,
  X,
  FileText,
  BarChart3,
  ShieldCheck,
  Recycle,
  ArrowUp,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  items: string[];
}

interface Experience {
  role: string;
  organization: string;
  description: string;
}

interface Achievement {
  title: string;
  description: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Strategic Cost Management Project (2026)",
    description: "Performed factory cost analysis, overhead allocation, and evaluated automation for cost optimization in the automobile sector.",
    skills: ["Cost Analysis", "Overhead Allocation", "Automation Evaluation"],
    icon: <BarChart3 className="w-6 h-6 text-slate-700" />
  },
  {
    title: "ESG Investment/Sustainable Finance Study (2025)",
    description: "Studied ESG factors affecting investment decisions and analyzed how sustainability impacts company reputation and financial performance.",
    skills: ["ESG Factors", "Sustainability Analysis", "Financial Performance"],
    icon: <ShieldCheck className="w-6 h-6 text-slate-700" />
  },
  {
    title: "E-Waste Awareness & Collection Drive (2025)",
    description: "Led an awareness initiative encouraging responsible disposal of electronic waste and increased awareness about the environmental impact of improper disposal.",
    skills: ["Leadership", "Environmental Impact", "Initiative Management"],
    icon: <Recycle className="w-6 h-6 text-slate-700" />
  }
];

const SKILLS: SkillCategory[] = [
  {
    category: "Finance",
    items: ["Financial Analysis", "Financial Modelling (Basic)", "Data Interpretation", "Cost Analysis"]
  },
  {
    category: "Tools",
    items: ["MS Excel", "PowerPoint Presentation"]
  },
  {
    category: "Other",
    items: ["Research & Report Writing", "Communication & Teamwork", "Problem Solving"]
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Leadership Training Service - Member",
    organization: "Professional Development",
    description: "Participated in leadership Development Activities and coordinated student initiatives and teamwork programs."
  },
  {
    role: "Girls Representative - School Council",
    organization: "Student Government",
    description: "Represented student concerns to faculty and served as a member organizer in school events and activities."
  }
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Academic Excellence",
    description: "Consistent academic performance across school and college. Top 10 Rank in Class 12th."
  },
  {
    title: "Badminton Champion",
    description: "Secured 1st place in the Inter District Badminton Tournament (2023)."
  },
  {
    title: "Sports Achievement",
    description: "Secured 2nd place in Annual Sports (Long Jump), 2020."
  }
];

const CERTIFICATIONS = [
  "Financial Markets - Coursera",
  "Excel for Business - Coursera",
  "Presentation Skills - LinkedIn Learning"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tight text-slate-900">
          SIMRAN SARASWATI
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold text-slate-900 tracking-tight mb-3"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-slate-900 mt-6"
    />
  </div>
);

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button
      setShowBackToTop(window.scrollY > 500);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-slate-900 z-[60] transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-slate-900 text-white rounded-full shadow-xl z-50 hover:bg-slate-800 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase mb-6">
              Available for Opportunities
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6 leading-[0.9] font-serif">
              Simran <br />
              <span className="text-slate-400 italic">Saraswati</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-4">
              MBA Finance Student | Aspiring Consultant
            </p>
            <p className="text-slate-500 max-w-lg mb-10 leading-relaxed">
              MBA (Finance) student with a BCom. (hons.) background, passionate about financial analysis and problem-solving. 
              Aspiring consultant with leadership skills and a strong analytical mindset.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group"
              >
                Contact Me
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                alt="Professional Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 -z-10 rounded-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-slate-200 -z-10 rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <SectionHeading>About Me</SectionHeading>
            </div>
            <div className="md:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-slate-600 leading-relaxed"
              >
                <p>
                  As an MBA Finance student with a strong foundation in Commerce (BCom), I have developed a keen interest in the intricacies of corporate finance and strategic financial planning. My approach is rooted in an analytical mindset, where I prioritize data integrity and logical problem-solving to address complex financial challenges.
                </p>
                <p>
                  I am passionate about understanding how financial structures impact operational efficiency and long-term sustainability. My goal is to leverage my academic knowledge and practical project experience to contribute effectively to a forward-thinking corporate finance team.
                </p>
                
                <div className="pt-8 grid sm:grid-cols-2 gap-8">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <BookOpen className="w-6 h-6 text-slate-900 mb-4" />
                    <h4 className="font-semibold text-slate-900 mb-2">MBA (Finance)</h4>
                    <p className="text-sm text-slate-800 font-medium">CMS Business School, Bangalore</p>
                    <p className="text-xs text-slate-500">Jain University | 2025 | CGPA: 8.25/10</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <TrendingUp className="w-6 h-6 text-slate-900 mb-4" />
                    <h4 className="font-semibold text-slate-900 mb-2">B.Com (Hons.)</h4>
                    <p className="text-sm text-slate-800 font-medium">Shri Shikshayatan College, Kolkata</p>
                    <p className="text-xs text-slate-500">Calcutta University | 2023 | CGPA: 7.64/10</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Key academic and practical initiatives demonstrating financial acumen and leadership.">
            Selected Projects
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-900 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-slate-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-600 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <div className="mb-16">
                <h2 className="text-3xl font-semibold tracking-tight mb-4">Core Competencies</h2>
                <div className="h-1 w-12 bg-white" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                {SKILLS.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-slate-400 font-medium uppercase tracking-widest text-xs mb-8">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-4">
                      {skillGroup.items.map(skill => (
                        <li key={skill} className="flex items-center gap-3 text-lg font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="mb-16">
                <h2 className="text-3xl font-semibold tracking-tight mb-4">Certifications</h2>
                <div className="h-1 w-12 bg-white" />
              </div>
              <div className="space-y-6">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <Award className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                    <p className="text-slate-200 font-medium">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <SectionHeading subtitle="Demonstrated leadership and collaborative skills through various organizational roles.">
                Leadership & Experience
              </SectionHeading>
              <div className="space-y-12">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div 
                    key={exp.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l border-slate-200"
                  >
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-900" />
                    <h4 className="text-xl font-semibold text-slate-900">{exp.role}</h4>
                    <p className="text-slate-500 font-medium mb-4">{exp.organization}</p>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading subtitle="Recognition of academic and extra-curricular excellence.">
                Achievements
              </SectionHeading>
              <div className="grid gap-6">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-6 items-start"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      {index === 1 ? <Trophy className="w-6 h-6 text-slate-900" /> : <Award className="w-6 h-6 text-slate-900" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{achievement.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Let's Connect</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg">
              I am currently open to internship and full-time opportunities in Corporate Finance, Financial Analysis, and Strategic Planning.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a 
                href="mailto:simran.diwan80@gmail.com" 
                className="flex items-center gap-4 px-8 py-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-900 transition-all group w-full md:w-auto"
              >
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium text-slate-900">simran.diwan80@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 px-8 py-6 bg-white rounded-2xl border border-slate-200 w-full md:w-auto">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <Phone className="w-6 h-6 text-slate-900" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                  <p className="text-lg font-medium text-slate-900">7488218019</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Simran Saraswati. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a 
              href="https://www.linkedin.com/in/simransaraswati" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/simransaraswati" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
