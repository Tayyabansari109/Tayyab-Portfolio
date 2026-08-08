import React from 'react';
import { motion } from 'motion/react';
import { pricingPlansData } from '../data/portfolioData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan?: (planTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const handleOrderClick = (planTitle: string) => {
    if (onSelectPlan) {
      onSelectPlan(planTitle);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="w-full py-20 px-4 sm:px-8 bg-[#0B1120] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-[#111827] border border-white/10 px-4 py-1.5 rounded-full font-mono shadow-md">
            TRANSPARENT INVESTMENT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Pricing Plans
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Flexible packages crafted for startups, businesses, and custom enterprise applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlansData.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-[28px] p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#111827]/90 border-2 border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/20'
                    : 'bg-[#111827]/60 border border-white/10 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white text-[10px] font-extrabold tracking-widest uppercase shadow-lg flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge || 'MOST POPULAR'}</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-slate-400 text-xs min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 p-4 rounded-2xl bg-[#0B1120] border border-white/10 text-center">
                    <span className="text-3xl font-extrabold text-[#38BDF8] font-mono">
                      {plan.price}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                      WHAT'S INCLUDED:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-[#38BDF8]/20 flex items-center justify-center shrink-0 text-[#38BDF8]">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleOrderClick(plan.title)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white hover:scale-[1.02] shadow-[#38BDF8]/20'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-[#38BDF8]'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
