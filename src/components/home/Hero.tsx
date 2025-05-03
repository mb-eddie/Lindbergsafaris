import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/4047614/pexels-photo-4047614.jpeg',
    title: 'Discover Africa\'s Wildlife',
    subtitle: 'Embark on an unforgettable safari adventure'
  },
  {
    image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
    title: 'Explore Pristine Beaches',
    subtitle: 'Relax in paradise-like coastal destinations'
  },
  {
    image: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg',
    title: 'Experience Cultural Wonders',
    subtitle: 'Immerse yourself in rich traditions and heritage'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial="enter"
          animate={index === current ? "center" : "exit"}
          variants={slideVariants}
          className={`absolute inset-0 ${index === current ? "z-10" : "z-0"}`}
        >
          <div 
            className="absolute inset-0 bg-black bg-opacity-40 z-20"
            aria-hidden="true"
          />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-30 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="max-w-4xl text-white"
          >
            <motion.span 
              variants={itemVariants} 
              className="inline-block py-1 px-3 bg-primary-500 text-white font-medium rounded mb-4"
            >
              Welcome to Lindberg Safaris
            </motion.span>
            <motion.h1 
              variants={itemVariants} 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="/destinations"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center transition-colors duration-300"
              >
                Explore Destinations
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full transition-colors duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-white scale-100" 
                : "bg-white/50 scale-75 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;