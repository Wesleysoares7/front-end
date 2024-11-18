import { ReactNode } from "react";

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
  width?: string;
  paddingX?: string;
  height?: string;
}

function ButtonPrimary({
  children,
  color = "bg-primary-primary100",
  width = "w-full",
  paddingX = "",
  height = "h-14",
  ...props
}: ButtonPrimaryProps) {
  return (
    <button
      {...props}
      className={`${color} ${width} ${paddingX} ${height} rounded-xl text-white py-1 font-semibold flex items-center justify-center`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
