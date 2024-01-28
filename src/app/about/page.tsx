import Image from 'next/image';

export default function About() {
  return (
    <div className="relative flex justify-between items-center size-2/3 mx-auto mt-16">
      <div className="place-self-start size-2/3 text-white text-2xl font-normal font-alegreya">
        Hey there!
        <br/><br/>
        I’m Nidhi Swamy, a senior studying Computer Science at the Pennsylvania State University. I was born and raised in Bangalore, India. Since middle school, I’ve dreamed about moving to the United States to complete my education and begin my work life. 
        <br/><br/>
        The one thing I’m most proud of, besides moving half way across the world all by myself at 18 years old, is that I can name all the countries in the world in under 6 minutes! 
        <br/><br/>
        I’m a big maps, music, and math enthusiast. Learn more about me through my blog that I try updating while I go through my CS degree thousands of miles away from home. 
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
