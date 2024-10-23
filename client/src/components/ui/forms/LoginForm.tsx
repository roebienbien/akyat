import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import Input from '../Input';
import PrimaryButton from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import SecondaryButton from '../buttons/SecondaryButton';
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';
import googleIcon from '../../../assets/svg/google.svg';
import akyatLogo from '../../../assets/akyat-logo.svg';
import layeredPeaks from '../../../assets/layered-peaks.svg';
import OAuth from './OAuth';

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
    <div style={{ backgroundImage: `url(${layeredPeaks})` }} className='grid h-screen place-items-center bg-gray-50 bg-cover bg-no-repeat  '>
      <div className='h-5/6 w-11/12 rounded-xl bg-gray-100 shadow-2xl lg:h-[700px] lg:w-[500px]'>
        <div className='flex flex-col p-4'>
          <img src={akyatLogo} alt='akyatLogo' className='h-7 w-auto lg:h-8' />
          <h2 className='mb-4 text-center text-2xl font-bold lg:text-4xl'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-items-center gap-y-4 text-xs md:text-sm lg:text-base '>
            <span className='text-center  '>
              Don't have an account? &nbsp;
              <Link to={'/register'} className='text-blue-400'>
                Sign up
              </Link>
            </span>
            <Input register={register} errors={errors.email} id='email' placeholder='Email' className='rounded-md  ' />
            <Input register={register} errors={errors.email} id='email' placeholder='Password' type='password' className='rounded-md  ' />
            <PrimaryButton text={'Login'} className='w-full bg-green-700 px-4 py-2 ' />
            <OAuth />
            <p className='mt-4 text-center lg:text-xs'>
              By continuing to use Akyat, you agree to our{' '}
              <a href='http://www.example.com' target='_blank' className='text-blue-500'>
                Terms of Service &nbsp;
              </a>
              and &nbsp;
              <a href='http://www.example.com' target='_blank' className='text-blue-500'>
                Privacy Policy.
              </a>{' '}
              &nbsp; Personal data added to Akyat is public by default — refer to our Privacy FAQs to make changes.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
