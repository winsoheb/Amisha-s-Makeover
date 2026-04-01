import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
  const phoneNumber = "918766535650"; 
  const message = "Hello Amisha! I would like to inquire about your makeup services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <motion.a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-luxury hover:bg-[#20ba59] hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:animate-pulse" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-dark text-white text-xs px-3 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 flex gap-4 pr-24 border-t border-gray-100">
         <Link to="/contact" className="w-full py-3 bg-dark text-white text-center text-xs tracking-widest uppercase font-semibold active:scale-95 transition-transform rounded-sm">
           Book Now
         </Link>
      </div>
    </>
  );
};

export default WhatsAppButton;
