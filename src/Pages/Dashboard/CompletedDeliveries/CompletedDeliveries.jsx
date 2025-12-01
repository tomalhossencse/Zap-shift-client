import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { DateFormat } from "../../../Utility/DateFormat";

const CompletedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "parcel-delivered"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/riders?riderEmail=${user.email}&deliveryStatus=parcel-delivered`
      );
      return res.data;
    },
  });

  const calculatePayout = (parcel) => {
    if (parcel.picupWarhouse === parcel.receiverWarhouse) {
      return parcel.cost * 0.8;
    } else {
      return parcel.cost * 0.6;
    }
  };
  return (
    <div className="p-6">
      <h1>This completed Deliveries page : {parcels.length}</h1>
      <div className="overflow-x-auto w-full p-4 mt-4">
        <table className="table w-full table-zebra">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>No.</th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>Payout</th>
              <th>Create At</th>
              <th>Pickup District</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td className="whitespace-nowrap">{index + 1}</td>
                <td>
                  <div className="font-semibold">{parcel.parcelName}</div>
                </td>
                <td className="whitespace-nowrap">
                  <span className="badge badge-ghost badge-sm">
                    {parcel.cost} tk
                  </span>
                </td>
                <td className="whitespace-nowrap">
                  <span className="badge badge-ghost badge-sm">
                    {calculatePayout(parcel)} tk
                  </span>
                </td>

                <td>
                  <div className="font-semibold">
                    {DateFormat(parcel.createdAt)}
                  </div>
                </td>
                <td>
                  <div className="font-semibold">{parcel.picupWarhouse}</div>
                </td>
                <td>
                  <button
                    className="btn-small
                        "
                  >
                    Cashout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
