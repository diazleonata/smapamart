import React from 'react';

const TopPicks = () => {
  const products = [
    {
      id: 1,
      name: "Backpack",
      description: "Stylish backpack",
      price: "$49.99",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Smartphone",
      price: "$999.99",
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Headphones",
      description: "Wireless Headphones",
      price: "$199.99",
      badge: "Discount"
    }
  ];

  return (
    <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
      <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-black text-lg font-medium font-['Roboto'] leading-normal">
            Top Picks for You
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-2">
        {products.map((product) => (
          <div key={product.id} className="w-36 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-center overflow-hidden">
            <div className="self-stretch h-36 inline-flex justify-start items-start overflow-hidden">
              <div className="flex-1 self-stretch relative bg-black/5">
                <div className="w-28 h-4 left-[16px] top-[67px] absolute text-center justify-center text-black text-xs font-normal font-['Roboto'] leading-none">
                  {product.description}
                </div>
                <div className="size- p-1 left-0 top-0 absolute bg-black/5 rounded-tl-md rounded-br-md inline-flex flex-col justify-center items-center">
                  <div className="justify-start text-black text-xs font-medium font-['Roboto'] leading-none">
                    {product.badge}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch p-2 flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-black text-xs font-normal font-['Roboto'] leading-none">
                {product.name}
              </div>
              <div className="self-stretch justify-start text-black text-base font-medium font-['Roboto'] leading-normal">
                {product.price}
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="size-6 text-center justify-center text-black text-base font-normal font-['Roboto'] leading-normal">
                  🛒
                </div>
                <div className="size-6 text-center justify-center text-black text-base font-normal font-['Roboto'] leading-normal">
                  ❤️
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks