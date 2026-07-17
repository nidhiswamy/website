import { solway } from "../fonts";
import { blogBlurb } from "@/utils/constants";
import Tooltip from "./Tooltip";

export default function BlogPageHeader() {
  return (
    <div>
      <h1 className={`${solway.className} text-center text-3xl`}>
        Welcome to my{" "}
        <Tooltip content={blogBlurb} position="bottom">
          <span className="text-secondary dark:text-dark-primary">blog</span>
        </Tooltip>
        !
      </h1>
    </div>
  );
}
