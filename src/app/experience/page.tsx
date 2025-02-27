import WorkCard from '@/app/ui/WorkCard';
import ProjectCard from '@/app/ui/ProjectCard';
import { jobs } from '@/app/experience/jobs';
import { projects } from '@/app/experience/projects';

const headerStyle = "bg-gradient-to-r from-secondary/[0.9] to-secondary-light/[0.6] w-fit rounded-sm px-2 py-1 font-bold text-4xl my-4 mx-auto"

export default function Experience() {
  return (
    <>
      <div className="container content-center justify-items-center mx-auto p-8 md:p-0">
        <div className={headerStyle}>Work</div>
        <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, idx) => {
            return (
              <div 
                key={idx} 
                className="sm:w-full p-4 rounded-md border border-slate-600 shadow hover:bg-secondary-light/[0.4] hover:dark:bg-dark-secondary-light/[0.2] hover:shadow-xl transition duration-300 ease-in-out"
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

      <div className="container mx-auto my-8 justify-center">
        <div className={headerStyle}>Projects</div>
        <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <div 
                key={project.id} 
                className="p-4 rounded-md border border-slate-600 shadow"
              >
                <ProjectCard 
                  name={project.name}
                  link={project.link}
                  desc={project.desc}                 
                  skills={project.skills}                                
                />
              </div>
          );
        })}
        </div>
      </div>
    </>
  );
}
