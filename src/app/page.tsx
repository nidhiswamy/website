import ContactLinks from '@/app/ui/contactlinks';

export default function Home() {
  return (
    <div className="flex mx-auto p-8 left-12 top-40 absolute">
      <div className="ml-12">
        <div className="mb-4 flex w-96 h-24 text-white text-xl font-normal">
          Hi, I’m Nidhi!
          <br/><br/>
          Welcome to my cove of thoughts on the Internet, I hope you enjoy :)
        </div>
        <ContactLinks />
      </div>
    </div>
  )
}
