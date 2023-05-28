import { contact } from "@public"
import Heading from "components/heading"
import Image from "next/image"
import FormComponent from "./form"
import { FiPhone } from "react-icons/fi"

const Contact = () => {
  return (
    <div className='space-y-5 layout'>
      <Heading text='Contacts' heading='Contact us' />

      <div className="shadow-custom md:flex justify-between space-y-5 md:space-y-0 rounded-lg p-4 lg:p-8 w-[400px] md:w-[800px] max-w-full mx-auto">
        <div className="flex flex-col justify-center items-center md:justify-between space-y-2 w-fit m-auto md:m-0">
          <div className="h-[235px] w-[235px] xls:w-[280px] xls:h-[280px] relative">
            <Image src={contact} alt='contact us' fill priority />
          </div>

          <div className="xls:flex justify-between space-x-3 xl:w-[365px]">
            <div className='flex flex-col justify-center items-center'>
              <h5 className='font-semibold flex items-center text-[18px]'> <FiPhone className='mr-2' /> Call us </h5>
              <span className='lg:ml-3 text-gray-400'> +351-965-990-000 </span>
            </div>
            
            <div className='flex flex-col justify-center items-center mt-5 xls:mt-0'>
              <h5 className='font-semibold text-[18px]'> <span className='font-extrabold'> @ </span> Our email </h5>
              <span className='lg:ml-3 text-gray-400'> @helpyou@gmail.com </span>
            </div>

          </div>
        </div>

        <FormComponent />
      </div>
    </div>
  )
}
export default Contact