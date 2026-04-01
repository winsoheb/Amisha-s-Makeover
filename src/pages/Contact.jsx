import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bridal Makeup',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Fire background email silently
    fetch("https://formsubmit.co/ajax/winsoheb@gmail.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: "New Booking Inquiry - Amisha's Makeover",
        Name: formData.name,
        Phone: formData.phone,
        Service: formData.service,
        Date: formData.date,
        Email: formData.email || "Not provided",
        Message: formData.message || "No additional message."
      })
    }).catch((error) => console.error("Email API Error:", error));

    // 2. Open WhatsApp immediately with pre-filled details
    const whatsappMessage = `*New Booking Inquiry 🌟*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Email:* ${formData.email || "N/A"}\n\n*Details:* ${formData.message || "N/A"}`;
    const whatsappUrl = `https://wa.me/918766535650?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // 3. Show success state and reset form
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: 'HD Bridal Makeup', date: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full pt-16 lg:pt-24 pb-32 bg-light">
      
      <section className="bg-dark text-white py-24 px-4 text-center mt-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-muted"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-gold mb-6 font-light">Join Our Schedule</h1>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mb-8"></div>
          <p className="font-body text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's create something beautiful together. Reach out for availability, personalized packages, and booking inquiries.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <div className="xl:col-span-2 space-y-16">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl text-dark mb-6 font-light">Get In Touch</h3>
              <p className="text-gray-500 font-body mb-8 leading-relaxed">
                Due to high demand, we recommend booking bridals at least 6-12 months in advance and party makeup 1-3 months ahead.
              </p>
            </div>

            <div className="space-y-10 group/list">
              {[
                { icon: Phone, title: "Phone / WhatsApp", text: "+91 87665 35650" },
                { icon: Mail, title: "Email Studio", text: "hello@amishasmakeover.com" },
                { icon: MapPin, title: "Studio Location", text: "123 Luxury Avenue, Fashion District, New Delhi 110001" }
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-sm shrink-0 transform group-hover:-translate-y-1 transition-transform duration-300 border border-gold/10">
                    <item.icon className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-heading text-xl text-dark font-medium">{item.title}</h4>
                    <p className="text-gray-500 mt-2 font-body text-sm leading-relaxed max-w-[200px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="h-[1px] w-1/3 bg-gray-200"></div>
          </div>

          {/* Premium Booking Form */}
          <div className="xl:col-span-3">
            <div className="bg-white p-8 md:p-14 shadow-luxury rounded-sm border-t-2 border-gold relative">
              <h3 className="font-heading text-3xl text-dark mb-10 font-light">Secure A Date</h3>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-blush/20 border border-gold/30 p-10 text-center rounded-sm"
                >
                  <h4 className="text-3xl font-heading text-dark mb-4">Inquiry Received</h4>
                  <p className="text-gray-600">Thank you for considering us for your special day. Our team will contact you within 24-48 hours with availability.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-200 focus:border-gold p-2 outline-none transition-colors font-body text-dark"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-200 focus:border-gold p-2 outline-none transition-colors font-body text-dark"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="service" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block">Service Required *</label>
                      <div className="relative">
                        <select 
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-gray-200 focus:border-gold p-2 outline-none transition-colors font-body text-dark appearance-none rounded-none"
                        >
                          <option>HD Bridal Makeup</option>
                          <option>Airbrush Bridal Makeup</option>
                          <option>Engagement Makeup</option>
                          <option>Party Glam</option>
                          <option>Editorial/Photoshoot</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="date" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block">Event Date *</label>
                      <input 
                        type="date" 
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-200 focus:border-gold p-2 outline-none transition-colors font-body text-dark uppercase text-xs tracking-wider"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-200 focus:border-gold p-2 outline-none transition-colors font-body text-dark"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block">Additional Details</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-light border border-gray-100 p-4 focus:border-gold focus:ring-0 outline-none transition-colors font-body text-dark resize-none mt-2"
                      placeholder="Share details about the venue location, timing, number of people needing makeup, or any special requests."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                     <button 
                       type="submit"
                       className="w-full bg-dark text-white py-5 flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold hover:shadow-glow transition-all duration-300 rounded-sm"
                     >
                       <span>Submit Inquiry</span>
                       <Send size={16} />
                     </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
