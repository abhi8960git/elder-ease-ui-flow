
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ServicesPanel from '../components/home/ServicesPanel';
import EmergencyButton from '../components/layout/EmergencyButton';
import Footer from '../components/layout/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-10">
        <div className="container-elder">
          <h1 className="text-3xl font-semibold mb-6">Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            Browse and schedule services to assist you in your daily life. All services are provided by verified professionals.
          </p>
        </div>
        <ServicesPanel />
      </main>
      <EmergencyButton />
      <Footer />
    </div>
  );
};

export default Services;
