import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Compass, Hotel, Car, Plane, Sprout } from 'lucide-react';
import { services } from '../../data/services';

const ServicesSection: React.FC = () => {
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

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass': return <Compass className="h-10 w-10 text-primary-500" />;
      case 'hotel': return <Hotel className="h-10 w-10 text-primary-500" />;
      case 'car': return <Car className="h-10 w-10 text-primary-500" />;
      case 'plane': return <Plane className="h-10 w-10 text-primary-500" />;
      case 'sprout': return <Sprout className="h-10 w-10 text-primary-500" />;
      default: return <Compass className="h-10 w-10 text-primary-500" />;
    }
  };

  return (
    <section className="py-20 bg-neutral-50" id="services-section">
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
            Our Services
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-neutral-600">
            From expertly guided safaris to hassle-free hotel bookings and transportation, 
            Lindberg Safaris offers comprehensive travel services to make your journey seamless and unforgettable.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <a 
                href={service.link} 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <a 
            href="/services" 
            className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;