// src/components/ExploreSection.jsx
import ExploreButton from "./ExploreButton";

export default function ExploreSection() {
  const exploreItems = [
    {
      id: 1,
      image:
        "https://i.ibb.co/z7r2bTQ/family-beach.jpg", // replace with your image
      title: "What’s New About LC 5",
      description:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "/blog/lc5",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/4T5BKhc/camper-road.jpg", // replace with your image
      title: "Explore About Design",
      description:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "/blog/design",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      {/* Section Title */}
      <h2 className="text-center text-2xl font-bold mb-10 relative inline-block mx-auto">
        EXPLORE
        <span className="block w-16 h-1 bg-green-700 mx-auto mt-2 relative">
          <span className="absolute right-0 top-0 w-4 h-1 bg-green-200 -skew-x-12"></span>
        </span>
      </h2>

      {/* Explore Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {exploreItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover shadow-md"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4">
                <ExploreButton link={item.link} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
