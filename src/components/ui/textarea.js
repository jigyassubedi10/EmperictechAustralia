import React from "react";

const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
};

export default Textarea;
