'use client';
import { blogBlurb, blogs } from '@/app/blog/blogs';
import BlogPost from '@/app/ui/BlogPost';

export default function Blog() {
  return (
      <div>
        <h1 className="mt-2 sm:mt-4 mx-auto w-full lg:w-2/3 text-lg sm:text-xl text-start sm:text-center lg:whitespace-pre-line pb-4">{blogBlurb}<span className="font-bold text-secondary">Enjoy :)</span></h1>
        <div className="sm:mt-10 grid-none flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:grid-rows-3 place-items-start sm:place-items-center sm:gap-8">
        { blogs.map((blog, index) => {
            return (
                <BlogPost
                  key={index}
                  slug={blog.slug}
                  title={blog.title}
                  header={blog.header}
                  date={blog.date}
                  readtime={blog.readtime}
                  visibility={blog.visibility}
                  tags={blog.tags}
                />
                );
            })}
        </div>
      </div>
  );
}
