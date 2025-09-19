import { useNavigate } from "react-router-dom";

// src/components/NewsButton.jsx
export default function NewsButton({ onClick }) {
  return (
    <button
      onClick={() => navigate("/blog")}
      className="relative flex items-center bg-black text-white font-medium px-6 py-2 pr-12 group"
    >
      NEWS
      {/* Slanted Edge */}
      <span className="absolute top-0 right-0 h-full w-6 bg-gray-400 -skew-x-12"></span>
    </button>
  );
}

