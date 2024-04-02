import Link from 'next/link';

interface BlogProps {
  slug: string;
  title: string;
  header: string;
  date: string;
  readtime: string;
  visibility: string;
  // body: BlogSection;
  tags: string[];
  // children: React.ReactNode;
}


export default function BlogPost(props: BlogProps) {
  return (
      <Link 
        href={`/blog/${props.slug}`}
        className={`${props.visibility} border-0 sm:rounded-md sm:border sm:border-slate-600 p-1 md:p-4 h-min sm:h-full w-full transition-none sm:transition sm:hover:bg-opacity-40 sm:hover:bg-secondary-light sm:hover:shadow-xl duration-300 ease-in-out`}
      >
          <div className="flex flex-col text-start sm:text-center items-start sm:items-center h-full">
            <h1 className="text-md sm:text-2xl lg:text-3xl w-fit sm:w-10/12 bg-gradient-to-r from-secondary/[0.7] to-secondary-light/[0.5] px-1.5 sm:px-0 py-1 sm:py-0 rounded sm:rounded-none sm:bg-none">
              {props.title}
            </h1>
            <h4 className="text-xs lg:text-sm sm:text-center italic sm:pt-2 p-1 sm:pb-4 w-fit sm:w-3/4">{props.header}</h4>
            <p className="mt-auto text-xs lg:text-sm text-gray px-1 sm:px-0">{props.date} • {props.readtime} read</p>
          </div>
      </Link>
  );
}
