import BlogLayout from '@/app/ui/BlogLayout'; 
import { Header1, List, Body } from '@/app/ui/BlogLayout'; 
import Caption from '@/app/ui/caption';

export default function BlogPost1() {
  return (
    <BlogLayout title="The Software Development Life Cycle" desc="A high-level description of the Software Development Life Cycle (SDLC) and its relevance to this website">
      <Header1 text="Introduction"/>
        <Body>
          In the constantly evolving realm of technology, where software applications have become integral to our daily lives, the process by which these come into existence is of extreme importance. The Software Development Life Cycle (SDLC) is a process that enables software developers, engineers, or programmers to perform structured and efficient software development on a particular program or project. 
            <Caption
              index={1}
              src="/sdlc1.png"
              alt="The Software Development Life Cycle"
              height={675}            
              width={675}                      
              css="m-auto mt-8"
            />
            Most young software developers begin projects without breaking down the various complex stages that are involved in the process. So, I seek to demystify this software development process, by breaking it down into its core components and explaining it in a way that is accessible to both experienced developers and new software programmers. The six fundamental stages of the SDLC are explored below. 
        </Body>
      <Header1 text="Planning"/>
        <Body>
          The planning stage is the initial phase of the SDLC. It encompasses the most important aspects of project management, where the foundation of the project is laid out. In this stage, a multitude of important factors, such as the objective and scope, milestones, project timeline, and documentation are discussed. These factors are integral to the further development and sustainability of the project. This stage is almost akin to charting a course on a map before embarking on a journey; it provides a clear roadmap, aligns the team&apos;s efforts, and minimizes unexpected detours ensuring a more efficient and successful software development project. 
          <br/><br/>For my site, it involved a very basic framework I created in my head. I planned the number of pages and their contents as well as some ideas for blog posts.  The target audience is hard to describe, but it is open to friends, acquaintances, recruiters, and anyone else finding a specific blog post.
        </Body>
      <Header1 text="Analysis"/>
        <Body>
          Once the planning stage is complete, the software developer moves to the analysis phase. During this stage, the focus shifts from what the software must do to how it will do it. Important details are gathered, user needs are understood, and stakeholder involvement is assessed in this stage. The software project starts to take shape in terms of how it will function, how it appears to users, and how it integrates with other systems, both from inside the company and other global components. When the analysis is complete, the project moves forward to the designing of user interface and the user design with the design stage.
          <br/><br/>The analysis phase of this site included gathering all the content under the navigable pages, purchasing and registration of my domain, and curating special features of my website. 
        </Body>
      <Header1 text="Design"/>
        <Body>
          This stage is where the conceptualized software solution starts to take concrete form. This stage is crucial for translating requirements and architectural plans from analysis into a detailed technical blueprint. It is the point in the SDLC where the vision of the project becomes a tangible technical plan. In this phase, developers, architects, and designers create a comprehensive blueprint that outlines the structure, functionality, and user interface of the software.        
          <br/><br/>This was arguably the most enjoyable and interesting part of the process. It began with the creation of wireframes on Figma and the curation of a color palette, typography, and imagery. Each navigable page (about, experience, blog) was designed with elaborate layouts, user design, and responsiveness in mind.
        </Body>
      <Header1 text="Implementation"/>
        <Body>
          This stage in the SDLC is where the project moves from the design blueprint to actual coding and development. This is where developers write the code and build the software according to the specifications and designs established in all the previous stages. It is often regarded as the heart of the software development process. It is marked by collaboration among developers, adherence to coding standards, and testing to catch and address issues early. Once this stage is complete, the software is ready for more rigorous testing, fine-tuning, and quality assurance to ensure it meets user needs and expectations. 
          <br/><br/>In this stage, the frameworks used for the project are decided. NextJS, TailwindCSS, TypeScript, and Vercel were decided as the final technical frameworks used for this site. Additionally, responsiveness to multiple screens and compatibility with all browsers were checked in the process.
        </Body>
      <Header1 text="Testing & Integration"/>
        <Body>
          Testing is arguably the most important stage of the software development process. This is especially important in the development of a project in the workplace that plans to go into production for customers. It is the structure process that enables the production of high-quality, low-cost software, in the shortest possible production time. 
          <br/><br/>Testing comprises of three major tiers:
          <List 
            items={[
              { title: "Unit tests", desc: "The foundation of the test pyramid, unit tests have limited scope and ensure isolated code units function as expected. They assess single variables and do not rely on external dependencies." },
              { title: "Integration tests", desc: "This is the second step of the pyramid and verifies the interaction of unit-tested code with other codes in the application." },
              { title: "End-to-end tests", desc: "These are the most expensive to maintain, with the slowest operating pace. It is also the most time-consuming phase and has unreliable external dependencies." },
            ]}
          />
          <Caption
            index={2}
            src="/sdlc2.png"
            alt="Tiers of Software Testing"
            height={675}            
            width={675}                      
            css="m-auto mt-8"
          />
          Testing is essential for identifying and resolving issues early in the development process. It helps ensure that the software is stable, secure, and reliable, reducing the likelihood of defects and issues in the production environment. The integration phase is critical for ensuring that all parts of the software interact as intended. It helps identify and resolve issues related to component compatibility, data exchange, and third-party integration, ensuring a seamless and functional software solution. 
          <br/><br/>My site took  a lighter approach to this than most industrial rigorous testing. Ensuring that all functional features worked as expected was crucial. I implemented beta testing by using the Vercel pre-deployment link to ensure functionality on various screens and browsers. As for deployment, my fullname.com was hosted and deployed using Google Domains and Vercel.
        </Body>
      <Header1 text="Maintenance"/>
        <Body>
          The maintenance stage is the phase where the software application is released into the production environment and undergoes ongoing support, updates, and improvements throughout its lifecycle. This phase ensures that the software remains operational, secure, and aligned with changing user needs and technologies. It encompasses a wide range of activities, from fixing defects to adapting the software to new technology trends and ensuring its long-term viability. Through effective maintenance, the software continues to deliver value to its users and the organization. 
          <br/><br/>I regularly maintain and update this site through blog posts and other channels to address any necessary edits or provide support.
        </Body>
      <Header1 text="Conclusion"/>
        <Body>
          Each phase in the Software Development Life Cycle, from planning and analysis to design, implementation, testing, integration, and maintenance plays a crucial role in ensuring the success of a software project. The SDLC is a dynamic process that promotes collaboration, communication, and a systematic approach to software development. It not only ensures that the software meets user needs but also minimizes risks, controls costs, and maximizes the software&apos;s value over time. 
        </Body>
    </BlogLayout>
  );
}
