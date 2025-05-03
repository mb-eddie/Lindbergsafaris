import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, ChevronRight } from 'lucide-react';
import { tours } from '../../data/tours';

const ToursSection: React.FC = () => {
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

  // Display featured tours or the first 3
  const displayedTours = tours.filter(t => t.featured).length > 0 
    ? tours.filter(t => t.featured)
    : tours.slice(0, 3);

  return (
    <section className="py-20 bg-neutral-50" id="tours-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4"
          >
            Popular Tours
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-neutral-600">
            Discover our most sought-after safari and travel packages, meticulously designed 
            to provide extraordinary experiences that blend adventure, comfort, and cultural immersion.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedTours.map((tour) => (
            <motion.div
              key={tour.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{tour.name}</h3>
                  <div className="flex items-center text-white/90">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tour.destination}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4 line-clamp-2">{tour.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-neutral-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="text-neutral-800 font-bold">
                    ${tour.price.toLocaleString()}
                  </div>
                </div>
                <a 
                  href={`/services#${tour.id}`} 
                  className="inline-block w-full text-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <a 
            href="/services" 
            className="inline-block px-6 py-3 border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white rounded-full transition-colors duration-300"
          >
            View All Tours
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ToursSection;