import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Flame, ChefHat } from 'lucide-react';
import Footer from './Footer';

const galleryImages = [
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704804693966-WASDDIDJSM0DUDFVGP7C/Trio+of+Dips+2.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704801958624-IEAH2ZQYOE2A9QSXUJ4C/411C2374.jpg?format=1000w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1719254874984-WQPLNO36JIIMWES6LT6K/411C2339+copy+4.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704806677594-IPWOE868JG69J7YBQLZC/444A2413+copy+2.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704802044786-AAMMFMHU3VQOLAYH3EVS/WEB5487950-03307AF8-8BF0-B414-F4B2-43C32AABB33C.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704803654303-44PEOJLS9JVDKP3X3FY5/411C2318.jpg?format=750w",
];

const Home = ({ setActiveTab }) => {
  return (
    <div className="h-full overflow-y-auto bg-light dark:bg-dark scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center py-12">
        {/* Pattern Background */}
        <div className="absolute inset-0 pattern-grid pointer-events-none opacity-10"></div>
        
        {/* Animated Background Blob */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block mb-4">
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold border-b-2 border-primary pb-1">
                Halal Fine Dining
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-secondary dark:text-white mb-4 leading-[0.9]">
              Authentic <br/>
              <span className="italic text-primary">Turkish Flavors</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-lg mb-6 font-light leading-relaxed mx-auto md:mx-0">
              Indulge in the rich and authentic flavors of Taste of Sofra, where every dish is crafted with love and tradition. From sizzling kebabs to stone-baked pide, every bite is a journey of rich flavors.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('contact')}
                className="px-10 py-4 bg-primary text-secondary rounded-sm hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-xl shadow-primary/20 border border-transparent hover:border-primary"
              >
                Reserve Table
              </motion.button>
              <motion.button 
                whileHover={{ x: 10 }}
                onClick={() => setActiveTab('menu')}
                className="group flex items-center gap-2 text-secondary dark:text-white uppercase tracking-widest text-sm font-bold hover:text-primary transition-colors"
              >
                View Menu 
                <span className="text-primary group-hover:translate-x-2 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Image Content with Arch Mask */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-lg md:max-w-none"
          >
            <div className="relative z-10 arch-mask overflow-hidden shadow-2xl aspect-[3/4] border-4 border-primary/20">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1719254874984-WQPLNO36JIIMWES6LT6K/411C2339+copy+4.jpg?format=2500w" 
                alt="Premium Ottoman Feast" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-white/95 dark:bg-secondary/90 backdrop-blur-md p-4 rounded-full shadow-2xl text-center w-28 h-28 flex flex-col items-center justify-center border-2 border-primary"
              >
                <span className="text-3xl font-serif text-primary font-bold">5</span>
                <span className="text-[8px] uppercase tracking-widest text-secondary dark:text-white font-bold mt-1">Star Rated</span>
                <div className="flex gap-0.5 mt-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={8} className="fill-primary text-primary" />)}
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-0 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-secondary/20 rounded-full blur-3xl -z-0"></div>
          </motion.div>

        </div>
      </section>

      {/* Animated Gallery Marquee */}
      <section className="py-16 bg-secondary dark:bg-black overflow-hidden relative border-y border-primary/20">
        <div className="absolute inset-0 pattern-grid opacity-5"></div>
        
        <div className="container mx-auto px-6 mb-10 text-center relative z-10">
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-3">A Feast for the Eyes</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Culinary Masterpieces</h2>
        </div>

        <div className="flex relative z-10 w-full">
          <motion.div 
            className="flex gap-6 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 40 
            }}
          >
            {[...galleryImages, ...galleryImages].map((src, index) => (
              <div key={index} className="w-[280px] h-[380px] flex-shrink-0 rounded-sm overflow-hidden border border-white/10 shadow-2xl group relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                 <img src={src} alt="Gallery Item" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0" />
                 <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-0.5 bg-primary mb-2"></div>
                    <span className="text-white font-serif text-lg">Taste of Sofra</span>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-black/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Flame, title: "Charcoal Grilled", desc: "Authentic cooking over open flames for that distinct smoky flavor." },
              { icon: Award, title: "Premium Cuts", desc: "Sourcing only the finest A5 Wagyu and locally raised lamb." },
              { icon: ChefHat, title: "Master Chefs", desc: "Decades of experience bringing Ottoman traditions to life." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="text-center p-8 border border-gray-100 dark:border-white/5 rounded-2xl hover:shadow-xl transition-shadow duration-300 bg-light dark:bg-dark"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-serif text-dark dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dish Spotlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img 
              src="https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1719254874984-WQPLNO36JIIMWES6LT6K/411C2339+copy+4.jpg?format=2500w" 
              alt="Signature Dish" 
              className="rounded-lg shadow-2xl w-full object-cover aspect-video"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-4">Chef's Selection</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary dark:text-white mb-6">The Royal Platter</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed mb-8">
              A curated selection of our finest meats, including the signature Wagyu Adana, lamb cutlets, and chicken tawook, served with saffron rice and grilled vegetables. A feast fit for a Sultan.
            </p>
            <button 
              onClick={() => setActiveTab('menu')}
              className="text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors uppercase tracking-widest text-xs font-bold"
            >
              View Full Menu
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-6 text-secondary">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              "The best Turkish dining experience in Sydney.<br/>Absolutely world-class."
            </h2>
            <p className="text-white/70 uppercase tracking-widest text-sm font-bold">— James M., Food Critic</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;