import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Alert3 = () => {
  return (
    <div className="flex flex-row gap-2 bg-green-100 rounded-md p-4">
      <div className="flex">
        <AiFillCheckCircle className="text-green-400" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-green-800">
          Order completed
        </h3>
        <p className="text-sm text-green-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </p>
        <div className="flex gap-4 text-sm mt-4">
          <button className="w-[100px] h-[30px] hover:bg-green-200 rounded-sm">
            View status
          </button>
          <button className="w-[100px] h-[30px] hover:bg-green-200 rounded-sm">
            Dissmiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert3;
