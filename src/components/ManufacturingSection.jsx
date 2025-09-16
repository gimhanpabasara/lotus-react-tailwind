import React from "react";
import FeaturedSection from "./FeaturedSection";
import LogoSection from "./LogoSection";
import ExploreSection from "./ExploreSection";
import Footer from "./Footer";

export default function ManufacturingSection() {
  return (
    <div className="w-full">
      {/* Top Background Image Section */}
      <section className="relative w-full h-[500px]">
        <img
          src="/images/manufacturing-bg.jpg" // replace with your actual image path
          alt="Manufacturing Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Bottom Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-20 gap-10 bg-white">
        {/* Text Content */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Manufacturing & Processing Steps
          </h2>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/manufacturing-process.jpg" // replace with your actual image path
            alt="Processing Steps"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>
      

      <section className="relative w-full h-[500px]">
        <img
          src="/images/manufacturing-bg.jpg" // replace with your actual image path
          alt="Manufacturing Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>  

      <section className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-20 gap-10 bg-white">
        {/* Text Content */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Manufacturing & Processing Steps
          </h2>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/manufacturing-process.jpg" // replace with your actual image path
            alt="Processing Steps"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-20 gap-10 bg-white">
        {/* Text Content */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Experts In The Line
          </h2>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/manufacturing-process.jpg" // replace with your actual image path
            alt="Processing Steps"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>    
      
          {/* <FeaturedSection />
          
          <LogoSection />

          <ExploreSection />

          <Footer /> */}
      
          
    </div>
  );
}
