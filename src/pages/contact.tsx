import ContactForm1 from "@/components/ContactForms/ContactForm1";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="flex flex-col p-10 md:p-24 gap-10">
      <Link href="/">
        <AiOutlineArrowLeft className="text-3xl font-bold cursor-pointer hover:scale-110 transition duration-200" />
      </Link>
      <ContactForm1 />
    </div>
  );
};

export default Contact;
