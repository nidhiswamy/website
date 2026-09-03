import { solway } from "../fonts";

interface ExperienceHeaderProps {
  label: string;
}

const headerStyle = [
  solway.className,
  "px-2 py-1 text-4xl text-primary my-4",
  "text-secondary dark:text-dark-secondary",
].join(" ");
const header = "flex w-full items-center justify-center mb-4";

export default function ExperienceHeader({ label }: ExperienceHeaderProps) {
  return (
    <div className={header}>
      <span className={headerStyle}>{label}</span>
    </div>
  );
}
