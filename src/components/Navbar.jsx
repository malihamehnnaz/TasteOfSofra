import React from 'react';
import { Home, Utensils, BookOpen, Image, Mail, Instagram, Facebook, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ activeTab, setActiveTab, darkMode, toggleDarkMode }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Utensils },
    { id: 'story', label: 'Our Story', icon: BookOpen },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-secondary dark:bg-black border-b border-primary/20 h-20 flex items-center justify-between px-6 md:px-12 shadow-2xl z-50 relative transition-all duration-500"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
        <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary font-serif text-xl font-bold bg-primary/10">S</div>
        <span className="text-primary font-serif text-lg tracking-widest hidden md:block">TASTE OF SOFRA</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-1 md:gap-8">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <li 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="group flex flex-col items-center cursor-pointer relative px-2 py-1"
            >
              <span className={`
                text-xs md:text-sm uppercase tracking-widest transition-all duration-300 font-medium
                ${isActive ? 'text-primary' : 'text-gray-400 hover:text-primary/70'}
              `}>
                {item.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-primary"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="hidden md:flex gap-4 border-l border-gray-700 pl-6">
          <a href="https://www.instagram.com/taste_of_sofra/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;