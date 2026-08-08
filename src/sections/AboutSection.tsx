import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { aboutData, heroData } from '../data/portfolioData';
import { Download, Mail, CheckCircle2, Award, Briefcase, Users } from 'lucide-react';
import  photo  from '../assets/images/WhatsAppImage2.jpg';


export const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="w-full py-20 px-4 sm:px-8 bg-[#0B1120] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-[#111827] border border-white/10 px-4 py-1.5 rounded-full font-mono shadow-md">
            GET TO KNOW ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Profile Image Card & Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-4 bg-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl overflow-hidden relative group">
              <div className="h-96 rounded-[24px] overflow-hidden relative">
                <img
                  src={photo}
                  alt="Developer working on React code"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0B1120]/80 backdrop-blur-md border border-white/10 text-white">
                  <div className="font-bold text-base">Muhammad Tayyab</div>
                  <div className="text-xs text-[#38BDF8] font-mono">Frontend React Engineer</div>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#111827]/60 backdrop-blur-xl border border-white/10 text-center shadow-lg">
                <Award className="w-5 h-5 text-[#38BDF8] mx-auto mb-1" />
                <div className="text-lg font-bold text-white font-mono">8 Mo</div>
                <div className="text-[11px] text-slate-400 font-medium">Experience</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#111827]/60 backdrop-blur-xl border border-white/10 text-center shadow-lg">
                <Briefcase className="w-5 h-5 text-[#7C3AED] mx-auto mb-1" />
                <div className="text-lg font-bold text-white font-mono">15+</div>
                <div className="text-[11px] text-slate-400 font-medium">Projects</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#111827]/60 backdrop-blur-xl border border-white/10 text-center shadow-lg">
                <Users className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white font-mono">10+</div>
                <div className="text-[11px] text-slate-400 font-medium">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {aboutData.title}
            </h3>

            <p className="text-slate-300 leading-relaxed text-base">
              {aboutData.bioParagraph1}
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              {aboutData.bioParagraph2}
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {aboutData.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/resume')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white font-bold flex items-center gap-2 shadow-lg shadow-[#38BDF8]/20 cursor-pointer"
              >
                {/* <Download className="w-4 h-4" /> */}
                <span>View Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 font-bold flex items-center gap-2 cursor-pointer transition-all"
              >
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                <span>Contact Me</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
