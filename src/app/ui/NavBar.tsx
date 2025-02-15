import NavLinks from '@/app/ui/NavLinks';
import Logo from '@/app/ui/Logo';

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 z-10 w-full p-4 sm:p-8 bg-primary dark:bg-primary-dark">
      <Logo />
      <NavLinks />
    </div>
  );
}
