import WorkCard from '@/app/ui/workcard';
import ProjectCard from '@/app/ui/projectcard';
import { jobs } from '@/app/experience/jobs';
import { projects } from '@/app/experience/projects';

export default function Experience() {
  return (
    <>
      <div className="relative container content-center justify-items-center mx-auto my-8 lg:mt-20">
        <div className="bg-highlight-work bg-contain px-2 w-fit text-primary-dark text-4xl my-4 mx-auto lg:mx-12 2xl:mx-20">Work</div>
        <div className="justify-items-center grid grid-cols-1 gap-y-6 md:gap-y-8 lg:gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-0.5">
          {jobs.map((job) => {
            return (
              <div 
                key={job.id} 
                className="p-4 sm:p-1 rounded-md border border-slate-600 shadow sm:shadow-none sm:border-0"
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
        <div className="bg-highlight-proj bg-contain px-2 w-fit text-primary-dark text-4xl my-4 mx-auto lg:mx-12 2xl:mx-20">Projects</div>
        <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-0.5 lg:gap-y-2">
          {projects.map((project) => {
            return (
              <div 
                key={project.id} 
                className="p-4 sm:p-1 rounded-md border border-slate-600 sm:border-0"
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
