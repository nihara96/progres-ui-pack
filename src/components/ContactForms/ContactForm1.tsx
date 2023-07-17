import React from "react";
import { BiBuildings } from "react-icons/bi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const ContactForm1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center w-full h-[700px] rounded-md border">
      <div className="flex flex-1 h-[700px] items-center bg-gray-100">
        <div className="flex flex-col gap-4 px-6 md:px-20">
          <h3 className="text-3xl font-bold">Get in touch</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
            quam ut orci euismod, ut imperdiet sem sollicitudin. Curabitur quis
            iaculis nulla, non scelerisque enim. Vivamus faucibus nisi nunc, vel
            ullamcorper purus rhoncus vitae.
          </p>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex gap-2 text-gray-500">
              <BiBuildings className="text-xl" /> 545 Mavis Island <br />{" "}
              Chicago, IL 1234
            </div>
            <div className="flex gap-2 text-gray-500">
              <AiOutlinePhone className="text-xl" /> +1 (555) 234-5678
            </div>
            <div className="flex gap-2 text-gray-500">
              <AiOutlineMail className="text-xl" /> hello@example.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1">
        <div className="flex flex-col py-6 gap-10 w-full px-6 md:px-10">
          <div className="flex flex-wrap flex-row md:flex-col gap-6">
            <input className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]" placeholder="First Name"/>
            <input className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]" placeholder="Last Name"/>
          </div>
          <input placeholder="Email" className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"/>
          <input placeholder="Phone number" className="flex w-full px-4 py-2 rounded-md placeholder:text-sm border focus:outline-[#00c49f]"/>
          <textarea placeholder="Message" className="flex w-full px-4 py-2 rounded-md h-[150px] placeholder:text-sm border focus:outline-[#00c49f]"/>
          <div className="flex justify-end">
            <button className="w-[150px] h-[40px] bg-[#00c49f] rounded-md text-white">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
