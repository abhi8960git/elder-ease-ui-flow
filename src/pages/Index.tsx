
import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesPanel from '../components/home/ServicesPanel';
import AlertsFeed from '../components/emergency/AlertsFeed';
import PaymentsDashboard from '../components/payments/PaymentsDashboard';
import AgentChat from '../components/chat/AgentChat';
import EmergencyButton from '../components/layout/EmergencyButton';
import Footer from '../components/layout/Footer';
import Illustrations from '../components/home/Illustrations';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Illustrations />
        <ServicesPanel />
        <AlertsFeed />
        <PaymentsDashboard />
        <AgentChat />
      </main>
      <EmergencyButton />
      <Footer />
    </div>
  );
};

export default Index;
