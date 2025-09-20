// src/components/CaravanBuilder.jsx
import { useNavigate } from "react-router-dom";

function BuildButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/LCXOffGridConfigurator");
  };

  return (
    <button
      onClick={handleClick}
      className="mt-2 bg-green-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition"
    >
      Let&apos;s Build
    </button>
  );
}

export default function CaravanBuilder() {
  const imagesSection1 = [
    "/images/caravan1.jpg",
    "/images/caravan2.jpg",
    "/images/caravan3.jpg",
    "/images/caravan4.jpg",
    "/images/caravan5.jpg",
    "/images/caravan6.jpg",
  ];

  const imagesSection2 = [
    "/images/caravan7.jpg",
    "/images/caravan8.jpg",
    "/images/caravan9.jpg",
    "/images/caravan10.jpg",
    "/images/caravan11.jpg",
    "/images/caravan12.jpg",
    "/images/caravan13.jpg",
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-lg font-bold uppercase">Build Your Favorite</h2>
        <h1 className="text-2xl font-bold uppercase">Sunstar Caravan</h1>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      {/* Section 1 */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-lg font-semibold uppercase mb-6">Off Road</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagesSection1.map((src, index) => (
            <div key={index} className="bg-gray-900 p-2 rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Caravan ${index + 1}`}
                className="rounded-md w-full h-52 object-cover"
              />
              <BuildButton />
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold uppercase mb-6">Off Road</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagesSection2.map((src, index) => (
            <div key={index} className="bg-gray-900 p-2 rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Caravan ${index + 7}`}
                className="rounded-md w-full h-52 object-cover"
              />
              <BuildButton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
