import Login1 from "@/components/AuthPages/Login1";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Auth = () => {
  return (
    <Layout className="flex flex-col p-10 md:p-24 gap-10">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <Login1 />
    </Layout>
  );
};

export default Auth;

{/* <Layout className="flex flex-col p-10 md:p-24 gap-10">
<Link href="/">
  <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
</Link>
<Login1 />
</Layout> */}
