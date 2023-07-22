import Layout from "@/components/Layout/Layout";
import SelectMenu1 from "@/components/SelectMenus/SelectMenu1";
import SelectMenu2 from "@/components/SelectMenus/SelectMenu2";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const selectMenu1Values = [
  {
    value: "Alex Brown",
    id: "1",
  },
  {
    value: "John Doe",
    id: "2",
  },
  {
    value: "Alice Johnson",
    id: "3",
  },
  {
    value: "Michael Smith",
    id: "4",
  },
  {
    value: "Emily Brown",
    id: "5",
  },
  {
    value: "David Lee",
    id: "6",
  },
  {
    value: "Sophia Kim",
    id: "7",
  },
  {
    value: "William Wilson",
    id: "8",
  },
  {
    value: "Olivia Taylor",
    id: "9",
  },
  {
    value: "James Martin",
    id: "10",
  },
];

const selectMenu2Values = [
    {
      value: "Alex Brown",
      id: "1",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      value: "Emma Johnson",
      id: "2",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      value: "Michael Smith",
      id: "3",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      value: "Olivia Williams",
      id: "4",
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      value: "David Lee",
      id: "5",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      value: "Sophia Kim",
      id: "6",
      profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      value: "William Wilson",
      id: "7",
      profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      value: "Ava Davis",
      id: "8",
      profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      value: "James Miller",
      id: "9",
      profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      value: "Mia Moore",
      id: "10",
      profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ];
  

const SelectMenus = () => {
  return (
    <Layout className="flex flex-col p-10 md:p-24 gap-10">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <h3>Simple Dropdown</h3>
      <div className="flex flex-col gap-6 justify-center items-center w-full min-h-[300px] rounded-md border">
        <SelectMenu1 values={selectMenu1Values} />
      </div>
      <h3>Dropdown with custom components type 1</h3>
      <div className="flex flex-col gap-6 justify-center items-center w-full min-h-[300px] rounded-md border">
        <SelectMenu2 values={selectMenu2Values} />
      </div>
      <h3>Dropdown with custom components type 2</h3>
      <div className="flex flex-col gap-6 justify-center items-center w-full min-h-[300px] rounded-md border">
        <SelectMenu2 values={selectMenu2Values} />
      </div>
    </Layout>
  );
};

export default SelectMenus;
