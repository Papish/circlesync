import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IForm {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required(),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login Form</h1>
      <h3>{message}</h3>
      <div>
        <label htmlFor="login-user">Username</label>
        <input type="text" id="login-user" {...register("username")} />
        {errors.username?.type === "required" && (
          <p role="alert">Username is required</p>
        )}
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input type="text" id="login-password" {...register("password")} />
        {errors.password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}
        {errors.password?.type === "min" && (
          <p role="alert">Password min length 6</p>
        )}
      </div>

      <button type="submit" role="button">
        Login
      </button>
    </form>
  );
}
