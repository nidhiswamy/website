import WorkCard from "@/app/ui/WorkCard";
import { jobs } from "@/app/work/jobs";
import ExperienceHeader from "../ui/ExperienceHeader";

export default function Work() {
  return (
    <div className="container content-center justify-items-center mx-auto p-8 md:p-0">
      <ExperienceHeader label="Work" />
      <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, idx) => {
          return (
            <div
              key={idx}
              className={[
                "sm:w-full p-4 shadow",
                "border border-accent/15 hover:bg-secondary/[0.1]",
                "dark:border-dark-accent/15 dark:hover:bg-dark-secondary-light/[0.1]",
                "hover:shadow-xl transition duration-300 ease-in-out",
              ].join(" ")}
            >
              <WorkCard
                company={job.company}
                link={job.link}
                title={job.title}
                date={job.date}
                skills={job.skills}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
