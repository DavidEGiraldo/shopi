import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

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

  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  const [searchByTitle, setSearchByTitle] = useState("");

  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    const itemsByCategory = filteredItemsByCategory(items, searchByCategory);
    const itemsToRender = filteredItemsByTitle(itemsByCategory, searchByTitle);
    setFilteredItems(itemsToRender);
  }, [items, searchByCategory, searchByTitle]);

  const {
    loggedIn,
    account,
    signUp,
    signIn,
    signOut,
  } = useLocalStorage("logged-in", "account")

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
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setSearchByCategory,
        loggedIn,
        account,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
