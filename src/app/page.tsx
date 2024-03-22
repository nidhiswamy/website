// export default function Home() {
//   return (
//     <div className="flex mx-auto p-8 left-12 top-40 absolute">
//       <div className="ml-12 w-96 h-32">
//         <div className="mb-8 text-2xl font-normal">
//           Hi, I’m Nidhi!
//         </div>
//         <div className="mb-4 text-2xl font-normal">
//           Welcome to my cove of thoughts on the Internet, I hope you enjoy :)
//         </div>
//         <ContactLinks />
//       </div>
//     </div>
//   );
//      'primary': '#667a73',
//      Find out more about my professional work experience and personal projects <Link href="/experience" className="text-secondary hover:underline">here</Link>!
// }

import ContactLinks from '@/app/ui/contactlinks';
import Image from 'next/image';
import { solway } from '../app/fonts';

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0.5 gap-y-12 mx-3 lg:gap-x-10 lg:justify-between lg:items-center sm:size-3/4 md:size-10/12 2xl:size-5/6 lg:mt-24">
      <div className={`h-fit order-2 lg:order-1 place-self-center w-fit lg:w-full text-primary-dark text-lg xl:place-self-start md:text-xl 2xl:text-2xl`}>
        <h1 className={`${solway.className} text-3xl pb-8`}>Hey there!
          I’m <span className="text-secondary">Nidhi Swamy</span>, a senior studying Computer Science at Penn State</h1>
        <div>
          I was born and raised in Bangalore, India. Since middle school, I&apos;ve dreamed about moving to the United States to complete my education and begin my career. 
          Since moving here and pursuing that dream, I&apos;ve had the amazing opportunity to not only study my passion, but also to be a part of software engineering internships, various part-time jobs with one that has stuck with me for over 3 years, and be around an inspiring group of people. 
        </div>
        <ContactLinks />
      </div>
      <div className="order-1 lg:order-2 place-self-center lg:place-self-start xl:size-fit">
        <Image 
          src="/me.jpg" 
          alt="Red Rocks, Colorado."
          height={378}
          width={504}
          className="shadow-lg"
        />
        <div className="font-sans text-gray p-2 italic text-sm text-center">
          Red Rocks, Colorado
        </div>
      </div>
      <div className={`h-fit order-4 lg:order-4 place-self-center w-fit text-primary-dark text-lg xl:place-self-start md:text-xl 2xl:text-2xl`}>
        Some of my other interests include cooking different cuisines of food, discovering and playing new music, being in nature, reading, and journaling.
          <br/><br/>
        This picture is from SOC 119, a class I&apos;ve been involved with since my freshman year that is taken by 800+ students every semester. 
        For someone who experienced intense social and public speaking anxiety, I am grateful to have found this class that has transformed me into someone who is capable of conversing with such a huge group of students and the opportunity to network with influential facilitators. 
      </div>
      <div className="order-3 lg:order-3 place-self-center lg:place-self-start xl:size-fit">
        <Image 
          src="/soc2.jpg" 
          alt="Me speaking in SOC119"
          height={1920}
          width={1281}
          className="shadow-lg"
        />
        <div className="font-sans text-gray p-2 italic text-sm text-center">
          100 Thomas, Penn State
        </div>
      </div>
    </div>
  );
}
