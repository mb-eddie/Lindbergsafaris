import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Reach out to our team for inquiries, bookings, or personalized travel advice"
        backgroundImage="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600">
              Whether you're ready to book your safari, have questions about our destinations, 
              or need assistance with travel arrangements, our team is here to help.
            </p>
          </div>
          
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-neutral-50 p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">Our Location</h4>
                      <p className="text-neutral-600">
                        Westlands Business Park<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">Phone</h4>
                      <p className="text-neutral-600">
                        +254 123 456 789<br />
                        +254 987 654 321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">Email</h4>
                      <p className="text-neutral-600">
                        info@lindbergsafaris.com<br />
                        bookings@lindbergsafaris.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">Working Hours</h4>
                      <p className="text-neutral-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-neutral-800 mb-1">WhatsApp</h4>
                      <p className="text-neutral-600">
                        +254 123 456 789<br />
                        Scan the QR code below to join our channel
                      </p>
                      <div className="mt-2 bg-white p-2 rounded inline-block">
                        <img 
                          src="https://via.placeholder.com/100x100/ffffff/000000?text=QR+Code" 
                          alt="WhatsApp QR Code" 
                          className="w-24 h-24"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">Send Us a Message</h3>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                        First Name*
                      </label>
                      <input 
                        type="text" 
                        id="first-name" 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Last Name*
                      </label>
                      <input 
                        type="text" 
                        id="last-name" 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address*
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject*
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message*
                    </label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                        required
                      />
                      <span className="ml-2 text-sm text-neutral-600">
                        I agree to the <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to having this website store my submitted information.
                      </span>
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Our Location</h3>
              
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806381!2d36.81026511427508!3d-1.2643842359573748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f41c9ef%3A0x2714733bcd1a8c9!2sWestlands%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1605732037159!5m2!1sen!2sus" 
                  width="800" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Lindberg Safaris Office Location"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;