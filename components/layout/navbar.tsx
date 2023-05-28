import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import {logo} from '@public'

const Navbar = () => {
  const router = useRouter();

    const navLinks = [
        { route: '/', title: 'Home', isActive: router.route === '/' },
        { route: '/', title: 'Contact', isActive: router.route === '/contact' },
        { route: '/', title: 'Confidentiality policy', isActive: router.route === '/policy' },
        { route: '/', title: 'About us', isActive: router.route === '/about' },
        { route: '/', title: 'Blog', isActive: router.route === '/blog' }
    ];

  return (
    <div className='layout flex justify-center items-center h-[75px] top-0 bg-[#fefefe] z-[22] relative'>
        <Link href="/" className='absolute left-3 sm:left-8 xl:left-0'> 
            <Image src={logo} alt="logo" width={75} height={60} priority />
        </Link>

        <div className="hidden md:flex items-center space-x-4">
            { navLinks.map(({ route, title, isActive }) => {
                return (
                    <Link href={route} key={route} className={`text-[18px] font-normal relative hover:navLinkActive ${isActive ? 'navLinkActive' : ''}`}> 
                        { title }
                    </Link>
                )
            }) }
        </div>
    </div>
  )
}

export default Navbar