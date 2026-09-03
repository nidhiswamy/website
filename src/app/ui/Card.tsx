interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
}

const className = [
  "sm:w-full p-4 shadow",
  "border border-accent/15",
  "dark:border-dark-accent/15",
  "hover:shadow-xl transition duration-300 ease-in-out",
].join(" ");

const hoverClassName =
  "hover:bg-secondary-light/[0.2] transition duration-300 ease-in-out dark:hover:bg-dark-secondary-light/[0.1]";

export default function Card({ children, hover = false }: CardProps) {
  return (
    <div className={`${className} ${hover && hoverClassName}`}>{children}</div>
  );
}
