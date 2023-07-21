import React from "react";

const Textarea1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 items-center w-full h-[500px] rounded-md border">
      <div className="flex flex-col gap-4 w-full px-2 md:px-20">
        <p>Add your comment</p>
        <textarea
          placeholder="Enter your comment"
          className="border placeholder:text-sm p-4 min-h-[200px] rounded-md w-full focus:outline-[#00c49f]"
        />
      </div>
    </div>
  );
};

export default Textarea1;
