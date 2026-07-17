interface ExperienceHeaderProps {
  label: string;
}

const headerStyle =
  "bg-gradient-to-r from-secondary/[0.8] to-secondary-light/[0.6] px-2 py-1 font-bold text-4xl text-primary my-4";
const header = "flex w-full items-center justify-center mb-4";

export default function ExperienceHeader({ label }: ExperienceHeaderProps) {
  return (
    <div className={header}>
      <span className={headerStyle}>{label}</span>
    </div>
  );
}
