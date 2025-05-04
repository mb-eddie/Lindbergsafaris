import React from 'react';
import PageHeader from '../components/common/PageHeader';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Learn how we collect, use, and protect your personal information"
        backgroundImage="/images/privacy-policy-header.jpg"
      />
      
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <h2>Introduction</h2>
            <p>
              At Lindberg Safaris, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you use our website and services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Name and contact details</li>
              <li>Passport information for booking purposes</li>
              <li>Payment information</li>
              <li>Travel preferences and requirements</li>
              <li>Communication history with us</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect certain information when you visit our website:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and interaction data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process your bookings and payments</li>
              <li>Communicate with you about your travel arrangements</li>
              <li>Provide customer support</li>
              <li>Send you relevant marketing communications (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We only share your information with third parties when necessary to provide our services 
              or when required by law. This may include:
            </p>
            <ul>
              <li>Travel suppliers (hotels, airlines, tour operators)</li>
              <li>Payment processors</li>
              <li>Government authorities for visa/travel requirements</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please contact us at:
            </p>
            <p>
              Email: privacy@lindbergsafaris.com<br />
              Phone: +254 123 456 789
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be 
              available on our website.
            </p>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-8">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;