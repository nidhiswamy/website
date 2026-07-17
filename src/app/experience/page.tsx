import WorkCard from "@/app/ui/WorkCard";
import { jobs } from "@/app/experience/jobs";
import ExperienceHeader from "../ui/ExperienceHeader";

export default function Experience() {
  return (
    <div className="container content-center justify-items-center mx-auto mt-16 p-8 md:p-0">
      <ExperienceHeader label="Work" />
      <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, idx) => {
          return (
            <div
              key={idx}
              className={[
                "sm:w-full p-4 shadow",
                "border border-primary/15 hover:bg-secondary-light/[0.1]",
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
