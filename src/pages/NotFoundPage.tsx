import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary-500">404</h1>
        <h2 className="mt-6 text-3xl font-serif font-bold text-neutral-800">Page Not Found</h2>
        <p className="mt-3 text-lg text-neutral-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8">
          <Link 
            to="/"
            className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;