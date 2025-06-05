import React from 'react';

const SearchSection = () => {
  return (
    <div className="self-stretch px-3 flex flex-col justify-start items-center gap-1 overflow-hidden">
      <div className="self-stretch pl-3 pr-1 py-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-end items-center gap-1">
        <div className="flex-1 justify-start text-black/50 text-sm font-normal font-['Roboto'] leading-tight">
          Search products
        </div>
        <div className="size- px-2 py-1 bg-black rounded-sm flex justify-center items-center gap-1">
          <div className="size-5 relative">
            <div className="size-4 left-[1.67px] top-[1.67px] absolute bg-white" />
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start text-black/50 text-xs font-normal font-['Roboto'] leading-none">
        Find what you need
      </div>
    </div>
  );
};

export default SearchSection