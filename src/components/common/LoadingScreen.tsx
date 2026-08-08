import React from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120] text-white"
    >
      <div className="relative flex items-center justify-center mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="w-20 h-20 rounded-full border-4 border-t-sky-400 border-r-purple-600 border-b-transparent border-l-transparent"
        />
        <div className="absolute p-3 rounded-xl bg-slate-900/80 border border-slate-700 shadow-xl">
          <Code2 className="w-8 h-8 text-sky-400" />
        </div>
      </div>

      <motion.h2
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent font-mono tracking-wider"
      >
        &lt;Muhammad Tayyab /&gt;
      </motion.h2>

      <p className="mt-2 text-sm text-slate-400 font-sans tracking-wide">
        Loading portfolio experience...
      </p>
    </motion.div>
  );
};
