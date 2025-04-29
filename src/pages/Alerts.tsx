
import React from 'react';
import Navbar from '../components/layout/Navbar';
import AlertsFeed from '../components/emergency/AlertsFeed';
import EmergencyButton from '../components/layout/EmergencyButton';
import Footer from '../components/layout/Footer';

const Alerts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-6 md:pt-10">
        <div className="container-elder">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-6">Emergency Alerts</h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Monitor and respond to alerts from sensors around your home. All alerts are securely transmitted and stored.
          </p>
        </div>
        <AlertsFeed />
      </main>
      <EmergencyButton />
      <Footer />
    </div>
  );
};

export default Alerts;
