import React from 'react';
import Link from 'next/link';
import { karla, inter } from '@/app/fonts';

interface ItemType {
  title?: string;
  desc: string;
}

export function Back() {
  return (
    <div className="justify-left w-fit">
      <Link 
        href="/blog"
        className="text-2xl transition hover:bg-opacity-40 hover:bg-secondary-light duration-300 p-2"
      >
        ← Back
      </Link>
    </div>
  );
}

export function Title({ text }: {text: string}) {
  return (
    <div className="text-3xl sm:text-5xl mt-10 mb-4">
      {text}
    </div>
  );
}

export function Description({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="h-18 lg:h-8 xl:h-10 w-0 sm:w-1 bg-secondary mr-2"></div>
      <div className="text-center sm:text-left text-sm sm:text-md lg:text-lg italic">
        {children}
      </div>
    </div>
  );
}

export function Header1({ children }: {children: React.ReactNode}) {
  return (
    <div className={ `${karla.className} text-2xl font-bold sm:text-4xl mt-8 mb-4` }>
      {children}
    </div>
  );
}

export function Header2({ children }: {children: React.ReactNode}) {
  return (
    <div className="text-2xl font-semibold mb-2 mt-4">
      {children}
    </div>
  );
}

export function Body({ children }: {children: React.ReactNode}) {
  return (
    <div className="text-md sm:text-xl">
      {children}
    </div>
  );
}

export function BoldText({ children }: {children: React.ReactNode}) {
  return (
    <div className="font-bold">
      {children}
    </div>
  );
}

export function List({ children }: { children: React.ReactNode[] }) {
  console.log('children: ', children);
  return (
    <ol key="list" className="list-decimal list-inside my-1">
      {children.map((child: any, index: number) => (
        <li 
          key={index}
          className="my-2"
        >
          {child.props.children}
        </li>
      ))}
    </ol>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center pb-2">
      <div className="bg-tiffany-blue text-primary/[0.9] p-2 font-mono w-fit rounded-md">
        <pre className="whitespace-pre-wrap break-words">
          <code className="text-sm">{children}</code>
        </pre>
      </div>
    </div>
  );
}

export function LinkText({ text, href }: {text: string, href: string}) {
  return (
    <Link
      href={href}
      target='_blank'
      className="hover:text-secondary duration-300"
    >
      {text}
    </Link>
  );
}

export function Copyright() {
  return (
    <div className="w-fit h-fit text-right mt-auto">
      © 2024. Nidhi Swamy. All rights reserved.
    </div>
  );
} 

export function Image(props: {src: string, alt: string}) {
  return (
    <div className="flex items-center justify-center max-w-full">
      <img
        src={props.src}
        alt={props.alt}
        width={300}
        height={300}
        className="p-4 object-contain rounded-md max-w-auto w-1/2"
      />
    </div>
  );
}

const BlogLayout = ({ title, desc, children }: {title: string, desc: string, children: React.ReactNode}) => {
  return (
    <div className="flex flex-col w-full sm:w-3/4 min-h-screen max-h-full">
      <header className="text-center items-center">
        <Back />
        <Title text={title}/>
        <Description children={desc}/>
      </header>
      <main className={`${inter.className} leading-relaxed tracking-wide`}>
        {children}
      </main>
    </div>
  );
}

export default BlogLayout;
