"use client";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ian & Sharon Pritchard",
      text: "When you buy a Sunstar caravan, you become part of the family. Hear from passionate Lotus owners, Ian and Sharon Pritchard, rave about their Trooper Caravan.",
      image: "/testimonial1.jpg", // replace with real image
    },
    {
      id: 2,
      name: "Graeme & Julie England",
      text: "When you buy a Sunstar caravan, you become part of the family. Hear from passionate Lotus owners, Graeme and Julie England, rave about their Sunstar Caravan.",
      image: "/testimonial2.jpg", // replace with real image
    },
    {
      id: 3,
      name: "Graeme & Julie England",
      text: "When you buy a Sunstar caravan, you become part of the family. Hear from passionate Lotus owners, Graeme and Julie England, rave about their Sunstar Caravan.",
      image: "/testimonial2.jpg", // replace with real image
    },
    {
      id: 4,
      name: "Graeme & Julie England",
      text: "When you buy a Sunstar caravan, you become part of the family. Hear from passionate Lotus owners, Graeme and Julie England, rave about their Sunstar Caravan.",
      image: "/testimonial2.jpg", // replace with real image
    }, 
    {
      id: 5,
      name: "Graeme & Julie England",
      text: "When you buy a Sunstar caravan, you become part of the family. Hear from passionate Lotus owners, Graeme and Julie England, rave about their Sunstar Caravan.",
      image: "/testimonial2.jpg", // replace with real image
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} // replace with actual bg
      >
        <h1 className="text-3xl md:text-5xl font-bold">Action Mobile</h1>
      </div>

      {/* Testimonials */}
      <div className="space-y-16 py-12 px-6 md:px-16">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Polygon Image */}
            <div
              className="w-full md:w-1/2 h-[300px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${t.image})`,
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }}
            ></div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-2">{t.name}</h3>
              <span className="inline-block bg-gray-800 text-white text-xs px-3 py-1 mb-4">
                Testimonials
              </span>
              <p className="text-gray-700">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
