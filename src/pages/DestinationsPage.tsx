import React, { useState, useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Search } from 'lucide-react';
import { destinations } from '../data/destinations';

const DestinationsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  // Get unique continents for filter
  const continents = [...new Set(destinations.map(dest => dest.continent))];

  // Filter destinations based on continent and search term
  useEffect(() => {
    let result = destinations;
    
    // Filter by continent
    if (filter !== 'all') {
      result = result.filter(dest => dest.continent === filter);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(dest => 
        dest.name.toLowerCase().includes(term) || 
        dest.country.toLowerCase().includes(term) ||
        dest.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredDestinations(result);
  }, [filter, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <PageHeader 
        title="Our Destinations" 
        subtitle="Explore some of the world's most captivating locations across Africa and beyond"
        backgroundImage="https://images.pexels.com/photos/5745271/pexels-photo-5745271.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Select Country or City to Explore
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600 mb-8">
              Lindberg Holidays and Safaris takes you to some of the world's most captivating destinations, 
              offering unforgettable experiences across Africa and beyond. Explore the untamed beauty of 
              Kenya and Tanzania's world-famous wildlife reserves, including the Masai Mara and Serengeti, 
              where the Great Migration unfolds in breathtaking spectacle.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-1 md:pb-0 flex-nowrap scrollbar-hide">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    filter === 'all'
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  All Destinations
                </button>
                {continents.map((continent) => (
                  <button
                    key={continent}
                    onClick={() => setFilter(continent)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      filter === continent
                        ? 'bg-primary-500 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {continent}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredDestinations.length > 0 ? (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDestinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  variants={itemVariants}
                  id={destination.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                    <p className="text-neutral-600 mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-neutral-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{destination.duration}</span>
                      </div>
                      <div className="text-neutral-800 font-bold">
                        ${destination.price.toLocaleString()}
                      </div>
                    </div>
                    <a 
                      href="/contact" 
                      className="inline-block w-full text-center px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
                    >
                      Inquire Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-neutral-700 mb-4">No destinations found matching your criteria</h3>
              <p className="text-neutral-500 mb-6">Try adjusting your search or browse all our destinations</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
              >
                Show All Destinations
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6">
              Can't Find Your Dream Destination?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We specialize in creating custom journeys to destinations all over the world. 
              Let us know where you'd like to go, and our travel experts will design a 
              personalized itinerary just for you.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300 font-medium"
            >
              Request a Custom Itinerary
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationsPage;