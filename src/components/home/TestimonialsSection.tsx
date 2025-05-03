import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="py-20 bg-primary-500 bg-opacity-5" 
      id="testimonials-section"
    >
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
            What Our Clients Say
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-neutral-600">
            Hear from travelers who have experienced the Lindberg difference and 
            created unforgettable memories with our safari and travel services.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill={i < currentTestimonial.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-neutral-700 text-center mb-6 italic">
              "{currentTestimonial.comment}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-bold text-neutral-800">{currentTestimonial.name}</p>
              <p className="text-neutral-500 text-sm">{currentTestimonial.location}</p>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-neutral-600" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-neutral-600" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <a 
            href="/about#testimonials" 
            className="inline-block px-6 py-3 border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white rounded-full transition-colors duration-300"
          >
            View All Testimonials
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;