import React from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { FileCode, Palette, LayoutGrid, Terminal, Atom, Flame, GitBranch, Code2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode':
        return <FileCode className="w-6 h-6 text-orange-500" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-amber-400" />;
      case 'Atom':
        return <Atom className="w-6 h-6 text-sky-400 animate-spin-slow" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-rose-500" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-500" />;
      default:
        return <Code2 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="techstack" className="w-full py-20 px-4 sm:px-8 bg-[#0B1120] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-[#111827] border border-white/10 px-4 py-1.5 rounded-full font-mono shadow-md">
            CORE COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Tech Stack & Skills
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Mastery of modern web engineering technologies and frontend frameworks.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-[#111827]/60 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#38BDF8]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0B1120] border border-white/10">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-2xl font-bold font-mono text-[#38BDF8]">
                    {skill.percentage}%
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  {skill.name}
                </h3>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-[#0B1120] h-2.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  style={{ backgroundColor: skill.color }}
                  className="h-full rounded-full shadow-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
