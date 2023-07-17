import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Login4 = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-[600px] rounded-md border">
      <div className="flex flex-col  items-center">
        <SiTailwindcss className="text-5xl text-[#00c49f]" />
        <h3 className="text-2xl text-center font-bold">Sign in to your account</h3>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Email address</p>
          <input
            type="email"
            className="flex md:w-[400px] w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Password</p>
          <input
            type="password"
            className="flex md:w-[400px] w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
          />
          <div className="flex justify-end">
            <p className="text-sm cursor-pointer hover:text-[#00c49f]">
              Forget Password?
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="md:w-[400px] w-full h-[35px] bg-[#00c49f] hover:bg-[#00c49f]/80  rounded-md text-white">
            Sign in
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-[1px] bg-gray-200 hidden md:block" />
          <p className="w-full text-sm text-center">Or continue with</p>
          <div className="w-full h-[1px] bg-gray-200 hidden md:block" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex items-center rounded-md gap-2 w-full shadow-md justify-center py-2">
            <FcGoogle /> Google
          </button>
          <button className="flex items-center text-white rounded-md bg-[#24292f] gap-2 w-full shadow-md justify-center py-2">
            <AiFillGithub className="text-xl" /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login4;
