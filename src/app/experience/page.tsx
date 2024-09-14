import WorkCard from '@/app/ui/WorkCard';
import ProjectCard from '@/app/ui/ProjectCard';
import { jobs } from '@/app/experience/jobs';
import { projects } from '@/app/experience/projects';

export default function Experience() {
  return (
    <>
      <div className="container content-center justify-items-center mx-auto p-8">
        <div className="bg-gradient-to-r from-secondary/[0.9] to-secondary-light/[0.6] w-fit rounded-sm px-2 py-1 text-primary-dark font-bold text-4xl my-4 mx-auto">Work</div>
        <div className="justify-items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, idx) => {
            return (
              <div 
                key={idx} 
                className="p-4 rounded-md border border-slate-600 shadow hover:bg-opacity-40 hover:bg-secondary-light hover:shadow-xl transition duration-300 ease-in-out"
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
        <div className="bg-gradient-to-r from-secondary/[0.9] to-secondary-light/[0.6] w-fit rounded-sm px-2 py-1 text-primary-dark font-bold text-4xl my-4 mx-auto">Projects</div>
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
