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
      <div className="flex flex-col w-72 sm:w-full h-full items-center">
          <div className="text-[22px] lg:text-xl xl:text-2xl font-bold text-center">
          {props.title}
        </div>
        <div className={`${solway.className} text-sm mb-4`}>
          {props.date}
        </div>
        <div className="text-lg sm:text-xl lg:text-[22px] xl:text-2xl hover:bg-opacity-40 hover:bg-secondary-light transition duration-300 ease-in-out">
          <Link 
            href={`${props.link}`}
            target="_blank"
          >
            {props.company}
          </Link>
        </div>
        <div className={`${solway.className} text-center text-gray text-sm lg:text-md xl:text-lg`}>
          {props.skills}
        </div>
      </div>
    );
}
