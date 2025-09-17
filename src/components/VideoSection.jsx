// src/components/AdventureNewsSection.jsx


function MoreButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white px-6 py-2 mt-4 text-sm font-semibold tracking-wider relative group"
    >
      MORE
      <span className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 transition-all duration-300"></span>
    </a>
  );
}


export default function AdventureNewsSection() {

const cards = [
    {
      img: "https://your-image-url-1.com", // replace with actual image
      url: "https://www.youtube.com/watch?v=xxxxx",
    },
    {
      img: "https://your-image-url-2.com",
      url: "https://www.youtube.com/watch?v=xxxxx",
    },
    {
      img: "https://your-image-url-3.com",
      url: "https://www.youtube.com/watch?v=xxxxx",
    },
  ];

  return (
    <section className="w-full">
      {/* Top Section with Background Image */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/4ZPzD91/hiking.jpg')", // replace with your image
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-white px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Follow Us <br /> For More <br /> Adventures
          </h2>
        </div>
      </div>

      {/* Bottom Section with Polygon Image and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto py-16 px-6 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">
            The Next Generation Has Arrived
          </h3>
          <a
            href="/news-blog"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-2 font-medium tracking-wide relative group"
          >
            NEWS
            <span className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-green-200 -skew-x-12 transition-all group-hover:w-8"></span>
          </a>
          <p className="text-gray-600">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis
          </p>
        </div>

        {/* Right Polygon Image */}
        <div className="relative w-full h-80 md:h-[400px]">
          <img
            src="https://i.ibb.co/3RqQt2p/factory.jpg" // replace with your image
            alt="Factory"
            className="w-full h-full object-cover shadow-md [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={card.img}
            alt={`Caravan ${index + 1}`}
            className="w-full h-auto rounded shadow-lg"
          />
          <MoreButton url={card.url} />
        </div>
      ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={card.img}
            alt={`Caravan ${index + 1}`}
            className="w-full h-auto rounded shadow-lg"
          />
          <MoreButton url={card.url} />
        </div>
      ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={card.img}
            alt={`Caravan ${index + 1}`}
            className="w-full h-auto rounded shadow-lg"
          />
          <MoreButton url={card.url} />
        </div>
      ))}
      </div>
    
    
      
    </section>
  );
}
