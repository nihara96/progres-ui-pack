import Image, { StaticImageData } from "next/image";
import React from "react";
import profile from "../../../public/images/profile.jpg";

const Testimonial7 = () => {
  return (
    <div className="flex flex-col py-20 gap-6 justify-center items-center w-full min-h-[600px] rounded-md border">
      <div className="flex flex-col items-center">
        <h4 className="text-[#06d79c] font-semibold">TESTIMONIALS</h4>
        <h3 className="text-center font-bold text-2xl md:text-5xl">
          We have worked with thousands <br /> of amazing people
        </h3>
      </div>
      <div className="md:p-10 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
        <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
        <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
                <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
        <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
        <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
                <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
        <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
        <Card
          message="Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."
          name=" Helga Black"
          position="CEO & Founder"
          image={profile}
        />
      </div>
    </div>
  );
};

type CardProps = {
  message?: string;
  name?: string;
  position?: string;
  image?: StaticImageData;
};

const Card: React.FC<CardProps> = ({ message, name, position, image }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 rounded-xl p-6">
      <h5 className="text-gray-500 text-sm">“{message}”</h5>
      <div className="flex flex-row items-center gap-4">
        <Image
          width={50}
          height={50}
          className="rounded-full w-10 h-10 object-cover"
          alt="profile"
          src={image || profile}
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-gray-500 text-sm lg:text-md font-bold">{name}</h4>
          <h4 className="text-gray-500 text-sm lg:text-md">{position}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial7;
