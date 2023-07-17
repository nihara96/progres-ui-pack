import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{text}</p>
    </Link>
  );
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="">
        <h1 className="text-3xl font-semibold">Explore Awesome Components</h1>
      </div>
      <div className="my-24 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card title="Contact Forms" text="Explore awesome contact forms design in tailwindcss"/>
      </div>
    </main>
  );
}
