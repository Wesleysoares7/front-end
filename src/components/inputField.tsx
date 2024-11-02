import { useFormContext } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formName: string;
  className?: string;
}

const InputField = ({ className, formName, ...props }: InputFieldProps) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(formName)}
      {...props}
      className={`h-14 rounded-lg border-2 border-gray-500 p-2 ${className}`}
    />
  );
};

export default InputField;
