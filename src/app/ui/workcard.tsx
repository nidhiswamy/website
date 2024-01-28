import Link from 'next/link';

interface WorkCardProps {
  company: string;
  link: string;
  title: string;
  date: string;
  skills: string;
}

export default function WorkCard(props: WorkCardProps) {
    return (
      <div className="flex flex-col w-80 h-40 mb-8">
          <div className="text-2xl font-bold transition-transform hover:text-zinc-300">
            <Link 
              href={`${props.link}`}
              target="_blank"
            >
          {props.company}
            </Link>
        </div>
        <div className="text-sm mb-4">
          {props.date}
        </div>
        <div className="text-2xl">
          {props.title}
        </div>
        <div className="text-zinc-400 text-xl">
          {props.skills}
        </div>
      </div>
    );
}
