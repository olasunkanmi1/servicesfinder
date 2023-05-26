import { HeadingProps } from "@types"

const Heading: React.FC<HeadingProps> = ({heading, text, forServices}) => {
  return (
    <div className='flex flex-col items-center justify-center relative'>
      <h1 className='text-primary text-[18px] font-medium'>  {text}  </h1>
      <h1 className='text-[32px] font-bold font-rw '>  {heading}  </h1>

      { forServices && (
        <h3 className='absolute right-0 bottom-0 font-rw text-[32px] font-bold text-[rgba(43,78,140,0.5)]'>
          10 options
        </h3>
      ) }
    </div>
  )
}

export default Heading