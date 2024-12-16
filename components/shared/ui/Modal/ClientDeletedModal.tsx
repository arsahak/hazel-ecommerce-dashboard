"use client";

import React from "react";
import { toast } from "react-toastify";

interface ClientDeletedModalProps {
  clientDeletedModal: boolean;
  setClientDeletedModal: (value: boolean) => void;
}

const ClientDeletedModal: React.FC<ClientDeletedModalProps> = ({
  clientDeletedModal,
  setClientDeletedModal,
}) => {
  const toggleModal = () => setClientDeletedModal(!clientDeletedModal);
  const closeModal = () => setClientDeletedModal(false);

  const clientDeletedHandler = () => {
    toast.success("Successfully deleted client");
    setClientDeletedModal(false);
  };

  return (
    <div>
      {clientDeletedModal && (
        <div
          id="default-modal"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center p-4 md:p-5 border-b rounded-t bg-secondary text-white">
                <h3 className="text-xl font-semibold text-white text-center flex justify-center">
                  Delete Client
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 my-6">
                <p className="text-xl leading-relaxed text-gray-800 text-center">
                  Do you want to delete?
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-center space-x-4 p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button
                  onClick={clientDeletedHandler}
                  className="px-6 py-2 text-primary rounded-md font-medium text-base hover:bg-primary border-2 border-primary hover:text-white"
                >
                  Delete
                </button>
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 text-white rounded-md font-medium text-base bg-primary hover:bg-[#be9837] hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDeletedModal;
