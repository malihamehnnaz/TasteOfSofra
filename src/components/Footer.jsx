import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-primary/20 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(45deg, #0f172a, #4a0404, #0f172a)",
          backgroundSize: "200% 200%"
        }}
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{ 
          duration: 10, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.h2 
              className="text-2xl font-bold text-primary"
              style={{ fontFamily: '"Reem Kufi", sans-serif' }}
              animate={{ textShadow: ["0 0 0px #d4af37", "0 0 15px #d4af37", "0 0 0px #d4af37"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Taste of Sofra
            </motion.h2>
            <p className="text-gray-400 text-xs max-w-xs leading-relaxed" style={{ fontFamily: '"Reem Kufi", sans-serif' }}>
              Experience the essence of Ottoman cuisine in a modern, elegant setting.
            </p>
            <div className="flex gap-4 mt-2">
              <SocialLink href="https://www.instagram.com/taste_of_sofra/" label="Instagram" />
              <SocialLink href="https://www.tiktok.com/@taste_of_sofra" label="TikTok" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3">
            <ContactItem icon={Phone} text="+61 2 9123 4567" />
            <ContactItem icon={Mail} text="reservations@tasteofsofra.com.au" />
            <ContactItem icon={MapPin} text="123 Culinary Ave, Sydney NSW 2000" />
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Clock size={16} />
              <span className="font-bold" style={{ fontFamily: '"Reem Kufi", sans-serif' }}>Opening Hours</span>
            </div>
            <p className="text-gray-400 text-sm" style={{ fontFamily: '"Reem Kufi", sans-serif' }}>Mon - Thu: 5pm - 10pm</p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: '"Reem Kufi", sans-serif' }}>Fri - Sun: 12pm - 11pm</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            © 2025 Taste of Sofra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, label, icon }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`
      relative px-4 py-2 rounded-full overflow-hidden group
      ${label === 'Instagram' ? 'bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600' : 'bg-black border border-white/20'}
    `}
  >
    <motion.div
      className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
    />
    <span className={`
      relative z-10 text-xs font-bold tracking-widest uppercase
      ${label === 'Instagram' ? 'text-white' : 'text-white group-hover:text-primary transition-colors'}
    `} style={{ fontFamily: '"Reem Kufi", sans-serif' }}>
      {label}
    </span>
    {label === 'TikTok' && (
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    )}
  </motion.a>
);

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 text-gray-300">
    <Icon size={14} className="text-primary" />
    <span className="text-sm" style={{ fontFamily: '"Reem Kufi", sans-serif' }}>{text}</span>
  </div>
);

export default Footer;