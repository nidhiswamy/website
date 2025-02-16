"use client";

import { useState, useEffect, useRef } from "react";
import { Back } from "@/app/ui/BlogLayout";

export default function StickyHeader({ title }: { title: string }) {
  const titleRef = useRef(null);
  const [showSmallTitle, setShowSmallTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleBottom = (titleRef.current as HTMLElement).getBoundingClientRect().bottom;
        setShowSmallTitle(titleBottom < 60);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-28 sm:top-[5rem] left-0 w-full bg-primary dark:bg-primary-dark ${showSmallTitle ? "shadow-md" : "" } z-10 px-4 py-2 flex items-center justify-between gap-4 sm:px-8`}>
        <Back />
        <div className="flex items-center justify-start sm:justify-center w-full pt-4">
          <h6
            className={`text-lg font-bold transition-opacity duration-300 ${
              showSmallTitle ? "opacity-100" : "opacity-0"
            }`}
          >
            {title}
          </h6>
        </div>
      </header>
      <div ref={titleRef}></div>
    </>
  );
}
