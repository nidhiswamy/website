import { solway } from "@/app/fonts";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Link
        className={`${solway.className} text-secondary dark:text-dark-secondary text-2xl w-auto h-auto`}
        href="/"
      >
        Nidhi Swamy
        <div className="flex items-end justify-center md:justify-start gap-0.5 text-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="font-sans text-xs -mt-1">Denver, Colorado</p>
          <svg
            aria-hidden="true"
            viewBox="0 0 240 60"
            className="
            pointer-events-none
            absolute
            -bottom-8
            left-0
            h-16
            w-full
            overflow-visible
            opacity-0
            transition-all
            duration-500
            ease-out
            group-hover:-translate-y-1
            group-hover:opacity-100
          "
          >
            <path
              d="M0 55 L36 24 L58 43 L94 8 L132 44 L160 20 L200 48 L240 30 L240 60 L0 60 Z"
              className="fill-teal-400/10 stroke-teal-400/70"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            <path
              d="M76 28 L94 8 L111 28 L102 24 L94 29 L87 23 Z"
              className="fill-stone-200/80"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
