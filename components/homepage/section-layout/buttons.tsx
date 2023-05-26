import Link from "next/link";
import Image from "next/image";
import { appstore, googleplay } from "@public"

const Buttons = ({footer}: {footer?: boolean}) => {
    const links = [appstore, googleplay];

  return (
    <div className='flex space-x-5'>
        { links.map((link, i) => (
            <Link href='/' key={i} className={` relative transition ease-in-out hover:scale-95 duration-500 ${footer ? 'w-[130px] h-[45px]' : 'w-[185px] h-[58px]'}`}> 
                <Image src={link} alt='store' fill priority />
            </Link>
        )) }
        
    </div>
  )
}
export default Buttons