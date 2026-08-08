import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, Facebook, Instagram, Heart, ArrowUpRight } from 'lucide-react';
import { topBarData } from '../data/portfolioData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import logo from '../assets/images/Logo2.png';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Tech Stack', id: 'techstack' },
    { name: 'Contact', id: 'contact' },
  ];

  const skillPills = [
    { name: 'React.js', color: 'bg-[#38BDF8]' },
    { name: 'Tailwind CSS', color: 'bg-[#38BDF8]' },
    { name: 'JavaScript ES6+', color: 'bg-amber-400' },
    { name: 'Bootstrap 5', color: 'bg-[#7C3AED]' },
    { name: 'Firebase', color: 'bg-amber-500' },
    { name: 'HTML5 / CSS3', color: 'bg-[#38BDF8]' },
    { name: 'Git & GitHub', color: 'bg-rose-500' },
    { name: 'TypeScript', color: 'bg-blue-500' },
  ];

  return (
    <footer className="w-full bg-[#070B14] text-slate-300 border-t border-white/10 pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Brand & About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Tayyab Ansari Logo"
              className="w-10 h-10 rounded-full object-cover shadow-lg shadow-[#38BDF8]/20"
            />
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              Muhammad<span className="text-[#38BDF8]">Tayyab</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed pr-2">
            Senior Frontend React Developer crafting high-performance, accessible, and modern web applications with React, Tailwind, and Firebase.
          </p>

          <div className="flex items-center gap-2.5 mt-2">
            <a href={topBarData.whatsapp} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 transition-all">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a href={topBarData.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8] text-slate-300 hover:text-[#38BDF8] transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href={topBarData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8] text-slate-300 hover:text-[#38BDF8] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={topBarData.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8] text-slate-300 hover:text-[#38BDF8] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={topBarData.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8] text-slate-300 hover:text-[#38BDF8] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Navigation Links with Borders */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-extrabold text-white border-b border-white/10 pb-2.5 uppercase tracking-wider font-mono">
            Quick Navigation
          </h4>
          <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-[#38BDF8] hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all cursor-pointer flex items-center justify-between text-left group"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#38BDF8] transition-colors" />
              </button>
            ))}
            <Link
              to="/resume"
              className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-[#38BDF8] hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all cursor-pointer flex items-center justify-between text-left group"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#38BDF8] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Column 3: Skills Links & Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-extrabold text-white border-b border-white/10 pb-2.5 uppercase tracking-wider font-mono">
            Skills & Contact
          </h4>

          {/* Skill badges with borders */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {skillPills.map((skill) => (
              <span
                key={skill.name}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300 flex items-center gap-1.5 hover:border-[#38BDF8] transition-all cursor-default"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                {skill.name}
              </span>
            ))}
          </div>

          <ul className="flex flex-col gap-2.5 text-xs font-medium text-slate-300 pt-1">
            <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all">
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={topBarData.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-semibold text-emerald-300">WhatsApp Chat</a>
            </li>
            <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/50 transition-all">
              <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <a href={`mailto:${topBarData.email}`} className="hover:text-[#38BDF8] transition-colors truncate">{topBarData.email}</a>
            </li>
            <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/50 transition-all">
              <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <a href={`tel:${topBarData.phone}`} className="hover:text-[#38BDF8] transition-colors">{topBarData.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} Muhammad Tayyab. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed & Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};
