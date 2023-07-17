import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { cart, setIsCheckoutOpen, setIsProductDetailOpen } =
    useContext(ShoppingCartContext);

  const openCheckout = () => {
    setIsProductDetailOpen(false);
    setIsCheckoutOpen(true);
  };

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center py-4 px-8 text-nord-6 bg-nord-0 shadow-lg fixed top-0 w-full z-20">
      <ul className="flex items-center gap-4 text-lg">
        <li className="font-semibold text-2xl">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li className="text-nord-4">degiraldod@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li
          className="flex gap-1 cursor-pointer"
          onClick={() => openCheckout()}
        >
          <ShoppingCartIcon className="h-6 w-6"></ShoppingCartIcon>
          <span>{cart.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
