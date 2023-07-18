import Layout from "@/components/Layout/Layout";
import Testimonial1 from "@/components/Testimonials/Testimonial1";
import Testimonial2 from "@/components/Testimonials/Testimonial2";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Testimonials = () => {
  return (
    <Layout className="flex flex-col p-10 md:p-24 gap-10">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <Testimonial1/>
      <Testimonial2/>
    </Layout>
  );
};

export default Testimonials;
