import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <span className="font-heading text-3xl font-semibold tracking-wide block mb-6">Amisha's <span className="text-gold italic">Makeover</span></span>
            <p className="text-gray-300 font-body text-sm leading-relaxed max-w-sm mb-6">
              Enhancing your natural beauty with luxury makeup services for weddings, parties, and editorial shoots.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gold hover:bg-gold transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gold hover:bg-gold transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Amisha</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Book an Appointment</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4 font-body text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Fashion District<br/>New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold shrink-0" />
                <span>hello@amishasmakeover.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Amisha's Makeover. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
