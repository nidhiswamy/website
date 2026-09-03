import WorkCard from "@/app/ui/WorkCard";
import ProjectCard from "../ui/ProjectCard";
import { jobs } from "@/app/work/jobs";
import { projects } from "./projects";
import ExperienceHeader from "../ui/ExperienceHeader";
import Card from "../ui/Card";

export default function Work() {
  return (
    <div className="container content-center justify-items-center mx-auto p-8 md:p-0 flex flex-col gap-8">
      <div>
        <ExperienceHeader label="Work" />
        <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, idx) => {
            return (
              <Card key={idx}>
                <WorkCard
                  company={job.company}
                  link={job.link}
                  title={job.title}
                  date={job.date}
                  skills={job.skills}
                />
              </Card>
            );
          })}
        </div>
      </div>
      <div>
        <ExperienceHeader label="Projects" />
        <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            return (
              <Card key={idx}>
                <ProjectCard
                  name={project.name}
                  link={project.link}
                  desc={project.desc}
                  skills={project.skills}
                  type={project.type}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
