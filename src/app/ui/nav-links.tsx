'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';

const links = [
  // { name: 'home', href: '/' },
  { name: 'about', href: '/' },
  { name: 'experience', href: '/experience' },
  { name: 'blog', href: '/blog' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="lg:absolute lg:left-14 lg:top-6 lg:items-start items-center flex gap-6 mb-8">
      {links.map((link) => {
        return (
          <Link 
          key={link.name}
          href={link.href}
          className={ clsx(
            "transition-transform transform hover:underline",
              {
                "underline": pathname === link.href
              },
            )}
          >
              { link.name === '' ? (
                <GlobeAsiaAustraliaIcon className="w-9 h-9 left-10" />
              ) : (
              <div className="mt-1 text-white text-2xl font-normal">
                {link.name}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
