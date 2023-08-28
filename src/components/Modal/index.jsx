import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-[1001]">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white py-4 px-4 md:px-8 rounded-lg shadow-md z-10 max-w-lg lg:max-w-2xl mx-2">
            <div className="flex justify-end">
              <button
                className="hover:text-primary-pink text-gray-700"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
