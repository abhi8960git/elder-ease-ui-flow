
import React from 'react';
import Navbar from '../components/layout/Navbar';
import PaymentsDashboard from '../components/payments/PaymentsDashboard';
import EmergencyButton from '../components/layout/EmergencyButton';
import Footer from '../components/layout/Footer';

const Payments = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-10">
        <div className="container-elder">
          <h1 className="text-3xl font-semibold mb-6">Payments</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage and approve payments for services. All transactions are securely processed through blockchain technology.
          </p>
        </div>
        <PaymentsDashboard />
      </main>
      <EmergencyButton />
      <Footer />
    </div>
  );
};

export default Payments;
