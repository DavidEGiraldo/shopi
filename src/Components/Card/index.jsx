import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/outline";

const Card = ({ data }) => {
  const { setIsProductDetailOpen, setProduct, setCart, setIsCheckoutOpen } =
    useContext(ShoppingCartContext);

  const showProductDetail = (productDetail) => {
    setIsCheckoutOpen(false);
    setProduct(productDetail);
    setIsProductDetailOpen(true);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    setIsProductDetailOpen(false);
    setCart((state) => [...state, productData]);
    setIsCheckoutOpen(true);
  };

  return (
    <div
      className="bg-nord-0 cursor-pointer w-60 h-56 rounded-lg font-body shadow-md"
      onClick={() => showProductDetail(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-nord-3 rounded-lg text-nord-4 text-xs m-2 px-4 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={data.images[0]}
          alt={data.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-nord-3 w-6 h-6 rounded-full text-nord-4 m-2"
          onClick={(event) => addProductToCart(event, data)}
        >
          <PlusIcon className="h-4 w-4" />
        </div>
      </figure>
      <p className="flex justify-between text-nord-6 px-4">
        <span className="truncate text-sm">{data.title}</span>
        <span className="font-semibold ml-2">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
