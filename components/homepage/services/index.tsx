import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from 'components/heading';
import { cleaning, moving, mounting, plumbing, repairs, yard } from "@public"

import 'swiper/css';
import 'swiper/css/navigation';

const Services = () => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const services = [
    { img: cleaning, title: 'CLeaning', requests: '500' },
    { img: moving, title: 'Help Moving', requests: '450' },
    { img: yard, title: 'Yard Work', requests: '400' },
    { img: plumbing, title: 'Plumbing Help', requests: '500' },
    { img: mounting, title: 'Mounting', requests: '400' },
    { img: repairs, title: 'Home repairs', requests: '300' },
  ]

  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth))
  }, []);

  return (
    <div className='space-y-5'>
      <Heading text='Popular' heading='Popular services' forServices />

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={screenSize && screenSize < 768 ? 3 : 5}
        navigation
        className='h-[310px] services'
      >
        {
          services.map(({img, title, requests},) => {
            return (
              <SwiperSlide key={title} className='flex flex-col items-center space-y-1'>
                <div className="w-full h-[225px] relative">
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