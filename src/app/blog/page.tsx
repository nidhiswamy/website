import getPostMetadata from "@/utils/getPostMetadata";
import Link from "next/link";
import BlogPost from "../ui/BlogPost";


function Blog() {
  const blogs = getPostMetadata('public/blogs');
  return (
    <div>
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
  )
}

export default Blog