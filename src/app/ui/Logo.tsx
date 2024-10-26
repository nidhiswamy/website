import { solway } from '@/app/fonts';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Link 
        className={ `${solway.className} text-secondary text-2xl underline decoration-4 decoration-primary-dark/30 w-auto h-auto` }
        href='/'
      >
        Nidhi Swamy
      </Link>
    </div>
  );
}
