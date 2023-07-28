import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const {
    cart,
    setIsCheckoutOpen,
    setIsProductDetailOpen,
    account,
    loggedIn,
    signOut,
    setIsMobileMenuOpen,
  } = useContext(ShoppingCartContext);

  const toggleCheckout = () => {
    setIsProductDetailOpen(false);
    setIsMobileMenuOpen(false);
    setIsCheckoutOpen((state) => !state);
  };

  const toggleMobileMenu = () => {
    setIsProductDetailOpen(false);
    setIsCheckoutOpen(false);
    setIsMobileMenuOpen((state) => !state);
  };

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center py-4 px-8 text-nord-6 bg-nord-0 shadow-lg fixed top-0 w-full z-20">
      <ul className="flex items-center gap-4 text-lg justify-between w-full min-[1024px]:hidden">
        <li className="cursor-pointer" onClick={() => toggleMobileMenu()}>
          <Bars3Icon className="h-6 w-6" />
        </li>
        <li className="font-semibold text-2xl text-nord-8">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li
          className={`flex gap-1 cursor-pointer ${
            cart.length ? "text-nord-14" : ""
          }`}
          onClick={() => toggleCheckout()}
        >
          <ShoppingCartIcon className="h-6 w-6"></ShoppingCartIcon>
          <span>{cart.length}</span>
        </li>
      </ul>
      <ul className="flex items-center gap-4 text-lg max-[1024px]:hidden">
        <li className="font-semibold text-2xl text-nord-8">
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
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
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
      <ul className="flex items-center gap-2 max-[1024px]:hidden">
        <li className={`text-nord-4 ${loggedIn ? undefined : "hidden"}`}>
          {account.email}
        </li>
        <li className={loggedIn ? undefined : "hidden"}>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li className={loggedIn ? undefined : "hidden"}>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li onClick={() => signOut()}>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {loggedIn ? "Sign Out" : "Sign In"}
          </NavLink>
        </li>
        <li
          className={`flex gap-1 cursor-pointer ${
            cart.length ? "text-nord-14" : ""
          }`}
          onClick={() => toggleCheckout()}
        >
          <ShoppingCartIcon className="h-6 w-6"></ShoppingCartIcon>
          <span>{cart.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
