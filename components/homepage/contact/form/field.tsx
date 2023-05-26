import { Field, ErrorMessage } from 'formik';
import { FieldProps } from '@types';

const FormField: React.FC<FieldProps> = ({icon, name, placeholder, error,}) => {

    const TextError = (props: any) => {
        return (
            <p className="flex justify-center items-center text-center text-[#E65050] font-normal">
                {props.children}
            </p>
        )
    }

  return (
    <div className="w-[300px]">
        <div className='flex justify-between items-center w-full'>
            <div className='flex space-x-2 w-full shadow-custom px-4 py-3 rounded-2xl'>
                {icon}
                <Field name={name} placeholder={placeholder} autoComplete='off'
                    className='flex justify-start items-start outline-none border-none w-full text-[18px] bg-none resize-none'
                    as={name === 'message' ? 'textarea' : ''} rows={4}
                />
            </div>
        </div>
        
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default FormField