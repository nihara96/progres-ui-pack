import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Alert2 = () => {
  return (
    <div className="flex flex-row gap-2 bg-red-100 rounded-md p-4">
      <div className="flex">
        <AiFillCloseCircle className="text-red-400" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-red-800">
          There were 2 errors with your submission
        </h3>
        <ul className="list-disc list-inside text-sm text-red-800">
          <li>Your password must be at least 8 characters</li>
          <li>
            Your password must include at least one pro wrestling finishing move
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Alert2;
