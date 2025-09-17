import React from "react";
import { Calendar } from "lucide-react"; // calendar icon

// Reusable Appointment Button
function AppointmentButton() {
  return (
    <a
      href="/contact-us"
      className="relative inline-block bg-black text-white px-6 py-3 text-sm font-semibold tracking-wider overflow-hidden"
    >
      Book Your Appointment
      <span className="absolute right-[-12px] top-0 bottom-0 w-4 bg-gray-300 transform -skew-x-12"></span>
    </a>
  );
}

export default function AdventureSection() {
  return (
    <div className="w-full">
      {/* Top Background Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-start px-6 md:px-20"
        style={{
          backgroundImage:
            "url('https://your-background-image-url.com')", // Replace with actual image
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black bg-white/40 p-4 rounded">
          Follow Us <br /> For More Adventure
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12 px-6 md:px-20">
        {/* Left Polygon Image */}
        <div className="relative">
          <img
            src="https://your-polygon-image-url.com" // Replace with actual image
            alt="Expo"
            className="w-full h-auto shadow-lg [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Newcastle Outdoor <br /> Adventure & Lifestyle Expo
          </h2>
          <p className="text-gray-600">When - 9/29/2025</p>
          <p className="text-gray-700">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold underline hover:text-blue-600"
            >
              Visit Website
            </a>

            <a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black font-semibold hover:text-blue-600"
            >
              <Calendar size={18} /> Calendar
            </a>
          </div>

          {/* Appointment Button */}
          <div className="pt-6">
            <AppointmentButton />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12 px-6 md:px-20">
        {/* Left Polygon Image */}
        <div className="relative">
          <img
            src="https://your-polygon-image-url.com" // Replace with actual image
            alt="Expo"
            className="w-full h-auto shadow-lg [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Newcastle Outdoor <br /> Adventure & Lifestyle Expo
          </h2>
          <p className="text-gray-600">When - 9/29/2025</p>
          <p className="text-gray-700">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold underline hover:text-blue-600"
            >
              Visit Website
            </a>

            <a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black font-semibold hover:text-blue-600"
            >
              <Calendar size={18} /> Calendar
            </a>
          </div>

          {/* Appointment Button */}
          <div className="pt-6">
            <AppointmentButton />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12 px-6 md:px-20">
        {/* Left Polygon Image */}
        <div className="relative">
          <img
            src="https://your-polygon-image-url.com" // Replace with actual image
            alt="Expo"
            className="w-full h-auto shadow-lg [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Newcastle Outdoor <br /> Adventure & Lifestyle Expo
          </h2>
          <p className="text-gray-600">When - 9/29/2025</p>
          <p className="text-gray-700">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold underline hover:text-blue-600"
            >
              Visit Website
            </a>

            <a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black font-semibold hover:text-blue-600"
            >
              <Calendar size={18} /> Calendar
            </a>
          </div>

          {/* Appointment Button */}
          <div className="pt-6">
            <AppointmentButton />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12 px-6 md:px-20">
        {/* Left Polygon Image */}
        <div className="relative">
          <img
            src="https://your-polygon-image-url.com" // Replace with actual image
            alt="Expo"
            className="w-full h-auto shadow-lg [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Newcastle Outdoor <br /> Adventure & Lifestyle Expo
          </h2>
          <p className="text-gray-600">When - 9/29/2025</p>
          <p className="text-gray-700">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold underline hover:text-blue-600"
            >
              Visit Website
            </a>

            <a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black font-semibold hover:text-blue-600"
            >
              <Calendar size={18} /> Calendar
            </a>
          </div>

          {/* Appointment Button */}
          <div className="pt-6">
            <AppointmentButton />
          </div>
        </div>
      </div>




    </div>
  );
}
