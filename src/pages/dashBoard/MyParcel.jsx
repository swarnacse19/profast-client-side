import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState(null);

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  //console.log(parcels);

  const handleView = (parcel) => {
    setSelectedParcel(parcel);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedParcel(null);
  };

  const handlePay = (id) => {
    //console.log("Proceed to payment for", id);
    navigate(`/dashboard/payment/${id}`);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This parcel will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e11d48", // red-600
      cancelButtonColor: "#6b7280", // gray-500
    });
    if (confirm.isConfirmed) {
      try {
        console.log("Trying to delete:", id);
        axiosSecure.delete(`parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Parcel has been deleted.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          }
          refetch();
        });
      } catch (err) {
        Swal.fire("Error", err.message || "Failed to delete parcel", "error");
      }
    }
  };

  const formatDate = (iso) => {
    return new Date(iso).toLocaleString(); // Format: "6/22/2025, 3:11:31 AM"
  };

  return (
    <div>
      <div className="overflow-x-auto shadow-md rounded-xl">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Type</th>
              <th>Created At</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>
                <td className="max-w-[180px] truncate">{parcel.title}</td>
                <td className="capitalize">{parcel.type}</td>
                <td>{formatDate(parcel.creation_date)}</td>
                <td>৳{parcel.cost}</td>
                <td>
                  <span
                    className={`badge ${
                      parcel.payment_status === "paid"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {parcel.payment_status}
                  </span>
                </td>
                <td className="flex gap-2 items-center">
                  <button
                    onClick={() => handleView(parcel)}
                    className="btn btn-xs btn-outline"
                  >
                    View
                  </button>
                  {parcel.payment_status === "unpaid" && (
                    <button
                      onClick={() => handlePay(parcel._id)}
                      className="btn btn-xs bg-[#CAEB66] text-black"
                    >
                      Pay
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {parcels.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-6">
                  No parcels found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Parcel Details Modal */}
      {isModalOpen && selectedParcel && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Parcel Details
            </h3>
            <div className="space-y-3">
              <p>
                <strong className="font-semibold">ID:</strong>{" "}
                {selectedParcel._id || "N/A"}
              </p>
              <p>
                <strong className="font-semibold">Title:</strong>{" "}
                {selectedParcel.title || "N/A"}
              </p>
              <p>
                <strong className="font-semibold">Type:</strong>{" "}
                <span className="capitalize">
                  {selectedParcel.type || "N/A"}
                </span>
              </p>
              <p>
                <strong className="font-semibold">Cost:</strong> ৳
                {selectedParcel.cost || "0.00"}
              </p>
              <p>
                <strong className="font-semibold">Payment Status:</strong>{" "}
                <span
                  className={`badge text-white font-medium px-3 py-1 rounded-full ${
                    selectedParcel.payment_status === "paid"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {selectedParcel.payment_status || "N/A"}
                </span>
              </p>
              <p>
                <strong className="font-semibold">Created At:</strong>{" "}
                {formatDate(selectedParcel.creation_date)}
              </p>
              <p>
                <strong className="font-semibold">Receiver Name:</strong>{" "}
                {selectedParcel.receiver_name || "N/A"}
              </p>
              <p>
                <strong className="font-semibold">Receiver Phone:</strong>{" "}
                {selectedParcel.receiver_contact || "N/A"}
              </p>
              <p>
                <strong className="font-semibold">Delivery Address:</strong>{" "}
                {selectedParcel.receiver_address || "N/A"}
              </p>
              
              <p>
                <strong className="font-semibold">Status:</strong>{" "}
                <span className="capitalize">
                  {selectedParcel.delivery_status || "N/A"}
                </span>
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="btn bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 rounded-md px-6 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyParcel;
