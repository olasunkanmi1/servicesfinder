import { AiOutlineRight } from "react-icons/ai"
import { AccordionProps } from "@types"

const Accordion = ({list, open, setOpen}: AccordionProps) => {

    const handleOpenAndCLose = (question: string) => {
        if(question === open) {
            setOpen(null)
        } else {
            setOpen(question)
        }
    }

    return (
      <div className="space-y-5 md:w-1/2 lg:w-auto max-w-[480px] mx-auto">
        { list.map(({question, answer}) => (
          <div key={question} className={`flex flex-col justify-center items-center py-4 px-8 space-y-4 rounded-2xl shadow-custom overflow-hidden  transition-max-height ease-in-out duration-500 ${open === question ? 'max-h-auto' : 'max-h-[86px]'}`}>
            <div className='flex justify-between items-center w-full cursor-pointer space-x-2' 
            onClick={() => handleOpenAndCLose(question)}>
              <h4 className='font-medium h-[54px] flex justify-center items-center text-[18px]'> {question} </h4>

                <AiOutlineRight size={25} className={`transition ease-in-out duration-300 ${open === question ? '-rotate-180' : ''}`} 
                />
            </div>

            <p className={`text-center px-5 text-gray-400 text-[14px] font-medium ${question === open ? 'block' : 'hidden'}`}> 
              {answer ? answer : 
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem quod, id cupiditate ab qui totam, molestiae iure eveniet sed perspiciatis. Dignissimos similique impedit laudantium nemo nihil, soluta voluptate magnam ut nesciunt corporis accusamus quidem provident? Natus magni id velit reprehenderit nulla cumque illum, aut perspiciatis corrupti nemo fugit quidem!'
              } 
            </p>
          </div>
        )) } 
      </div>
    )
}

export default Accordion