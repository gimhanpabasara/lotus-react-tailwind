import { useEffect, useState } from "react";
import { ExploreButton } from "./ExploreButton";
import { NewsButton } from "./NewsButton";
import ReactPlayer from "react-player";

import GetQuoteButton from "./GetQuoteButton";
import DownloadButton from "./DownloadButton";

export default function CamperUI() {
  // --- Experts In The Line Slider ---
  const expertImages = [
    "/images/exp1.png",
    "/images/exp2.png",
    "/images/exp3.png",
    "/images/exp4.png",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % expertImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [expertImages.length]);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + expertImages.length) % expertImages.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % expertImages.length);

  return (
    <div className="w-full">
      {/* ---------- Section 1: Hero ---------- */}
      <section className="bg-green-900 text-white flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">TROPPER</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <ExploreButton />
        </div>
        <img
          src="/images/tropper.png"
          alt="Trooper Caravan"
          className="w-full md:w-1/2 mt-10 md:mt-0"
        />
      </section>

      {/* ---------- Section 2: Auto Slider ---------- */}
      <section className="relative w-full overflow-hidden bg-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {expertImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* ---------- Section 3: Video Player ---------- */}
      <section className="w-full flex justify-center items-center bg-gray-100 py-16">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls
          playing={false}
          width="80%"
          height="450px"
        />
      </section>

      {/* ---------- Section 4: Experts In The Line (Slider) ---------- */}
      <section
        className="relative bg-black bg-opacity-70 text-white py-20 px-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-truck.png')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Texts */}
          <div className="max-w-lg mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Experts In The Line</h2>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          {/* Slider with small images */}
          <div className="relative flex items-center gap-4">
            <div className="flex gap-4 overflow-hidden w-[400px]">
              {expertImages.slice(current, current + 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Expert work"
                  className="w-28 h-36 rounded-xl object-cover shadow-md"
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={handlePrev}
                className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 5: Next Generation ---------- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white">
        {/* Left side */}
        <div className="max-w-lg mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            The Next Generation Has Arrived
          </h2>
          <NewsButton />
          <p className="mt-6">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Right side (polygon image with Tailwind arbitrary value) */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/images/factory.png"
            alt="Factory"
            className="w-full h-[400px] object-cover [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]"
          />
        </div>
      </section>

      {/* ---------- Section 6: Static Image + Text ---------- */}
      <section>
        <img
          src="/images/line1.png"
          alt="Experts In The Line"
          className="w-full h-[400px] object-cover"
        />
        <div className="px-10 py-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Experts In The Line</h2>
          <p className="text-gray-700">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Morem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
          </p>
        </div>
      </section>

      {/* ---------- Section 7: Static Image + Text ---------- */}
      <section>
        <img
          src="/images/line2.png"
          alt="Experts In The Line"
          className="w-full h-[400px] object-cover"
        />
        <div className="px-10 py-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Experts In The Line</h2>
          <p className="text-gray-700">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Morem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
          </p>
        </div>
      </section>
      
          

      <section className="py-12 px-6 text-center">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 inline-block relative">
        ENQUIRES
        <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-green-700 -skew-x-12"></span>
      </h2>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
        
        {/* Card 1 */}
        <div className="text-left">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Get A Quote"
            className="w-full h-60 object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">Get A Quote</h3>
          <p className="text-gray-600 mt-2">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="mt-4">
            <GetQuoteButton />
          </div>
        </div>

        {/* Card 2 */}
        <div className="text-left">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Download Brochure"
            className="w-full h-60 object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">Download Brochure</h3>
          <p className="text-gray-600 mt-2">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="mt-4">
            <DownloadButton />
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}
