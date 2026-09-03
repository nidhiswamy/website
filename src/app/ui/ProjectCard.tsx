import Link from "next/link";
import { solway } from "../fonts";
import Image from "next/image";

interface ProjCardProps {
  name: string;
  link: string;
  desc: string;
  skills: string;
  type?: "GITHUB" | "EXTERNAL";
}

export default function ProjectCard(props: ProjCardProps) {
  return (
    <div className="flex flex-col w-72 sm:w-full h-full items-center">
      <div className="mb-2 px-2 py-1 hover:bg-secondary-light/[0.2] transition duration-300 ease-in-out">
        <Link
          href={props.link}
          target="_blank"
          className="flex flex-row gap-x-1"
        >
          <div className="flex items-center pr-2 text-[22px] lg:text-xl xl:text-2xl font-bold">
            {props.name}
          </div>
          {props.type === "EXTERNAL" && (
            <Image
              src="/assets/external-link.svg"
              alt="External link icon"
              height="26"
              width="26"
              className="object-contain filter brightness-0 dark:brightness-100"
            />
          )}
          {props.type === "GITHUB" && (
            <Image
              src="/assets/github.svg"
              alt="GitHub icon"
              height="35"
              width="35"
              className="object-contain filter brightness-0 dark:brightness-100"
            />
          )}
        </Link>
      </div>
      <div className="w-5/6 text-center text-lg xl:text-xl">{props.desc}</div>
      <div
        className={`${solway.className} pt-2 mt-auto text-center text-gray text-sm lg:text-md xl:text-lg`}
      >
        {props.skills}
      </div>
    </div>
  );
}
