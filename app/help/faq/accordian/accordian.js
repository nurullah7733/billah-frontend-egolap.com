"use client";
import React, { useState, useRef } from "react";
import Parse from "html-react-parser";
import { MdKeyboardArrowUp } from "react-icons/md";

const AccordionForFaq = ({ title, content, isOpen = false }) => {
  const [expanded, setExpanded] = useState(isOpen);
  const contentRef = useRef(null);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);

    // If expanding, set max-height to the scrollHeight of the content
    if (!expanded) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = null; // When collapsing, remove inline max-height
    }
  };

  // Update max-height on every render to account for dynamic content size changes
  if (expanded && contentRef.current) {
    contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
  }

  const iconStyle = `transition-transform transform duration-300 ease-in-out ${
    expanded ? "rotate-0" : "rotate-180"
  }`;

  return (
    <div className="my-2 cursor-pointer sm:my-4 md:my-6">
      <div
        className="flex items-center justify-between"
        onClick={toggleExpanded}
      >
        <div>{title.length > 0 && Parse(title)}</div>
        <div className={`flex-none pl-2 ${iconStyle}`}>
          <MdKeyboardArrowUp />
        </div>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
        style={{
          maxHeight: !expanded ? "0px" : `${contentRef.current.scrollHeight}px`,
        }}
      >
        <div>{content.length > 0 && Parse(content)}</div>
      </div>
    </div>
  );
};

export default AccordionForFaq;
