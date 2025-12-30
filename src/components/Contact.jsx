import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Footer from './Footer';

const Contact = () => {
  return (
    <section className="h-full overflow-y-auto bg-light dark:bg-secondary transition-colors duration-500">
      <div className="max-w-7xl mx-auto p-8 md:p-16 min-h-full flex flex-col justify-center">
        
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-3">Reservations & Enquiries</p>
          <h2 className="text-5xl md:text-6xl font-serif text-secondary dark:text-white mb-6">Contact Us</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center text-secondary dark:text-primary border border-secondary/20 dark:border-primary/20 rounded-full group-hover:bg-secondary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-black transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-2">Location</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light">331 Guildford Rd,<br/>Guildford NSW 2161</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center text-secondary dark:text-primary border border-secondary/20 dark:border-primary/20 rounded-full group-hover:bg-secondary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-black transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light">(02) 9681 2721</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center text-secondary dark:text-primary border border-secondary/20 dark:border-primary/20 rounded-full group-hover:bg-secondary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-black transition-all duration-300">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-2">Opening Hours</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light">Mon - Sun: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.696067826864!2d150.9836383152088!3d-33.85346898066046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a36666666667%3A0x6666666666666666!2s331%20Guildford%20Rd%2C%20Guildford%20NSW%202161!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau" 
                width="100%" 
                height="200" 
                style={{ border: 0, filter: 'grayscale(100%)' }} 
                allowFullScreen="" 
                loading="lazy"
                className="opacity-70 hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-secondary dark:focus:border-primary transition-colors placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-secondary dark:focus:border-primary transition-colors placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-secondary dark:focus:border-primary transition-colors placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-secondary dark:focus:border-primary transition-colors">
                    <option value="" className="text-gray-500">Guests</option>
                    <option value="2" className="text-black">2 People</option>
                    <option value="4" className="text-black">4 People</option>
                    <option value="6" className="text-black">6+ People</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  placeholder="Message or Special Request" 
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-secondary dark:focus:border-primary transition-colors placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-secondary dark:bg-primary text-white dark:text-secondary font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all shadow-xl"
              >
                Send Enquiry
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;