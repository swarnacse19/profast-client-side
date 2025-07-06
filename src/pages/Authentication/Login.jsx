import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

function login() {
  const {signIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    signIn(data.email, data.password)
    .then(result =>{
      //console.log(result.user);
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(error =>{
      console.log(error.message);
    })
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
        <Link state={location.state} to="/register" className="text-[#CAEB66]">
          Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
}

export default login;
