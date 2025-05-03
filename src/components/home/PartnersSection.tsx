import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { partners } from '../../data/partners';

const PartnersSection: React.FC = () => {
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
    <section className="py-16 bg-white" id="partners-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-3xl font-serif font-bold text-neutral-800 mb-4"
          >
            Our International Partners
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-16 h-1 bg-primary-500 mb-6"></div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-neutral-600">
            Connect with our worldwide responsible travel partners who can provide 
            you with outstanding wildlife safari trips and tours.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          <motion.div variants={itemVariants} className="w-full max-w-[140px]">
            <img 
              src="/images/wings-logo.svg" 
              alt="Wings" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/140x70/f8fafc/64748b?text=Wings";
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full max-w-[140px]">
            <img 
              src="/images/costa-logo.svg" 
              alt="Costa Cruises" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/140x70/f8fafc/64748b?text=Costa";
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full max-w-[140px]">
            <img 
              src="/images/emirates-logo.svg" 
              alt="Emirates" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/140x70/f8fafc/64748b?text=Emirates";
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full max-w-[140px]">
            <img 
              src="/images/legend-tours-logo.svg" 
              alt="Legend Tours" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/140x70/f8fafc/64748b?text=Legend+Tours";
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full max-w-[140px]">
            <img 
              src="/images/ktb-logo.svg" 
              alt="Kenya Tourism Board" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/140x70/f8fafc/64748b?text=Kenya+Tourism";
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full max-w-[140px]">
            <img 
              src="/images/magical-kenya-logo.svg" 
              alt="Magical Kenya" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/140x70/f8fafc/64748b?text=Magical+Kenya";
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <div className="max-w-3xl mx-auto p-6 bg-neutral-50 rounded-lg">
            <p className="text-neutral-700 mb-4">
              <strong>Affiliate Memberships:</strong> Lindberg is a Full member of Kenya Association of Tour Operators. 
              Our client security when on safari is covered by KTF whose main mandate is to ensure 
              safety standard and security by the Tourism police.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;