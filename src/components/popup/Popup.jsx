import React, { useEffect } from "react";
import { X } from "lucide-react";

export const Popup = ({ trigger, setTrigger, children }) => {
  useEffect(() => {
    if (trigger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [trigger]);

  if (!trigger) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
      onClick={() => setTrigger(false)}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setTrigger(false)}
            aria-label="Close popup"
          >
            <X size={24} />
          </button>
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;