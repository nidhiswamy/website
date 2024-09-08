import getPostMetadata from "@/utils/getPostMetadata";
import BlogPost from "../ui/BlogPost";

const blogBlurb = "Welcome to my blog! I created this space on the internet for me to express my thoughts as I grow to travel and experience the world, face new challenges, or find things that fascinate me.\nI hope you like reading these as much as I liked writing them. "

function Blog() {
  const blogs = getPostMetadata('public/blogs');
  return (
    <div>
      <h1 className="mt-2 sm:mt-4 mx-auto w-full lg:w-2/3 text-lg sm:text-xl text-start sm:text-center lg:whitespace-pre-line pb-4">{blogBlurb}<span className="font-bold text-secondary">Enjoy :)</span></h1>
      <div className="sm:mt-10 grid-none flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:grid-rows-3 place-items-start sm:place-items-center sm:gap-8">
        {blogs.map((blog, index) => {
          return (
            <BlogPost
              key={index}
              slug={blog.slug}
              title={blog.title}
              header={blog.frontmatter.header}
              date={blog.frontmatter.date}
              readtime={blog.frontmatter.readtime}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Blog