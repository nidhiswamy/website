import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="relative container flex flex-col justify-center items-center">
      <div className="text-4xl mb-4 text-secondary">404</div>
      <div className="text-center text-lg">My blog page is still under construction, <br/> please check back later!</div>
    </div>
  )
}
