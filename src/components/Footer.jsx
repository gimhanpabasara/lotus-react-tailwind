import React from 'react';

export default function Footer() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo and Description */}
          <div className="mb-10">
            <div className="text-3xl font-bold mb-4">LOGO</div>
            <p className="text-gray-300 max-w-3xl text-lg">
              Proudly Australian made and owned since 2004, Lotus Caravans combines unique designs 
              with top-quality materials and exceptional workmanship to deliver a caravanning lifestyle 
              that's second-to-none.
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* OFF ROAD PACKAGE */}
            <div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2">OFF ROAD PACKAGE</h3>
              <ul className="space-y-3">
                {['Trooper', 'Freelander', 'Off Grid', 'LCK'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* HOW TO BUY */}
            <div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2">HOW TO BUY</h3>
              <ul className="space-y-3">
                {['Request a Quote', 'Build Your Own', 'Dealer Spot', 'Rechnure Download', 'Shop'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2">ABOUT</h3>
              <ul className="space-y-3">
                {['Our History', 'Manufacturing', 'Our Partners', 'Ambassadors', 'Sunstar Care'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2">EXPLORE</h3>
              <ul className="space-y-3">
                {['Blog', 'Events', 'Videos', 'Find A Repairer', 'Book A Factory Tour'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ON ROAD PACKAGE */}
            <div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2">ON ROAD PACKAGE</h3>
              <ul className="space-y-3">
                {['Hollywood', 'Crystal River', 'Transformer'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-base mb-4 md:mb-0">
              Privacy Policy | All rights reserved © 2005 Sunstar Caravans.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}