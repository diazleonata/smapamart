import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchSection = () => {
    return (
        <div className="self-stretch px-3 flex flex-col justify-start items-center gap-1 overflow-hidden">
            <div className="self-stretch pl-3 pr-1 py-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-end items-center gap-1">
                <input
                    className="flex-1 justify-start text-black/50 text-sm font-normal leading-tight 
             focus:outline-none focus:ring-1 focus:ring-black/20 focus:rounded-sm px-1 transition-all duration-300 ease-in-out"
                    type="text"
                    placeholder="Search products"
                />
                <div className="size- px-2 py-1 bg-black rounded-sm flex justify-center items-center gap-1 text-white font-bold">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
