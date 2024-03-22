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
        <div className="flex flex-col w-72 h-auto items-center lg:items-start">
          <div className="text-2xl font-bold mb-2 hover:bg-opacity-40 hover:bg-secondary-light transition duration-300 ease-in-out">
            <Link 
              href={`${props.link}`}
              target="_blank"
            >
              {props.name}
            </Link>
          </div>
          <div className="text-center lg:text-start text-xl mb-1">
            {props.desc}
          </div>
          <div className={`${solway.className} text-center lg:text-start text-secondary-light text-lg`}>
            {props.skills}
          </div>
        </div>
    );
}
