import React from "react";
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from "markdown-to-jsx";
import markdownOptions from '@/utils/markdownOptions';
import getPostMetadata from "@/utils/getPostMetadata"
import { Title } from "@/app/ui/BlogLayout";

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

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? ' | ' + params.slug : '';
  return {
    title: `Nidhi Swamy Blog ${id.replaceAll('_', ' ')}`,
  }
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getBlogContent(slug);

  return (
    <div>
      <Title text={post.data.title} />
      <Markdown options={markdownOptions}>{post.content}</Markdown>
    </div>
  )
}