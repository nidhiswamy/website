import { solway } from "../fonts";

const blogBlurb = "I created this space on the internet for me to express my thoughts as I grow to travel and experience the world, face new challenges, or find things that fascinate me. I hope you like reading these as much as I liked writing them. "

export default function BlogPageHeader() {
  return (
    <div>
      <h1 className={`${solway.className} text-center text-3xl`}>Welcome to my <span className="text-secondary">blog</span>!</h1>
      <h1 className="mt-2 sm:mt-4 mx-auto w-full lg:w-2/3 text-lg sm:text-xl text-start sm:text-center lg:whitespace-pre-line pb-4">{blogBlurb}<span className="font-bold text-secondary">Enjoy :)</span></h1>
    </div>
  );
}