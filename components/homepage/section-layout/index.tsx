import Image from 'next/image';
import Buttons from './buttons';
import Ratings from './ratings';
import { SectionLayoutProps } from '@types';

const SectionLayout: React.FC<SectionLayoutProps> = ({ heading, paragraph, paragraph2, image, forHero}) => {
  return (
    <div className="layout flex flex-col lg:flex-row overflow-hidden lg:justify-between space-y-5">
      <div className={`flex flex-col justify-center space-y-4 ${forHero ? 'lg:max-w-[530px] lg:w-[calc(100%-600px)]' : 'lg:max-w-[470px] lg:w-[calc(100%-500px)]'} `}>
        <h1 className="font-bold font-rw text-[30px] xls:text-[40px] lg:text-[50px] xl:text-[64px] xl:leading-[75px] lg:max-w-[470px]"> {heading} </h1>
        <h3 className={`font-medium font-ms text-[18px] leading-[21px] ${!forHero ? 'text-gray-400 lg:w-[300px]' : ''}`}> {paragraph} </h3>
        { paragraph2 && 
            <h3 className="font-medium font-ms text-[18px] leading-[21px] text-gray-400 lg:w-[420px]"> 
                <span className='font-bold'> {paragraph2.split(' ')[0]} </span>
                { paragraph2.split(' ').slice(1).join(' ') }
            </h3>
        }

        <Buttons />
        { forHero && <Ratings /> }
      </div>
      
      <div className={`relative m-auto lg:m-0 ${!forHero ? 'order-first h-[350px] sm:h-[480px] w-full sm:w-[500px] md:w-[600px] lg:w-[480px]' : 'h-[300px] xls:h-[350px] md:h-[400px] lg:h-[450px] w-full md:w-[600px] lg:w-[580px]'}`}>
        <Image src={image} alt="illustration" fill priority placeholder="blur" blurDataURL={image.blurDataURL} className='' />          
      </div>
    </div>
  )
} 

export default SectionLayout