import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { totalPrice, currentformatDate } from "../../utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OrderCard from "../OrderCard";

const Checkout = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, setCart, setOrders } =
    useContext(ShoppingCartContext);

  const handleCheckout = () => {
    const currentOrder = {
      date: currentformatDate(),
      products: cart,
      totalProducts: cart.length,
      totalPrice: totalPrice(cart),
    };

    setOrders((state) => [...state, currentOrder]);
    setCart([]);
    setIsCheckoutOpen(false);
  };

  return (
    <aside
      className={`${
        isCheckoutOpen ? "flex" : "hidden"
      } sm:w-[360px] w-full h-full flex flex-col justify-between fixed right-0 top-0 pt-20 px-6 bg-nord-1 shadow-lg text-nord-6 rounded-lg z-10`}
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
            <OrderCard key={item.id} checkout={true} {...item} />
          ))}
        </div>
      </div>
      <div className="pb-6">
        <hr className="bg-nord-4" />
        <p className="flex justify-between items-center py-2">
          <span>Total:</span>
          <span className="text-lg font-semibold">${totalPrice(cart)}</span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-nord-7 w-full py-2 rounded-lg shadow-md"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default Checkout;
