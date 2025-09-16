// src/components/FeaturedSection.jsx
import MoreButton from "./MoreButton";

export default function FeaturedSection() {
  const featuredItems = [
    {
      id: 1,
      image:
        "https://i.ibb.co/7Y4F4kF/caravan1.jpg", // replace with your image
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/ykQX4Yg/caravan2.jpg", // replace with your image
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/3CSkBL9/caravan3.jpg", // replace with your image
    },
  ];

  return (
    <section className="w-full py-12">
      <h2 className="text-center text-2xl font-bold mb-8 tracking-wide">
        FEATURED
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-full md:w-1/4"
          >
            <img
              src={item.image}
              alt={`Featured ${item.id}`}
              className="w-full h-auto shadow-lg"
            />
            <div className="mt-4">
              <MoreButton onClick={() => alert(`Clicked ${item.id}`)} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
