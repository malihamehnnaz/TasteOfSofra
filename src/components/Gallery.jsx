import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const images = [
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704804693966-WASDDIDJSM0DUDFVGP7C/Trio+of+Dips+2.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704801958624-IEAH2ZQYOE2A9QSXUJ4C/411C2374.jpg?format=1000w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1719254874984-WQPLNO36JIIMWES6LT6K/411C2339+copy+4.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704806677594-IPWOE868JG69J7YBQLZC/444A2413+copy+2.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704802044786-AAMMFMHU3VQOLAYH3EVS/WEB5487950-03307AF8-8BF0-B414-F4B2-43C32AABB33C.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704803654303-44PEOJLS9JVDKP3X3FY5/411C2318.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1718108724176-C2CRFU5I5NMJ3YD0OJ5K/411C4938%2Bcopy.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704804051148-66MEU6259KKNU3LD7JPA/411C9477.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1702922279831-CAG5WDZEOCRM2HCK7F77/444a2471.jpeg?format=500w"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Gallery = () => {
  return (
    <section className="h-full overflow-y-auto bg-light dark:bg-secondary transition-colors duration-500">
      <div className="max-w-7xl mx-auto p-8 md:p-16">
        
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-3">Visual Journey</p>
          <h2 className="text-5xl md:text-6xl font-serif text-secondary dark:text-primary mb-6">The Gallery</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-square overflow-hidden relative group cursor-pointer rounded-sm shadow-lg border border-transparent hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-colors duration-500 z-10 flex items-center justify-center">
                <span className="text-primary font-serif text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View</span>
              </div>
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[1px] border-primary/30 m-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Gallery;