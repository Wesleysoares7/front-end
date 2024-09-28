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
      className={`border-2 border-red-500 p-2 rounded ${className}`}
    />
  );
};

export default InputField;
