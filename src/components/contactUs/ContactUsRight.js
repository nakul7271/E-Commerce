import React from "react";

const ContactUsRight = () => {
  return (
    <div className="py-14 lg:px-20 px-8">
      <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>

      <form>
        <div className="lg:flex justify-between w-full">
          <input
            className="lg:w-[49%] w-full outline-none bg-inherit py-2 px-2 border border-slate-400 rounded-md"
            type="text"
            placeholder="Name*"
            name="name"
          />
          <input
            className="lg:w-[49%] mt-7 lg:mt-0 w-full outline-none bg-inherit py-2 px-2 border border-slate-400 rounded-md"
            type="email"
            placeholder="Email*"
            name="email"
          />
        </div>
        <div className="my-7">
          <input
            className="w-full outline-none bg-inherit py-2 px-2 border border-slate-400 rounded-md"
            type="text"
            placeholder="Subject*"
            name="subject"
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Message*"
            className="w-full h-56 outline-none bg-inherit py-2 px-2 border border-slate-400 rounded-md"
          />
              </div>
              <button className="mt-6 text-white py-3 px-14 rounded-md bg-blue-500 transition-all duration-500 hover:bg-slate-900 " >SEND</button>
      </form>
    </div>
  );
};

export default ContactUsRight;
