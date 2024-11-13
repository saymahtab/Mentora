// components/PopupModal.jsx
import React, { useRef, useEffect } from "react";

const PopupModal = ({ isOpen, position, children, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className={`absolute mt-3 bg-white text-zinc-700 shadow-lg rounded-md px-1 py-1 z-10 ${position}`}
    >
      {children}
    </div>
  );
};

export default PopupModal;
