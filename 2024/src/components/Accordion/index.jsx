// Accordion.js

import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li onClick={toggleAccordion}>
      <div className="flex gap-1 items-center">
        <span>
          {isOpen && content ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight className="text-primary-pink" />
          )}
        </span>
        <h2
          className={`${
            content && "hover:text-primary-pink hover:cursor-pointer"
          }  font-bold md:text-2xl lg:text-4xl`}
        >
          {title}
        </h2>
      </div>

      {isOpen && <div className="ml-10 mt-2">{content}</div>}
    </li>
  );
};

export const AccordionContainer = ({ children, ...restProps }) => {
  return <ul {...restProps}>{children}</ul>;
};
