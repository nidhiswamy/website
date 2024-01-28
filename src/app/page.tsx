import ContactLinks from '@/app/ui/contactlinks';

export default function Home() {
  return (
    <div className="flex mx-auto p-8 left-12 top-40 absolute">
      <div className="ml-12 w-96 h-32">
        <div className="mb-8 text-white text-2xl font-normal">
          Hi, I’m Nidhi!
        </div>
        <div className="mb-4 text-white text-2xl font-normal">
          Welcome to my cove of thoughts on the Internet, I hope you enjoy :)
        </div>
        <ContactLinks />
      </div>
    </div>
  );
}
