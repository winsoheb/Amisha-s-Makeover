import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FeaturedServices from '../components/FeaturedServices';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const Home = () => {
  return (
    <div className="w-full">
      {/* Premium Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Authentic Indian Bridal Makeup" 
            className="w-full h-full object-cover scale-105 opacity-80"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-nude/90 via-blush/80 to-white/60 backdrop-blur-[2px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <motion.div 
                initial={{ opacity: 0, width: 0 }} 
                animate={{ opacity: 1, width: 48 }} 
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[2px] bg-gold mb-6"
              />
              <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-dark mb-4 font-semibold">Premium Bridal & Editorial Makeup</h2>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] mb-6 text-dark leading-[1.1]">
                Enhancing Your <br/>
                <span className="italic font-light text-gold text-shadow-sm">Natural</span> Beauty
              </h1>
              <p className="font-body text-gray-700 mb-10 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                Exclusive makeup services tailored perfectly to your unique features, utilizing world-class products and advanced techniques for an unforgettable transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link to="/contact" className="px-8 py-4 bg-dark text-white text-xs text-center tracking-[0.2em] uppercase hover:bg-gold transition-all duration-500 shadow-luxury hover:shadow-glow rounded-sm">
                  Book A Date
                </Link>
                <Link to="/portfolio" className="px-8 py-4 bg-glass text-center text-dark text-xs tracking-[0.2em] uppercase hover:bg-dark hover:text-white transition-all duration-500 rounded-sm">
                  Explore Portfolio
                </Link>
              </div>
            </motion.div>

            {/* Optional Floating Abstract Or Image for 2026 vibe */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div className="relative w-[32rem] h-[40rem] rounded-t-full overflow-hidden shadow-2xl border-4 border-white/50 bg-white ml-auto">
                 <img 
                    src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Traditional Indian Bride" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute bottom-16 -left-12 bg-glass shadow-luxury p-6 rounded-sm w-48 text-center border-l-4 border-gold"
               >
                  <p className="text-3xl font-heading text-dark mt-1">300+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Happy Brides</p>
               </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <FeaturedServices />

      {/* Intro / Highlight Section */}
      <section className="py-32 bg-dark text-white px-4 relative overflow-hidden">
        {/* Abstract Gold Glow Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="w-12 h-[2px] bg-gold mx-auto mb-10"></div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.3] mb-12 font-light">
              "Makeup is not a mask that covers up your beauty; it's a weapon that helps you <span className="text-gold italic">express</span> who you are from the inside."
            </h2>
            <p className="uppercase tracking-[0.4em] text-white/50 text-xs">- Amisha, Lead Artist</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Instagram Feed Section (Refined UI) */}
      <section className="py-24 bg-nude/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex justify-center items-center mb-6 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">Join The Gram</h2>
            <a href="#" className="font-body text-gray-500 hover:text-gold transition-colors text-sm tracking-widest uppercase">@amishasmakeover</a>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600'
            ].map((imgUrl, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="aspect-square relative group overflow-hidden bg-gray-100 rounded-sm"
              >
                <img 
                  src={imgUrl}
                  alt={`Instagram feed image ${i+1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <svg className="text-white w-10 h-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
