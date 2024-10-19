import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/buttonPrimary";
import InputField from "../../components/inputField";
import { FormProvider, useForm } from "react-hook-form";
import { Login, loginSchema } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUser from "../../hooks/useUser";

const email = () => {
  const navigate = useNavigate();
  const { handleLogin } = useUser();

  const methods = useForm<Login>({ resolver: zodResolver(loginSchema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const redirectToRegister = () => {
    navigate("/register");
  };

  return (
    <FormProvider {...methods}>
      <div className="ml-8 mt-3">
        <h1 className="font-bold text-4xl">Hello,</h1>
        <p className="text-2xl">Welcome Back</p>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-12 rounded-lg"
        >
          <div className="flex flex-col gap-10">
            <InputField placeholder="email" type="text" formName="email" />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <InputField
              placeholder="password"
              type="password"
              formName="password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <ButtonPrimary type="submit">Entrar</ButtonPrimary>
            <p className="text-center font-bold">
              Don’t have an account?{" "}
              <button
                onClick={redirectToRegister}
                className="text-secondary-secondary100 mt-44"
              >
                {" "}
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default email;
