import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from 'components/heading';
import { soowon, betsy, ray, seema } from "@public"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const reviews = [
    { 
      img: soowon, 
      name: 'Soowon E.', 
      comment: "Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. He's an expert that you can trust in any handman task. I'd definitely hire him again.",
      date: 'April 8, 2023'
    },
    { 
      img: betsy, 
      name: 'Betsy.T', 
      comment: "Punctual, great communication, great work. I look forward to working with Thomas again!",
      date: 'April 1, 2022'
    },
    { 
      img: ray, 
      name: 'Ray E.', 
      comment: "Great cleaning! Reliable and was able to accommodate my schedule. Would recommend - thanks Nikolina!",
      date: 'April 1, 2022'
    },
    { 
      img: seema, 
      name: 'Seema.H',
      comment: "Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
      date: 'April 1, 2022'
    },
    { 
      img: seema, 
      name: 'Seema.H',
      comment: "Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
      date: 'April 1, 2022'
    },
    { 
      img: seema, 
      name: 'Seema.H',
      comment: "Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
      date: 'April 1, 2022'
    },
  ]

  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth))
  }, [])

  return (
    <div className='space-y-4'>
      <Heading text='Reviews' heading='Feedback from you' />

      <Swiper
        modules={[Navigation, A11y, Pagination]}
        pagination={{clickable: true}}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        className='h-[390px] reviews'
      >
        {
          reviews.map(({img, name, comment, date},) => {
            return (
              <SwiperSlide key={name} className='space-y-1 rounded-lg max-h-[320px]'>
                <div className='h-full w-[calc(100%-10px)] flex flex-col justify-between items-center shadow-custom mx-auto p-3 rounded-2xl mt-3'>
                  <div className='flex flex-col justify-center items-center '>
                    <div className="w-[70px] h-[70px] rounded-full relative">
                      <Image src={img} alt="logo"  fill priority />
                    </div>
                    <span className='font-medium text-[18px]'> {name} </span>

                    <div className='flex space-x-1'>
                      { [...Array(5)].map((_, i) => (
                          <AiFillStar key={i} className='text-[#FFE600]' />
                      )) }
                  </div>

                    <p className='text-sm font-normal leading-none mt-4'> {comment} </p>
                  </div>

                  <p className='font-sm font-normal ml-auto w-fit pr-3'> {date} </p>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}
export default Reviews