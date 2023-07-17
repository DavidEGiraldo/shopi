import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ProductDetail = () => {
  const { isProductDetailOpen, setIsProductDetailOpen, product } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-[360px] h-full flex flex-col fixed right-0 top-0 pt-20 px-6 bg-nord-1 shadow-lg text-nord-6 rounded-lg`}
    >
      <div className="flex justify-between items-center pb-6">
        <h2 className="text-lg font-medium">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsProductDetailOpen(false)}
        />
      </div>
      <figure>
        <img
          className="w-full h-full rounded-lg shadow-sm"
          src={product?.images[0]}
          alt={product?.title}
        />
      </figure>
      <p className="flex flex-col py-6">
        <span className="font-medium mb-2 text-lg">${product?.price}</span>
        <span className="font-medium mb-1">{product?.title}</span>
        <span className="font-body text-sm text-nord-4">
          {product?.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
