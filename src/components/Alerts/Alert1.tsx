import React from "react";
import { TbInfoTriangleFilled } from "react-icons/tb";

const Alert1 = () => {
  return (
    <div className="flex flex-row gap-2 bg-yellow-100 rounded-md p-4">
      <div>
        <TbInfoTriangleFilled className="text-yellow-400"/>
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-yellow-800">Attention needed</h3>
        <p className="text-sm text-yellow-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </p>
      </div>
    </div>
  );
};

export default Alert1;
