import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";
// import { Transition } from '@headlessui/react';

 export const Backdrop = (props) => {
  return <div onClick={props.onClose} className={Classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    // <div className={Classes.modal}>
    //   <div>{props.children}</div>
    // </div>

<nav className={Classes.modal} >
          {/* <div className={Classes.modal}> */}
          <div className="flex justify-between py-4">
              <div className="mx-6 font-semibold">{props.name }</div>
        <div className="mx-6">
          <button onClick={props.onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-slate-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
          </div>
          <hr className="bg-gray-700  dark:bg-gray-700"></hr>
      <div className="m-6">
              <h3 className="font-semibold py-8">Your {props.name} Items</h3>
              <div>
              <button> Start shopping</button>
              </div>
        
      </div>
          {/* </div> */}
      
    </nav>
// </div>
      
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay isWOpen={props.isWOpen} onClose={props.onClose} name={props.name}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
