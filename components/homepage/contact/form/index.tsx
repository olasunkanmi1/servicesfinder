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

  const handleSubmit = (values: ContactInitialValues, { setSubmitting }: FormikHelpers<ContactInitialValues>) => {
    setLoading(true);

    axios.post("/url", values)
    .then(async (res) => {
        setLoading(false);
        setSubmitting(false);
    
        if (res.status === 200) {
            
        }
    })
    .catch((error) => {
        console.log('err', error)
        setLoading(false);
        setSubmitting(false);
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
          {({ isSubmitting, errors, values, touched }) => (
              <Form>
                  <div className='flex flex-col space-y-4'>
                      { fieldArr.map(({icon, name, placeholder,}) => {
                          const nameAsType = name as keyof ContactInitialValues
                          
                          return (
                              <FormField key={name} name={name} placeholder={placeholder} icon={icon} />
                          )
                      }) }
                  
                      <button type="submit" disabled={isSubmitting} className='py-2 rounded-2xl text-white bg-primary outline-none border-none w-full font-semibold text-[18px]'> 
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