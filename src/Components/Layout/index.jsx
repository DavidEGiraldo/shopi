import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center pt-24 bg-default min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
