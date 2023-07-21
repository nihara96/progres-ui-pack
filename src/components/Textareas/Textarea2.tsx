import Image from "next/image";
import React, { useState } from "react";

import { AiOutlineLink } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

import profile from "../../../public/images/profile.jpg";

const Textarea2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };

  const emojis = ["😀", "😄", "😊", "🙂", "😍"];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 items-center w-full h-[500px] rounded-md border">
      <div className="flex gap-4 w-full px-2 md:px-20">
        <div>
          <Image className="w-10 h-10 object-cover rounded-full" src={profile} alt="profile" />
        </div>
        <div
          className={`flex flex-col justify-between border ${
            isTextareaFocused && "border-[#00c49f]"
          } p-4 min-h-[200px] rounded-md w-full`}
        >
          <textarea
            placeholder="Enter your comment"
            className="resize-none placeholder:text-sm p-4 rounded-md w-full outline-none focus:ring-[#00c49f]"
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
          />
          <div className="flex rounded-md justify-between pt-2 items-center">
            <div className="flex gap-2">
              <AiOutlineLink className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" />
              <div className="relative">
                <BsEmojiSmile
                  className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg max-w-40 overflow-x-auto flex flex-row">
                    {emojis.map((emoji, index) => (
                      <span
                        key={index}
                        className="block text-2xl px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                        onClick={() => console.log(emoji)} // Replace this with your desired action when an emoji is selected
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <button className="w-[100px] h-[35px] rounded-md bg-[#00c49f] text-white text-sm">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textarea2;
