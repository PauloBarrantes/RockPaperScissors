import { cn } from "../../utils";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-lg bg-transparent border-2 border-white text-white uppercase text-xl",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
