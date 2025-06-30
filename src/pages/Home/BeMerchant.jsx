import React, { useEffect } from "react";
import location from "../../assets/location-merchant.png";
import AOS from "aos";

const BeMerchant = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] rounded-4xl p-20 text-white"
    >
      <div className="hero-content flex-col gap-3 lg:flex-row-reverse">
        <img src={location} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="btn bg-[#CAEB66] text-black rounded-full px-7">
              Become A Merchant
            </button>
            <button className="btn text-[#CAEB66] btn-outline ms-4 rounded-full hover:bg-black">
              Earn with Profast courier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
