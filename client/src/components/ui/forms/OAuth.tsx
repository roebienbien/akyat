import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import googleIcon from '../../../assets/svg/google.svg';

export default function OAuth() {
  return (
    <>
      {/* HORIZONTAL OR */}
      <div className='inline-flex w-full items-center justify-center'>
        <hr className='my-8 h-px w-10/12 border-0 bg-gray-400' />
        <span className='absolute left-1/2 -translate-x-1/2 bg-gray-100 px-3 font-medium text-gray-900'>or</span>
      </div>
      <div className=' relative flex items-center justify-center  gap-x-2 rounded-md bg-blue-500 px-4 py-2'>
        <div className='absolute left-4 rounded-full bg-white p-1'>
          <FaFacebookF className='h-4 w-4 fill-blue-500' />
        </div>
        <PrimaryButton text={'Continues with Facebook'} className='bg-inherit p-0' />
      </div>
      <div className=' relative flex items-center justify-center  gap-x-2  rounded-md border border-gray-500 px-4 py-2'>
        <div className='absolute left-4 h-6 w-6 '>
          <img src={googleIcon} />
        </div>
        <SecondaryButton text={'Continue with Google'} className='border-none bg-inherit p-0 text-gray-500 ' />
      </div>
    </>
  );
}
