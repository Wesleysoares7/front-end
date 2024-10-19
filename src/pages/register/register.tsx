import ButtonPrimary from "../../components/buttonPrimary";
import InputField from "../../components/inputField";
import { FormProvider, useForm } from "react-hook-form";
import { Register, registerSchema } from "../../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";

const register = () => {
  const { handleRegister } = useUser();

  const methods = useForm<Register>({ resolver: zodResolver(registerSchema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col h-screen w-[80%] mx-auto justify-between">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-4 justify-center h-full"
        >
          <div className="">
            <h1 className="font-bold text-3xl">Create an account</h1>
            <p className="text-netural_colour-gray1">
              Let’s help you set up your account,
              <br /> it won’t take long.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <InputField type="text" placeholder="name" formName="name" />
            {errors.name && <p>{errors.name.message}</p>}
            <InputField type="text" placeholder="email" formName="email" />
            {errors.email && <p>{errors.email.message}</p>}
            <InputField
              type="password"
              placeholder="password"
              formName="password"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <ButtonPrimary type="submit">Registrar</ButtonPrimary>
          </div>
        </form>
        <div className="flex flex-col-reverse pb-2">
          <p className="text-center font-bold">
            Already a member?{" "}
            <Link to="/login" className="text-secondary-secondary100">
              {" "}
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </FormProvider>
  );
};

export default register;
