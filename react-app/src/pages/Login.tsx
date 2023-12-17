import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AppButton from "../components/UI/AppButton/AppButton";

interface IForm {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(6),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    setMessage("success");
  };

  return (
    <div className="bg-white rounded-lg p-6 block w-96 shadow-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-lg font-bold">Login Form</h1>
        <h3>{message}</h3>
        <div>
          <label className="block font-semibold mb-1" htmlFor="login-user">
            Email
          </label>
          <input
            type="text"
            id="login-user"
            {...register("email")}
            className="w-full border border-slate-400 rounded-md outline-none hover:focus:outline-none px-4 py-2 leading-6"
          />
          {errors.email?.type === "required" && (
            <p className="text-sm text-red-500 font-semibold" role="alert">
              Email is required
            </p>
          )}
        </div>

        <div className="mt-2">
          <label className="block font-semibold mb-1" htmlFor="login-password">
            Password
          </label>
          <input
            type="text"
            id="login-password"
            {...register("password")}
            className="w-full border border-slate-400 rounded-md outline-none hover:focus:outline-none px-4 py-2"
          />
          {errors.password?.type === "required" && (
            <p className="text-sm text-red-500 font-semibold" role="alert">
              Password is required
            </p>
          )}
          {errors.password?.type === "min" && (
            <p className="text-sm text-red-500 font-semibold" role="alert">
              Password min length 6
            </p>
          )}
        </div>

        <AppButton className="mt-4" type="submit" role="button" block>
          Login
        </AppButton>
      </form>
    </div>
  );
}
