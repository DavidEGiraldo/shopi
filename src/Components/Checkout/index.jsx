import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OrderCard from "../OrderCard";

const Checkout = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isCheckoutOpen ? "flex" : "hidden"
      } w-[360px] h-full flex flex-col fixed right-0 top-0 pt-20 px-6 bg-nord-1 shadow-lg text-nord-6 rounded-lg z-10 overflow-y-scroll`}
    >
      <div className="flex justify-between items-center pb-6">
        <h2 className="text-lg font-medium">Checkout</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsCheckoutOpen(false)}
        />
      </div>
      {cart?.map((item) => (
        <OrderCard key={item.id} {...item} />
      ))}
    </aside>
  );
};

export default Checkout;
