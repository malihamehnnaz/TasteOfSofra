import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';

const categories = [
   { id: 'burgers', label: 'Burgers', img: 'https://tasteofsofra.com.au/wp-content/uploads/2025/08/Burgers-1-1536x860.jpg' },
   { id: 'kebabs', label: 'Kebabs & Rolls', img: 'https://tasteofsofra.com.au/wp-content/uploads/2025/08/Kebabs-1-1536x860.jpg' },
  { id: 'pide', label: 'Turkish Pide', img: 'https://tasteofsofra.com.au/wp-content/uploads/2025/08/Gozleme-Pide-1-1536x860.jpg' },
  { id: 'gozleme', label: 'Gozleme', img: 'https://tasteofsofra.com.au/wp-content/uploads/2025/08/Gozleme-Pide-1-1536x860.jpg' },
  { id: 'pizza', label: 'Pizza', img: 'https://tasteofsofra.com.au/wp-content/uploads/2025/08/Pizzas-1-1536x860.jpg' },
  { id: 'seafood', label: 'SeaFood', img: 'https://images.squarespace-cdn.com/content/v1/59f2a68fd0e62898cc350a8c/1704801958624-IEAH2ZQYOE2A9QSXUJ4C/411C2374.jpg?format=1000w' },
  ];

const menuItems = [
 
  // Burgers
  { id: 1, name: 'Beef Burger', category: 'burgers', price: '12.00', desc: 'Premium beef patty, lettuce, tomato, onion, cheese, and our signature sauce.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 3, name: 'Chicken Burger', category: 'burgers', price: '12.00', desc: 'House-marinated chicken breast, lettuce, cheese, and mayo.', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },

 
  // Kebabs & Rolls
  { id: 10, name: 'Beef Kebab Roll', category: 'kebabs', price: '14.00', desc: 'Beef with lettuce, tomato, red onion, and choice of up to 3 sauces.', img: 'https://cdn-mamafatma.b-cdn.net/wp-content/uploads/2023/10/3-27.jpg' },
  { id: 11, name: 'Chicken Kebab Roll', category: 'kebabs', price: '14.00', desc: 'Chicken with lettuce, tomato, red onion, and choice of sauces.', img: 'https://yummyrecipes.uk/fit-chicken-kebab-wrap/Fit_Chicken_Kebab_-_10.jpg' },
  { id: 12, name: 'Mixed Kebab Roll', category: 'kebabs', price: '14.00', desc: 'A combination of beef and chicken with salad and sauces.', img: 'https://kebabandpizzanerang.com.au/wp-content/uploads/2018/06/lamb-and-beef-kebab-1.jpg' },
  { id: 13, name: 'Kebab Plate', category: 'kebabs', price: '23.00', desc: 'Choice of meat served with rice, salad (cabbage, tabouli, ezme), and bread.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },

  // Pide
  { id: 15, name: 'Cheese Lovers', category: 'pide', price: '18.00', desc: 'Traditional Turkish flatbread with mozzarella and feta.', img: 'https://media.istockphoto.com/id/1155362263/photo/traditional-turkish-cuisine-turkish-pizza-pita-with-a-different-stuffing-meat-cheese-slices.jpg?s=612x612&w=0&k=20&c=4pNeTu9kCeJ_VQ62wJDFBPczHujJEDxnfBe0ry99KDs=' },
  { id: 16, name: 'Spinach & Cheese Pide', category: 'pide', price: '18.00', desc: 'Traditional spinach and feta filling.', img: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc9367b61-00e2-455f-8b16-4184e69a00bb.tif' },
  { id: 18, name: 'Sujuk & Cheese Pide', category: 'pide', price: '18.00', desc: 'Turkish garlic sausage and cheese.', img: 'https://www.littlespicejar.com/wp-content/uploads/2024/03/Turkish-Pide-Turkish-Flatbread-9-540x720.jpg' },
  { id: 19, name: 'Kiymali Pide (Minced Meat)', category: 'pide', price: '18.00', desc: 'Spiced minced meat with onions and tomatoes.', img: 'https://i.pinimg.com/736x/c8/65/d0/c865d029b4df63f37b1eaf53b527b864.jpg' },
  { id: 21, name: 'Chicken Pide', category: 'pide', price: '18.00', desc: 'Marinated chicken and cheese.', img: 'https://img.freepik.com/premium-photo/turkish-pide-dish-with-three-different-fillings-lamb-beef-cheddar-cheese-black-table-close-up-selective-focus_207126-5007.jpg?semt=ais_hybrid&w=740&q=80' },
  { id: 22, name: 'Vegetarian Pide', category: 'pide', price: '18.00', desc: 'Mushroom, capsicum, olives, onion, and tomato.', img: 'https://media.istockphoto.com/id/1918961876/photo/traditional-turkish-meat-pide-on-wooden.jpg?s=612x612&w=0&k=20&c=aPejZlRCE24LpVMeYjRqcAAzxYsV96-licin1eJBMnU=' },
  
  // Gozleme
  { id: 24, name: 'Spinach Gozleme', category: 'gozleme', price: '14.00', desc: 'Grilled spinach with mushrooms, feta, and mozzarella.', img: 'https://t4.ftcdn.net/jpg/10/17/01/67/360_F_1017016777_S7OnhrvDKzVEyl6SS0iyNsbISGKDSqWf.jpg' },
  { id: 28, name: 'Chicken Gozleme', category: 'gozleme', price: '14.00', desc: 'Grilled chicken with feta, mozzarella, and mushrooms.', img: 'https://static.vecteezy.com/system/resources/thumbnails/069/067/897/small/turkish-gozleme-flatbread-free-photo.jpg' },
  { id: 29, name: 'Sucuk Gozleme', category: 'gozleme', price: '14.00', desc: 'Turkish garlic sausage with egg and cheese.', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidj1dl_j1_1kd20DeZO5jfj77ATMTyKUuaSg2A7ZFhe7Pow4aHUwFIvv75zW5SoROIIUjQJ5OCWok5IIen5DNeOD7CNxr5ghbHJJc7zY7-RxVgCStqisN-Y03p1t_KBrW8JjG42nfoRIJp/s640/GOZLEME2editresize.jpg' },
  { id: 30, name: 'Peri Peri Chicken Gozleme', category: 'gozleme', price: '14.00', desc: 'Grilled chicken with peri peri sauce and cheese.', img: 'https://cookingwithayeh.com/wp-content/uploads/2025/01/Gozleme-Easy-Yogurt-Dough-7.jpg' },
  { id: 31, name: 'Just Cheese Gozleme', category: 'gozleme', price: '14.00', desc: 'A signature mix of meat and vegetables.', img: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },

  // Pizza
  { id: 32, name: 'BBQ Chicken Pizza', category: 'pizza', price: '18.00', desc: 'Chicken, BBQ sauce, and cheese.', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 33, name: 'Peri Peri Chicken Pizza', category: 'pizza', price: '18.00', desc: 'Chicken with peri peri sauce and cheese.', img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 34, name: 'Meat Lovers Pizza', category: 'pizza', price: '18.00', desc: 'Loaded with chicken, beef, and BBQ sauce.', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 35, name: 'Sofra Special Pizza', category: 'pizza', price: '18.00', desc: 'A signature mix of toppings including Turkish sausage (sucuk).', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 36, name: 'Vegetarian Pizza', category: 'pizza', price: '18.00', desc: 'Mushroom, capsicum, olives, onion, and tomato.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },

  // SeaFood
  { id: 37, name: 'Fish & Chips', category: 'seafood', price: '13.00', desc: 'Battered Fish with Lemon Wedge & Tartare Sauce', img: 'https://recipesblob.oetker.com.my/assets/7d0d0f4478054d1e8daba3a0c7e96ba6/1272x764/crispyfry-fish-chips.webp' },
  { id: 38, name: 'Fish & Chips with Salad', category: 'seafood', price: '18.00', desc: 'Battered Fish with Lemon Wedge & Tartare Sauce with Salad', img: 'https://media1.agfg.com.au/images/content/4017.jpg' },

  // Sides & Snacks
  { id: 39, name: 'Halal Snack Pack (HSP)', category: 'sides', price: '22.00', desc: 'Beef, chicken, or mixed meat over hot chips with choice of sauces.', img: 'https://images.unsplash.com/photo-1627907222043-9c1a4d0f6b63?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 40, name: 'Heart Attack in a Box', category: 'sides', price: '35.00', desc: 'A combo featuring a burger, snack pack, and a drink.', img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 41, name: 'Gym Pack', category: 'sides', price: '25.00', desc: 'High-protein option with chicken/beef fillets, rice, and salad.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },
  { id: 42, name: 'Trio of Dips', category: 'sides', price: '28.00', desc: 'A curated selection of our signature hummus, babaganoush, and beetroot dip, served with warm stone-baked bread.', img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60' },

];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('burgers');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="h-full overflow-y-auto bg-light dark:bg-secondary transition-colors duration-500">
      <div className="max-w-7xl mx-auto p-8 md:p-16">
        
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4">Authentic Flavors</p>
          <h2 className="text-6xl md:text-7xl font-serif text-secondary dark:text-primary mb-4">Our Menu</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            Indulge in sizzling kebabs, crispy gozleme, stone-baked pide, and more. Every bite is a journey of rich flavors and tradition, made fresh and served with passion.
          </p>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center flex-wrap gap-6 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                relative px-8 py-3 overflow-hidden group transition-all duration-500
                ${activeCategory === cat.id ? 'text-secondary dark:text-secondary' : 'text-gray-500 dark:text-gray-400'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`relative z-10 font-serif text-xl tracking-wide ${activeCategory === cat.id ? 'font-bold' : 'font-medium'}`}>
                {cat.label}
              </span>
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-sm -z-0"
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group flex flex-col md:flex-row gap-6 items-center md:items-start bg-white dark:bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/30"
              >
                <div className="w-full md:w-40 h-40 overflow-hidden rounded-md flex-shrink-0">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left w-full">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-2xl font-serif text-secondary dark:text-primary group-hover:text-tertiary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-tertiary dark:text-white mt-2 md:mt-0">${item.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-light leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            * 100% Halal Certified | 15% Surcharge on Public Holidays
          </p>
        </div>

      </div>
      <Footer />
    </section>
  );
};

export default Menu;