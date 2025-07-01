import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import imageIcon from '../../assets/image-upload-icon.png';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
      <p className="text-center my-2">Or</p>
      <button className="btn w-[320px] bg-gray-200 text-black border-[#e5e5e5]">
        <FcGoogle size={30} />
        Register with Google
      </button>
    </div>
  );
}

export default Register;
