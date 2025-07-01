import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import imageIcon from '../../assets/image-upload-icon.png';
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

function Register() {
    const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error.message);
    })
  };
  return (
    <div className="text-black font-medium mx-auto">
      <h1 className="text-3xl font-bold mt-6">Create an Account</h1>
      <p className="mt-2 mb-4">Register with Profast</p>
      <img src={imageIcon} alt="" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name")}
            className="input"
            placeholder="Name"
          />
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
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type == "required" && (
            <p className="text-red-500">This password field is required</p>
          )}
          {errors.password?.type == "minLength" && (
            <p className="text-red-500">
              This password at least must be 6 characters
            </p>
          )}
          <button className="btn bg-[#CAEB66] w-[320px]">Register</button>
        </fieldset>
      </form>
      <p className="font-semibold mt-2 text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-[#CAEB66]">
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
}

export default Register;
