import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuickActions = () => {
    return (
        <div className="self-stretch px-3 inline-flex justify-start items-start gap-2 overflow-hidden">
            <div className="flex-1 p-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-center gap-1">
                <div className="size-12 flex items-center justify-center bg-black/5 rounded-3xl">
                    <FontAwesomeIcon
                        icon="fa-solid fa-share"
                        className="text-black text-2xl"
                    />
                </div>
            </div>
            <div className="flex-1 p-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-center gap-1">
                <div className="size-12 flex items-center justify-center bg-black/5 rounded-3xl">
                    <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        className="text-black text-2xl"
                    />
                </div>
            </div>
            <div className="flex-1 p-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-center gap-1">
                <div className="size-12 flex items-center justify-center bg-black/5 rounded-3xl">
                    <FontAwesomeIcon
                        icon="fa-solid fa-user"
                        className="text-black text-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default QuickActions;
