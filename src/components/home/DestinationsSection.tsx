import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, ChevronRight } from 'lucide-react';
import { destinations } from '../../data/destinations';

const DestinationsSection: React.FC = () => {
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

  // Show only featured destinations or the first 6
  const displayedDestinations = destinations.filter(d => d.featured).length > 0 
    ? destinations.filter(d => d.featured)
    : destinations.slice(0, 6);

  return (
    <section className="py-20 bg-white" id="destinations-section">
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
            Top Destinations
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-neutral-600">
            Explore our handpicked selection of extraordinary destinations across Africa and beyond. 
            From iconic wildlife reserves to pristine beaches and cultural hotspots.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedDestinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.country}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{destination.name}</h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">{destination.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-neutral-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-neutral-500">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{destination.price}</span>
                  </div>
                </div>
                <a 
                  href={`/destinations#${destination.id}`} 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Discover More
                  <ChevronRight className="ml-1 h-4 w-4" />
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
            href="/destinations" 
            className="inline-block px-6 py-3 border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white rounded-full transition-colors duration-300"
          >
            See All Destinations
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;