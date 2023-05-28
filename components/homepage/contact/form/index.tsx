import { useState } from 'react';
import { ContactInitialValues } from '@types';
import { Loader } from 'components/loader';
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup';
import FormField from './field';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import axios from 'axios'

const FormComponent = () => {
    const [loading, setLoading] = useState(false);

  const initialValues: ContactInitialValues = {
    name: '',
    subject: '',
    message: ''
  };

  const validationSchema = Yup.object({
      name: Yup.string().required("Enter name"),
      subject: Yup.string().required("Enter subject"),
      message: Yup.string().required("Enter message"),
  });  

  const handleSubmit = (values: ContactInitialValues, { setSubmitting, resetForm }: FormikHelpers<ContactInitialValues>) => {
    setLoading(true);

    // sample request. just send success alert after. just for testing purpose
    axios.post("/url", values)
    .then(async (res) => {
        setLoading(false);
        setSubmitting(false);
        resetForm();
        alert('Message sent! we will get back to you')
    
        // if (res.status === 200) {
            
        // }
    })
    .catch((error) => {
      setLoading(false);
      setSubmitting(false);
      resetForm();
      alert('Message sent! we will get back to you')
    })
  }
  
  const fieldArr = [
    { icon: <AiOutlineUser size={25} className='text-[rgba(0,0,0,0.5)]' />, name: 'name', placeholder: 'Your Name' },
    { icon: <AiOutlineMail size={25} className='text-[rgba(0,0,0,0.5)]' />, name: 'subject', placeholder: 'Your Subject' },
    { icon: <FiMessageCircle size={25} className='text-[rgba(0,0,0,0.5)]' />, name: 'message', placeholder: 'Your Message' }
];
  
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
              <Form>
                  <div className='flex flex-col space-y-4'>
                      { fieldArr.map(({icon, name, placeholder}) => {
                          return (
                              <FormField key={name} name={name} placeholder={placeholder} icon={icon} />
                          )
                      }) }
                  
                      <button type="submit" disabled={isSubmitting} className='disabled:bg-opacity-70 py-2 rounded-2xl text-white bg-primary outline-none border-none w-full font-semibold text-[18px] h-[43px]'> 
                          { loading ? <Loader /> : 'Send' }
                      </button>
                  </div>
              </Form>
          )}
      </Formik>
    </div>
  )
}
export default FormComponent