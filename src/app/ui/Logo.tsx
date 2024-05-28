import { solway } from '@/app/fonts';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="inset-x-0 md:absolute md:left-0 md:top-0 md:p-12">
      <Link 
        className={ `${solway.className} text-secondary text-2xl underline decoration-4 decoration-primary-dark/30 w-auto h-auto` }
        href='/'
      >
        Nidhi Swamy
      </Link>
    </div>
  );
}
