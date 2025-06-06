import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

const RecentProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchRecentProducts = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .order("created_at", { ascending: false })

            if (error) {
                console.error("Error fetching recent products:", error);
            } else {
                setProducts(data);
            }
        };

        fetchRecentProducts();
    }, []);

    return (
        <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-black text-lg font-medium leading-normal">
                        Recent Products
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full pt-2">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="rounded-md outline outline-1 outline-offset-[-1px] outline-black/10"
                    >
                        <div
                            className="h-36 relative rounded-md outline-black/10 outline-offset-[-1px] outline-1 outline"
                            style={{
                                backgroundImage: `url(${product.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        ></div>
                        <div className="p-2 flex flex-col justify-start items-start gap-1">
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

export default RecentProducts;
