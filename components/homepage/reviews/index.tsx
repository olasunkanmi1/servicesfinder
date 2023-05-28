import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar } from 'react-icons/ai';
import Heading from 'components/heading';
import { soowon, betsy, ray, seema, emma, michelle, mike } from "@public"

import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
  const reviews = [
    { 
      img: soowon, 
      name: 'Soowon E.', 
      comment: "Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. He's an expert that you can trust in any handman task. I'd definitely hire him again.",
      date: 'April 8, 2023'
    },
    { 
      img: betsy, 
      name: 'Betsy T.', 
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
      name: 'Seema H.',
      comment: "Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
      date: 'April 1, 2022'
    },
    { 
      img: emma, 
      name: 'Emma W.',
      comment: "Excellent service! The plumber arrived on time and quickly fixed the plumbing issue in my kitchen. Highly recommended!",
      date: 'April 1, 2022'
    },
    { 
      img: mike, 
      name: 'Mike R.',
      comment: "Very professional and efficient. The handyman did a great job installing shelves in my living room. I'm impressed!",
      date: 'April 1, 2022'
    },
    { 
      img: michelle, 
      name: 'Michelle D.',
      comment: "I called the handyman for some electrical repairs, and he did an outstanding job. Courteous, knowledgeable, and reasonably priced.",
      date: 'April 1, 2022'
    },
  ]

  return (
    <div className='space-y-4 max-w-[1400px] mx-auto overflow-hidden'>
      <Heading text='Reviews' heading='Feedback from you' />

      <Swiper
        modules={[Pagination]}
        pagination={{clickable: true}}
        spaceBetween={20}
        slidesPerView={'auto'}
        className='h-[390px] w-full !px-3 sm:!px-8 xl:!px-[calc((100vw-1152px)/2)] xxl:!px-[124px]'
      >
        {
          reviews.map(({img, name, comment, date}) => {
            return (
              <SwiperSlide key={name} className='space-y-1 rounded-lg max-w-[260px] max-h-[320px]'>
                <div className='h-full w-full flex flex-col justify-between items-center shadow-custom mx-auto p-3 rounded-2xl mt-3'>
                  <div className='flex flex-col justify-center items-center '>
                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden relative">
                      <Image src={img} alt="logo" fill priority className='object-cover' />
                    </div>
                    <span className='font-medium text-[18px]'> {name} </span>

                    <div className='flex space-x-1'>
                      { [...Array(5)].map((_, i) => (
                          <AiFillStar key={i} className='text-[#FFE600]' />
                      )) }
                  </div>

                    <p className='text-sm font-normal leading-tight mt-4'> {comment} </p>
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