import getPostMetadata from "@/utils/getPostMetadata";
import BlogPost from "../ui/BlogPost";
import BlogPageHeader from "../ui/BlogPageHeader";


function Blog() {
  const blogs = getPostMetadata('public/blogs');
  return (
    <div className="flex flex-col items-center justify-center pt-0 sm:pt-16 lg:pt-0">
      <BlogPageHeader />
      <div className="sm:mt-10 grid-none flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:grid-rows-3 place-items-start sm:place-items-center sm:gap-8">
        {blogs.map((blog, index) => {
          return (
            <BlogPost
              key={index}
              slug={blog.slug}
              title={blog.title}
              header={blog.frontmatter.description}
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