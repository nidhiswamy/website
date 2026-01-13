import ContactLinks from "@/app/ui/ContactLinks";
import Image from "next/image";
import { solway } from "@/app/fonts";

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0.5 gap-y-8 sm:gap-y-12 mx-3 lg:gap-x-10 lg:justify-between lg:items-center sm:size-3/4 md:size-10/12 2xl:size-5/6 mt-16 sm:mt-8">
      <div className="h-fit order-2 lg:order-1 place-self-center w-fit lg:w-full text-lg md:place-self-start md:text-xl 2xl:text-2xl">
        <h1 className={`${solway.className} text-3xl pb-8`}>
          Hey there! I’m{" "}
          <span className="text-secondary dark:text-dark-primary">
            Nidhi Swamy
          </span>
          ,<br />a Software Engineer.
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            I was born and raised in Bangalore, India. Since middle school,
            I&apos;ve dreamed about moving to the United States to complete my
            education and begin my career. Since moving here and pursuing that
            dream, I&apos;ve had the amazing opportunity to not only study my
            passion, but also to be a part of software engineering internships,
            various part-time jobs with one that has stuck with me for over 3
            years, and be around an inspiring group of people.
          </p>
          <ContactLinks />
        </div>
      </div>

      <div className="order-1 lg:order-2 place-self-center lg:place-self-start xl:size-fit shadow-2xl">
        <Image
          src="/assets/professional.jpg"
          alt="Professional head-shot"
          height={1920}
          width={1281}
        />
      </div>
      <div
        className={`h-fit order-4 lg:order-4 place-self-center w-auto text-lg xl:place-self-start md:text-xl 2xl:text-2xl`}
      >
        Outside of work, I spend a lot of time outdoors with activities that
        keep me grounded, including running, hiking, camping, and skiing
        whenever I can. I enjoy cooking as a creative outlet, and I make time to
        read and journal regularly as a way to reflect, learn, and stay mentally
        sharp.
      </div>
      <div className="order-3 lg:order-3 place-self-center lg:place-self-start xl:size-fit shadow-2xl">
        <Image
          src="/assets/forest.jpg"
          alt="Denver, Colorado"
          height={1920}
          width={1281}
        />
      </div>
    </div>
  );
}
