import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { topBarData } from '../../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href={topBarData.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs shadow-2xl shadow-emerald-500/30 border border-emerald-400/40 cursor-pointer group transition-all"
    >
      <div className="relative flex items-center justify-center">
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-200" />
      </div>
      <span className="hidden sm:inline font-mono tracking-wide">WhatsApp Chat</span>
    </motion.a>
  );
};
