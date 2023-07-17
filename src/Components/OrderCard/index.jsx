import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const OrderCard = ({ title, images, price }) => {
  return (
    <div className="flex justify-between items-center mb-4 bg-nord-2 rounded-lg shadow-md pr-2 font-body gap-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className="text-sm">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold">${price}</p>
        <TrashIcon className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default OrderCard;