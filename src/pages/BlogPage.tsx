import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
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
    <>
      <PageHeader 
        title="Travel Blog" 
        subtitle="Insights, tips, and stories from our safari adventures across Africa"
        backgroundImage="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Latest Articles
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-neutral-600">
              Explore our collection of travel stories, expert tips, and destination guides 
              to inspire your next African adventure.
            </p>
          </div>
          
          {/* Featured Post */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="max-w-5xl mx-auto mb-16"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-50 rounded-xl overflow-hidden shadow-md"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title} 
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">{blogPosts[0].title}</h3>
                  <p className="text-neutral-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center mb-6">
                    <div className="text-sm text-neutral-500">
                      <span>{blogPosts[0].author}</span>
                      <span className="mx-2">•</span>
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                  <a 
                    href={`/blog/${blogPosts[0].id}`} 
                    className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300 mt-auto"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Blog Posts Grid */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(1).map((post) => (
              <motion.div 
                key={post.id} 
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-neutral-500">
                      <span>{post.date}</span>
                    </div>
                    <a 
                      href={`/blog/${post.id}`} 
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <button className="inline-block px-6 py-3 border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white rounded-full transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-neutral-600">
                Get the latest travel tips, destination insights, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <form className="max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-neutral-500 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;