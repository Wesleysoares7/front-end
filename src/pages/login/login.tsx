import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/buttonPrimary";
import InputField from "../../components/inputField";
import { FormProvider, useForm } from "react-hook-form";
import { Login, loginSchema } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUser from "../../hooks/useUser";

const email = () => {
  const { handleLogin } = useUser();

  const methods = useForm<Login>({ resolver: zodResolver(loginSchema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <div className="bg-custom-bg bg-contain bg-center">
      <FormProvider {...methods}>
        <div className="flex flex-col h-screen justify-center w-[80%] mx-auto gap-10 md:w-1/3">
          <div className="flex flex-col bg-white p-4 rounded-lg">
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex h-full flex-col gap-4 justify-center"
            >
              <div className="pb-10">
                <h1 className="font-bold text-4xl">Hello,</h1>
                <p className="text-2xl text-netural_colour-gray1">
                  Welcome Back
                </p>
              </div>
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
              <ButtonPrimary type="submit">Entrar</ButtonPrimary>
            </form>
            <div className="flex flex-col-reverse pb-2">
              <p className="text-center font-bold">
                Don’t have an account?{" "}
                <Link className="text-secondary-secondary100" to={"/register"}>
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default email;
