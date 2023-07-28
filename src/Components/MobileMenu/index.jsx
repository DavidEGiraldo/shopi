import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, loggedIn, signOut, account } =
    useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";

  return (
    <aside
      className={`${
        isMobileMenuOpen ? "flex" : "hidden"
      } sm:w-[360px] w-full h-full flex flex-col justify-between fixed left-0 top-0 pt-20 px-8
      pb-6 bg-nord-1 shadow-lg text-nord-6 rounded-lg z-10 lg:hidden`}
    >
      <ul className="flex flex-col items-left gap-4 text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-col items-left gap-2">
        <li className={`text-nord-4 ${loggedIn ? undefined : "hidden"}`}>
          {account.email}
        </li>
        <li className={loggedIn ? undefined : "hidden"}>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Orders
          </NavLink>
        </li>
        <li className={loggedIn ? undefined : "hidden"}>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Account
          </NavLink>
        </li>
        <li onClick={() => signOut()}>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {loggedIn ? "Sign Out" : "Sign In"}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default MobileMenu;
