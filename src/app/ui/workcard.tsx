import Link from 'next/link';
import { solway } from '../fonts';

interface WorkCardProps {
  company: string;
  link: string;
  title: string;
  date: string;
  skills: string;
}

export default function WorkCard(props: WorkCardProps) {
    return (
      <div className="flex flex-col w-72 h-auto items-center sm:items-start">
          <div className="text-2xl font-bold">
          {props.title}
        </div>
        <div className={`${solway.className} text-sm mb-4`}>
          {props.date}
        </div>
        <div className="text-2xl transition-transform hover:bg-opacity-40 hover:bg-secondary-light transition duration-300 ease-in-out">
          <Link 
            href={`${props.link}`}
            target="_blank"
          >
            {props.company}
          </Link>
        </div>
        <div className={`${solway.className} text-center sm:text-start text-secondary-light text-lg`}>
          {props.skills}
        </div>
      </div>
    );
}
