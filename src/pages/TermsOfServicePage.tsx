import React from 'react';
import PageHeader from '../components/common/PageHeader';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services"
        backgroundImage="/images/terms-header.jpg"
      />
      
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <h2>1. Introduction</h2>
            <p>
              These Terms of Service govern your use of the Lindberg Safaris website and services. 
              By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2>2. Definitions</h2>
            <p>In these Terms:</p>
            <ul>
              <li>"We", "our", "us" refers to Lindberg Safaris</li>
              <li>"You", "your" refers to the user of our services</li>
              <li>"Services" means all travel services provided by us</li>
              <li>"Website" means lindbergsafaris.com and related domains</li>
            </ul>

            <h2>3. Booking and Payment</h2>
            <h3>3.1 Reservations</h3>
            <p>
              All reservations are subject to availability and confirmation. A booking is not 
              confirmed until you receive written confirmation from us.
            </p>

            <h3>3.2 Payment Terms</h3>
            <ul>
              <li>30% deposit required to confirm booking</li>
              <li>Full payment due 60 days before departure</li>
              <li>Late payments may result in cancellation</li>
              <li>All prices are in USD unless otherwise stated</li>
            </ul>

            <h2>4. Cancellation Policy</h2>
            <h3>4.1 By You</h3>
            <p>Cancellation fees apply as follows:</p>
            <ul>
              <li>90+ days before departure: Full refund minus admin fee</li>
              <li>60-89 days: 70% refund</li>
              <li>30-59 days: 50% refund</li>
              <li>Less than 30 days: No refund</li>
            </ul>

            <h3>4.2 By Us</h3>
            <p>
              We reserve the right to cancel any tour due to insufficient participants or 
              circumstances beyond our control. In such cases, a full refund will be provided.
            </p>

            <h2>5. Travel Insurance</h2>
            <p>
              Comprehensive travel insurance is mandatory for all clients. Your insurance must cover:
            </p>
            <ul>
              <li>Medical expenses and repatriation</li>
              <li>Trip cancellation and curtailment</li>
              <li>Lost or damaged baggage</li>
              <li>Personal liability</li>
            </ul>

            <h2>6. Liability</h2>
            <p>
              While we take all reasonable precautions to ensure your safety and enjoyment, 
              we cannot accept liability for:
            </p>
            <ul>
              <li>Acts of God or force majeure</li>
              <li>Actions of third-party suppliers</li>
              <li>Personal injury or loss not caused by our negligence</li>
              <li>Lost or stolen property</li>
            </ul>

            <h2>7. Your Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information when booking</li>
              <li>Comply with local laws and customs</li>
              <li>Follow safety instructions and guidelines</li>
              <li>Respect wildlife and local communities</li>
              <li>Have valid travel documents and insurance</li>
            </ul>

            <h2>8. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to our website.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of Kenya. Any disputes shall be subject to 
              the exclusive jurisdiction of the courts of Kenya.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:<br />
              Email: legal@lindbergsafaris.com<br />
              Phone: +254 123 456 789
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

export default TermsOfServicePage;