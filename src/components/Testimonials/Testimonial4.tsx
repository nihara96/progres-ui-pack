import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile.jpg";

import { FcDribbble, FcGoogle } from "react-icons/fc";

const Testimonial4 = () => {
  return (
    <div className="flex flex-col lg:flex-row py-10 gap-6 justify-center items-center w-full min-h-[600px] rounded-md border">
      <div className="flex gap-10 flex-col p-10">
        <div className="flex gap-2 items-center">
          <FcDribbble className="text-5xl" />
          <h4 className="text-xl font-bold">DRIBBLE</h4>
        </div>
        <h3>
          “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
          Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
          tortor consequat at. Vulputate gravida sociis enim nullam ultricies
          habitant malesuada lorem ac. Tincidunt urna dui pellentesque
          sagittis.”
        </h3>
        <div className="flex gap-2 items-center">
          <Image
            src={profile}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div className="flex flex-col gap-2">
            <h4 className="text-gray-500 text-sm lg:text-md font-bold">
              Helga Black
            </h4>
            <h4 className="text-gray-500 text-sm lg:text-md">CEO & Founder</h4>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-col p-10">
        <div className="flex gap-2 items-center">
          <FcGoogle className="text-5xl" />
          <h4 className="text-xl font-bold">GOOGLE</h4>
        </div>
        <h3>
          “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
          Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
          tortor consequat at. Vulputate gravida sociis enim nullam ultricies
          habitant malesuada lorem ac. Tincidunt urna dui pellentesque
          sagittis.”
        </h3>
        <div className="flex gap-2 items-center">
          <Image
            src={profile}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
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

export default Testimonial4;
