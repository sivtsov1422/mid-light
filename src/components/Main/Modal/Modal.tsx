import { FC } from "react";
import "./Modal.css";

type TBoolean = {
  active: boolean;
  setActive: any;
  children: any;
};

const Modal: FC<TBoolean> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()} id="Modal">
        {children}
        <button className="closeBtn" onClick={() => setActive(false)}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/external-cross-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
            alt="external-cross-user-interface-tanah-basah-detailed-outline-tanah-basah"
          />
        </button>
      </div>
    </div>
  );
};
export default Modal;
