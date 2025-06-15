
import emailjs from 'emailjs-com';
import { ContactFormData } from '../types';
import { EMAILJS_CONFIG } from '../constants';

export const sendEmail = async (formData: ContactFormData): Promise<void> => {
  if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
    console.error('EmailJS Service ID is not configured.');
    // Simulate success for demo purposes if not configured
    // In a real app, throw an error or handle appropriately
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Simulated email sent:", formData);
            resolve();
        }, 1000);
    }); 
  }

  try {
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formData as unknown as Record<string, unknown>, // Corrected type casting
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};
