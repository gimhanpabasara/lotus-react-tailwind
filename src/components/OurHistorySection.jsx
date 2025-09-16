import React from "react";

export default function OurHistorySection() {
  return (
    <div className="w-full">
      {/* Our Story Section */}
      <section className="relative w-full h-[500px]">
        <img
          src="/images/our-story.jpg" // replace with your actual image path
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="bg-white/80 max-w-lg p-6 ml-10 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl.
            </p>
          </div>
        </div>
      </section>

      {/* Family Legacy Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-20 gap-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Family Legacy
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
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/family-legacy.jpg" // replace with your actual image path
            alt="Family Legacy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Industry Ranking Section */}
      <section className="relative w-full h-[500px] bg-gray-100">
        <img
          src="/images/industry-ranking.jpg" // replace with your actual image path
          alt="Industry Ranking"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <div className="bg-white/80 max-w-2xl p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Industry Ranking
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl.
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
