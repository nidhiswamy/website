import Link from 'next/link';
import { solway } from '../fonts';

interface ProjCardProps {
  name: string;
  link: string;
  desc: string;
  skills: string;
}

export default function ProjectCard(props: ProjCardProps) {
    return (
        <div className="flex flex-col w-72 sm:w-full h-full items-center">
          <div className="text-[22px] lg:text-xl xl:text-2xl font-bold mb-2 hover:bg-opacity-40 hover:bg-secondary-light transition duration-300 ease-in-out">
            <Link 
              href={`${props.link}`}
              target="_blank"
            >
              {props.name}
            </Link>
          </div>
          <div className="w-3/4 text-center text-lg xl:text-xl">
            {props.desc}
          </div>
          <div className={`${solway.className} mt-auto text-center text-gray text-sm lg:text-md xl:text-lg`}>
            {props.skills}
          </div>
        </div>
    );
}
