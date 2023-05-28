import {useState} from 'react'
import Accordion from './accordion';
import Heading from "components/heading"

const FAQs = () => {
    const [open, setOpen] = useState<string | null>(null);

  const faqsArr = {
    left: [
      { question: 'What do you need to become a HelpInc?', answer: '' },
      { question: 'How do I get a job?', 
        answer: 'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.' 
      },
      { question: 'Do I need experience for the task?', answer: '' },
    ],
    right: [
      { question: 'How long does it take to process my registration?', answer: '' },
      { question: 'How will I get the money?', answer: '' },
      { question: 'What categories of tasks can I perform on TaskRabbit?', answer: '' },
    ],
  }

  

  
  return (
    <div className='space-y-5 layout'>
      <Heading text='Question' heading='Frequently asked questions' />

      <div className="md:flex md:space-x-8 justify-center space-y-5 md:space-y-0 mx-auto">
        <Accordion list={faqsArr.left} open={open} setOpen={setOpen} />
        <Accordion list={faqsArr.right} open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}
export default FAQs