import Link from 'next/link'
import Image from 'next/image'

export default function ContactLinks() {
  return (
    <div className="w-fit relative flex gap-2">
      <ContactIcon 
        name="GitHub"
        filename="github"
        href="https://github.com/nidhiswamy"
      />
      <ContactIcon 
        name="Email"
        filename="email"
        href="mailto:nidhiswamyy@gmail.com"
      />
      <ContactIcon 
        name="LinkedIn"
        filename="linkedin"
        href="https://www.linkedin.com/in/nidhiswamy"
      />
    </div>
  );
}

function ContactIcon(props: {name: string, filename: string, href: string}) {
  return (
      <div className="flex items-center justify-center">
        <Link href={ props.href } target="_blank">
          <div className="relative overflow-hidden w-8 h-8 transition-transform transform hover:scale-110">
            <Image
              src={ `/${props.filename}.svg` }
              alt={ `${props.name} Icon` }
              height="35"
              width="35"
              className="object-contain filter brightness-0 dark:brightness-100"
            />
          </div>
        </Link>
      </div>
  );
}
