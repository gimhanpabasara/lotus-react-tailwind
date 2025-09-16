import React from 'react';

export default function MoreButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-black text-white px-6 py-2 font-semibold tracking-wide relative"
    >
      MORE
      <span className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-green-200 -skew-x-12"></span>
    </button>
  );
}