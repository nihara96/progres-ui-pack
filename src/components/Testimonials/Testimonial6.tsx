import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial6 = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-[600px] rounded-md border">
      <div className="flex flex-col gap-6 p-6 lg:p-60">
        <div className="flex gap-1">
          <AiFillStar className="text-2xl text-[#06d79c]"/>
          <AiFillStar className="text-2xl text-[#06d79c]"/>
          <AiFillStar className="text-2xl text-[#06d79c]"/>
          <AiFillStar className="text-2xl text-[#06d79c]"/>
          <AiFillStar className="text-2xl text-[#06d79c]"/>
        </div>
        <h3 className="text-md lg:text-2xl font-semibold">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis.”
        </h3>
        <div className="flex flex-row items-center gap-4">
          <Image
            width={50}
            height={50}
            className="rounded-full w-10 h-10 object-cover"
            alt="profile"
            src={profile}
          />
          <div className="flex flex-col gap-2">
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

export default Testimonial6;
