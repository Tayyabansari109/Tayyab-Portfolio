import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { heroData } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';
import { ArrowRight, Download, Atom, Terminal, FileCode, Flame, Sparkles } from 'lucide-react';
// import { WhatsAppImage2 } from "../../src/assets/images/WhatsAppImage2.jpeg"

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const typewriterText = useTypewriter(heroData.titles, 90, 45, 1800);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] pt-12 pb-20 px-4 sm:px-8 flex items-center overflow-hidden bg-[#0B1120]">
      {/* Abstract Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#38BDF8] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#7C3AED] opacity-15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Eyebrow / Availability Badge */}
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-bold text-[#38BDF8] w-fit shadow-md font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
              <span>{heroData.greeting}</span>
            </div>
            <p className="text-[#38BDF8] font-mono text-sm sm:text-base font-bold tracking-widest uppercase">
              HELLO, I'M
            </p>
          </div>

          {/* Name & Animated Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-white font-sans">
              Muhammad{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7C3AED]">
                Tayyab
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl font-medium text-slate-300 font-mono h-12 flex items-center">
              <span className="bg-gradient-to-r from-[#38BDF8] via-purple-300 to-[#7C3AED] bg-clip-text text-transparent">
                {typewriterText}
              </span>
              <span className="w-0.5 h-7 bg-[#38BDF8] ml-1 animate-pulse" />
            </div>
          </div>

          {/* Short Description */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            {heroData.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToContact}
              className="px-8 py-3.5 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] rounded-xl font-bold text-white hover:scale-105 shadow-2xl shadow-[#38BDF8]/20 flex items-center gap-2.5 transition-all cursor-pointer"
            >
              <span>Hire Me Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/resume')}
              className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 flex items-center gap-2.5 transition-all cursor-pointer"
            >
              {/* <Download className="w-4 h-4 text-[#38BDF8]" /> */}
              <span>View Resume</span>
            </motion.button>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-2">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8] font-mono">
                {heroData.stats.experience}
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] font-mono">
                {heroData.stats.projects}
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                Projects
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                {heroData.stats.clients}
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                Clients
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphic Card Avatar & Stats Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glassmorphic Card for Image */}
          <div className="relative w-full max-w-[420px] h-[480px] bg-[#111827]/40 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl p-4 overflow-hidden">
            <div className="w-full h-full bg-slate-800 rounded-[30px] flex items-center justify-center relative overflow-hidden group">
              <img
                // src={heroData.avatarUrl}
                src="src\assets\images\WhatsAppImage2.jpg"
                alt="Muhammad Tayyab Senior Developer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent opacity-60" />

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center gap-2"
              >
                <Atom className="w-6 h-6 text-[#38BDF8] animate-spin-slow" />
                <span className="text-xs font-bold text-white font-mono">React.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 right-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center gap-2"
              >
                <Terminal className="w-6 h-6 text-amber-400" />
                <span className="text-xs font-bold text-white font-mono">JS ES6+</span>
              </motion.div>
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute -bottom-6 left-4 sm:left-8 bg-[#111827] border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-6 z-20">
            <div className="text-center">
              <div className="text-[#38BDF8] text-2xl font-bold font-mono">8 Mo</div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Experience</div>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-[#7C3AED] text-2xl font-bold font-mono">15+</div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
