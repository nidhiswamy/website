// export default function Home() {
//   return (
//     <div className="flex mx-auto p-8 left-12 top-40 absolute">
//       <div className="ml-12 w-96 h-32">
//         <div className="mb-8 text-white text-2xl font-normal">
//           Hi, I’m Nidhi!
//         </div>
//         <div className="mb-4 text-white text-2xl font-normal">
//           Welcome to my cove of thoughts on the Internet, I hope you enjoy :)
//         </div>
//         <ContactLinks />
//       </div>
//     </div>
//   );
// }

import ContactLinks from '@/app/ui/contactlinks';
import Image from 'next/image';

export default function About() {
  return (
    <div className="relative flex flex-col lg:flex-row size-5/6 2xl:mx-auto lg:justify-between lg:items-center lg:size-7/8 xl:size-2/3 xl:mt-16">
      <div className="mt-8 order-last h-fit place-self-center lg:order-first lg:size-2/3 text-white font-normal font-alegreya text-lg 2xl:place-self-start md:text-xl 2xl:text-2xl">
        Hey there!
        <br/><br/>
        I’m Nidhi Swamy, a senior studying computer science at the Pennsylvania State University. I was born and raised in Bangalore, India. Since middle school, I’ve dreamed about moving to the United States to complete my education and begin my career. 
        <br/><br/>
        Since moving here and pursuing that dream, I’ve had the amazing opportunity to not only study my passion, but also to be a part of software engineering internships, various part-time jobs with one that has stuck with me for over 3 years, and be around an inspiring group of people. 
        Outside of school, I love to cook various cuisines of food, discover and play new music, run outside in nature, read, and journal. 
      <ContactLinks />
      </div>
      <div className="order-first place-self-center lg:order-last lg:ml-8 xl:size-1/2">
        <Image 
          src="/me.png" 
          alt="Me"
          height={301}
          width={402}
          className="shadow"
        />
      </div>
    </div>
  );
}
