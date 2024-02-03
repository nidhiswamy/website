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
// }

import ContactLinks from '@/app/ui/contactlinks';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0.5 gap-y-12 xl:mx-auto lg:justify-between lg:items-center xl:size-2/3 lg:mt-16">
      <div className="h-fit order-2 lg:order-1 place-self-center w-fit text-primary-dark text-lg 2xl:place-self-start md:text-xl 2xl:text-2xl">
        Hey there!
        <br/><br/>
        I’m <span className="text-secondary">Nidhi Swamy</span>, a senior studying computer science at the Pennsylvania State University. 
        <br/><br/>
        I was born and raised in Bangalore, India. Since middle school, I’ve dreamed about moving to the United States to complete my education and begin my career. 
        Since moving here and pursuing that dream, I’ve had the amazing opportunity to not only study my passion, but also to be a part of software engineering internships, various part-time jobs with one that has stuck with me for over 3 years, and be around an inspiring group of people. 
      <ContactLinks />
      </div>
      <div className="order-1 lg:order-2 place-self-center xl:size-fit">
        <Image 
          src="/me.png" 
          alt="Me"
          height={301}
          width={402}
          className="shadow-lg"
        />
      </div>
      <div className="h-fit order-4 lg:order-4 place-self-center w-fit text-primary-dark text-lg xl:place-self-start md:text-xl 2xl:text-2xl">
        Outside of school, I love cooking various cuisines of food (especially Indian and Korean), discovering and playing new music, running outside in nature, reading, and journaling.
        <br/><br/>
        This picture is from me talking to over 800 students in SOC 119, a class I've been involved with since my freshman year. 
        From someone who experienced intense social and public speaking anxiety, I am grateful to have found this class that has transformed me into someone who is capable of conversing with such a huge group of students and having the opportunity to network with inspiring speakers and facilitators. 
        Find out more about my professional work experience and personal projects <Link href="/experience" className="text-secondary hover:underline">here</Link>!
      </div>
      <div className="order-3 lg:order-3 place-self-center lg:place-self-start xl:size-fit">
        <Image 
          src="/soc2.png" 
          alt="Me speaking in SOC119"
          height={301}
          width={402}
          className="shadow-lg"
        />
      </div>
    </div>
  );
}
