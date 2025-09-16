// src/components/ExploreButton.jsx
export default function ExploreButton({ link }) {
  return (
    <a
      href={link}
      className="flex items-center justify-center bg-black text-white px-6 py-2 font-medium tracking-wide relative group"
    >
      Explore
      <span className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-green-200 -skew-x-12 transition-all group-hover:w-8"></span>
    </a>
  );
}
