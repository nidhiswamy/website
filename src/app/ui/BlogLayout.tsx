import React from 'react';
import Link from 'next/link';
import ContactLinks from '@/app/ui/contactlinks';
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

export function Description({ text }: {text: string}) {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="h-18 lg:h-8 xl:h-10 w-0 sm:w-1 bg-secondary mr-2"></div>
      <div className="text-center sm:text-left text-sm sm:text-md lg:text-lg italic">
        {text}
      </div>
    </div>
  );
}

export function Header1({ text }: {text: string}) {
  return (
    <div className={ `${karla.className} text-2xl font-bold sm:text-4xl mt-8 mb-4` }>
      {text}
    </div>
  );
}

export function Header2({ text }: {text: string}) {
  return (
    <div className="text-2xl font-semibold mb-2 mt-4">
      {text}
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

export function BoldText({ text }: {text: string}) {
  return (
    <div className="font-bold">
      {text}
    </div>
  );
}

export function List({ items }: { items: ItemType[] }) {
  return (
    <ol className="list-decimal list-inside my-1">
      {items.map((item: ItemType, index: number) => (
        <li 
          key={index}
          className="my-2"
        >
          {item.title && <div className="font-extrabold inline">{item.title}: </div>}
          {item.desc}
        </li>
      ))}
    </ol>
  );
}

export function Code({ text }: { text: string }) {
  return (
    <div className="relative bg-[#505050] text-primary/[0.8] p-4 font-mono">
      <pre className="whitespace-pre-wrap break-words">
        <code>{text}</code>
      </pre>
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

const BlogLayout = ({ title, desc, children }: {title: string, desc: string, children: React.ReactNode}) => {
  return (
    <div className="flex flex-col w-full sm:w-3/4 min-h-screen max-h-full">
      <header className="text-center items-center">
        <Back />
        <Title text={title}/>
        <Description text={desc}/>
      </header>
      <main className={`${inter.className} leading-relaxed tracking-wide`}>
        {children}
      </main>
      <footer className="flex flex-row mt-auto justify-between">
        <div className="w-fit">
          <p className="mt-10 w-fit">Contact Me</p>
          <ContactLinks />
        </div>
        <Copyright />
      </footer>
    </div>
  );
}

export default BlogLayout;
