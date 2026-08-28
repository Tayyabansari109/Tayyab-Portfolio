import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resumeData, heroData, projectsData, skillsData } from '../data/portfolioData';
import { Printer, Download, ArrowLeft, Mail, Phone, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap, Award, Languages, Code2, CheckCircle2 } from 'lucide-react';
import  photo  from '../assets/images/WhatsAppImage2.jpg';

export const ResumePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Triggers native window print dialog configured to save as PDF or print
    window.print();
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 sm:px-8 bg-[#0B1120] text-white print:bg-white print:text-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Navigation & Action Header (Hidden in Print View) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 print:hidden">
          <Link
            to="/"
            className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10 text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4 text-[#38BDF8]" />
              <span>Print Resume</span>
            </button> */}

            {/* <button
              onClick={handleDownloadPDF}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#38BDF8]/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button> */}
          </div>
        </div>

        {/* Resume Paper Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 sm:p-12 shadow-2xl print:border-none print:shadow-none print:p-0 print:bg-white print:text-slate-900"
        >
          {/* Header Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-8 mb-8">
            <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-sky-400 shrink-0 shadow-xl">
              <img
                src={photo}
                alt={resumeData.profile.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 font-sans tracking-tight">
                {resumeData.profile.name}
              </h1>
              <p className="text-lg font-semibold text-sky-400 font-mono mt-1">
                {resumeData.profile.title}
              </p>

              {/* Contact Quick Details */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span className="break-all">{resumeData.profile.email}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  {resumeData.profile.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {resumeData.profile.location}
                </span>
                <a href={resumeData.profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors break-all">
                  <Github className="w-3.5 h-3.5 text-sky-400" />
                  github.com/Tayyabansari109
                </a>
                <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors break-all">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  linkedin.com/in/tayyab-ansari-9a2557390
                </a>
              </div>
            </div>
          </div>

          {/* About Summary */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5" /> Professional Summary
            </h2>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed">
              {resumeData.profile.summary}
            </p>
          </div>

          {/* Two-Column Resume Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Main Column: Experience & Projects */}
            <div className="md:col-span-8 space-y-8">
              {/* Work Experience */}
              <div>
                <h2 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
                  <Briefcase className="w-5 h-5" /> Work Experience
                </h2>

                <div className="space-y-6">
                  {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="relative pl-6 border-l-2 border-sky-500/40">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-sky-400 mb-2">
                        {exp.company} — <span className="text-slate-400 font-normal">{exp.location}</span>
                      </div>
                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-2">
                        {exp.description}
                      </p>
                      <ul className="space-y-1">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-start gap-2">
                            <span className="text-sky-400 mt-0.5">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Key Projects */}
              <div>
                <h2 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
                  <Code2 className="w-5 h-5" /> Key Portfolio Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectsData.slice(0, 4).map((p) => (
                    <div key={p.id} className="p-4 rounded-2xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200">
                      <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">{p.name}</h4>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 mb-3 line-clamp-2">{p.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {p.technologies.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Education, Certifications, Skills, Languages */}
            <div className="md:col-span-4 space-y-8">
              {/* Education */}
              <div>
                <h2 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
                  <GraduationCap className="w-5 h-5" /> Education
                </h2>
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="mb-4">
                    <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900">{edu.degree}</h3>
                    <div className="text-xs font-medium text-sky-400">{edu.institution}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{edu.period} | {edu.score}</div>
                  </div>
                ))}
              </div>

              {/* Technical Skills List */}
              <div>
                <h2 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
                  <Code2 className="w-5 h-5" /> Skills & Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skillsData.map((s) => (
                    <span key={s.name} className="px-3 py-1.5 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {s.name} ({s.percentage}%)
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
                  <Award className="w-5 h-5" /> Certifications
                </h2>
                <div className="space-y-3">
                  {resumeData.certifications.map((cert) => (
                    <div key={cert.id} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white dark:text-white light:text-slate-900">{cert.title}</div>
                        <div className="text-[11px] text-slate-400">{cert.issuer} ({cert.year})</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
                  <Languages className="w-5 h-5" /> Languages
                </h2>
                <div className="space-y-2">
                  {resumeData.languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">{lang.name}</span>
                      <span className="text-slate-400">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
