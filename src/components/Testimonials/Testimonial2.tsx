import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile.jpg";

const Testimonial2 = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-[600px] rounded-md border bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex flex-row gap-6 p-6 lg:p-60">
        <div className="flex w-full">
          <Image
            className="w-60 h-60 object-cover rounded-2xl"
            src={profile}
            alt="profile"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h3 className="text-md lg:text-2xl font-semibold">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </h3>
          <div className="flex flex-col gap-2 mb-6">
            <h4 className="text-gray-500 text-sm lg:text-md font-bold">
              Helga Black
            </h4>
            <h4 className="text-gray-500 text-sm lg:text-md">CEO & Founder</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
