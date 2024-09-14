import Link from 'next/link';

interface BlogProps {
  slug: string;
  title: string;
  header?: string;
  date?: string;
  readtime?: string;
  visibility?: string;
  tags?: string[];
}


export default function BlogPost(props: BlogProps) {
  return (
      <Link 
        href={`/blog/${props.slug}`}
        className={`${props.visibility} h-min sm:h-full w-72 sm:w-full transition-none sm:transition sm:hover:bg-opacity-40 sm:hover:bg-secondary-light sm:hover:shadow-xl duration-300 ease-in-out`}
      >
          <div className="border rounded-md border-slate-600 px-4 py-2 md:py-4 flex flex-col text-start sm:text-center items-start sm:items-center h-full w-full">
            <h1 className="text-xl font-extrabold md:text-2xl lg:text-3xl w-fit sm:w-10/12 sm:no-underline px-1.5 sm:px-0 py-1 sm:py-0 rounded sm:rounded-none sm:bg-none">
              {props.title}
            </h1>
            <h4 className="text-sm lg:text-sm font-thin sm:text-center italic sm:pt-2 p-1 sm:pb-4 w-fit sm:w-3/4">{props.header}</h4>
            <p className="mt-auto text-xs font-thin lg:text-sm text-gray px-1 sm:px-0">{props.date} • {props.readtime} min. read</p>
          </div>
      </Link>
  );
}
