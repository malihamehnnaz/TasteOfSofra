import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Story = () => {
  return (
    <section className="h-full overflow-y-auto bg-light dark:bg-secondary transition-colors duration-500">
      <div className="max-w-6xl mx-auto p-8 md:p-16 flex flex-col justify-center min-h-full">
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30 z-0 hidden md:block"></div>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704803654303-44PEOJLS9JVDKP3X3FY5/411C2318.jpg?format=750w" 
              alt="Wagyu Shish Kebab" 
              className="w-full relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-black p-4 shadow-xl z-20 border-l-4 border-primary">
                <p className="font-serif text-2xl text-secondary dark:text-primary">100%</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Halal Certified</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Our Philosophy</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary dark:text-white mb-8 leading-tight">
              Purity in Every <br/><span className="italic text-primary">Detail</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light text-lg leading-relaxed">
              <p>
                <span className="text-4xl float-left mr-2 font-serif text-secondary dark:text-primary">A</span>
                t Taste of Sofra, we bring you the authentic flavors of Turkey and the Middle East, made fresh and served with passion. Enjoy the finest kebabs, gozleme, shish-kebabs, pide, pizza, burgers, chicken wings, dips, and salads, all made fresh for you.
              </p>
              <p>
                From the moment you take your first bite, you’ll taste the difference. Our juicy kebabs are grilled to perfection, our gozleme is crispy and packed with flavor, and our stone-baked pide is made fresh daily.
              </p>
              <p>
                Whether you’re dining in or ordering takeaway, every bite is a journey of rich flavors and tradition. Whatever you’re craving, we have something delicious waiting for you.
              </p>
            </div>

            <div className="mt-10 flex justify-center md:justify-start gap-8">
                <div>
                    <p className="font-serif text-3xl text-secondary dark:text-primary">A5</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400">Wagyu Beef</p>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                <div>
                    <p className="font-serif text-3xl text-secondary dark:text-primary">24k</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400">Gold Leaf</p>
                </div>
            </div>

          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Story;