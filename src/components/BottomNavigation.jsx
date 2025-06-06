import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] inline-flex justify-start items-start overflow-hidden">
      <div className="flex-1 p-1 inline-flex flex-col justify-start items-center">
        <div className="size-7 text-center justify-center text-black text-xl leading-7">
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </div>
        <div className="self-stretch h-3.5 text-center justify-center text-black text-[10px] font-bold leading-none">
          Home
        </div>
      </div>
      <div className="flex-1 p-1 inline-flex flex-col justify-start items-center">
        <div className="size-7 text-center justify-center text-black text-xl leading-7">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </div>
        <div className="self-stretch h-3.5 text-center justify-center text-black text-[10px] font-normal leading-none">
          Orders
        </div>
      </div>
      <div className="flex-1 p-1 inline-flex flex-col justify-start items-center">
        <div className="size-7 text-center justify-center text-black text-xl leading-7">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </div>
        <div className="self-stretch h-3.5 text-center justify-center text-black text-[10px] font-normal leading-none">
          Profile
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation