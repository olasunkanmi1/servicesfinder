import { AiFillStar } from "react-icons/ai"


const Ratings = () => {
  return (
    <div className='flex items-center space-x-2 font-ms'>
        <h1 className='text-[43px] font-semibold'> 4.8 </h1>

        <div>
            <div className='flex space-x-1'>
                { [...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className='text-[#FFE600]' />
                )) }
            </div>
            <span className='font-medium text-sm'> 990+ Reviews </span>
        </div>
        
    </div>
  )
}
export default Ratings