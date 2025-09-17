"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function FindRepairer() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("All");
  const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Dummy repair centers (replace with API later)
  const repairCenters = [
    {
      id: 1,
      name: "Caravan Center Melbourne",
      address: "123 Street, Melbourne VIC",
      phone: "03 234 456 67",
      email: "caravanrep@gmail.com",
      website: "www.caravanrep.com.au",
      state: "VIC",
      postal: "3000",
      position: [-37.8136, 144.9631],
    },
    {
      id: 2,
      name: "Caravan Center Sydney",
      address: "456 Street, Sydney NSW",
      phone: "02 234 456 67",
      email: "caravanrep@gmail.com",
      website: "www.caravanrep.com.au",
      state: "NSW",
      postal: "2000",
      position: [-33.8688, 151.2093],
    },
    {
      id: 3,
      name: "Caravan Center Perth",
      address: "789 Street, Perth WA",
      phone: "08 234 456 67",
      email: "caravanrep@gmail.com",
      website: "www.caravanrep.com.au",
      state: "WA",
      postal: "6000",
      position: [-31.9505, 115.8605],
    },
  ];

  const handleSearch = () => {
    let filteredResults = repairCenters;

    if (query) {
      filteredResults = filteredResults.filter(
        (r) => r.postal.includes(query) || r.address.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (stateFilter !== "All") {
      filteredResults = filteredResults.filter((r) => r.state === stateFilter);
    }

    setResults(filteredResults);
    setFiltered(filteredResults);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top Section */}
      <div
        className="relative h-1/3 bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/your-bg.jpg')" }} // replace with actual bg
      >
        <h2 className="text-2xl font-bold mb-2">Find a Repairer</h2>
        <p className="text-center max-w-xl text-sm mb-4">
          We’re looking out for customers by keeping them on the road so they can continue to explore everywhere.
        </p>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter SUBURB / POSTAL CODE"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-2 rounded-md text-black"
          />
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="px-3 py-2 rounded-md text-black"
          >
            <option value="All">All</option>
            <option value="VIC">VIC</option>
            <option value="NSW">NSW</option>
            <option value="WA">WA</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-green-900 px-4 py-2 rounded-md hover:bg-green-700"
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-1">
        {/* Results List */}
        <div className="w-1/3 bg-gray-100 overflow-y-auto p-4">
          <h3 className="font-bold mb-3">{filtered.length} Results</h3>
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white p-3 rounded-lg mb-3 shadow hover:shadow-md"
            >
              <h4 className="font-semibold">{r.name}</h4>
              <p>{r.address}</p>
              <p>📞 {r.phone}</p>
              <p>✉️ {r.email}</p>
              <a
                href={`https://${r.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                {r.website}
              </a>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="w-2/3">
          <MapContainer
            center={[-25.2744, 133.7751]} // Australia center
            zoom={4}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filtered.map((r) => (
              <Marker key={r.id} position={r.position}>
                <Popup>
                  <strong>{r.name}</strong>
                  <br />
                  {r.address}
                  <br />
                  {r.phone}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
