import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AuthForm = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  return (
    <div className="my-12">
      <div className="mx-[5%]  sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="lg:mx-52 ">
          <div className="w-full ">
            <div className="flex items-center justify-center">
              <Link to="?mode=login" onClick={() => {
                setLogin(true);
                setRegister(false);
              }}
                className={` ${
                  login ? "text-blue-500" : ""
                } mr-4  hover:text-blue-500 transition-all duration-300 font-semibold text-3xl border-slate-600`}
              >
                Login
              </Link>
              <span className="text-xl">|</span>
              <Link to="?mode=register" onClick={() => {
                setLogin(false);
                setRegister(true);
              }}
                className={` ${
                  register ? "text-blue-500" : ""
                } ml-4 hover:text-blue-500 transition-all duration-300 font-semibold text-3xl border-slate-600`}
              >
                Register
              </Link>
            </div>
            <div className="my-10  border border-slate-200 shadow-md w-full">
              <div className="sm:p-16 p-6">
                {login&&<div>
                  <form>
                    <input
                      className="py-3 px-4 mb-8 w-full border border-slate-200 outline-none"
                      type="text"
                      name="name"
                      placeholder="Username"
                    />
                    <input
                      className="py-3 px-4 w-full border border-slate-200 outline-none"
                      type="text"
                      name="password"
                      placeholder="Password"
                    />

                    <div className="my-8 flex justify-between">
                      <div className="flex items-center">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember me</span>
                      </div>

                      <span>Forget Password?</span>
                    </div>

                    <div>
                      <button className="py-2 px-8 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 bg-gray-200">
                        LOGIN
                      </button>
                    </div>
                  </form>
                </div>}
                {register && (
                  <div>
                    <form>
                      <input
                        className="py-3 px-4 mb-8 w-full border border-slate-200 outline-none"
                        type="text"
                        name="name"
                        placeholder="Username"
                      />
                      <input
                        className="py-3 px-4 mb-8 w-full border border-slate-200 outline-none"
                        type="text"
                        name="password"
                        placeholder="Password"
                      />
                      <input
                        className="py-3 px-4 w-full border border-slate-200 outline-none"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />

                      <div className="mt-8">
                        <button className="py-2 px-8 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 bg-gray-200">
                          REGISTER
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-60">footer</div>
    </div>
  );
};

export default AuthForm;
