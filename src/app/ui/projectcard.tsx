import Link from 'next/link';
import clsx from 'clsx';

interface ProjCardProps {
  name: string;
  link: string;
  desc: string;
  skills: string;
}

export default function ProjectCard(props: ProjCardProps) {
    return (
        <div className="flex flex-col w-[380px] h-40 mb-8">
          <div className="text-2xl font-bold mb-4 transition-transform hover:text-zinc-300">
            <Link 
              href={`${props.link}`}
              target="_blank"
            >
              {props.name}
            </Link>
          </div>
          <div className="text-2xl mb-4">
            {props.desc}
          </div>
          <div className="text-zinc-400 text-xl">
            {props.skills}
          </div>
        </div>
    );
}
