import React from "react";
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from "markdown-to-jsx";
import markdownOptions from '@/utils/markdownOptions';
import getPostMetadata from "@/utils/getPostMetadata"
import ContactLinks from '@/app/ui/ContactLinks';
import { 
  Title,
  Copyright,
  Back,
} from "@/app/ui/BlogLayout";

function getBlogContent(slug) {
  const folder = 'public/blogs/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('public/blogs');
  return posts.map(post => {
    return { slug: post.slug }
  })
}

export async function generateMetadata({ params }) {
  const id = params?.slug ? ' | ' + params.slug : '';
  return {
    title: `Nidhi Swamy Blog ${id.replaceAll('_', ' ')}`,
  }
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getBlogContent(slug);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <header className="flex justify-items-start w-full">
        <Back />
      </header>
      <Title text={post.data.title} />
      <Markdown options={markdownOptions}>{post.content}</Markdown>
      <footer className="flex flex-row w-full mt-auto justify-between">
        <div className="w-fit">
          <p className="mt-10 w-fit">Contact Me</p>
          <ContactLinks />
        </div>
        <Copyright />
      </footer>
    </div>
  )
}