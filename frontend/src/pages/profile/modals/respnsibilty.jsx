// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-xl font-semibold mb-4">Edit or Add Content</h2>
        <input
          type="text"
          placeholder="Enter content..."
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Add action for saving data here
              onClose();
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
