import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { Modal } from '../components/common/Modal';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'React' | 'Bootstrap' | 'JavaScript'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions: Array<'All' | 'React' | 'Bootstrap' | 'JavaScript'> = [
    'All',
    'React',
    'Bootstrap',
    'JavaScript',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-20 px-4 sm:px-8 bg-[#0B1120] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-[#111827] border border-white/10 px-4 py-1.5 rounded-full font-mono shadow-md">
            FEATURED WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            My Portfolio
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Explore real-world web applications built with clean React components, modern styling, and Firebase.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white shadow-xl shadow-[#38BDF8]/20'
                  : 'bg-[#111827] text-slate-300 border border-white/10 hover:border-[#38BDF8]/50 hover:text-[#38BDF8]'
              }`}
            >
              {cat} {cat === 'All' ? `(${projectsData.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-[28px] overflow-hidden shadow-2xl hover:border-[#38BDF8]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative h-52 overflow-hidden bg-[#0B1120]">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-[#0B1120]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-[#38BDF8] text-white hover:scale-110 transition-transform shadow-lg cursor-pointer"
                      title="Quick Preview"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#111827] text-white hover:scale-110 transition-transform shadow-lg cursor-pointer border border-white/10"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-[#38BDF8]" />
                    </a>
                  </div>

                  {project.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#7C3AED]/90 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#38BDF8] font-mono">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#0B1120] text-slate-300 text-xs font-medium border border-white/10 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer hover:opacity-90"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || 'Project Overview'}
      >
        {selectedProject && (
          <div className="space-y-5">
            <div className="h-64 rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div>
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                Tech Stack Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-sky-400 transition-colors shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </a>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
