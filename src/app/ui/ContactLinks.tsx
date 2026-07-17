import Link from "next/link";
import Image from "next/image";
import Tooltip from "./Tooltip";

export default function ContactLinks() {
  return (
    <div className="w-fit relative flex gap-2">
      <Tooltip content="Check out my projects on GitHub!" position="bottom">
        <ContactIcon
          name="GitHub"
          filename="github"
          href="https://github.com/nidhiswamy"
        />
      </Tooltip>
      <Tooltip content="Email" position="bottom">
        <ContactIcon
          name="Email"
          filename="email"
          href="mailto:nidhiswamyy@gmail.com"
        />
      </Tooltip>
      <Tooltip content="LinkedIn" position="bottom">
        <ContactIcon
          name="LinkedIn"
          filename="linkedin"
          href="https://www.linkedin.com/in/nidhiswamy"
        />
      </Tooltip>
    </div>
  );
}

function ContactIcon(props: { name: string; filename: string; href: string }) {
  return (
    <div className="flex items-center justify-center">
      <Link href={props.href} target="_blank">
        <div className="relative overflow-hidden w-8 h-8 transition-transform transform hover:scale-110">
          <Image
            src={`/assets/${props.filename}.svg`}
            alt={`${props.name} Icon`}
            height="35"
            width="35"
            className="object-contain filter brightness-0 dark:brightness-100"
          />
        </div>
      </Link>
    </div>
  );
}
