import Image from 'next/image';

export default function About() {
  return (
    <div className="relative flex justify-between items-center size-2/3 mx-auto mt-16">
      <div className="place-self-start size-2/3 text-white text-2xl font-normal font-alegreya">
        Hey there!
        <br/><br/>
        I’m Nidhi Swamy, a recent Computer Science graduate from the Pennsylvania State University. I was born and raised in Bangalore, India. Since middle school, I’ve dreamed about moving to the United States to complete my education and begin my work life. 
        <br/><br/>
        Since moving here and pursuing that dream, I’ve had the amazing opportunity to not only study my passion, but also be a part of software engineering internships, various part-time jobs with one that has stuck with me for over 3 years, and be around an inspiring group of people. 
        Outside of school, I love to cook various cuisines of food, discover and play new music, run outside in nature, read, and journal. 
      </div>
      <div className="ml-8 size-1/2">
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
