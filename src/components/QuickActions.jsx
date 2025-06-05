import React from 'react';

const QuickActions = () => {
  return (
    <div className="self-stretch px-3 inline-flex justify-start items-start gap-2 overflow-hidden">
      <div className="flex-1 p-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-center gap-1">
        <div className="size-12 relative bg-black/5 rounded-3xl">
          <div className="size-12 left-0 top-0 absolute text-center justify-center text-black text-3xl font-normal font-['Roboto'] leading-[48px]">
            🛍️
          </div>
        </div>
        <div className="self-stretch h-7 text-center justify-center text-black text-[10px] font-normal font-['Roboto'] leading-none">
          Shop
        </div>
      </div>
      <div className="flex-1 p-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-center gap-1">
        <div className="size-12 relative bg-black/5 rounded-3xl">
          <div className="size-12 left-0 top-0 absolute text-center justify-center text-black text-3xl font-normal font-['Roboto'] leading-[48px]">
            ⭐
          </div>
        </div>
        <div className="self-stretch h-7 text-center justify-center text-black text-[10px] font-normal font-['Roboto'] leading-none">
          Favorites
        </div>
      </div>
      <div className="flex-1 p-1 rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-center gap-1">
        <div className="size-12 relative bg-black/5 rounded-3xl">
          <div className="size-12 left-0 top-0 absolute text-center justify-center text-black text-3xl font-normal font-['Roboto'] leading-[48px]">
            👤
          </div>
        </div>
        <div className="self-stretch h-7 text-center justify-center text-black text-[10px] font-normal font-['Roboto'] leading-none">
          Profile
        </div>
      </div>
    </div>
  );
};

export default QuickActions