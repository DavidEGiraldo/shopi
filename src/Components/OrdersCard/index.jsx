import React from "react";
import {
  ChevronRightIcon,
  CalendarDaysIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const OrdersCard = ({ date, totalPrice, totalProducts }) => {
  return (
    <div className="mb-4 bg-nord-0 rounded-lg shadow-md pr-2 font-body text-nord-6 w-80 p-4">
      <div className="flex justify-between items-center">
        <p className="flex flex-col">
          <span className="flex items-center gap-1 text-nord-4">
            <CalendarDaysIcon className="h-5 w-5 stroke-nord-6" />
            {date}
          </span>
          <span className="flex items-center gap-1 text-nord-4">
            <ShoppingCartIcon className="h-5 w-5 stroke-nord-6" />
            {totalProducts} products
          </span>
        </p>
        <div className="flex gap-2 items-center">
          <span className="font-semibold">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 cursor-pointer stroke-2" />
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
