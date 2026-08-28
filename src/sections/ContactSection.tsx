import React, { useState } from 'react';
import { motion } from 'motion/react';
import { topBarData } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { sendContactEmail } from '../services/emailService';
import { Mail, Phone, Send, Github, Linkedin, Facebook, Instagram, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

interface ContactSectionProps {
  onShowToast: (type: 'success' | 'error' | 'info', message: string) => void;
  selectedPlanTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast, selectedPlanTitle }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: selectedPlanTitle ? `Inquiry regarding ${selectedPlanTitle} Package` : '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update subject if selectedPlanTitle changes
  React.useEffect(() => {
    if (selectedPlanTitle) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${selectedPlanTitle} Package`,
      }));
    }
  }, [selectedPlanTitle]);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      onShowToast('error', 'Please fill in all required fields correctly.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        onShowToast('success', result.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        onShowToast('error', result.message);
      }
    } catch (err) {
      onShowToast('error', 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-8 bg-[#0B1120] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-[#111827] border border-white/10 px-4 py-1.5 rounded-full font-mono shadow-md">
            LET'S COLLABORATE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Contact Me
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Have a project in mind, a question, or want to discuss a custom web development plan? Drop a message below!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-8 rounded-[28px] bg-[#111827]/60 backdrop-blur-xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0B1120] border border-white/10 text-[#38BDF8] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">EMAIL ADDRESS</div>
                    <a href={`mailto:${topBarData.email}`} className="text-base font-semibold text-white hover:text-[#38BDF8] transition-colors">
                      {topBarData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0B1120] border border-white/10 text-[#7C3AED] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">PHONE NUMBER</div>
                    <a href={`tel:${topBarData.phone}`} className="text-base font-semibold text-white hover:text-[#38BDF8] transition-colors">
                      {topBarData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0B1120] border border-emerald-500/30 text-emerald-400 shrink-0">
                    <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        WHATSAPP CHAT
                      </div>
                      <a href={topBarData.whatsapp} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white hover:text-emerald-400 transition-colors">
                        {topBarData.phone}
                      </a>
                    </div>
                    <a
                      href={topBarData.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Chat Now</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4 font-mono">
                  CONNECT ON SOCIAL MEDIA
                </span>
                <div className="flex items-center gap-3">
                  <a href={topBarData.whatsapp} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="p-3 rounded-xl bg-[#0B1120] text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 border border-white/10 transition-all cursor-pointer">
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                  <a href={topBarData.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0B1120] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-white/10 transition-all cursor-pointer">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={topBarData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0B1120] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-white/10 transition-all cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={topBarData.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0B1120] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-white/10 transition-all cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={topBarData.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0B1120] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-white/10 transition-all cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Validation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 rounded-[28px] bg-[#111827]/60 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    YOUR NAME <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#0B1120] text-white border ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-[#38BDF8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/20 text-sm transition-all placeholder:text-slate-500`}
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    YOUR EMAIL <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john123@gmail.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#0B1120] text-white border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-[#38BDF8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/20 text-sm transition-all placeholder:text-slate-500`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  SUBJECT <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. React Web App Consultation"
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0B1120] text-white border ${
                    errors.subject ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-[#38BDF8]'
                  } focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/20 text-sm transition-all placeholder:text-slate-500`}
                />
                {errors.subject && (
                  <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  MESSAGE <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project goals, timeline, or inquiries..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0B1120] text-white border ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-[#38BDF8]'
                  } focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/20 text-sm transition-all resize-none placeholder:text-slate-500`}
                />
                {errors.message && (
                  <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 hover:shadow-xl shadow-[#38BDF8]/20 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>SENDING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
