import React, { useState } from 'react';
import { motion } from 'motion/react';
import { servicesData } from '../data/portfolioData';
import { Service } from '../types';
import { Modal } from '../components/common/Modal';
import { Code, Atom, Layout, Flame, Palette, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-7 h-7 text-sky-400" />;
      case 'Atom':
        return <Atom className="w-7 h-7 text-sky-400 animate-spin-slow" />;
      case 'Layout':
        return <Layout className="w-7 h-7 text-purple-400" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-amber-500" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-pink-400" />;
      case 'GitBranch':
        return <GitBranch className="w-7 h-7 text-rose-400" />;
      default:
        return <Code className="w-7 h-7 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="w-full py-20 px-4 sm:px-8 relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-[#111827] border border-white/10 px-4 py-1.5 rounded-full font-mono shadow-md">
            WHAT I OFFER
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            My Services
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            High-impact web development solutions engineered with modern React patterns and immersive aesthetics.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-7 rounded-[28px] bg-[#111827]/60 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-[#38BDF8]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0B1120] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#38BDF8]/40 transition-all">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#38BDF8] group-hover:translate-x-1 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill/Service Showcase Banner */}
        <div className="mt-16 bg-[#111827]/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center shadow-2xl">
          <div className="flex flex-col gap-1.5">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest font-mono">Service 01</div>
            <div className="text-lg font-bold text-white">React Engineering</div>
            <div className="w-10 h-1 bg-[#38BDF8] rounded-full"></div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest font-mono">Service 02</div>
            <div className="text-lg font-bold text-white">UI/UX Design</div>
            <div className="w-10 h-1 bg-[#7C3AED] rounded-full"></div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest font-mono">Service 03</div>
            <div className="text-lg font-bold text-white">Firebase Cloud</div>
            <div className="w-10 h-1 bg-[#38BDF8] rounded-full"></div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest font-mono">Service 04</div>
            <div className="text-lg font-bold text-white">Mobile Response</div>
            <div className="w-10 h-1 bg-[#7C3AED] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || 'Service Details'}
      >
        {selectedService && (
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {selectedService.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-sky-400 uppercase tracking-wider">
                Key Features Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => {
                  setSelectedService(null);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg shadow-sky-500/20 cursor-pointer"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
