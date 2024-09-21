import { twMerge } from 'tailwind-merge';
interface IProps {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
const SecondaryButton = ({ className, text, disabled, onClick }: IProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={twMerge('w-fit rounded border border-blue-400 px-4 py-4 text-blue-400 disabled:opacity-75', className)}>
      {text}
    </button>
  );
};

export default SecondaryButton;
