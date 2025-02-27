"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

const links = [
  // { name: 'home', href: '/' },
  { name: "about", href: "/" },
  { name: "experience", href: "/experience" },
  { name: "blog", href: "/blog" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center gap-6">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            {link.name === "" ? (
              <GlobeAsiaAustraliaIcon className="w-9 h-9 left-10" />
            ) : (
              <div
                className={clsx(
                  "transition-transform transform hover:underline decoration-4 decoration-secondary dark:decoration-dark-secondary mt-1 text-primary-dark dark:text-primary text-2xl font-normal",
                  {
                    "underline decoration-4 decoration-secondary dark:decoration-dark-secondary":
                      pathname === link.href ||
                      pathname.startsWith(link.href + "/"),
                  }
                )}
              >
                {link.name}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
