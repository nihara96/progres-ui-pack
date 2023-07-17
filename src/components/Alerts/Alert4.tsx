import React from "react";
import { TbInfoTriangleFilled } from "react-icons/tb";

const Alert4 = () => {
  return (
    <div className="flex flex-row gap-2 items-center bg-yellow-100 rounded-md p-4">
      <div>
        <TbInfoTriangleFilled className="text-yellow-400" />
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-yellow-800">
          You have no credits left. <span className="font-semibold underline cursor-pointer hover:text-yellow-500">Upgrade your account to add more credits.</span>
        </p>
      </div>
    </div>
  );
};

export default Alert4;
