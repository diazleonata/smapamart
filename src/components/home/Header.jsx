import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot, faStore } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="top-0 z-50 w-full bg-white shadow-md border-b border-black/10">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faStore} className="text-xl text-black" />
          <span className="text-xl font-semibold text-black">Marketplace</span>
        </div>

        {/* Right side */}
        <a
          href="https://saweria.co/leonatadiaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-150 active:scale-95"
        >
          <FontAwesomeIcon
            icon={faCircleDollarToSlot}
            className="text-2xl text-black/80 hover:text-black"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;