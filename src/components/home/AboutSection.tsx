import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
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

  const stats = [
    { 
      icon: <Calendar className="h-10 w-10 text-primary-500" />, 
      value: '27+', 
      label: 'Years of Experience' 
    },
    { 
      icon: <MapPin className="h-10 w-10 text-primary-500" />, 
      value: '50+', 
      label: 'Destinations' 
    },
    { 
      icon: <Users className="h-10 w-10 text-primary-500" />, 
      value: '10k+', 
      label: 'Happy Customers' 
    },
    { 
      icon: <Star className="h-10 w-10 text-primary-500" />, 
      value: '4.9', 
      label: 'Average Rating' 
    },
  ];

  return (
    <section className="py-20 bg-white" id="about-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4"
            >
              The Lindberg Story
            </motion.h2>
            <motion.div variants={itemVariants}>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            </motion.div>
            <motion.p variants={itemVariants} className="text-neutral-600 mb-6">
              Since 1996, Lindberg Holidays & Safaris has been crafting unforgettable journeys, 
              blending adventure, culture, and comfort for travelers across the globe. 
              Based in Nairobi, Kenya, our passion for travel and commitment to exceptional 
              service make us the trusted choice for safaris, ticketing, transport, and 
              tailor-made holiday experiences.
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-600 mb-6">
              Whether you're exploring the untamed beauty of Africa or venturing across 
              different continents, we turn your dreams into reality, creating moments 
              that stay with you forever. With Lindberg, it's not just travel—it's amazing experiences.
            </motion.p>
            <motion.a 
              variants={itemVariants}
              href="/about" 
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
            >
              Learn More About Us
            </motion.a>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                variants={itemVariants} 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg transform translate-y-8"
              >
                <img 
                  src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg" 
                  alt="Safari experience" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                variants={itemVariants} 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg" 
                  alt="Wildlife viewing" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                variants={itemVariants} 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg" 
                  alt="Beach destination" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                variants={itemVariants} 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg transform translate-y--8"
              >
                <img 
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg" 
                  alt="Cultural experience" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-lg shadow-sm"
            >
              <div className="mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-2">{stat.value}</h3>
              <p className="text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;