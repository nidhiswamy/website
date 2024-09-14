'use client';
import Link from 'next/link';
import getPostMetadata from '@/utils/getPostMetadata';

export default function BlogNav() {
  const blogs = getPostMetadata('blogs');
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

