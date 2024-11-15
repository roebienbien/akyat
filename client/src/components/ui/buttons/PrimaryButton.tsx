import { twMerge } from "tailwind-merge";
interface IProps {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
const PrimaryButton = ({ className, text, disabled, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "w-fit rounded bg-blue-400 px-4 py-4 text-white disabled:opacity-75",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
