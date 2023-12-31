import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { TrashIcon } from "@heroicons/react/24/outline";

const OrderCard = ({ id, title, images, price, checkout }) => {
  const { removeFromCart } = useContext(ShoppingCartContext);

  const renderTrashIcon = checkout ? (
    <TrashIcon
      className="h-5 w-5 hover:text-nord-11 cursor-pointer"
      onClick={() => removeFromCart(id)}
    />
  ) : null;

  return (
    <div
      className={`flex justify-between items-center mb-4 ${
        checkout ? "bg-nord-2" : "bg-nord-0"
      } rounded-lg shadow-md pr-2 font-body gap-2 text-nord-6`}
    >
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
        {renderTrashIcon}
      </div>
    </div>
  );
};

export default OrderCard;
