import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const { data, error } = await supabase
                .from("reviews")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching reviews:", error);
            } else {
                setReviews(data);
            }
        };

        fetchReviews();
    }, []);

    const renderStars = rating => {
        return [...Array(5)].map((_, i) => (
            <span
                key={i}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
            >
                ★
            </span>
        ));
    };

    return (
        <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-black text-lg font-medium leading-normal">
                        Customer Reviews
                    </div>
                </div>
            </div>
            <div className="self-stretch overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-smooth scrollbar-hide">
                {reviews.map(review => (
                    <div
                        key={review.id}
                        className="w-46 p-3 bg-black/5 rounded-md inline-flex flex-col justify-center items-center mr-2"
                    >
                        <div className="self-stretch inline-flex justify-start items-center gap-1">
                            <div className="flex-1 flex justify-start items-center gap-2">
                                <div className="size-6 relative bg-black/10 rounded-3xl justify-center items-center flex">
                                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                                </div>
                                <div className="flex-1 inline-flex flex-col justify-start items-start">
                                    <div className="self-stretch justify-start text-black text-xs font-medium leading-none">
                                        {review.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch text-yellow-500 text-sm">
                            {renderStars(review.rating)}
                        </div>
                        <div className="self-stretch break-words whitespace-normal h-14 text-black text-sm font-normal leading-tight truncate w-full">
                            {review.comment}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
