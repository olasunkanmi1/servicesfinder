import Image from 'next/image';
import Buttons from './buttons';
import Ratings from './ratings';
import { SectionLayoutProps } from '@types';

const SectionLayout: React.FC<SectionLayoutProps> = ({ heading, paragraph, paragraph2, image, forHero}) => {
  return (
    <div className="flex overflow-hidden justify-between space-y-4">
      <div className="flex flex-col justify-center space-y-4 max-w-[530px]">
        <h1 className="font-bold font-rw text-[64px] leading-[75px]"> {heading} </h1>
        <h3 className={`font-medium font-ms text-[18px] leading-[21px] ${!forHero ? 'text-gray-400 w-[300px]' : ''}`}> {paragraph} </h3>
        { paragraph2 && 
            <h3 className="font-medium font-ms text-[18px] leading-[21px] text-gray-400 w-[420px]"> 
                <span className='font-bold'> {paragraph2.split(' ')[0]} </span>
                { paragraph2.split(' ').slice(1).join(' ') }
            </h3>
        }

        <Buttons />
        { forHero && <Ratings /> }
      </div>
      
      <div className={`w-1/2 relative ${!forHero ? 'order-first h-[500px] w-[500px]' : 'h-[410px]'}`}>
        <Image src={image} alt="illustration" fill priority placeholder="blur" blurDataURL={image.blurDataURL} />          
      </div>
    </div>
  )
} 

export default SectionLayout