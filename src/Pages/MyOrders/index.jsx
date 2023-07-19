import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

const MyOrders = () => {
  const { orders } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex justify-center items-center text-nord-6 font-semibold text-lg w-80 mb-4">
        <h1>My Orders</h1>
      </div>
      {orders.map((order, index) => (
        <Link to={`/my-orders/${index}`}>
          <OrdersCard key={index} {...order} />
        </Link>
      ))}
    </>
  );
};

export default MyOrders;
