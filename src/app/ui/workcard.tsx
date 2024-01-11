import Link from 'next/link';

interface WorkCardProps {
  company: string;
  title: string;
  date: string;
  skills: string;
}

export default function WorkCard(props: WorkCardProps) {
    return (
      <div className="flex flex-col w-[380px] h-40 mb-8">
        <div className="text-2xl font-bold">
          {props.company}
        </div>
        <div className="text-sm mb-4">
          {props.date}
        </div>
        <div className="text-2xl">
          {props.title}
        </div>
        <div className="text-zinc-400 text-2xl">
          {props.skills}
        </div>
      </div>
    );
}
