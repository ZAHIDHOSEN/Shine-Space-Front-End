"use client";
import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';

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
        
        {/* Left Side: Contact Details */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Dont have an API yet? No problem. You can still reach us via email or phone directly.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:support@terrasync.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-semibold">Email Us</p>
                <p className="font-bold text-slate-900">support@terrasync.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-semibold">Call Anytime</p>
                <p className="font-bold text-slate-900">+880 1700-000000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form Mockup */}
        <div className="relative">
          <form 
            onSubmit={handleFakeSubmit} 
            className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 space-y-4 shadow-sm"
          >
            <input required type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            <input required type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            <textarea required placeholder="How can we help you?" rows={4} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
            
            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                isSuccess 
                ? "bg-green-600 text-white" 
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
              }`}
            >
              {isSubmitting ? (
                <><Loader2 className="animate-spin" size={20} /> Sending...</>
              ) : isSuccess ? (
                <><CheckCircle size={20} /> Message Received!</>
              ) : (
                <><Send size={20} /> Send Inquiry</>
              )}
            </button>
          </form>

          {/* Success Overlay Hint */}
          {isSuccess && (
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-green-600 font-medium animate-bounce">
              We ll get back to you soon!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}