import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg mb-4">
      <div
        className="cursor-pointer border-b border-gray-300"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center py-2 px-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9L12 15 18 9"></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="w-full overflow-hidden">
          <div className="px-4 py-2">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
