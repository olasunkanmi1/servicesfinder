import { contact } from "@public"
import Heading from "components/heading"
import Image from "next/image"
import FormComponent from "./form"
import { FiPhone } from "react-icons/fi"

const Contact = () => {
  return (
    <div className='space-y-5'>
      <Heading text='Contacts' heading='Contact us' />

      <div className="shadow-custom flex justify-between space-x-5 rounded-lg p-8 w-[800px] mx-auto">
        <div className="flex flex-col justify-between space-y-2">
          <div className="w-[280px] h-[280px] relative">
            <Image src={contact} alt='contact us' fill priority />
          </div>

          <div className="flex justify-between space-x-3">
            <div>
              <h5 className='font-semibold flex items-center text-[18px]'> <FiPhone className='mr-2' /> Call us </h5>
              <span className='ml-3 text-gray-400'> +351-965-990-000 </span>
            </div>
            
            <div>
              <h5 className='font-semibold text-[18px]'> <span className='font-extrabold'> @ </span> Our email </h5>
              <span className='ml-3 text-gray-400'> @helpyou@gmail.com </span>
            </div>

          </div>

        </div>

        <FormComponent />
      </div>
    </div>
  )
}
export default Contact