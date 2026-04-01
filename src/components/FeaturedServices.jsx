import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Flawless, long-lasting makeup designed specifically for your special day. HD and Airbrush options available.',
    image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800',
    delay: 0.1
  },
  {
    title: 'Party Makeup',
    description: 'Glamorous and stunning looks for engagement parties, receptions, and special events.',
    image: 'https://images.pexels.com/photos/1105342/pexels-photo-1105342.jpeg?auto=compress&cs=tinysrgb&w=800',
    delay: 0.2
  },
  {
    title: 'Editorial & Fashion',
    description: 'High-impact, creative styling for photoshoots, brand campaigns, and fashion shows.',
    image: 'https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=800',
    delay: 0.3
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, width: 0 }} 
              whileInView={{ opacity: 1, width: 48 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-gold mb-6"
            ></motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl lg:text-6xl text-dark font-light leading-tight"
            >
              Curated <span className="italic text-gold">Experiences</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <Link to="/services" className="inline-flex items-center text-xs tracking-[0.2em] font-semibold uppercase text-dark hover:text-gold transition-colors pb-2 border-b border-dark hover:border-gold">
               View All Services <ArrowRight size={16} className="ml-2" />
             </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative overflow-hidden mb-8 rounded-sm shadow-sm hover:shadow-luxury transition-shadow duration-500 aspect-[3/4]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                 <div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-light mb-4 text-dark transform group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                    <p className="font-body text-gray-500 mb-6 line-clamp-2 leading-relaxed text-sm md:text-base">{service.description}</p>
                 </div>
                 <Link to="/services" className="inline-flex items-center text-gold font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
                   Explore Package <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
