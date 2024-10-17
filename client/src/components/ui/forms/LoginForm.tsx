import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import Input from '../Input';
import PrimaryButton from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import SecondaryButton from '../buttons/SecondaryButton';
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';
import googleIcon from '../../../assets/svg/google.svg';

const loginSchema = z.object({
  email: z.string({ required_error: 'email is required' }).min(1, 'email is required').email({ message: 'must be valid email' }),
  password: z.string({ required_error: 'password is required' }).min(1, 'password is required'),
});

type LoginFields = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFields>({ resolver: zodResolver(loginSchema) });

  const onSubmit = () => {};
  return (
    <div className='grid h-screen place-items-center bg-gray-50 '>
      <div className='h-5/6 w-11/12 rounded-xl bg-gray-100 shadow-lg lg:h-[600px] lg:w-[500px]'>
        <div className='p-4'>
          <h2 className='mb-4 text-center text-2xl font-bold'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-items-center gap-y-4 '>
            <Input register={register} errors={errors.email} id='email' placeholder='Email' className='rounded-md text-base' />
            <Input register={register} errors={errors.email} id='email' placeholder='Password' className='rounded-md text-base' />
            <PrimaryButton text={'Login'} className='w-full bg-green-700 px-4 py-2 ' />
            <span>
              Don't have an account? {''}
              <Link to={'/register'} className='text-blue-400'>
                Sign up
              </Link>
            </span>
            {/* HORIZONTAL OR */}
            <div className='inline-flex w-full items-center justify-center'>
              <hr className='my-8 h-px w-64 border-0 bg-gray-400' />
              <span className='absolute left-1/2 -translate-x-1/2 bg-gray-100 px-3 font-medium text-gray-900'>or</span>
            </div>
            <div className=' relative flex items-center justify-center  gap-x-2 rounded-md bg-blue-500 px-4 py-2'>
              <div className='absolute left-4 rounded-full bg-white p-1'>
                <FaFacebookF className='h-4 w-4 fill-blue-500' />
              </div>
              <PrimaryButton text={'Login with Facebook'} className='bg-inherit p-0' />
            </div>
            <div className=' relative flex items-center justify-center  gap-x-2  rounded-md border border-gray-500 px-4 py-2'>
              <div className='absolute left-4 h-6 w-6 '>
                <img src={googleIcon} />
              </div>

              <SecondaryButton text={'Login with Google'} className='border-none bg-inherit p-0 text-gray-500 ' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
