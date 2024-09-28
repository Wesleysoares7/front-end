import { ReactNode } from "react";

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
}

function ButtonPrimary({
  children,
  color = "bg-red-500",
  ...props
}: ButtonPrimaryProps) {
  return (
    <button
      {...props}
      className={`${color} rounded-sm text-white w-full py-1 font-semibold flex justify-center`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
