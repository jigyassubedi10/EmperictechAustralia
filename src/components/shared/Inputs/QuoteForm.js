"use client";

import React, { useEffect, useState } from "react";

const QuoteForm = ({ question, value, onChange, options }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    import("../../../libs/nice-select2").then(({ default: NiceSelect }) => {
      const selectElement = document.getElementById(question);
      if (selectElement) {
        new NiceSelect(selectElement);
        
      }
    });
  }, [question]);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <label htmlFor={question} className="block text-gray-700 dark:text-gray-300">
        {question}
      </label>
      <select
        name={question}
        id={question}
        className="tj-nice-select border border-black rounded-md p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Choose an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuoteForm;
