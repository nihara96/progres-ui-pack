import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

type DropDowProps = {
  values: Array<{
    value: string;
    id: string;
    profileImage: string;
    tag: string;
  }>;
  onChange?: ({
    value,
    id,
    tag,
    profileImage,
  }: {
    value: string;
    id: string;
    profileImage: string;
    tag: string;
  }) => void;
};

type CardProps = {
  value: string;
  profileImage: string;
  tag: string;
};

const Card: React.FC<CardProps> = ({ value, profileImage, tag }) => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        alt={value}
        width={60}
        height={60}
        src={profileImage}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="text-sm">{value}</p>
        <p className="text-xs text-gray-500">{tag}</p>
      </div>
    </div>
  );
};

const SelectMenu3: React.FC<DropDowProps> = ({ values, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<{
    value: string | null;
    id: string | null;
    profileImage: string;
    tag: string;
  }>(values[0]);
  const options: Array<{
    value: string;
    id: string;
    profileImage: string;
    tag: string;
  }> = values;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: {
    value: string;
    id: string;
    profileImage: string;
    tag: string;
  }) => {
    setSelectedOption({
      value: option.value,
      id: option.id,
      profileImage: option.profileImage,
      tag: option.tag,
    });
    setIsDropdownOpen(false);
    onChange && onChange(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="relative w-full md:w-[300px] inline-block"
      ref={dropdownRef}
      role="button" // Add role="button" to indicate that it is interactive
      tabIndex={0} // Add tabIndex={0} to make it focusable and enable keyboard interaction
      onClick={toggleDropdown} // Enable click interaction
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          toggleDropdown();
        }
      }} // Enable Enter key interaction to toggle dropdown
    >
      <div
        className={`py-2 px-4 w-full text-sm cursor-pointer rounded-md bg-white border ${
          isDropdownOpen ? "border-[#00c49f]" : "border-gray-300"
        }  focus:outline-none`}
      >
        {selectedOption.value === null ? (
          "Select an option"
        ) : (
          <Card
            tag={selectedOption.tag}
            profileImage={selectedOption.profileImage}
            value={selectedOption.value}
          />
        )}
      </div>
      <BiSolidDownArrow className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      {isDropdownOpen && (
        <ul className="absolute z-[999] max-h-[200px] overflow-y-auto w-full mt-2 py-2 bg-white border rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <Card
                tag={option.tag}
                profileImage={option.profileImage}
                value={option.value}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMenu3;
