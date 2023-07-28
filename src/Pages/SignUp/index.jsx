import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AccountForm from "../../Components/AccountForm";
import { ShoppingCartContext } from "../../Context";

const SignUp = () => {
  const { loggedIn } = useContext(ShoppingCartContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  if (loggedIn) return <Navigate to={"/"} replace />;

  return (
    <>
      <div className="flex justify-center items-center text-nord-6 font-semibold text-lg w-80 mb-4">
        <h1>Sign Up</h1>
      </div>
      <AccountForm />
    </>
  );
};

export default SignUp;
