import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

const TopPicks = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchTopPicks = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq("is_top_pick", true);

            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setProducts(data);
            }
        };

        fetchTopPicks();
    }, []);

    return (
        <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-black text-lg font-medium leading-normal">
                        Top Picks for You
                    </div>
                </div>
            </div>
            <div className="self-stretch overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-smooth scrollbar-hide">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="w-36 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-block align-top mr-2"
                    >
                        <div
                            className="self-stretch h-36 relative rounded-md outline-black/10 outline-offset-[-1px] outline-1 outline"
                            style={{
                                backgroundImage: `url(${product.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className="p-1 left-0 top-0 absolute bg-black/50 text-white rounded-tl-md rounded-br-md text-xs font-medium ">
                                {product.badge}
                            </div>
                        </div>
                        <div className="self-stretch p-2 flex flex-col justify-start items-start gap-1">
                            <div className="text-black text-xs font-normal leading-none truncate w-full">
                                {product.name}
                            </div>
                            <div className="text-black text-base font-medium leading-normal">
                                ${product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopPicks;
