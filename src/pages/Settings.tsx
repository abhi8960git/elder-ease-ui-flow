
import React from 'react';
import Navbar from '../components/layout/Navbar';
import SettingsSection from '../components/settings/SettingsSection';
import EmergencyButton from '../components/layout/EmergencyButton';
import Footer from '../components/layout/Footer';

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-10">
        <div className="container-elder">
          <h1 className="text-3xl font-semibold mb-6">Settings</h1>
          <p className="text-lg text-gray-600 mb-8">
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
