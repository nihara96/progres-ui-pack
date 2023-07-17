import React from "react";

const ContactForm2 = () => {
  return (
    <div className="flex flex-col py-10 px-4 lg:p-20 gap-6 justify-center items-center w-full h-[800px] rounded-md border bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex flex-col gap-4 justify-center md:px-40">
        <h3 className="text-3xl font-bold text-center">Contact Sales</h3>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
          quam ut orci euismod, ut imperdiet sem sollicitudin imperdiet sem sollicitudin.
        </p>
      </div>
      <div className="flex w-full flex-1 lg:px-40">
        <div className="flex flex-col py-6 gap-10 w-full px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-6">
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
      </div>
    </div>
  );
};

export default ContactForm2;
