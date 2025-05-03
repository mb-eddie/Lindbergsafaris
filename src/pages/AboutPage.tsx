import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import { Calendar, Users, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqRef, faqInView] = useInView({
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

  const galleryImages = [
    "https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg",
    "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg",
    "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
    "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg",
    "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    "https://images.pexels.com/photos/17711937/pexels-photo-17711937/free-photo-of-people-driving-jeep-on-safari-trip.jpeg"
  ];

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our story, our mission, and the team behind Lindberg Safaris"
        backgroundImage="https://images.pexels.com/photos/15871685/pexels-photo-15871685/free-photo-of-aerial-photo-of-safari-trip.jpeg"
      />
      
      {/* About Section */}
      <section id="who-we-are" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={aboutRef}
            initial="hidden"
            animate={aboutInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.span 
                variants={itemVariants} 
                className="inline-block py-1 px-3 bg-primary-500 text-white font-medium rounded mb-4"
              >
                Our Story
              </motion.span>
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4"
              >
                Who We Are
              </motion.h2>
              <motion.div variants={itemVariants}>
                <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              </motion.div>
              <motion.p variants={itemVariants} className="text-neutral-600 mb-6">
                Founded in 1996, Lindberg Holidays & Safaris began with a simple vision: to share the 
                wonders of African wildlife and landscapes with curious travelers from around the world. 
                What started as a small team of passionate safari guides has evolved into a 
                comprehensive travel company while maintaining our core values of authenticity, 
                environmental responsibility, and exceptional personal service.
              </motion.p>
              <motion.p variants={itemVariants} className="text-neutral-600 mb-6">
                Based in Nairobi, Kenya, we've spent over 25 years perfecting the art of African 
                travel experiences. Our team combines deep local knowledge with international 
                hospitality standards to create journeys that balance adventure and comfort. 
                We believe that travel should be transformative, creating meaningful connections 
                between people, wildlife, and landscapes.
              </motion.p>
              <motion.p variants={itemVariants} className="text-neutral-600 mb-6">
                Today, we offer a full spectrum of travel services including expertly guided safaris, 
                luxury accommodations, transportation, and flight bookings. While our operations have 
                expanded beyond Kenya to destinations across Africa and beyond, our commitment to 
                personalized service and sustainable tourism remains unchanged.
              </motion.p>
              
              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Calendar className="h-8 w-8 text-primary-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-800">27+</h4>
                  <p className="text-neutral-600">Years of Experience</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Users className="h-8 w-8 text-primary-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-800">10k+</h4>
                  <p className="text-neutral-600">Happy Travelers</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Award className="h-8 w-8 text-primary-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-800">15+</h4>
                  <p className="text-neutral-600">Industry Awards</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Globe className="h-8 w-8 text-primary-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-800">50+</h4>
                  <p className="text-neutral-600">Destinations</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="relative">
              <img 
                src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg" 
                alt="Lindberg Safaris Team" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg md:max-w-xs">
                <p className="italic text-neutral-600">
                  "Our mission is to create extraordinary travel experiences while preserving the 
                  natural environments and supporting the communities that make our destinations special."
                </p>
                <p className="mt-2 font-medium text-neutral-800">— James Lindberg, Founder</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Safari Gallery
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600">
              Glimpses of the extraordinary moments and breathtaking landscapes that await you 
              on a Lindberg Safaris adventure.
            </p>
          </div>
          
          <motion.div 
            ref={galleryRef}
            initial="hidden"
            animate={galleryInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`rounded-lg overflow-hidden shadow-md ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${
                  index === 3 ? 'lg:col-span-2' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`Safari gallery image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ height: index === 0 ? '600px' : '300px' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section id="impact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Our Impact
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600">
              We believe in responsible tourism that benefits wildlife, environments, and local communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <div className="bg-primary-500 bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Community Support</h3>
              <p className="text-neutral-600 mb-4">
                We partner with local communities to ensure tourism benefits those who call our destinations home. 
                This includes fair employment practices, purchasing local goods, and supporting community-led projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Educational scholarships for local students</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Support for women's cooperatives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Local healthcare initiatives</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <div className="bg-primary-500 bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Conservation Efforts</h3>
              <p className="text-neutral-600 mb-4">
                We dedicate a portion of every safari booking to wildlife conservation projects. 
                We also minimize our environmental footprint through responsible operational practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Anti-poaching initiatives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Habitat restoration projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Wildlife research funding</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <div className="bg-primary-500 bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565A2.5 2.5 0 1722.5 1h-21a2.5 2.5 0 100 5H3.055z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Sustainable Practices</h3>
              <p className="text-neutral-600 mb-4">
                We're committed to reducing our environmental impact through responsible operational 
                practices and partnering with eco-conscious suppliers and accommodations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Plastic reduction initiatives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Carbon offset programs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Eco-friendly accommodation partners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Testimonials
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600">
              Don't just take our word for it. Hear what our clients have to say about their experiences with Lindberg Safaris.
            </p>
          </div>
          
          <motion.div 
            ref={testimonialsRef}
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-neutral-600 italic mb-4">"{testimonial.comment}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faqs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600">
              Find answers to common questions about traveling with Lindberg Safaris.
            </p>
          </div>
          
          <motion.div 
            ref={faqRef}
            initial="hidden"
            animate={faqInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="max-w-4xl mx-auto divide-y divide-neutral-200"
          >
            {faqs.map((faq) => (
              <motion.div 
                key={faq.id} 
                variants={itemVariants}
                className="py-6"
              >
                <h3 className="text-lg font-bold text-neutral-800 mb-3">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;