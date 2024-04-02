'use client';
import Link from 'next/link';
import { blogs } from '../blog/blogs';

export default function BlogNav() {
  const links = blogs.map(blog => (
    <li key={blog.slug}>
      <Link 
        href={`/blog/${blog.slug}`}
        className="hover:underline"
      >
        {blog.title}
      </Link>
    </li>
  ));

  return (
      <ul>{links}</ul>
  );
}

