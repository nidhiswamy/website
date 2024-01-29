import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="relative container flex flex-col justify-center items-center">
      <div className="text-2xl mb-4">404 | Page Not Found</div>
      <div className="text-center text-lg">My blog page is still under construction, <br/> please check back later!</div>
    </div>
  )
}
