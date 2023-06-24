import React from "react";

const About = () => {
  return (
    <div className="my-10">
      <div className="mx-[5%]  sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="lg:flex">
          <div className="w-full lg:w-[50%] lg:pr-8">
            <img src="images/aboutUsImg.jpg" alt="#"></img>
          </div>
          <div className="w-full lg:w-[50%] mt-6 lg:mt-0">
            <h2 className="font-semibold text-4xl mb-5 text-slate-800">Welcome To Quadb</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              aperiam fugit consequuntur voluptatibus ex sint iure in,
              distinctio sed dolorem aspernatur veritatis repellendus dolorum
              voluptate, animi libero officiis eveniet accusamus recusandae.
              Temporibus amet ducimus sapiente voluptatibus autem dolorem magnam
              quas, porro suscipit. Quibusdam culpa asperiores exercitationem
              architecto quo distinctio sed dolorem aspernatur veritatis
              repellendus dolorum voluptate!
            </p>
            <p>
              Sint voluptatum beatae necessitatibus quos mollitia vero, optio
              asperiores aut tempora iusto eum rerum, possimus, minus quidem ut
              saepe laboriosam. Praesentium aperiam accusantium minus
              repellendus accusamus neque iusto pariatur laudantium provident
              quod recusandae exercitationem natus dignissimos.
            </p>
          </div>
        </div>
        <div className="md:flex my-14">
          <div className="w-full md:w-[30%] md:mr-10">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Our Company</h3>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet conse .
            </p>
          </div>
          <div className="w-full md:w-[30%] md:mr-10 mt-5 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Our Team</h3>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet conse .
            </p>
          </div>
          <div className=" w-full md:w-[30%] mt-5 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Testimonial</h3>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet conse .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
