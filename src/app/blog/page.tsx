import getPostMetadata from "@/utils/getPostMetadata";
import BlogPost from "../ui/BlogPost";
import BlogPageHeader from "../ui/BlogPageHeader";
import Card from "../ui/Card";

function Blog() {
  const blogs = getPostMetadata("public/blogs");

  return (
    <div className="container content-center justify-items-center mx-auto p-8 md:p-0 flex flex-col gap-8">
      <BlogPageHeader />
      <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => {
          return (
            <Card key={index} hover>
              <BlogPost
                key={index}
                slug={blog.slug}
                title={blog.title}
                header={blog.frontmatter.description}
                date={blog.frontmatter.date}
                readtime={blog.frontmatter.readtime}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
