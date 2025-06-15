"use client";
import React, { useEffect } from "react";

const FormSelect = ({ value, onChange }) => {
  useEffect(() => {
    import("../../../libs/nice-select2").then(({ default: NiceSelect }) => {
      const selectElement = document.getElementById("conService");
      if (selectElement) {
        new NiceSelect(selectElement);
      }
    });
  }, []);

  return (
    <select
      name="conService"
      id="conService"
      className="tj-nice-select"
      value={value} // Ensure correct value binding
      onChange={(e) => onChange(e.target.value)} // Handle change properly
    >
      <option value="" disabled>
        Choose Service
      </option>
      <option value="Web Development">Web Development</option>
      <option value="Cloud Services">Cloud Services</option>
      <option value="IT/Tech Support">IT/Tech Support</option>
      <option value="Digital Marketing">Digital Marketing</option>
      <option value="UI/UX Design">UI/UX Design</option>
      <option value="Cyber Security">Cyber Security</option>
      <option value="Data Solutions">Data Solutions</option>
      <option value="Graphics & Design">Graphics & Design</option>
      <option value="IT & Business Outsourcing">IT & Business Outsourcing</option>
    </select>
  );
};

export default FormSelect;