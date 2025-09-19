import { useNavigate } from "react-router-dom";

export default function GetQuoteButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/request-a-quote")}
      className="relative flex items-center bg-black text-white font-medium px-6 py-2 pr-12"
    >
      Get A Quote
      <span className="absolute top-0 right-0 h-full w-6 bg-gray-400 -skew-x-12"></span>
    </button>
  );
}
