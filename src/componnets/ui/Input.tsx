import { FieldError } from 'react-hook-form';

interface IProps {
  className?: string;
  id: string;
  placeholder: string;
  text: string;
  type?: string;
  register: any;
  errors: FieldError | undefined;
}

const Input = ({ id, placeholder, text, type, register, errors }: IProps) => {
  return (
    <div className={'flex w-full flex-col  text-xs'}>
      <span className='pb-2 capitalize'>{text}</span>
      <input {...register(id)} id={id} type={type || ''} placeholder={placeholder} className='p-2 shadow-md' />
      {errors && <span className='text-[8px] text-red-500'>{errors.message}</span>}
    </div>
  );
};

export default Input;
