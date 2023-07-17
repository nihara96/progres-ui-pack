import Alert1 from "@/components/Alerts/Alert1";
import Alert2 from "@/components/Alerts/Alert2";
import Alert3 from "@/components/Alerts/Alert3";
import Alert4 from "@/components/Alerts/Alert4";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Alerts = () => {
  return (
    <Layout className="flex flex-col p-10 md:p-24 gap-10">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <Alert1 />
      <Alert2 />
      <Alert3 />
      <Alert4 />
    </Layout>
  );
};

export default Alerts;
