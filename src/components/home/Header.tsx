import React from "react";
import { IoStorefront, IoCash } from "react-icons/io5"; // Ionicons v5

const Header = () => {
  return (
    <div className="top-0 z-50 w-full bg-white">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <IoStorefront className="text-xl text-black" />
          <span className="text-xl font-semibold text-black">Marketplace</span>
        </div>

        {/* Right side */}
        <a
          href="https://saweria.co/leonatadiaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-150 active:scale-95"
        >
          <IoCash className="text-2xl text-black/80 hover:text-black" />
        </a>
      </div>
    </div>
  );
};

export default Header;