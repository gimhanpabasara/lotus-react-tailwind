export default function SubmitButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`relative flex items-center bg-green-900 text-white font-medium px-6 py-2 pr-12 
                  ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-green-800"}`}
    >
      Submit
      <span className="absolute top-0 right-0 h-full w-6 bg-gray-400 -skew-x-12"></span>
    </button>
  );
}
