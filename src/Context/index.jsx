import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const [product, setProduct] = useState(null);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const removeFromCart = (id) => {
    const filteredProducts = cart.filter((product) => product.id !== id);
    setCart(filteredProducts);
  };

  const [orders, setOrders] = useState([]);

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
        removeFromCart,
        orders,
        setOrders,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
