"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoClipboardOutline, IoPersonOutline } from "react-icons/io5";

const BottomNavigation = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/", icon: IoHomeOutline },
        { name: "Orders", path: "/orders", icon: IoClipboardOutline },
        { name: "Profile", path: "/profile", icon: IoPersonOutline }
    ];

    return (
        <div className="fixed left-0 bottom-0 right-0 w-full h-16 bg-white border-t border-black/10 flex justify-around items-center">
            {navItems.map(item => {
                const isActive = pathname === item.path;

                return (
                    <Link
                        key={item.name}
                        href={item.path}
                        className="flex flex-col items-center justify-center gap-1"
                    >
                        <item.icon
                            className={`text-xl transition-all duration-200 ease-in-out ${
                                isActive ? "text-black" : "text-black/40"
                            }`}
                        />
                        <span
                            className={`text-xs leading-none h-[16px] transition-all duration-200 ease-in-out ${
                                isActive
                                    ? "text-black font-medium"
                                    : "text-black/40 font-medium"
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
