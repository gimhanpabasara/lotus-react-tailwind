// src/components/LogoSection.jsx
export default function LogoSection() {
  const logos = [
    "https://i.ibb.co/qMtjJdp/logo1.png", // replace with your images
    "https://i.ibb.co/Gps2Yv3/logo2.png",
    "https://i.ibb.co/4ZbDn0c/logo3.png",
    "https://i.ibb.co/JB2N3ps/logo4.png",
    "https://i.ibb.co/9rpwbPz/logo5.png",
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 px-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}
