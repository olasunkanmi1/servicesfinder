import Link from "next/link";
import Image from "next/image";
import { appstore, googleplay } from "@public"

const Buttons = ({footer}: {footer?: boolean}) => {
    const links = [appstore, googleplay];

  return (
    <div className='flex justify-between sm:justify-start space-x-4'>
        { links.map((link, i) => (
            <Link href='/' key={i} className={`relative transition ease-in-out hover:scale-95 duration-500 ${footer ? 'w-[130px] h-[45px]' : 'w-[180px] h-[58px]'}`}> 
                <Image src={link} alt='store' fill priority />
            </Link>
        )) }
        
    </div>
  )
}
export default Buttons