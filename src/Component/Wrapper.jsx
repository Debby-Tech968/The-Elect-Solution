import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="mx-auto px-4 md:px-6 xl:px-5 xl:py-2 lg:px-5 lg:py-5">
      {children}
    </div>
  );
};

export default Wrapper;
