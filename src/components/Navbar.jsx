import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll Progress logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[60]"
        style={{ scaleX }} 
      />

      <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-glass shadow-sm py-4 tracking-wide' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <Link to="/" className="flex items-center group relative z-50">
              <span className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-dark transition-transform duration-300 group-hover:scale-105">
                Amisha's <span className="text-gold italic font-light">Makeover</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`relative text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-gold font-medium' : 'text-dark hover:text-gold'}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-gold rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-dark text-white text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300 shadow-md hover:shadow-glow rounded-sm"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center z-50 relative">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-dark hover:text-gold transition-colors p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col justify-center items-center h-screen w-screen px-4"
            >
              <div className="flex flex-col items-center space-y-8 text-center w-full max-w-sm">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-heading text-4xl block transition-colors ${location.pathname === link.path ? 'text-gold italic' : 'text-dark hover:text-gold'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 w-full border-t border-gray-100 mt-4"
                >
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)} 
                    className="block w-full py-4 bg-dark text-white text-center text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors shadow-luxury rounded-sm"
                  >
                    Book Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
