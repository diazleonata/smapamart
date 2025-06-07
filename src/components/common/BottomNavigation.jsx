import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  faHouse,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: faHouse },
    { name: "Orders", path: "/orders", icon: faClipboardList },
    { name: "Profile", path: "/profile", icon: faUser },
  ];

  return (
    <div className="fixed left-0 bottom-0 right-0 w-full h-16 bg-white border-t border-black/10 flex justify-around items-center">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.name}
            to={item.path}
            className="flex flex-col items-center justify-center gap-1"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-xl transition-all duration-200 ease-in-out ${
                isActive ? "text-black" : "text-black/40"
              }`}
            />
            <span
              className={`text-xs leading-none h-[16px] transition-all duration-200 ease-in-out ${
                isActive ? "text-black font-medium" : "text-black/40 font-medium"
              }`}
              style={{ minWidth: "40px", textAlign: "center" }}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;