import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-neutral-900 shadow-md dark:shadow-neutral-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 z-10"
          aria-label="Lindberg Safaris Home"
        >
          <Compass 
            className={`h-8 w-8 ${
              isScrolled 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-white'
            }`}
          />
          <span 
            className={`font-serif text-xl font-bold ${
              isScrolled 
                ? 'text-primary-700 dark:text-primary-300' 
                : 'text-white'
            }`}
          >
            Lindberg Safaris
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <button 
            className="lg:hidden z-10"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${
                isScrolled 
                  ? 'text-primary-700 dark:text-primary-300' 
                  : 'text-white'
              }`} />
            ) : (
              <Menu className={`h-6 w-6 ${
                isScrolled 
                  ? 'text-primary-700 dark:text-primary-300' 
                  : 'text-white'
              }`} />
            )}
          </button>
        </div>

        <nav className="hidden lg:flex space-x-8 items-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Destinations', path: '/destinations' },
            { name: 'About', path: '/about' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? isScrolled
                      ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500'
                      : 'text-primary-300 border-b-2 border-primary-300'
                    : isScrolled
                      ? 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                      : 'text-white hover:text-primary-200'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a 
            href="/contact" 
            className={`px-5 py-2 rounded-full ${
              isScrolled
                ? 'bg-primary-500 hover:bg-primary-600 text-white'
                : 'bg-white hover:bg-primary-50 text-primary-700'
            } transition-colors duration-300 text-sm font-medium`}
          >
            Book Now
          </a>
        </nav>

        <div
          className={`fixed inset-0 bg-primary-900 bg-opacity-95 transform lg:hidden transition-transform duration-300 ease-in-out z-0 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Destinations', path: '/destinations' },
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-medium ${
                    isActive ? 'text-primary-300' : 'text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-white text-primary-700 hover:bg-primary-50 rounded-full mt-4 font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;