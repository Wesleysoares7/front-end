import { ReactNode } from "react";

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
}

function ButtonPrimary({
  children,
  color = "bg-primary-primary100",
  ...props
}: ButtonPrimaryProps) {
  return (
    <button
      {...props}
      className={`${color} h-14 rounded-xl text-white w-full py-1 font-semibold flex items-center justify-center`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
