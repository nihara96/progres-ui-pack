import Layout from "@/components/Layout/Layout";
import Textarea1 from "@/components/Textareas/Textarea1";
import Textarea2 from "@/components/Textareas/Textarea2";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Textareas = () => {
  return (
    <Layout className="flex flex-col p-10 md:p-24 gap-10">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <Textarea1 />
      <Textarea2/>
    </Layout>
  );
};

export default Textareas;
