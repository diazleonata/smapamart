import React from 'react';

const BottomNavigation = () => {
  return (
    <div className="w-96 left-0 top-[1122px] absolute bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] inline-flex justify-start items-start overflow-hidden">
      <div className="flex-1 p-1 inline-flex flex-col justify-start items-center">
        <div className="size-7 text-center justify-center text-black text-xl font-normal font-['Roboto'] leading-7">
          🏠
        </div>
        <div className="self-stretch h-3.5 text-center justify-center text-black text-[10px] font-normal font-['Roboto'] leading-none">
          Home
        </div>
      </div>
      <div className="flex-1 p-1 inline-flex flex-col justify-start items-center">
        <div className="size-7 text-center justify-center text-black text-xl font-normal font-['Roboto'] leading-7">
          📦
        </div>
        <div className="self-stretch h-3.5 text-center justify-center text-black text-[10px] font-normal font-['Roboto'] leading-none">
          Orders
        </div>
      </div>
      <div className="flex-1 p-1 inline-flex flex-col justify-start items-center">
        <div className="size-7 text-center justify-center text-black text-xl font-normal font-['Roboto'] leading-7">
          👤
        </div>
        <div className="self-stretch h-3.5 text-center justify-center text-black text-[10px] font-normal font-['Roboto'] leading-none">
          Profile
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation