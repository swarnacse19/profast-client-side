import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

function Works() {
  const titleData = [
    {
      title: "Booking pick & drop",
    },
    {
      title: "Cash on Delivery",
    },
    {
      title: "Delivery Hub",
    },
    {
      title: "Booking SME & Corporate",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto my-14">
      <h1 className="font-semibold mb-3 text-2xl">How it Works</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {titleData.map((data) => (
        <div className="bg-white p-4 rounded-lg">
            <CiDeliveryTruck size={30}/>
            <p className="mt-3 text-[16px] font-semibold">{data.title}</p>
            <p className="mt-5 text-gray-700">From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
