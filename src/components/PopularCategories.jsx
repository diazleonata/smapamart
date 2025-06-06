import React from 'react';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Electronics",
      description: "Discover the latest in tech."
    },
    {
      id: 2,
      title: "Clothing",
      description: "Shop the trendiest outfits."
    },
    {
      id: 3,
      title: "Home Decor",
      description: "Stylish items for your home."
    }
  ];

  return (
    <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2">
      <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-black text-lg font-medium leading-normal">
            Popular Categories
          </div>
        </div>
      </div>
      {categories.map((category, index) => (
        <div key={category.id} className="self-stretch py-2 relative inline-flex justify-center items-start gap-3">
          <div className="size-20 flex justify-start items-start overflow-hidden">
            <div className="flex-1 self-stretch relative bg-black/5" />
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-black text-base font-medium leading-tight">
              {category.title}
            </div>
            <div className="self-stretch justify-start text-black text-xs font-normal leading-tight">
              {category.description}
            </div>
            <div className="self-stretch py-1 inline-flex justify-start items-center gap-2">
              <div className="size- flex justify-start items-center gap-2">
                <div className="size-6 text-center justify-center text-black text-base font-normal leading-normal">
                  🏠
                </div>
                <div className="size-6 text-center justify-center text-black text-base font-normal leading-normal">
                  👚
                </div>
                <div className="size-6 text-center justify-center text-black text-base font-normal leading-normal">
                  📱
                </div>
              </div>
            </div>
          </div>
          {index < categories.length - 1 && (
            <div className="w-80 h-0 left-0 top-[96px] absolute outline outline-1 outline-offset-[-0.50px] outline-black/10" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PopularCategories