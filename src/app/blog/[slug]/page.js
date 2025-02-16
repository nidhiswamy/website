import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import markdownOptions from "@/utils/markdownOptions";
import getPostMetadata from "@/utils/getPostMetadata";
import ContactLinks from "@/app/ui/ContactLinks";
import { Title, Copyright, Back } from "@/app/ui/BlogLayout";
import StickyBlogHeader from "@/app/ui/StickyBlogHeader";

function getBlogContent(slug) {
  const folder = "public/blogs/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("public/blogs");
  return posts.map((post) => {
    return { slug: post.slug };
  });
};

export async function generateMetadata({ params }) {
  const id = params?.slug ? " | " + params.slug : "";
  return {
    title: `Nidhi Swamy Blog ${id.replaceAll("_", " ")}`,
  };
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getBlogContent(slug);

  return (
    <div className="flex flex-col items-center justify-center p-0 pt-16 sm:p-8">
      <StickyBlogHeader title={post.data.title} />
      <Title text={post.data.title} />
      <Markdown options={markdownOptions}>{post.content}</Markdown>
      <footer className="flex flex-row w-full mt-4 justify-between gap-2">
        <div className="w-fit flex flex-col gap-1">
          <p className="w-fit text-sm sm:text-lg">Contact Me</p>
          <ContactLinks />
        </div>
        <Copyright />
      </footer>
    </div>
  );
}
