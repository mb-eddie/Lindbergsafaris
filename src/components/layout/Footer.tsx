import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Compass className="h-8 w-8 text-primary-400" />
              <span className="font-serif text-xl font-bold text-white">
                Lindberg Safaris
              </span>
            </div>
            <p className="text-neutral-300 mb-6 text-sm">
              Since 1996, crafting unforgettable journeys across Africa and beyond. 
              Based in Nairobi, we turn travel dreams into reality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Lindberg Safaris on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Lindberg Safaris on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Lindberg Safaris on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Lindberg Safaris on YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'About Us', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#tours" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Safari Tours
                </Link>
              </li>
              <li>
                <Link to="/services#booking" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link to="/services#transport" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Transport Services
                </Link>
              </li>
              <li>
                <Link to="/services#ticketing" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Air Travel Ticketing
                </Link>
              </li>
              <li>
                <Link to="/services#agri-tourism" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Agri-Tourism
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">
                  Westlands Business Park, <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@lindbergsafaris.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  info@lindbergsafaris.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Lindberg Holidays & Safaris. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;