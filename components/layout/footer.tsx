import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@public';
import Buttons from 'components/homepage/section-layout/buttons';

const Footer = () => {
  const linkArr = [
    {
      heading: 'About us', 
      links: [
        {name: 'Frequently asked questions', url: '/'},
        {name: 'Confidentiality policy', url: '/'},
        {name: 'Contact', url: '/'},
        {name: 'Blog', url: '/'},
      ]
    },
    
    {
      heading: 'Contacts', 
      links: [
        {name: '+351-965-990-000', url: 'tel:+351-965-990-000'},
        {name: '@helpyou@gmail.com', url: 'mailto:@helpyou@gmail.com'},
      ]
    },
  ];

  return (
    <footer>
      <div className="xl:max-w-6xl m-auto px-4 sm:px-8 xl:px-0 flex flex-col py-4 space-y-6 overflow-hidden">
        <div className="flex justify-between flex-wrap gap-3">
          <div className='space-y-3 w-[350px] text-gray-400 font-normal'>
            <Link href="/"> 
              <Image src={logo} alt="logo" width={75} height={60} priority />
            </Link>

            <p> Make your to-do list wherever you are with our mobile app. </p>
            <p> ©2023. All rights reserved. </p>
          </div>

          { linkArr.map(({heading, links}) => (
            <div className="flex flex-col space-y-1" key={heading}>
              <h5 className='text-primary font-bold text-[18px] mb-1'> {heading} </h5>
              { links.map(({name, url}) => (
                <Link href={url} key={name} className='text-gray-400 font-normal'> {name} </Link>
              )) }
            </div>

          )) }
          
          <div className="flex flex-col space-x-1 w-[250px]">
            <h5 className='text-primary font-bold text-[18px] mb-1'> Download our app </h5>
            <p className='text-gray-400 font-normal mb-1'> Tackle your to-do list wherever you are with our mobile app. </p>
            <Buttons footer />
          </div>
          
        </div>

        <p className="text-center mx-auto mt-5 font-semibold text-gray-400"> By using this website, you understand the information being presented is provided for informational purposes only. </p>
      </div>
    </footer>
  )
}

export default Footer