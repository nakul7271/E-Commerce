import React from "react";
import ContactUsLeft from "./ContactUsLeft";
import ContactUsRight from "./ContactUsRight";

const ContactUs = () => {
  return (
    <div className="mt-8">
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="w-full  mb-12">
          <iframe
            title="mapquadb"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="md:flex justify-between">
          <div className="md:w-[40%] w-full lg:w-[33%] bg-gray-100">
            <ContactUsLeft />
          </div>
          <div className=" md:mt-0 mt-10 md:w-[58%] w-full lg:w-[65%] bg-gray-100">
            <ContactUsRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
