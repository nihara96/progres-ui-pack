import Layout from "@/components/Layout/Layout";
import AnimatedText from "@/components/Shared/AnimatedText";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

import logo from "../../public/images/logo.png";
import Image from "next/image";

import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

import { BsGithub } from "react-icons/bs";

type CardProps = {
  title?: string;
  text?: string;
  path?: string;
};

const Card: React.FC<CardProps> = ({ title, text, path }) => {
  return (
    <Link
      href={path || "/"}
      className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <h2
        className={`flex justify-between items-center gap-2 mb-3 text-2xl font-semibold`}
      >
        {title}
        <span className="inline-block items-center transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <AiOutlineArrowRight />
        </span>
      </h2>
      <p className={`m-0 text-start max-w-[30ch] text-sm opacity-50`}>{text}</p>
    </Link>
  );
};

export default function Home() {
  return (
    <main>
      <div className="px-2 md:px-10 mt-10 flex items-center justify-between">
        <Image
          alt="logo"
          src={logo}
          width={200}
          height={100}
          className="object-cover"
        />
        <Link
          target="_blank"
          href="https://github.com/nihara96/progres-ui-pack.git"
          className="flex items-center gap-2 font-semibold px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white cursor-pointer"
        >
          <BsGithub className="text-2xl" /> Github
        </Link>
      </div>
      <Layout className="flex min-h-screen flex-col items-center py-10">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center items-center">
            <AnimatedText text=" Explore Awesome Components" />
          </div>

          <div className="w-[70%] md:w-[50%] flex flex-col gap-6 justify-center items-center">
            <p className="text-sm text-gray-500 text-center">
              Discover a stunning collection of elegant Tailwind CSS UI
              components that seamlessly integrate into your projects. Each
              component is fully customizable, empowering you to create visually
              appealing designs effortlessly. Elevate your web development with
              these versatile and user-friendly UI elements.
            </p>
            <div className="flex text-5xl gap-4">
              <SiTailwindcss className="text-[#3ebff8]" />
              <TbBrandNextjs />
              <FaReact className="text-[#66dbfb]" />
              <BiLogoTypescript className="text-[#377cc8]" />
            </div>
          </div>
        </div>
        <div className="my-24 grid gap-6 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          <Card
            path="/contact"
            title="Contact Forms"
            text="Explore awesome contact forms design in tailwindcss"
          />
          <Card
            path="/auth"
            title="Sign-in and Registration"
            text="Explore awesome sign-in and registration designs in tailwindcss"
          />
          <Card
            path="/alerts"
            title="Alerts"
            text="Explore awesome alert designs in tailwindcss"
          />
          <Card
            path="/testimonials"
            title="Testimonials"
            text="Explore awesome testimonial designs in tailwindcss"
          />
          <Card
            path="/textareas"
            title="Textareas"
            text="Explore awesome textarea designs in tailwindcss"
          />
          <Card
            path="/selectMenus"
            title="Select Menus"
            text="Explore awesome select menu designs in tailwindcss"
          />
        </div>
      </Layout>
      <footer className="flex justify-center text-sm py-4 border-t">
        © Copyright {new Date().getFullYear()}. Progres All Rights Reserved.
      </footer>
    </main>
  );
}
