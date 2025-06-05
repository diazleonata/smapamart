import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: "Alice", comment: "Great quality!" },
    { id: 2, name: "Bob", comment: "Fast shipping!" }
  ];

  return (
    <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
      <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-black text-lg font-medium font-['Roboto'] leading-normal">
            Customer Reviews
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-2">
        {reviews.map((review) => (
          <div key={review.id} className="w-56 p-3 bg-black/5 rounded-md inline-flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="flex-1 flex justify-start items-center gap-2">
                <div className="size-6 relative bg-black/10 rounded-3xl" />
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-black text-xs font-medium font-['Roboto'] leading-none">
                    {review.name}
                  </div>
                </div>
              </div>
              <div className="w-14 h-2.5 relative">
                <div className="w-14 h-2.5 left-0 top-0 absolute bg-yellow-400" />
              </div>
            </div>
            <div className="self-stretch h-14 justify-start text-black text-sm font-normal font-['Roboto'] leading-tight">
              {review.comment}
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="size-6 text-center justify-center text-black text-base font-normal font-['Roboto'] leading-normal">
                💬
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews