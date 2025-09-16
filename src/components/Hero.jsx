import React from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                  The All New
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  LC Series 2025
                </h2>
              </div>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              
              <div className="pt-4">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl font-semibold">Supreme</span>
                  <span className="text-gray-400 text-lg">|</span>
                  <span className="text-xl font-mono bg-gray-800 px-3 py-1 rounded">C1488KF</span>
                </div>
                
                <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 overflow-hidden">
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full opacity-20"></span>
                  <span className="relative flex items-center">
                    Explore
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Image/Visual Content */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl transform rotate-3">
                <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-64 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center mx-auto">
                      <svg className="w-24 h-24 text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <p className="mt-4 text-gray-400">LC Series 2025</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-600/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Background gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Additional content section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Experience the Future</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The LC Series 2025 represents the pinnacle of innovation and design, setting new standards in performance and elegance.
          </p>
        </div>
      </section>
    </div>
  );
}