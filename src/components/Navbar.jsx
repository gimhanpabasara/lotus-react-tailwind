import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleItemClick = (path) => {
    console.log(`Navigating to: ${path}`);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Navigation data
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    {
      id: 'about',
      label: 'About',
      path: '#about',
      items: [
        { id: 'history', label: 'Our History', path: '/history' },
        { id: 'design', label: 'Design', path: '/design' },
        { id: 'sunstar-custom', label: 'Sunstar Custom', path: '/sunstar-custom' },
        { id: 'sunstar-partners', label: 'Sunstar Partners', path: '/sunstar-partners' },
        { id: 'sunstar-ambassadors', label: 'Sunstar Ambassadors', path: '/sunstar-ambassadors' },
        { id: 'sunstar-care', label: 'Sunstar Care', path: '/sunstar-care' },
      ]
    },
    {
      id: 'products',
      label: 'Products',
      path: '#products',
      items: [
        { id: 'pirelli', label: 'Pirelli Tyers', path: '/pirelli' },
        { id: 'gulf-1', label: 'Gulf Traitor\'s', path: '/gulf-1' },
        { id: 'gulf-2', label: 'Gulf Traitor\'s', path: '/gulf-2' },
        { id: 'gulf-3', label: 'Gulf Traitor\'s', path: '/gulf-3' },
        { id: 'gulf-4', label: 'Gulf Traitor\'s', path: '/gulf-4' },
        { id: 'gulf-5', label: 'Gulf Traitor\'s', path: '/gulf-5' },
      ]
    },
    { id: 'vr-agent', label: 'VR Agent', path: '/vr-agent' },
    {
      id: 'more',
      label: 'More',
      path: '#more',
      items: [
        { id: 'gulf-traitors', label: 'Gulf Traitor\'s', path: '/gulf-traitors' },
        { id: 'blog', label: 'Blog', path: '/blog' },
        { id: 'videos', label: 'Videos', path: '/videos' },
        { id: 'events', label: 'Events', path: '/events' },
        { id: 'testimonials', label: 'Testimonials', path: '/testimonials' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-6">
      <nav className="bg-white rounded-xl shadow-lg max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-blue-800">LOGO</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1 relative">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.items ? (
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${
                        activeDropdown === item.id
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={item.path}
                      className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  )}
                  
                  {/* Dropdown menu */}
                  {item.items && activeDropdown === item.id && (
                    <div
                      ref={dropdownRef}
                      className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 overflow-hidden z-50 animate-fadeIn"
                    >
                      <div className="py-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.id}
                            href={subItem.path}
                            onClick={() => handleItemClick(subItem.path)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* CTA Buttons */}
              <button className="ml-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition-colors duration-300">
                Request DEMO
              </button>
              <button className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors duration-300">
                Build Your Own
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.items ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile dropdown items */}
                      {activeDropdown === item.id && (
                        <div className="pl-6 mt-2 space-y-2 animate-fadeIn">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.id}
                              href={subItem.path}
                              onClick={() => handleItemClick(subItem.path)}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.path}
                      onClick={() => handleItemClick(item.path)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full mb-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-base font-medium transition-colors duration-300">
                  Request DEMO
                </button>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-base font-medium transition-colors duration-300">
                  Build Your Own
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

    </div>
  );
}