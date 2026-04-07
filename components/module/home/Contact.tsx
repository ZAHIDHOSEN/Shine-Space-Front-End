"use client";
import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, Loader2, MapPin } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsSubmitting(true);
 
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
      <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

        {/* Left */}
        <div>
          <div className="w-8 h-0.5 bg-[#e8a838] rounded mb-3" />
          <h2 className="text-3xl font-medium text-[#1a3c5e] mb-3">Get in Touch</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Have questions about a property or need help? Reach out to our team directly — we're happy to help.
          </p>

          <div className="space-y-6">
            <a href="mailto:support@shinespace.com" className="flex items-center gap-4 group">
              <div className="w-11 h-11 bg-[#eef2f7] text-[#1a3c5e] rounded-xl flex items-center justify-center group-hover:bg-[#1a3c5e] group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Email Us</p>
                <p className="text-sm font-medium text-[#1a3c5e]">support@shinespace.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-[#fef7e8] text-[#e8a838] rounded-xl flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Call Anytime</p>
                <p className="text-sm font-medium text-[#1a3c5e]">+880 1700-000000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-[#eef2f7] text-[#1a3c5e] rounded-xl flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Location</p>
                <p className="text-sm font-medium text-[#1a3c5e]">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <form onSubmit={handleFakeSubmit} className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-8 space-y-4">
            <input required type="text" placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1a3c5e] outline-none focus:border-[#1a3c5e] transition-colors bg-white" />
            <input required type="email" placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1a3c5e] outline-none focus:border-[#1a3c5e] transition-colors bg-white" />
            <textarea required placeholder="How can we help you?" rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1a3c5e] outline-none focus:border-[#1a3c5e] transition-colors bg-white resize-none" />

            <button type="submit" disabled={isSubmitting || isSuccess}
              className={`w-full py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                isSuccess ? "bg-green-600 text-white" : "bg-[#1a3c5e] text-white hover:bg-[#15304d]"
              }`}>
              {isSubmitting ? (
                <><Loader2 className="animate-spin" size={16} /> Sending...</>
              ) : isSuccess ? (
                <><CheckCircle size={16} /> Message Received!</>
              ) : (
                <><Send size={16} /> Send Inquiry</>
              )}
            </button>

            {isSuccess && (
              <p className="text-center text-xs text-green-600">
                 Well get back to you soon!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}