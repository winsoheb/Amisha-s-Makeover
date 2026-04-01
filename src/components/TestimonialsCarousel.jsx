import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    text: "Amisha is literally magical! She made me feel so beautiful on my wedding day. The makeup lasted all night through tears and dancing. Highly recommend her HD bridal package!",
    image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    name: "Ritu Verma",
    role: "Party Guest",
    text: "I booked Amisha for a family reception and she perfectly understood the minimal glam look I wanted. Her hygiene standards and luxury products are totally worth it.",
    image: "https://images.pexels.com/photos/1105342/pexels-photo-1105342.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    name: "Neha Patel",
    role: "Fashion Model",
    text: "Having worked with many artists, Amisha stands out for her professionalism and eye for detail. Her editorial looks are flawless and look amazing on camera.",
    image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-24 bg-blush relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl mb-4 text-dark font-semibold"
          >
            Client Love
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="relative bg-white p-8 md:p-14 shadow-lg mx-auto max-w-4xl">
          <Quote className="absolute top-8 left-8 text-gold/20 w-16 h-16" />
          
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4 md:px-12"
              >
                <p className="font-body text-gray-700 text-lg md:text-xl italic mb-8 relative z-10 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gold"
                  />
                  <div className="text-left">
                    <h4 className="font-heading text-lg font-bold text-dark">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gold tracking-widest uppercase">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-dark/90 text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors z-20 hidden md:flex">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-dark/90 text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors z-20 hidden md:flex">
            <ChevronRight />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx ? 'bg-gold' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
