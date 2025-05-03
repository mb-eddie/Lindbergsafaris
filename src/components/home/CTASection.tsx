import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
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
    <section className="relative py-20" id="cta-section">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3369102/pexels-photo-3369102.jpeg" 
          alt="Safari landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
          >
            Ready for Your Next Adventure?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg mb-8 text-white/90">
            Join our WhatsApp channel to receive the latest travel deals, tips, and exclusive offers.
            Never miss an opportunity for your next unforgettable journey!
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white p-4 rounded-lg">
              <img 
                src="https://via.placeholder.com/150x150/ffffff/000000?text=QR+Code" 
                alt="WhatsApp QR Code" 
                className="w-32 h-32"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Scan the QR Code</h3>
              <p className="mb-4">
                Get the latest travel deals, tips and so much more!
              </p>
              <p className="font-bold">Never miss an adventure!</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300 font-medium"
            >
              Contact Us to Plan Your Trip
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;