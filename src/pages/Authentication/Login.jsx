import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

function login() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="text-black font-medium mx-auto">
      <h1 className="text-3xl font-bold mt-6">Welcome Back</h1>
      <p className="mt-2 mb-4">Login with Profast</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {required: true, minLength: 6})}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type == 'required' && <p className="text-red-500">This password field is required</p>}
          {errors.password?.type == 'minLength' && <p className="text-red-500">This password at least must be 6 characters</p>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-[#CAEB66] w-[320px]">Login</button>
        </fieldset>
      </form>
      <p className="font-semibold mt-5 text-gray-400">
        Don't have an account?{" "}
        <Link to="/register" className="text-[#CAEB66]">
          Register
        </Link>
      </p>
      <p className="text-center my-2">Or</p>
      <button className="btn w-[320px] bg-gray-200 text-black border-[#e5e5e5]">
        <FcGoogle size={30}/>
        Login with Google
      </button>
    </div>
  );
}

export default login;
