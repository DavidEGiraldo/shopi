import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const AccountForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const { account, loggedIn, signUp } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const account = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    signUp(account);
    if (Object.keys(props).length) props.setShowEdit(false);
    if (loggedIn === false) navigate("/sign-in");
    if (loggedIn) navigate("/my-account");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 w-80 font-body text-nord-6 mb-8"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col w-full">
          <span className="text-sm text-nord-4">Name:</span>
          <input
            type="text"
            defaultValue={account?.name}
            className="rounded-lg w-full py-1 px-2 bg-nord-1 text-nord-6 outline-none border-2 border-transparent focus:border-nord-3 placeholder:text-nord-4"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <span className="text-sm text-nord-4">Email:</span>
          <input
            type="text"
            defaultValue={account?.email}
            className="rounded-lg w-full py-1 px-2 bg-nord-1 text-nord-6 outline-none border-2 border-transparent focus:border-nord-3 placeholder:text-nord-4"
            required
          />
        </div>
        <div className="flex flex-col w-80">
          <span className="text-sm text-nord-4">Password:</span>
          <div className="relative w-80">
            <input
              type={`${showPassword ? "text" : "password"}`}
              defaultValue={account?.password}
              className="rounded-lg w-full py-1 px-2 bg-nord-1 text-nord-6 outline-none border-2 border-transparent focus:border-nord-3 placeholder:text-nord-4"
              required
            />
            <EyeSlashIcon
              className={`h-full w-6 absolute right-2 top-0 my-auto cursor-pointer ${
                showPassword ? undefined : "hidden"
              }`}
              onClick={() => setShowPassword((state) => !state)}
            />
            <EyeIcon
              className={`h-full w-6 absolute right-2 top-0 my-auto cursor-pointer ${
                showPassword ? "hidden" : undefined
              }`}
              onClick={() => setShowPassword((state) => !state)}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-nord-7 w-full py-2 rounded-lg shadow-md font-sans"
      >
        {(props.showEdit && "Edit") || "Sign Up"}
      </button>
    </form>
  );
};

export default AccountForm;
