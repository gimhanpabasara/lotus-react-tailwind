export default function CaravanUI() {
  return (
    <div className="w-full">
      {/* Top Background Image Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
      >
        {/* Optional overlay */}
        {/* <div className="bg-black/40 p-6 rounded-xl text-white text-center max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">A New Frontier in Premium Caravan Manufacturing</h1>
          <p className="text-lg">
            Two decades of mastery, a future without limits.  
            With designs that set trends, construction that lasts, and innovation that will influence, we shape tomorrow.
          </p>
        </div> */}
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6 md:px-20 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">A New Frontier in Premium Caravan Manufacturing</h2>
          <p className="text-gray-600">
            Two decades of mastery, a future without limits. With designs that set trends, construction that lasts, 
            and innovation that will influence, we shape tomorrow.
          </p>
        </div>
        <div>
          <img src="/images/section1.jpg" alt="Caravan line" className="rounded-xl shadow-md" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6 md:px-20 items-center">
        <div>
          <img src="/images/section2.jpg" alt="Custom panel" className="rounded-xl shadow-md" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Customs Stealth Panel</h2>
          <p className="text-gray-600 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis leo et velit 
            tincidunt, ac laoreet odio mattis.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis leo et velit 
            tincidunt, ac laoreet odio mattis.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6 md:px-20 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Experts In The Line</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis leo et velit tincidunt, 
            ac laoreet odio mattis. Mauris posuere, purus eu consectetur mattis, nunc tortor tempor turpis, 
            sed bibendum lacus sem nec nunc.  
          </p>
        </div>
        <div>
          <img src="/images/section3.jpg" alt="Experts working" className="rounded-xl shadow-md" />
        </div>
      </div>

      {/* Bottom Background Image Section */}
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
      ></div>
    </div>
  );
}
