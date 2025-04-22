import React from "react";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
};

export default Input;
