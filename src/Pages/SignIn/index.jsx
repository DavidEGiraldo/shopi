import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { loggedIn, signIn, account } = useContext(ShoppingCartContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    signIn();
  };

  if (loggedIn) return <Navigate to={"/"} replace />;

  return (
    <>
      <div className="flex justify-center items-center text-nord-6 font-semibold text-lg w-80 mb-4">
        <h1>Welcome !</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center gap-4 w-80 font-body text-nord-6 mb-8"
        onSubmit={(event) => handleOnSubmit(event)}
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <span className="font-semibold">Email:</span>
            <input
              type="text"
              defaultValue={account.email}
              className="overflow-hidden bg-transparent text-nord-4 outline-none"
              disabled
            />
          </div>
          <div className="flex gap-2 w-80 relative">
            <span className="font-semibold">Password:</span>
            <input
              type={`${showPassword ? "text" : "password"}`}
              defaultValue={account.password}
              className="overflow-hidden bg-transparent text-nord-4 outline-none pr-10"
              disabled
            />
            <EyeSlashIcon
              className={`h-6 w-6 absolute right-2 my-auto cursor-pointer ${
                showPassword ? undefined : "hidden"
              }`}
              onClick={() => setShowPassword((state) => !state)}
            />
            <EyeIcon
              className={`h-6 w-6 absolute right-2 my-auto cursor-pointer ${
                showPassword ? "hidden" : undefined
              }`}
              onClick={() => setShowPassword((state) => !state)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-nord-7 disabled:bg-nord-1 py-2 rounded-lg shadow-md disabled:shadow-none w-80 text-nord-6 disabled:text-nord-4"
          disabled={Object.keys(account).length ? false : true}
        >
          Log In
        </button>
        <p className="text-sm underline underline-offset-2 cursor-pointer">
          Forgot my password
        </p>
      </form>
      <Link to="/sign-up">
        <button
          className="bg-nord-7 disabled:bg-nord-1 py-2 rounded-lg shadow-md disabled:shadow-none w-80 text-nord-6 disabled:text-nord"
          disabled={Object.keys(account).length ? true : false}
        >
          Sign Up
        </button>
      </Link>
    </>
  );
}

export default SignIn;
