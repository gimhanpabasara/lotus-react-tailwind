import React, { useState } from 'react';

// Animated Button Component
const LetsStartButton = ({ onClick, text = "LET'S START" }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Reset animation after 300ms
    setTimeout(() => setIsClicked(false), 300);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 overflow-hidden ${
        isClicked ? 'scale-95' : 'scale-100'
      }`}
    >
      {/* Animated background effect */}
      <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full opacity-20"></span>
      
      {/* Ripple effect on click */}
      {isClicked && (
        <span className="absolute animate-ripple inline-block w-12 h-12 bg-white rounded-full opacity-40"></span>
      )}
      
      <span className="relative flex items-center uppercase tracking-wider text-sm">
        {text}
        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </button>
  );
};

export default function ModelCard() {
  const handleLetsStartClick = () => {
    // In a real application, this would navigate to the customization page
    console.log("Redirecting to customization page");
    alert("Redirecting to caravan customization page!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-cyan-400 uppercase tracking-widest">
                LET'S BUILD YOUR DREAM
              </h2>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Customize Your
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Dream Caravan
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-300 max-w-lg">
              Create the perfect caravan tailored to your needs with our advanced customization tools. 
              Choose from hundreds of options to make it truly yours.
            </p>
            
            <div className="pt-4">
              <LetsStartButton onClick={handleLetsStartClick} />
            </div>
          </div>
          
          {/* Right Column - Visual Content */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-64 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border-2 border-dashed border-blue-500/30 flex items-center justify-center mx-auto">
                    <svg className="w-16 h-16 text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-400">Customization Interface</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-600/10 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "CUSTOMER", description: "Tailor every aspect to your preferences" },
            { title: "TRADEMAKER", description: "Choose from premium materials and finishes" },
            { title: "TRAINER", description: "Get expert guidance throughout the process" }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Background gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl -z-10"></div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
      `}</style>
    </div>
  );
}