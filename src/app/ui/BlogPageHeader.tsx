import { solway } from "../fonts";
import { blogBlurb } from "@/utils/constants";
import Tooltip from "./Tooltip";

const headerStyle = [
  solway.className,
  "px-2 py-1 text-4xl text-primary my-4",
  "text-secondary dark:text-dark-secondary",
].join(" ");
const header = "flex w-full items-center justify-center mb-4";

export default function BlogPageHeader() {
  return (
    <div className={header}>
      <Tooltip content={blogBlurb} position="bottom">
        <span className={headerStyle}>Blog</span>
      </Tooltip>
    </div>
  );
}
