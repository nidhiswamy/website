'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'experience', href: '/experience' },
  { name: 'blog', href: '/blog' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="absolute left-14 top-6 flex items-start gap-6">
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
            { link.name === 'home' ? (
              <GlobeAsiaAustraliaIcon className="w-9 h-9 left-10" />
            ) : (
              <div className="mt-1 text-white text-xl font-normal">
                {link.name}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
