import ContactForm1 from "@/components/ContactForms/ContactForm1";
import ContactForm2 from "@/components/ContactForms/ContactForm2";
import ContactForm3 from "@/components/ContactForms/ContactForm3";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Contact = () => {
  return (
    <Layout className="flex flex-col p-10 md:p-24 gap-10">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <ContactForm1 />
      <ContactForm2 />
      <ContactForm3/>
    </Layout>
  );
};

export default Contact;
