import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home setActiveTab={setActiveTab} />;
      case 'menu': return <Menu />;
      case 'story': return <Story />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-light dark:bg-secondary font-sans text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-1 relative h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
