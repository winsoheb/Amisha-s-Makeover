import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

// Counter Hook for animated numbers
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return count;
};

const AnimatedNumber = ({ end, suffix = "", prefix = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const count = useCounter(isVisible ? end : 0);

  return (
    <motion.div 
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="inline-block"
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="w-full pt-16 lg:pt-24 pb-24 bg-light overflow-hidden">
      
      {/* Page Header */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full scale-150 transform -translate-y-1/2"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] font-semibold text-xs mb-4">
            Professional Makeup Artist & Stylist
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-dark mb-6 leading-tight">Meet Amisha</h1>
          <div className="w-24 h-[2px] bg-gold mx-auto mb-6"></div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gold/20 transform -translate-x-6 translate-y-6 rounded-sm hidden md:block"></div>
            <img 
              src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Amisha working on a client" 
              loading="lazy"
              className="relative z-10 w-full object-cover shadow-luxury grayscale-[10%] hover:grayscale-0 transition-all duration-700 aspect-[3/4] rounded-sm"
            />
            {/* Small floating badge */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-white p-6 shadow-luxury rounded-sm z-20 max-w-[200px]"
            >
               <Sparkles className="text-gold w-8 h-8 mb-2" />
               <p className="font-heading text-xl text-dark mb-1 font-bold">Award Winning</p>
               <p className="text-[10px] text-gray uppercase tracking-wider">Beauty Artist 2025</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray font-body leading-relaxed order-1 lg:order-2"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-dark mb-8 font-light">
              Philosophy & <span className="text-gold italic">Passion</span>
            </h2>
            <p className="text-lg">
              Hi, I'm Amisha. My journey into the world of makeup started from a simple belief: everyone possesses a unique, natural beauty that deserves to be celebrated, not masked.
            </p>
            <p className="text-lg">
              With over 5 years of professional experience in bridal, editorial, and fashion makeup, I've developed a signature style that focuses on flawless skin, luminous finishes, and customized looks that reflect your personality. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 mt-8 border-t border-gray-100">
              <div className="group">
                <Heart className="text-gold w-8 h-8 mb-4 transform group-hover:scale-110 group-hover:text-dark transition-all duration-300" />
                <h4 className="font-heading text-xl text-dark mb-2">Cruelty-Free</h4>
                <p className="text-sm tracking-wide text-gray-500">We exclusively use premium, ethical, and skin-safe products.</p>
              </div>
              <div className="group">
                <Award className="text-gold w-8 h-8 mb-4 transform group-hover:scale-110 group-hover:text-dark transition-all duration-300" />
                <h4 className="font-heading text-xl text-dark mb-2">Certified Pro</h4>
                <p className="text-sm tracking-wide text-gray-500">Trained and certified at top international beauty academies.</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="bg-dark text-white py-24 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[ 
              { num: 5, suffix: "+", label: "Years Experience" },
              { num: 300, suffix: "+", label: "Happy Brides" },
              { num: 50, suffix: "+", label: "Editorial Shoots" },
              { num: 100, suffix: "%", label: "Client Satisfaction" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading text-gold font-light">
                  <AnimatedNumber end={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
