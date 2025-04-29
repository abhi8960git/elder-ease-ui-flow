
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-elderease-gray py-8 mt-16 border-t">
      <div className="container-elder">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Eth ElderEase</h3>
            <p className="text-muted-foreground">
              AI-powered home assistance and emergency monitoring platform for senior citizens.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-foreground">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Terms of Use</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Powered By</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-elderease-blue px-2 py-1 rounded text-sm">NSUT</span>
              <span className="bg-elderease-purple px-2 py-1 rounded text-sm">C4GT</span>
              <span className="bg-elderease-pink px-2 py-1 rounded text-sm">SEETA</span>
              <span className="bg-elderease-peach px-2 py-1 rounded text-sm">AIC</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eth ElderEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
