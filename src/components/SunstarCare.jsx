export default function SunstarCare() {
  return (
    <div className="w-full">
      {/* Top Background Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
      >
        <div className="bg-black/40 px-6 py-4 ml-12 rounded-lg">
          <h1 className="text-white text-3xl md:text-4xl font-bold">SUNSTAR CARE</h1>
        </div>
      </div>

      {/* Text + Polygon Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-20 py-16">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">CUSTOMER FOCUS</h2>
          <p className="text-gray-600 max-w-md">
            We know that caravan ownership isn’t always easy. We strive to go above and beyond
            for our customers so you can have the best experience possible.
          </p>
        </div>

        {/* Right Polygon Image */}
        <div className="relative">
          <img
            src="/images/polygon-img.jpg"
            alt="Polygon Caravan"
            className="w-full h-auto object-cover shadow-lg [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]"
          />
        </div>
      </div>
      
      <section className="w-full bg-[#47543B] py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            
            {/* Polygon Image Section */}
            <div className="relative w-full h-96 md:h-[500px]">
            <img
                src="https://i.ibb.co/Y2xFYB4/tire.png" // replace with your image
                alt="Tire"
                className="w-full h-full object-cover [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]"
            />
            </div>

            {/* Text Content */}
            <div className="text-white px-6 md:px-12 space-y-6">
            <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            </div>
        </div>
      </section>
      
      {/* Text + Polygon Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-20 py-16">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Repair For Your Truck</h2>
          <p className="text-gray-600 max-w-md">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Right Polygon Image */}
        <div className="relative">
          <img
            src="/images/polygon-img.jpg"
            alt="Polygon Caravan"
            className="w-full h-auto object-cover shadow-lg [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]"
          />
        </div>
      </div>
      
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
      ></div>

    </div>
  );
}
