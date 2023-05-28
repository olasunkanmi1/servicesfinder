import Link from "next/link"
import { SidebarProps } from "@types"

const Sidebar = ({isOpen, navLinks, toggle}: SidebarProps) => {
  return (
    <div onClick={toggle} className={`layout flex flex-col space-y-3 fixed top-[75px] bg-white duration-300 ease-in-out w-full md:hidden z-[10] ${isOpen ? 'right-0' : '-right-[100%]'}`}>
        {navLinks.map(({route, title, isActive}) => (
            <Link href={route} key={route} className={`text-[18px] p-2 font-normal relative border-black hover:border-b-2 ${isActive ? 'border-b-2' : ''}`}> 
                { title }
            </Link>
        ))}
    </div>
  )
}
export default Sidebar