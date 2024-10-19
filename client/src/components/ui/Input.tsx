import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
  id: string;
  placeholder: string;
  text?: string;
  type?: string;
  register: any;
  errors: FieldError | undefined;
}

const Input = ({ id, placeholder, text, type, register, errors, className }: IProps) => {
  return (
    <div className={'flex w-full flex-col  text-xs'}>
      <span className='pb-2 capitalize'>{text}</span>
      <input {...register(id)} id={id} type={type || ''} placeholder={placeholder} className={twMerge('p-2 text-xs shadow-md md:text-sm lg:text-base', className)} />
      {errors && <span className='text-[8px] text-red-500'>{errors.message}</span>}
    </div>
  );
};

export default Input;
