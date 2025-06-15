
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../services/emailService';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await sendEmail(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto p-8 bg-cyber-bg/50 dark:bg-gray-800/50 shadow-2xl rounded-lg border border-cyber-secondary/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-cyber-text-secondary dark:text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-cyber-secondary/70 rounded-md shadow-sm focus:outline-none focus:ring-cyber-primary focus:border-cyber-primary sm:text-sm text-cyber-text-primary dark:text-gray-100 placeholder-cyber-text-secondary/50"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-cyber-text-secondary dark:text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-cyber-secondary/70 rounded-md shadow-sm focus:outline-none focus:ring-cyber-primary focus:border-cyber-primary sm:text-sm text-cyber-text-primary dark:text-gray-100 placeholder-cyber-text-secondary/50"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cyber-text-secondary dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-transparent border border-cyber-secondary/70 rounded-md shadow-sm focus:outline-none focus:ring-cyber-primary focus:border-cyber-primary sm:text-sm text-cyber-text-primary dark:text-gray-100 placeholder-cyber-text-secondary/50"
          placeholder="Your inquiry or message..."
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-cyber-bg dark:text-gray-900 bg-cyber-primary hover:bg-cyber-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyber-accent disabled:opacity-50 transition-colors duration-300"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {submitStatus === 'success' && (
        <p className="text-sm text-green-400">Message sent successfully! I'll get back to you soon.</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-sm text-red-400">Failed to send message. Please try again or contact me directly.</p>
      )}
    </motion.form>
  );
};

export default ContactForm;
