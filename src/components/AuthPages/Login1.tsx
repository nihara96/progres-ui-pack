import React from "react";
import { SiTailwindcss } from "react-icons/si";

const Login1 = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-[600px] rounded-md border">
      <div className="flex flex-col  items-center">
        <SiTailwindcss className="text-5xl text-[#00c49f]" />
        <h3 className="text-2xl text-center font-bold">
          Sign in to your account
        </h3>
      </div>
      <div className="flex flex-col gap-6">
        <input
          type="email"
          placeholder="Email address"
          className="flex md:w-[400px] w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
        />
        <div className="flex flex-col items-end gap-2">
          <input
            type="password"
            placeholder="Password"
            className="flex md:w-[400px] w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
          />
          <p className="text-sm cursor-pointer hover:text-[#00c49f]">
            Forget Password?
          </p>
        </div>
        <div className="flex justify-center">
          <button className="md:w-[400px] w-full h-[35px] bg-[#00c49f] hover:bg-[#00c49f]/80  rounded-md text-white">
            Sign in
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-sm">
            Not a member ?{" "}
            <span className="text-[#00c49f] cursor-pointer">
              Start a 14 day free trial
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login1;
