import React, { useEffect, useState } from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../profile.module.css";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import { decryptTransform } from "../../../../components/EncryptAndDecrypt/EncryptAnsDecrypt";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import axios from "axios";
const TrainBooking = () => {
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState({});
  const [trainConfirmation, setTrainConfirmation] = useState([]);


  const em = decryptTransform(Cookies.get("em"));

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser));
    } catch (error) {}
  }, [em]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (em && user.profile_type) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/confirmation/train?email=${em}&profile_type=${user.profile_type}`
          );

          setTrainConfirmation(response.data.result);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    };

    fetchData();
  }, [em, user.profile_type, reload]);

  const handleApproved = async (id) => {
    try {
      if (id) {
        const res = await fetch(`http://localhost:5000/api/v1/train/${id}`, {
          method: "PUT",
        });
        const result = await res.json();
        setReload(!reload);
        console.log(result);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const handleCancel = async (id) => {
    try {
      if (id) {
        const res = await fetch(`http://localhost:5000/api/v1/train/${id}`, {
          method: "PATCH",
        });
        const result = await res.json();
        setReload(!reload);
        console.log(result);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <B2BdashboardLayout>
      <div className={style.ticketListHead}>
        <h3 className="text-2xl font-bold text-white">Train Booking Details </h3>
      </div>

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <div className="overflow-x-auto ">
              <table className="table lg:table-auto columns-xl break-after-column">
                <thead className={style.tableWrap}>
                  <tr>
                    <th>Train Name </th>
                    <th>Passenger Name </th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>Seat Type </th>
                    <th>Seats</th>
                    <th>Passenger Number </th>
                    <th>Deperture Time </th>
                    <th>ARRIVAL TIME </th>
                    <th>Starting Point </th>
                    <th>End Point </th>
                    <th>Total Fare </th>
                    <th>Action </th>
                  </tr>
                </thead>
                <tbody>
                  {trainConfirmation.map((data) => (
                    <tr key={data._id}>
                      <td>{data.name}</td>
                      <td>{data.destination}</td>
                      <td>{data.mobile_number}</td>
                      <td>{data.confirmation_email}</td>
                      <td>{data.requiruement}</td>
                      <td>{data.passengerNumber}</td>
                      <td>{data.createdAt?.slice(0, 10)}</td>
                      <td>
                        {data.approved !== "rejected" && (
                          <>
                            {data.approved === "approved" && (
                              <button
                                className="bg-gray-600 rounded-md py-1 px-3 text-white cursor-not-allowed"
                                disabled
                              >
                                Approved
                              </button>
                            )}
                            {data.approved === "not" && (
                              <button
                                onClick={() => handleApproved(data?._id)}
                                className="bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-700"
                              >
                                Approved
                              </button>
                            )}
                          </>
                        )}
                        {data.approved === "rejected" && (
                          <button
                            onClick={() => handleApproved(data?._id)}
                            className="bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-700"
                          >
                            Approved
                          </button>
                        )}
                      </td>
                      <td>
                        <span
                          onClick={() => handleCancel(data._id)}
                          className=" bg-red-500 rounded text-white py-2 text-xs px-2 font-xs cursor-pointer"
                        >
                          Cancel
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(TrainBooking), { ssr: false });
