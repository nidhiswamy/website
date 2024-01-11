import Image from 'next/image';
import WorkCard from '@/app/ui/workcard';

export default function Experience() {
  return (
    <>
      <div className="h-12 left-24 text-white text-4xl">Work</div>
      <div className="flex flex-row flex-wrap items-center justify-center relative">
        <WorkCard 
          company="Lutron"
          title="Software Engineer Intern"
          date="May 2023 - Aug 2023"
          skills="React, Postgres, AWS Services"
        />
        <WorkCard 
          company="GeoSpatial Innovations, Inc."
          title="Software Engineer Intern"
          date="May 2022 - May 2023"
          skills="ArcGIS, PowerShell, RestAPI"
        />
        <WorkCard 
          company="SOC 119, Dr. Sam Richards"
          title="Technical Specialist"
          date="Aug 2021 - Present"
          skills="Teaching assistant, class management, stream production"
        />
        <WorkCard 
          company="Women in Engineering"
          title="Mathematics Facilitator"
          date="Jan 2022 - May 2023"
          skills="Leadership, linear algebra mentoring, guidance"
        />
        <WorkCard 
          company="HackPSU"
          title="Marketing Director"
          date="Jan 2022 - Present"
          skills="Social media management, graphics, content creation"
        />
        <div className="text-white text-4xl">Projects</div>
      </div>
    </>
  );
}

