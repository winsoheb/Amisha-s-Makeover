import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const categories = ['All', 'Bridal Makeup', 'Engagement', 'Party', 'HD/Airbrush', 'Photoshoot'];

const portfolioItems = [
  // Bridal Makeup
  { id: 1, category: 'Bridal Makeup', img: '/img/bridal/bridal1.jpg' },
  { id: 2, category: 'Bridal Makeup', img: '/img/bridal/bridal2.jpg' },
  // Engagement
  { id: 3, category: 'Engagement', img: '/img/party/party1.png' },
  { id: 4, category: 'Engagement', img: '/img/party/party2.png' },
  // Party
  { id: 5, category: 'Party', img: '/img/party/party3.png' },
  { id: 6, category: 'Party', img: '/img/party/party4.png' },
  // HD/Airbrush
  { id: 7, category: 'HD/Airbrush', img: '/img/bridal/bridal3.png' },
  { id: 8, category: 'HD/Airbrush', img: '/img/bridal/bridal4.png' },
  // Photoshoot 
  { id: 9, category: 'Photoshoot', img: '/img/photoshoot/photoshoot1.png' },
  { id: 10, category: 'Photoshoot', img: '/img/photoshoot/photoshoot2.png' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full pt-16 lg:pt-24 pb-32 bg-white">
      
      {/* Header */}
      <section className="bg-blush/30 py-24 px-4 text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-dark uppercase tracking-[0.3em] font-semibold text-xs mb-4">
            Curated Expressions
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-dark mb-6 leading-tight">Lookbook</h1>
          <div className="w-24 h-[2px] bg-gold mx-auto mb-6"></div>
          <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg pt-4">
            Discover our favorite looks, characterized by flawless skin and striking features.
          </p>
        </motion.div>
      </section>

      {/* Before / After Slider Section */}
      <section className="bg-light py-24 px-4">
        <BeforeAfterSlider />
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Category Filter */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 mb-10 md:mb-20 md:sticky top-[80px] z-30 bg-white/90 backdrop-blur-md py-4 hide-scrollbar px-2 -mx-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex-shrink-0 ${
                activeCategory === cat 
                  ? 'bg-dark text-white shadow-luxury' 
                  : 'bg-transparent text-gray-500 hover:text-dark hover:bg-nude/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout Container */}
        <div className="masonry-grid">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="masonry-item relative group overflow-hidden cursor-pointer rounded-sm shadow-sm"
                onClick={() => setLightboxImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={`${item.category} makeup`} 
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Advanced Lightbox trigger overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <Maximize2 className="text-white w-6 h-6 mb-4" />
                    <span className="text-white font-heading text-2xl tracking-wide font-light border-b border-gold pb-2 inline-block">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center p-4 backdrop-blur-lg"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
            >
              <X size={40} strokeWidth={1.5} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
              src={lightboxImg} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Portfolio;
