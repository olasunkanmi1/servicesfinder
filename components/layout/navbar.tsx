import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'
import Sidebar from './sidebar';
import {logo} from '@public'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const navLinks = [
            { route: '/', title: 'Home', isActive: router.route === '/' },
            { route: '/', title: 'Contact', isActive: router.route === '/contact' },
            { route: '/', title: 'Confidentiality policy', isActive: router.route === '/policy' },
            { route: '/', title: 'About us', isActive: router.route === '/about' },
            { route: '/', title: 'Blog', isActive: router.route === '/blog' }
    ];

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='layout flex justify-end lg:justify-center items-center h-[75px] bg-white z-50 sticky top-0 md:relative'>
        <Link href="/" className='absolute left-3 sm:left-8 xl:left-0'> 
            <Image src={logo} alt="logo" width={75} height={60} priority />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
            { navLinks.map(({ route, title, isActive }) => {
                return (
                    <Link href={route} key={route} className={`text-[18px] font-normal relative hover:navLinkActive ${isActive ? 'navLinkActive' : ''}`}> 
                        { title }
                    </Link>
                )
            }) }
        </div>

        <div className='md:hidden' onClick={toggle}>
            { isOpen ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} /> } 
        </div>

        <Sidebar navLinks={navLinks} toggle={toggle} isOpen={isOpen} />
    </div>
  )
}

export default Navbar