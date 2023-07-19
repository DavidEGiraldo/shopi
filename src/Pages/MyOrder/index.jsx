import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const MyOrder = () => {
  const { orders } = useContext(ShoppingCartContext);

  const { id } = useParams();

  return (
    <>
      <div className="flex justify-center relative items-center text-nord-6 font-semibold text-lg w-80 mb-4">
        <Link to={"/my-orders"} className="absolute left-0">
          <ArrowLeftIcon className="h-6 w-6 cursor-pointer stroke-2" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {orders.at(id === "last" ? -1 : id).products?.map((item) => (
          <OrderCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default MyOrder;
