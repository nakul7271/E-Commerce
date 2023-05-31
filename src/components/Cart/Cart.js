import React, {useState} from "react";
import CartIcon from "./CartIcon";
import HeartIcon from "./HeartIcon";
import Modal from "../UI/Modal";

const Cart = () => {

  const [isWOpen, setIsWOpen] = useState(false);
  const [isCOpen, setIsCOpen] = useState(false);



  return (
    <>
      <div className="flex">
        <div className=" mr-1 sm:mr-4">
          <button onClick={()=>{setIsWOpen(true)}} className="flex text-slate-600 hover:text-blue-400">
            <span className="pr-0.5 sm:pr-3 pt-4">
              <HeartIcon />
            </span>
            <span>
              <div className="bg-blue-500 rounded-full w-6 text-white mt-2 sm:mt-0">0</div>
              <div className="text-inherit hidden sm:block">Wishlist</div>
            </span>
          </button>
          {isWOpen && <Modal onClose={() => { setIsWOpen(false) }} name= "Wishlist" isWOpen={isWOpen}></Modal>}
        </div>
        <div>
          <button onClick={()=>{setIsCOpen(true)}} className="flex text-slate-600 hover:text-blue-400">
            <span className="pr-0.5 sm:pr-3 pt-4">
              <CartIcon />
            </span>
            <span>
              <div className="bg-blue-500 rounded-full w-6  text-white mt-2 sm:mt-0">0</div>
              <div className="text-inherit hidden sm:block">My Cart</div>
            </span>
          </button>
          {isCOpen && <Modal onClose={() => { setIsCOpen(false) }} name= "Cart"></Modal>}
        </div>
      </div>
    </>
  );
};

export default Cart;
