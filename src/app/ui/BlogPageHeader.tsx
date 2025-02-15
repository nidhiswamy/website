import { solway } from "../fonts";
import { blogBlurb } from "@/utils/constants";

export default function BlogPageHeader() {
  return (
    <div>
      <h1 className={`${solway.className} text-center text-3xl`}>
        Welcome to my{" "}
        <span className="text-secondary dark:text-dark-primary">blog</span>!
      </h1>
      <h1 className="mt-2 sm:mt-4 mx-auto w-full lg:w-2/3 text-lg sm:text-xl text-start sm:text-center lg:whitespace-pre-line pb-4">
        {blogBlurb}
        <span className="font-bold text-secondary dark:text-dark-primary">
          Enjoy :)
        </span>
      </h1>
    </div>
  );
}