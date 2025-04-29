
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Illustrations = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-6 md:py-12 bg-elderease-gray/30">
      <div className="container-elder">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">How We Can Help You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="card-elder hover:translate-y-[-5px] transition-all duration-300">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Companionship and care" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Companionship & Care</h3>
            <p className="text-gray-600">
              Connect with friendly caregivers and companions who provide regular visits and assistance with daily activities.
            </p>
          </div>
          
          <div className="card-elder hover:translate-y-[-5px] transition-all duration-300">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Smart home monitoring" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Smart Home Monitoring</h3>
            <p className="text-gray-600">
              Advanced sensors and AI technology monitor your home environment, detecting falls, unusual activity, or emergencies.
            </p>
          </div>
          
          <div className="card-elder hover:translate-y-[-5px] transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Secure blockchain payments" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Secure Blockchain Payments</h3>
            <p className="text-gray-600">
              Manage service payments securely through our blockchain-powered system, ensuring transparency and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Illustrations;
