import React from "react";
import image from "../../../public/images/contact.jpg";
import Image from "next/image";

const ContactForm3 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center w-full h-[900px] rounded-md border">
      <div className="flex w-full flex-1 flex-col py-6 gap-10 px-6 md:px-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Let&apos;s work together</h3>
          <p className="text-gray-500">
            Proin volutpat consequat porttitor cras nullam gravida at orci
            molestie a eu arcu sed ut tincidunt magna.
          </p>
        </div>
        <div className="flex  flex-wrap flex-row md:flex-col gap-6">
          <input
            className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
            placeholder="First Name"
          />
          <input
            className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
            placeholder="Last Name"
          />
        </div>
        <input
          placeholder="Email"
          className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
        />
        <input
          placeholder="Phone number"
          className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"
        />
        <textarea
          placeholder="Message"
          className="flex w-full px-4 py-2 rounded-md h-[150px] placeholder:text-sm border focus:outline-[#00c49f]"
        />
        <div className="flex justify-end">
          <button className="w-[150px] h-[40px] bg-[#00c49f] rounded-md text-white">
            Send Message
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 h-[900px] items-center bg-gray-100">
        <Image
          className="object-cover rounded-r-md w-full h-full"
          alt="contact"
          src={image}
        />
      </div>
    </div>
  );
};

export default ContactForm3;
