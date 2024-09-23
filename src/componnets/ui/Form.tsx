import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
// import { schema } from './schema';
import { FaUser, FaHouse, FaCreditCard } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { AiOutlineUser } from 'react-icons/ai';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import { Schema } from '../../schema/form-schema';
import Input from './Input';

interface IStep {
  id: string;
  title: string;
  fields?: string[];
  icon: IconType;
}

const Steps: IStep[] = [
  {
    id: 'Step 1',
    title: 'Personal Information',
    fields: ['firstName', 'lastName', 'email', 'phone'],
    icon: FaUser,
  },
  {
    id: 'Step 2',
    title: 'Address',
    fields: ['street', 'district', 'postal', 'city', 'province'],
    icon: FaHouse,
  },
  {
    id: 'Step 3',
    title: 'Payment Confirmation',
    // fields: ['firstName', 'lastName', 'email']
    icon: FaCreditCard,
  },
];

export default function AkyatForm() {
  type FormFields = z.infer<typeof Schema>;

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(Schema),
    defaultValues: {
      firstName: 'juan',
      lastName: 'de la cruz',
      email: 'juan@email.comm',
      phone: '099999999',
      street: 'robles',
      district: '12',
      postal: '1632',
      city: 'taguig',
      province: 'metro manila',
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const result = await data;
      console.log(result);
      // console.log(JSON.stringify(result));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  type FieldName = keyof FormFields;

  const next = async () => {
    // check if field is empty
    const fields = Steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < Steps.length - 1) {
      if (currentStep === Steps.length - 2) await handleSubmit(onSubmit)();
    }
    setCurrentStep((step) => step + 1);
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-50   text-black'>
      <div className='grid w-[300px] gap-y-10 bg-gray-100 lg:min-w-[1200px] lg:px-20'>
        <h2 className='py-8 text-center text-2xl font-semibold lg:text-4xl'>Book My Hike</h2>
        {/* navigation breadcrumbs */}
        <div className='mt-4 flex  justify-center space-x-10 px-4 lg:px-10  '>
          {Steps.map((step, index) => (
            <li key={index} className='h-20 w-full list-none   text-lg  '>
              {currentStep > index ? (
                <div className='flex  w-full items-center justify-center gap-x-4  border-b-4 border-blue-400 pb-2  '>
                  <step.icon className='text-black' />
                  {/* <span>{step.id}</span> */}
                  <span className='hidden text-lg lg:flex'>{step.title}</span>
                </div>
              ) : currentStep === index ? (
                <div className='flex w-full items-center justify-center gap-x-4 border-b-4 border-blue-400  pb-2 '>
                  <step.icon className='text-black' />
                  <span className='hidden text-lg lg:flex'>{step.title}</span>
                </div>
              ) : (
                currentStep <= index && (
                  <div className='flex w-full items-center justify-center gap-x-4 border-b-4 border-gray-200 pb-2 text-gray-900'>
                    <step.icon className='text-black' />
                    <span className='hidden text-lg lg:inline'>{step.title}</span>
                  </div>
                )
              )}
            </li>
          ))}
        </div>

        {/* Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className='relative h-96 lg:mt-6'>
          {currentStep === 0 && (
            // <div className='grid grid-cols-2 gap-8 px-4 '>
            <div className='grid gap-4 px-4 lg:grid-cols-2 lg:gap-8 '>
              <Input register={register} errors={errors.lastName} id='lastName' text='last name' placeholder='juan' className='' />
              <Input register={register} errors={errors.email} id='email' text='email' placeholder='juandelacruz@email.com' className=' lowercase' type='email' />
              <Input register={register} errors={errors.phone} id='phone' text='mobile number' placeholder='12345678910' />
            </div>
          )}
          {currentStep === 1 && (
            <div className='grid grid-cols-2 gap-4 gap-y-8 px-4 lg:gap-8'>
              <Input register={register} errors={errors.street} id='street' text='street address' placeholder='robles street' />
              <Input register={register} errors={errors.district} id='district' text='district number' placeholder='district 12' />
              <Input register={register} errors={errors.postal} id='postal' text='postal code' placeholder='1632' />
              <Input register={register} errors={errors.city} id='city' text='city' placeholder='taguig city' />
              <Input register={register} errors={errors.province} id='province' text='province' placeholder='cebu' />
            </div>
          )}

          {currentStep <= 1 && (
            <div className='absolute bottom-8 flex w-full justify-between px-6 pt-4'>
              <SecondaryButton onClick={prev} disabled={currentStep === 0} text='Cancel' className='w-20' />
              <PrimaryButton onClick={next} disabled={currentStep === Steps.length - 1} text='Next' className='w-20' />
            </div>
          )}

          {currentStep === 2 && (
            <div className=' flex w-full flex-col items-center  '>
              <span className='text-2xl'>Booking Complete</span>
              <p>Print this PDF</p>
              <PrimaryButton text='Download' />
              <div className='absolute bottom-8 flex w-full  justify-center'>
                <PrimaryButton onClick={prev} text='Go back' className='w-60' />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
