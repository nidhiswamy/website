import NavLinks from '@/app/ui/NavLinks';
import Logo from '@/app/ui/Logo';

export default function NavBar() {
  return (
      <div className="fixed top-0 left-0 right-0 flex flex-row justify-between w-full p-8 bg-primary">
        <Logo />
        <NavLinks />
      </div>
  )
}
