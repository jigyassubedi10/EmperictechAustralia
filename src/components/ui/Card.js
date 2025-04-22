import React from "react";

const Card = ({ children, className }) => {
  return <div className={`shadow-lg rounded-lg p-6 bg-white ${className}`}>{children}</div>;
};

const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export { Card, CardContent };
