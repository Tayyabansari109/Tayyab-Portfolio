import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import logo from '../assets/images/Logo2.png';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isResumePage = location.pathname === '/resume';

  const sections = ['home', 'about', 'services', 'portfolio', 'pricing', 'techstack', 'contact'];
  const activeSection = useScrollSpy(sections, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'About Me', href: '#about', sectionId: 'about' },
    { name: 'Services', href: '#services', sectionId: 'services' },
    { name: 'Portfolio', href: '#portfolio', sectionId: 'portfolio' },
    { name: 'Pricing', href: '#pricing', sectionId: 'pricing' },
    { name: 'Tech Stack', href: '#techstack', sectionId: 'techstack' },
    { name: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (isResumePage) {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1120]/90 light:bg-white/95 backdrop-blur-md shadow-2xl border-b border-white/10'
          : 'bg-[#0B1120]/80 light:bg-white/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <img
            src={logo}
            alt="Tayyab Ansari Logo"
            className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform shadow-lg shadow-[#38BDF8]/20"
          />
          <div className="text-xl sm:text-2xl font-black tracking-tighter text-slate-100 dark:text-white light:text-slate-900 whitespace-nowrap">
            <span className="text-[#38BDF8]">TAYYAB</span>.DEV
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {!isResumePage &&
            navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-[#38BDF8]'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-[#38BDF8]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] rounded-full" />
                  )}
                </button>
              );
            })}

          {isResumePage && (
            <Link
              to="/"
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-300 hover:text-[#38BDF8] transition-colors"
            >
              ← Back to Home
            </Link>
          )}

          {/* Resume Page Link Button */}
          <Link
            to="/resume"
            className={`ml-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              isResumePage
                ? 'bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white shadow-lg shadow-[#38BDF8]/20'
                : 'bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-[#38BDF8]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
            className="ml-3 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            title={`Current: ${theme === 'dark' ? 'Night' : 'Day'} Mode (Click to switch)`}
          >
            {theme === 'dark' ? (
              <Moon className="w-5 h-5 text-indigo-400" />
            ) : (
              <Sun className="w-5 h-5 text-amber-500" />
            )}
          </button>
        </div>

        {/* Mobile Controls (Theme Toggle & Hamburger) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all active:scale-95"
            title={`Current: ${theme === 'dark' ? 'Night' : 'Day'} Mode (Click to switch)`}
          >
            {theme === 'dark' ? (
              <Moon className="w-5 h-5 text-indigo-400" />
            ) : (
              <Sun className="w-5 h-5 text-amber-500" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2.5 rounded-xl bg-white/5 text-slate-200 border border-white/10 cursor-pointer transition-all"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 dark:bg-[#0B1120]/98 light:bg-white/98 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-6 py-4 flex flex-col gap-2 shadow-2xl backdrop-blur-xl">
          {!isResumePage &&
            navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.sectionId)}
                className={`text-left py-2.5 px-4 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.sectionId
                    ? 'bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-800 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100'
                }`}
              >
                {link.name}
              </button>
            ))}

          <Link
            to="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <FileText className="w-5 h-5" />
            <span>View Full Resume</span>
          </Link>
        </div>
      )}
    </nav>
  );
};
