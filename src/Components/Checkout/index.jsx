import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OrderCard from "../OrderCard";

const Checkout = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    setCart,
    orders,
    setOrders,
  } = useContext(ShoppingCartContext);

  const handleCheckout = () => {
    const currentOrder = {
      date: "18-07-2023",
      products: cart,
      totalProducts: cart.length,
      totalPrice: totalPrice(cart),
    };

    setOrders((state) => [...state, currentOrder]);
    setCart([]);
  };

  return (
    <aside
      className={`${
        isCheckoutOpen ? "flex" : "hidden"
      } w-[360px] h-full flex flex-col justify-between fixed right-0 top-0 pt-20 px-6 bg-nord-1 shadow-lg text-nord-6 rounded-lg z-10`}
    >
      <div>
        <div className="flex justify-between items-center pb-6">
          <h2 className="text-lg font-medium">Checkout</h2>
          <XMarkIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsCheckoutOpen(false)}
          />
        </div>
        <div className="overflow-y-auto">
          {cart?.map((item) => (
            <OrderCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="pb-6">
        <hr className="bg-nord-4" />
        <p className="flex justify-between items-center py-2">
          <span>Total:</span>
          <span className="text-lg font-semibold">${totalPrice(cart)}</span>
        </p>
        <button
          className="bg-nord-7 w-full py-2 rounded-lg shadow-md"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default Checkout;
