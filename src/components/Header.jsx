import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 self-stretch bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] flex flex-col justify-start items-start">
            {/* App Header */}
            <div className="self-stretch pl-4 pr-2 py-3 inline-flex justify-start items-center gap-2">
                <div className="flex-1 justify-start text-black text-xl font-medium font-['Roboto'] leading-normal">
                    Marketplace
                </div>
                <div className="size- flex justify-start items-center gap-2">
                    <a
                        href="https://saweria.co/leonatadiaz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-center justify-center leading-normal">
                            <FontAwesomeIcon
                                icon="fa-solid fa-circle-dollar-to-slot"
                                className="text-2xl"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
