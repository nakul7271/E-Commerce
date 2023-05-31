import { Backdrop } from "./Modal";
import Dropdown from "../dropdowns/Dropdown";


const Sidebar = (props) => {
  return (
      <div>
          {props.showSidebar && <Backdrop onClose={props.onClose} />}
      <div
        className={`top-0 left-0 sm:w-[35vw] w-[60%] bg-white border border-slate-200  p-10  text-white fixed h-full z-40 animate-fade-in-right ${
          props.showSidebar ? "translate-x-0 " : "translate-x-[-35vw]"
        }`}
      >
        
        <div className="relative">
          <button onClick ={props.onClose} className="absolute right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6">
          {/* <h3 className="mt-20 text-4xl font-semibold text-slate-700">
            I am a sidebar
                  </h3> */}
                  <ul className="text-sm text-slate-700">
              <li className="xl:mr-6 pr-6 py-4 ">Home</li>
              <li className="xl:mr-6 pr-6 py-4">Shop</li>
              <li className="xl:mr-6 pr-6 py-4">Products</li>
              <li className="xl:mr-6 pr-6 py-4">
                <Dropdown
                  value="Learn More"
                  options={[{}]}
                  onChange={()=>{}}
                />
              </li>
              <li className="xl:mr-6 pr-6 py-4">Portfolio</li>
              <li className="xl:mr-6 pr-6 py-4">Buy Samples</li>
              <li className="xl:mr-6 pr-6 py-4">Contacts</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
