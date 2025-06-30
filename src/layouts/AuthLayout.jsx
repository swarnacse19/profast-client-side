import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/ProFastLogo";

function AuthLayout() {
  return (
    <div className="bg-white flex items-center justify-center"> 
      <div className="flex flex-col lg:flex-row-reverse w-full overflow-hidden">
        <div className="bg-[#FAFDF0] flex-1 flex items-center justify-center p-4">
          <img src={authImage} alt="Authentication Illustration" className="max-h-full max-w-full object-contain" /> 
        </div>
        <div className="flex-1 p-12 ">
            <ProFastLogo></ProFastLogo>
          <div className="flex flex-col items-center justify-center mt-5"><Outlet></Outlet></div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;