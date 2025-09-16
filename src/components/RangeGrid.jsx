import React, { useState, useEffect } from 'react';

// Explore Button Component
const ExploreButton = ({ onClick, text = "Explore" }) => {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 overflow-hidden"
    >
      <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full opacity-20"></span>
      <span className="relative flex items-center">
        {text}
        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </button>
  );
};

export default function RangeGrid() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample product data
  const products = [
    {
      id: 1,
      category: "OFF ROAD",
      name: "TROPPER",
      description: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      category: "OFF ROAD",
      name: "FREELANDER",
      description: "Adipiscing elit consectetur, lorem ipsum dolor sit amet. Nunc vulputate libero et velit interdum.",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      category: "OFF ROAD",
      name: "OFF GRID",
      description: "Consectetur adipiscing elit, nunc vulputate libero et velit interdum. Sorem ipsum dolor sit amet.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      category: "ON ROAD",
      name: "HOLLYWOOD",
      description: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Sorem ipsum dolor sit amet.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [products.length]);

  const handleExploreClick = (productId) => {
    // In a real application, this would navigate to the product page
    console.log(`Exploring product with ID: ${productId}`);
    alert(`Redirecting to product page for ID: ${productId}`);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Product Range</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {products[currentSlide].category}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
                {products[currentSlide].name}
              </h2>
            </div>
            
            <div className="w-16 h-1 bg-gray-300"></div>
            
            <p className="text-lg text-gray-600 max-w-lg">
              {products[currentSlide].description}
            </p>
            
            <div className="pt-4">
              <ExploreButton 
                onClick={() => handleExploreClick(products[currentSlide].id)} 
                text={`Explore ${products[currentSlide].name}`}
              />
            </div>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2 mt-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Image Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-80 md:h-96">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Products Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Other Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${
                  index === currentSlide ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {product.category}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}