import Image from "next/image";
import React from "react";

import profile from "../../../public/images/profile.jpg";

const Testimonial3 = () => {
  return (
    <div className="flex flex-col mt-10 py-10 gap-6 justify-center items-center w-full h-[600px] rounded-md border">
      <div className="flex flex-col lg:flex-row w-full bg-[#111827]">
        <div className="flex justify-center lg:absolute  lg:translate-x-20 -translate-y-[10%] ">
          <Image
            className="lg:w-[350px] w-[calc(100%-50px)] h-[200px] object-cover lg:h-auto rounded-3xl"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="flex w-full justify-end p-10 lg:p-24">
          <div className="flex flex-col gap-10 lg:w-[50%]">
            <h3 className="text-md lg:text-xl font-semibold text-white">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </h3>
            <div className="flex flex-col gap-2 mb-6">
              <h4 className="text-white text-sm lg:text-md font-bold">
                Helga Black
              </h4>
              <h4 className="text-gray-500 text-sm lg:text-md">
                CEO & Founder
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial3;
