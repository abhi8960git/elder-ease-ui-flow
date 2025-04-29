
import React from 'react';
import Navbar from '../components/layout/Navbar';
import SettingsSection from '../components/settings/SettingsSection';
import EmergencyButton from '../components/layout/EmergencyButton';
import Footer from '../components/layout/Footer';
import { useIsMobile } from '../hooks/use-mobile';

const Settings = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-6 md:pt-10">
        <div className="container-elder">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-6">Settings</h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Customize your experience and manage your account preferences.
          </p>
        </div>
        <SettingsSection />
      </main>
      <EmergencyButton />
      <Footer />
    </div>
  );
};

export default Settings;
