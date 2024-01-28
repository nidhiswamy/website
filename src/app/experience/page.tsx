// import Image from 'next/image';
    // <div className="relative h-12 top-36 left-16 text-white text-4xl">Work</div>
import WorkCard from '@/app/ui/workcard';
import ProjectCard from '@/app/ui/projectcard';

export default function Experience() {
  return (
    <>
      <div className="relative container justify-center mx-auto my-8 overflow-auto mt-20">
        <div className="relative h-12 indent-32 text-white text-4xl my-4">Work</div>
        <div className="relative justify-center flex flex-row flex-wrap ">
          <div className="flex-1/3 p-4">
            <WorkCard 
              company="Lutron"
              link="https://commercial.lutron.com/us/en/whole-building-systems/athena"
              title="Software Engineer Intern"
              date="May 2023 - Aug 2023"
              skills="React, Postgres, AWS Services"
            />
          </div>
          <div className="flex-1/3 p-4">
            <WorkCard 
              company="GeoSpatial Innovations, Inc."
              link="https://gsiworks.com/"
              title="Software Engineer Intern"
              date="May 2022 - May 2023"
              skills="ArcGIS, PowerShell, RestAPI"
            />
          </div>
          <div className="flex-1/3 p-4">
            <WorkCard 
              company="SOC 119, Dr. Sam Richards"
              link="https://www.soc119.org/"
              title="Technical Specialist"
              date="Aug 2021 - Present"
              skills="Teaching assistance, class management, stream production"
            />
          </div>
          <div className="flex-1/3 p-4">
            <WorkCard 
              company="Women in Engineering"
              link="https://inclusion.engr.psu.edu/student-programs/women-in-engineering-program/index.aspx"
              title="Mathematics Facilitator"
              date="Jan 2022 - May 2023"
              skills="Leadership, linear algebra mentoring, guidance"
            />
          </div>
          <div className="flex-1/3 p-4">
            <WorkCard 
              company="HackPSU"
              link="https://hackpsu.org"
              title="Marketing Director"
              date="Jan 2022 - Present"
              skills="Social media management, graphics, content creation"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <div className="relative h-12 indent-32 text-white text-4xl my-8">Projects</div>
        <div className="relative justify-center flex flex-row flex-wrap ">
        <div className="flex-1/3 p-4">
          <ProjectCard 
            name="Parser"
            link="https://www.github.com/nidhiswamy/parser"
            desc="A recusive descent parser for a mini-programming language"
            skills="Python, Compiler Construction"
            />
        </div>
        <div className="flex-1/3 p-4">
          <ProjectCard 
            name="Edit Poles Widget"
            link="https://www.github.com/nidhiswamy/edit-poles"
            desc="A custom data editing widget for customers using ArcGIS Web AppBuilder"
            skills="HTML, JavaScript, ArcGIS WebApp Builder"
          />
        </div>
        <div className="flex-1/3 p-4">
          <ProjectCard 
            name="OPT Search Web Scraper"
            link="https://www.github.com/nidhiswamy/opt-search"
            desc="A python web scraper built to scrape the OPTJobs website for specific job roles"
            skills="Python, BeautifulSoup"
          />
        </div>
        </div>
      </div>
    </>
  );
}

