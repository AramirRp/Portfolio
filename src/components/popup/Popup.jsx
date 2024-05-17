import { X } from "lucide-react";

import "./popup.css";

export const Popup = (props) => {
  return props.trigger ? (
    <div
      className="popup fixed w-full h-[100vh] flex justify-center items-center z-[1000] left-0 top-0"
      onClick={() => props.setTrigger(false)}
    >
      <div className="popup-inner relative h-[75%] min-w-[320px] w-[75vh] bg-white rounded-[30px]">
        <button
          className="clodebtn absolute right-4 top-4"
          onClick={() => props.setTrigger(false)}
        >
          <X />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
