import React from 'react';
import { Mail, Phone, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { topBarData } from '../data/portfolioData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#070b14] text-slate-400 border-b border-white/5 py-2.5 px-4 sm:px-8 text-xs font-medium z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Side: Contact Details */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href={`mailto:${topBarData.email}`}
            className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{topBarData.email}</span>
          </a>
          <a
            href={`tel:${topBarData.phone}`}
            className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{topBarData.phone}</span>
          </a>
          <a
            href={topBarData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4">
          <span className="text-slate-500 hidden md:inline text-[11px] font-mono tracking-wider uppercase">Socials:</span>
          <a
            href={topBarData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Contact"
            className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={topBarData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-[#38BDF8] transition-colors cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={topBarData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-[#38BDF8] transition-colors cursor-pointer"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={topBarData.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="hover:text-[#38BDF8] transition-colors cursor-pointer"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href={topBarData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-[#38BDF8] transition-colors cursor-pointer"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
