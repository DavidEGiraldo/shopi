import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const [product, setProduct] = useState(null);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        isProductDetailOpen,
        setIsProductDetailOpen,
        product,
        setProduct,
        cart,
        setCart,
        isCheckoutOpen,
        setIsCheckoutOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
