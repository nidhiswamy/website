// import Image from 'next/image';
import WorkCard from '@/app/ui/workcard';
import ProjectCard from '@/app/ui/projectcard';

export default function Experience() {
  return (
    <>
      <div className="relative container justify-center mx-auto my-8 lg:mt-20">
        <div className="relative h-12 text-center lg:text-start lg:indent-12 2xl:indent-20 text-white text-4xl my-4">Work</div>
        <div className="relative justify-items-center grid grid-cols-1 gap-y-6 md:gap-y-8 lg:gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-0.5">
          <div className="w-72 p-0 sm:p-1">
            <WorkCard 
              company="Lutron Electronics"
              link="https://commercial.lutron.com/us/en/whole-building-systems/athena"
              title="Software Engineer Intern"
              date="May 2023 - Aug 2023"
              skills="React, TypeScript, AWS"
            />
          </div>
          <div className="w-72 p-0 sm:p-1">
            <WorkCard 
              company="GeoSpatial Innovations, Inc."
              link="https://gsiworks.com/"
              title="Software Engineer Intern"
              date="May 2022 - May 2023"
              skills="ArcGIS, JavaScript, PowerShell scripting, RestAPI services"
            />
          </div>
          <div className="w-72 p-0 sm:p-1">
            <WorkCard 
              company="SOC 119, Dr. Sam Richards"
              link="https://www.soc119.org/"
              title="Technical Specialist"
              date="Aug 2021 - Present"
              skills="Manage and run in-class podium and YouTube stream production"
            />
          </div>
          <div className="w-72 p-0 sm:p-1">
            <WorkCard 
              company="Women in Engineering"
              link="https://inclusion.engr.psu.edu/student-programs/women-in-engineering-program/index.aspx"
              title="Mathematics Facilitator"
              date="Jan 2022 - May 2023"
              skills="Mentored 20+ underclassmen in ETM math courses each semester"
            />
          </div>
          <div className="w-72 p-0 sm:p-1">
            <WorkCard 
              company="Lion Line"
              link="https://directory.alumni.psu.edu/s/1218/alumni/index.aspx?sid=1218&gid=4&pgid=379"
              title="Student Caller"
              date="Oct 2021 - May 2022"
              skills="Fundraised $12,000+ for THON and other organizations at PSU"
            />
          </div>
          <div className="w-72 p-0 sm:p-1">
            <WorkCard 
              company="HackPSU"
              link="https://hackpsu.org"
              title="Marketing Director"
              date="Jan 2022 - Present"
              skills="Content creation, social media & team management for PSU's student-run hackathon"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto my-8 justify-center">
        <div className="relative h-12 text-center lg:text-start lg:indent-12 2xl:indent-20 text-white text-4xl my-4">Projects</div>
        <div className="relative justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-0.5 lg:gap-y-2">
        <div className="w-72 p-0 sm:p-1">
          <ProjectCard 
            name="Parser"
            link="https://www.github.com/nidhiswamy/parser"
            desc="A recusive descent parser for a mini-programming language"
            skills="Python, Compiler Construction"
            />
        </div>
        <div className="w-72 p-0 sm:p-1">
          <ProjectCard 
            name="Edit Poles Widget"
            link="https://www.github.com/nidhiswamy/edit-poles"
            desc="A custom widget for customers to log and edit electric pole data"
            skills="JavaScript, ArcGIS WebApp Builder"
          />
        </div>
        <div className="w-72 p-0 sm:p-1">
          <ProjectCard 
            name="OPT Search Web Scraper"
            link="https://www.github.com/nidhiswamy/opt-search"
            desc="A python web scraper built to scrape the OPTJobs website for specific job roles"
            skills="Python"
          />
        </div>
        <div className="w-72 p-0 sm:p-1">
          <ProjectCard 
            name="Personal Site"
            link="https://github.com/nidhiswamy/website"
            desc="My personal website built using NextJS and deployed with Vercel"
            skills="JavaScript, TailwindCSS, Vercel"
          />
        </div>
        <div className="w-72 p-0 sm:p-1">
          <ProjectCard 
            name="Simple To-Do App"
            link="https://github.com/nidhiswamy/simple-todo"
            desc="A simple to-do list application using Android Studio"
            skills="Android Studio, Java"
          />
        </div>
        </div>
      </div>
    </>
  );
}

