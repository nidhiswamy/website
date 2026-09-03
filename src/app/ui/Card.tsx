interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
}

const className = [
  "w-full xs:p-4 py-2 shadow",
  "border border-accent/15",
  "dark:border-dark-accent/15",
  "hover:shadow-xl transition duration-300 ease-in-out",
].join(" ");

const hoverClassName =
  "hover:bg-secondary-light/[0.2] dark:hover:bg-dark-secondary-light/[0.1]";

export default function Card({ children, hover = false }: CardProps) {
  return (
    <div className={`${className} ${hover && hoverClassName}`}>{children}</div>
  );
}
