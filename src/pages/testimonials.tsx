import Layout from "@/components/Layout/Layout";
import Testimonial1 from "@/components/Testimonials/Testimonial1";
import Testimonial2 from "@/components/Testimonials/Testimonial2";
import Testimonial3 from "@/components/Testimonials/Testimonial3";
import Testimonial4 from "@/components/Testimonials/Testimonial4";
import Testimonial5 from "@/components/Testimonials/Testimonial5";
import Testimonial6 from "@/components/Testimonials/Testimonial6";
import Testimonial7 from "@/components/Testimonials/Testimonial7";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Testimonials = () => {
  return (
    <Layout className="flex flex-col p-10 md:p-24 gap-10 w-full">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <Testimonial1 />
      <Testimonial2 />
      <Testimonial3 />
      <Testimonial4 />
      <Testimonial5 />
      <Testimonial6 />
      <Testimonial7 />
    </Layout>
  );
};

export default Testimonials;
