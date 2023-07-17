import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

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
      <h2 className={`flex items-center gap-2 mb-3 text-2xl font-semibold`}>
        {title}
        <span className="inline-block items-center transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <AiOutlineArrowRight />
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{text}</p>
    </Link>
  );
};

export default function Home() {
  return (
    <main>
      <Layout className="flex min-h-screen flex-col items-center py-24">
        <div className="">
          <h1 className="text-3xl font-semibold">Explore Awesome Components</h1>
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
            text="Explore awesome contact forms design in tailwindcss"
          />
        </div>
      </Layout>
    </main>
  );
}
