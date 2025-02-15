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
        <div className="flex items-end gap-0.5 text-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="font-sans text-xs -mt-1">Denver, Colorado</p>
        </div>
      </Link>
    </div>
  );
}
