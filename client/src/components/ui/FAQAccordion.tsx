import { FaPlus } from 'react-icons/fa6';

type Props = {
  isOpen: boolean;
  onToggle: any;
  question: string;
  answer: string;
};

function FAQAccordion({ isOpen, onToggle, question, answer }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`group flex w-full max-w-5xl flex-col items-center justify-between border border-gray-200 px-4 py-6 text-xs transition-colors ${isOpen ? 'bg-white' : ''}`}
    >
      <div className="flex w-full items-center justify-between text-start">
        <span className="text-sm font-semibold md:text-xl">{question}</span>
        <span
          className={`transform text-sm text-gray-400 transition-transform group-hover:text-black md:text-xl ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          <FaPlus />
        </span>
      </div>
      <div
        className={`grid w-full justify-items-start overflow-hidden text-sm transition-all duration-300 ease-in-out md:text-base ${
          isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="flex flex-col justify-items-start overflow-hidden">
          <span className="text-start">{answer}</span>
        </div>
      </div>
    </button>
  );
}

// function FAQAccordion({ isOpen, onToggle, question, answer }: Props) {
//   return (
//     <div className='flex max-w-4xl flex-col  border border-gray-400'>
//       <button onClick={onToggle} className='flex w-full items-center justify-between p-4 text-xs'>
//         <span className='text-xl'>{question}</span>
//         <span className={`transform text-lg transition-transform   ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
//           <FaPlus />
//         </span>
//       </button>
//       <div className={`${isOpen ? 'mb-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid overflow-hidden px-4  transition-all duration-300 ease-in-out`}>
//         <div className='flex flex-col overflow-hidden'>
//           <span>{answer}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

export default FAQAccordion;
