import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from 'components/heading';
import { cleaning, moving, mounting, plumbing, repairs, yard,electrical, carpentry, painting, flooring } from "@public"

import 'swiper/css';

const Services = () => {
  const services = [
    { img: cleaning, title: 'CLeaning', requests: '500' },
    { img: moving, title: 'Help Moving', requests: '450' },
    { img: yard, title: 'Yard Work', requests: '400' },
    { img: plumbing, title: 'Plumbing Help', requests: '500' },
    { img: mounting, title: 'Mounting', requests: '400' },
    { img: repairs, title: 'Home repairs', requests: '300' },
    { img: electrical, title: 'Electrical work', requests: '400' },
    { img: carpentry, title: 'Carpentry', requests: '500' },
    { img: painting, title: 'Painting', requests: '400' },
    { img: flooring, title: 'Flooring', requests: '300' },
  ]

  return (
    <div className='space-y-8 md:space-y-5 max-w-[1400px] mx-auto overflow-hidden'>
      <Heading text='Popular' heading='Popular services' forServices />

      <Swiper
        spaceBetween={20}
        slidesPerView='auto'
        className='w-full !px-3 sm:!px-8 xl:!px-[calc((100vw-1152px)/2)] xxl:!px-[124px]'
      >
        {
          services.map(({img, title, requests},) => {
            return (
              <SwiperSlide key={title} className='flex flex-col items-center space-y-1 max-w-[200px]'>
                <div className="w-full h-[200px] relative rounded-[20px] overflow-hidden">
                  <Image src={img} alt="logo"  fill priority />
                </div>

                <p className='text-center text-[14px] font-medium '> {title} </p>
                <p className='text-center text-[14px] font-semibold leading-none'> +{requests} requests </p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}
export default Services