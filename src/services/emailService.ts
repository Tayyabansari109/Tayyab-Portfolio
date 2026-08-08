import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types';

// EmailJS credentials are loaded from .env.local (VITE_* variables)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

// The recipient email address (your Gmail)
const TO_EMAIL = 'ta759777@gmail.com';

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // If EmailJS credentials are not configured, fail clearly instead of silently simulating.
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.warn(
      'EmailJS is not configured. Create a .env.local file with VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID.'
    );
    return {
      success: false,
      message: `Email service is not configured yet. Please email directly at ${TO_EMAIL}.`,
    };
  }

  try {
    emailjs.init(PUBLIC_KEY);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: TO_EMAIL,
        to_name: 'Muhammad Tayyab',
      }
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully. Muhammad Tayyab will get back to you shortly.',
      };
    }

    return {
      success: false,
      message: `Email service returned an unexpected response (status ${response.status}). Please try emailing directly at ${TO_EMAIL}.`,
    };
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: error?.text || `Failed to send your message. Please email directly at ${TO_EMAIL}.`,
    };
  }
};
