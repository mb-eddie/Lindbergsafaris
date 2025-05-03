import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Compass, Hotel, Car, Plane, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesPage: React.FC = () => {
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

  const services = [
    {
      id: 'tours',
      title: 'Safari Tours',
      description: 'Embark on an unforgettable journey through Africa\'s most spectacular wildlife reserves. Our expertly guided safaris showcase the continent\'s incredible biodiversity in its natural habitat. From the Great Migration in the Serengeti to the lush wetlands of the Okavango Delta, we curate extraordinary wildlife encounters while ensuring comfort, safety, and sustainable tourism practices.',
      features: [
        'Customized itineraries tailored to your interests and preferences',
        'Professional, knowledgeable local guides with extensive experience',
        'Luxury and mid-range accommodation options in prime wildlife areas',
        'Comfortable, well-maintained safari vehicles with guaranteed window seats',
        'All-inclusive packages with meals, park fees, and activities'
      ],
      image: 'https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg',
      icon: <Compass className="h-12 w-12 text-primary-500" />
    },
    {
      id: 'booking',
      title: 'Hotel Booking',
      description: 'Secure the perfect accommodation for your journey with our comprehensive hotel booking service. We partner with a carefully selected portfolio of properties ranging from luxury lodges and boutique hotels to comfortable mid-range options across Africa and beyond. Our team personally inspects each property to ensure it meets our standards for quality, service, and location.',
      features: [
        'Competitive rates at a wide range of accommodations',
        'Personalized recommendations based on your preferences and budget',
        'Special perks and upgrades at partner properties',
        'Seamless booking process with confirmed reservations',
        'Assistance with special requests and dietary requirements'
      ],
      image: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg',
      icon: <Hotel className="h-12 w-12 text-primary-500" />
    },
    {
      id: 'transport',
      title: 'Transport Services',
      description: 'Travel comfortably and safely with our comprehensive transport solutions. Whether you need airport transfers, inter-city travel, or a dedicated vehicle throughout your journey, our fleet of well-maintained vehicles and professional drivers ensure a smooth experience. We prioritize your safety, punctuality, and comfort while introducing you to the stunning landscapes along the way.',
      features: [
        'Airport transfers with meet-and-greet service',
        'Private vehicles with professional, experienced drivers',
        'Well-maintained, comfortable fleet including 4x4 safari vehicles',
        'Intercity transfers and cross-border transport',
        'Flexible scheduling to accommodate your itinerary'
      ],
      image: 'https://images.pexels.com/photos/6002001/pexels-photo-6002001.jpeg',
      icon: <Car className="h-12 w-12 text-primary-500" />
    },
    {
      id: 'ticketing',
      title: 'Air Travel Ticketing',
      description: 'Navigating the complexities of air travel is made simple with our comprehensive ticketing service. We secure competitive fares on international and domestic flights, helping you create seamless connections throughout your journey. Our partnerships with major airlines allow us to offer special rates while our expertise ensures efficient routing and comfortable travel experiences.',
      features: [
        'Competitive fares on domestic and international flights',
        'Access to special airline promotions and deals',
        'Efficient routing with optimal connections',
        'Assistance with airline loyalty programs',
        'Comprehensive travel documentation support'
      ],
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg',
      icon: <Plane className="h-12 w-12 text-primary-500" />
    },
    {
      id: 'agri-tourism',
      title: 'Agri-Tourism',
      description: 'Experience the rich agricultural heritage of Africa through our specialized agri-tourism programs. Connect with local farming communities, learn about traditional and modern agricultural practices, and participate in authentic food experiences. These experiences provide valuable insights into sustainable farming methods while supporting local economies and cultural preservation.',
      features: [
        'Visits to local farms, plantations, and agricultural projects',
        'Hands-on experiences with traditional farming methods',
        'Food-to-table experiences featuring local ingredients',
        'Cultural exchanges with farming communities',
        'Educational components on sustainable agriculture'
      ],
      image: 'https://images.pexels.com/photos/2253916/pexels-photo-2253916.jpeg',
      icon: <Sprout className="h-12 w-12 text-primary-500" />
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive travel solutions for your perfect African adventure"
        backgroundImage="https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Comprehensive Travel Solutions
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600">
              At Lindberg Safaris, we offer end-to-end travel services to create seamless, 
              unforgettable experiences. From expertly guided safaris to comfortable accommodations 
              and reliable transportation, we handle every aspect of your journey with care and attention to detail.
            </p>
          </div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-24"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                id={service.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-neutral-800">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="/contact" 
                    className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
                  >
                    Inquire About {service.title}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6">
              Ready to Plan Your Perfect Journey?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our team of travel experts is ready to help you create a customized itinerary 
              that combines our services to perfectly match your travel dreams and preferences.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300 font-medium"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;