import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import AccountForm from "../../Components/AccountForm";

const MyAccount = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { account } = useContext(ShoppingCartContext);

  const formToShow = () => {
    if (showEdit) {
      return <AccountForm showEdit={showEdit} setShowEdit={setShowEdit} />;
    } else {
      return (
        <form
          className="flex flex-col justify-center items-center gap-4 w-80 font-body text-nord-6"
          onSubmit={(event) => {
            event.preventDefault();
            setShowEdit(true);
          }}
        >
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-2 w-full">
              <span className="font-semibold">Name:</span>
              <input
                type="text"
                defaultValue={account.name}
                className="overflow-hidden bg-transparent text-nord-4 outline-none"
                disabled
              />
            </div>
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
                className="overflow-hidden bg-transparent text-nord-4 outline-none"
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
            className="bg-nord-7 w-full py-2 rounded-lg shadow-md font-sans"
          >
            Edit
          </button>
        </form>
      );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center text-nord-6 font-semibold text-lg w-80 mb-4">
        <h1>My Account</h1>
      </div>
      {formToShow()}
    </>
  );
};

export default MyAccount;
