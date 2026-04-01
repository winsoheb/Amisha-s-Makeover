import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const servicesList = [
  {
    category: "Bridal Packages",
    items: [
      {
        name: "HD Bridal Makeup",
        price: "₹15,000",
        description: "High Definition makeup that looks flawless in person and on camera, providing a long-lasting, soft-focus finish.",
        features: ["Premium Mink Lashes", "Advanced Hair Styling", "Signature Draping", "HD Base Preparation"]
      },
      {
        name: "Airbrush Bridal",
        price: "₹20,000",
        description: "Water-resistant, silicone-based makeup for a 16-hour long-lasting finish that feels completely weightless.",
        features: ["Premium Lashes", "Advanced Hair Styling", "Signature Draping", "Airbrush Silicon Base"]
      }
    ]
  },
  {
    category: "Pre-Wedding & Party",
    items: [
      {
        name: "Engagement Makeup",
        price: "₹10,000",
        description: "Soft, romantic, and glowing looks perfect for your ring ceremony under studio lighting.",
        features: ["Basic Lashes", "Elegant Hair Styling", "Saree/Dupatta Draping", "HD Base"]
      },
      {
        name: "Party Glam",
        price: "₹5,000",
        description: "Stand out as a guest with elegant, striking party makeup featuring bold eyes or glowing skin.",
        features: ["Standard Lashes", "Simple Hair Styling", "Luxury Products", "Long-lasting Setting"]
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="w-full pt-16 lg:pt-24 pb-32 bg-light">
      
      {/* Page Header */}
      <section className="bg-nude/40 py-24 px-4 text-center relative overflow-hidden mt-8">
        <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] font-semibold text-xs mb-4">
            Exclusive Packages
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-dark mb-6 leading-tight">Our Services</h1>
          <div className="w-24 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Luxury makeup packages curated for your special moments, ensuring you look breathtaking in every light.
          </p>
        </motion.div>
      </section>

      {/* Pricing Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {servicesList.map((section, idx) => (
          <div key={idx} className="mb-24 last:mb-0">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="flex items-center gap-6 mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-dark font-light whitespace-nowrap">
                {section.category}
              </h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-gold/40 to-transparent"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {section.items.map((service, sIdx) => (
                <motion.div 
                  key={sIdx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-luxury hover:-translate-y-1 transition-all duration-500 relative group rounded-sm"
                >
                  <div className="absolute top-0 right-0 bg-dark text-white px-6 py-2 text-sm font-semibold tracking-widest rounded-bl-xl origin-top-right transform group-hover:scale-105 transition-transform duration-300">
                    {service.price}
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl text-dark mb-4 pr-24 font-light">{service.name}</h3>
                  <p className="text-gray-500 font-body text-sm mb-8 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-4 mb-10 border-t border-gray-50 pt-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-600 font-body">
                        <Check size={18} className="text-gold mr-4 shrink-0 mt-[2px]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/contact" className="inline-flex w-full justify-center items-center py-4 border border-dark text-dark text-xs tracking-[0.2em] font-medium uppercase hover:bg-dark hover:text-white transition-colors duration-300">
                    Book Experience
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-dark text-white p-12 lg:p-16 text-center rounded-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <Info className="w-12 h-12 text-gold mx-auto mb-6" />
          <h3 className="font-heading text-3xl md:text-4xl leading-tight mb-4 font-light">Custom Quotes Available</h3>
          <p className="text-gray-400 font-body mb-8 max-w-xl mx-auto leading-relaxed text-sm md:text-base">For editorial photoshoots, commercial campaigns, or luxury destination weddings, please contact us for bespoke pricing and availability.</p>
          <a href="/contact" className="inline-block px-10 py-4 bg-gold text-dark text-xs tracking-[0.2em] uppercase font-bold hover:bg-white hover:shadow-glow transition-all duration-300">
            Request Custom Quote
          </a>
        </motion.div>
      </section>
      
    </div>
  );
};

export default Services;
