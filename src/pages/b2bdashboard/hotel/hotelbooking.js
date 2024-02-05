import React, { useEffect, useState } from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../profile.module.css";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import { decryptTransform } from "../../../../components/EncryptAndDecrypt/EncryptAnsDecrypt";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import axios from "axios";
const HotelBooking = () => {
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState({});
  const [hotelConfirmation, setHotelConfirmation] = useState([]);

  const em = decryptTransform(Cookies.get("em_g"));

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser));
    } catch (error) {toast.error("Something went wrong.")}
  }, [em]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (em && user.profile_type) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/confirmation/hotel?email=${em}&profile_type=${user.profile_type}`
          );
 
          setHotelConfirmation(response.data.result);
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
        const res = await fetch(`http://localhost:5000/api/v1/hotel/${id}`, {
          method: "PUT",
        });
        const result = await res.json();
        if (result.message === "Approved successful.") {
          toast.success("Approved successful.");
          setReload(!reload);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const handleCancel = async (id) => {
    try {
      if (id) {
        const res = await fetch(`http://localhost:5000/api/v1/hotel/${id}`, {
          method: "PATCH",
        });
        const result = await res.json();
        if (result.message === "Rejected") {
          toast.success("Rejected");
          setReload(!reload);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  //  pagination

  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("hotel_p")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("hotel_p", currentPage.toString());
  }, [currentPage]);
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("hotel_p")) || 1;
    setCurrentPage(storedPage);
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    );
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    );
  }, [pageNumberLimit]);

  // ...

  const handleClick = (e) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("hotel_p", pageNumber.toString());
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(hotelConfirmation?.length / limit); i++) {
    pages.push(i);
  }

  const renderPagesNumber = pages?.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-green-500 text-white px-3 rounded-md cursor-pointer"
              : "cursor-pointer text-black border border-green-500 px-3 rounded-md"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;
  const currentItems = hotelConfirmation?.slice(startIndex, lastIndex);

  const renderData = (hotelConfirmation) => {
    return (
      <>
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
            {hotelConfirmation.map((data) => (
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
                      {data.approved === "pending" && (
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
      </>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("hotel_p", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("hotel_p", newPage.toString());

    if (newPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages?.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: maxPageNumberLimit + 1 } })}
        className="cursor-pointer text-black pl-1"
      >
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (currentPage > pageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: minPageNumberLimit } })}
        className="cursor-pointer text-black pr-1"
      >
        &hellip;
      </li>
    );
  }

  return (
    <B2BdashboardLayout>
      <div className={style.ticketListHead}>
        <h3 className="text-2xl font-bold text-white">
          Hotel Booking Details{" "}
        </h3>
      </div>

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <div className="overflow-x-auto ">
              <section>
                {renderData(currentItems)}
                <ul
                  className={
                    minPageNumberLimit < 5
                      ? "flex justify-center gap-2 md:gap-4 pb-5 mt-6"
                      : "flex justify-center gap-[5px] md:gap-2 pb-5 mt-6"
                  }
                >
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === pages[0] ? true : false}
                    className={
                      currentPage === pages[0] ? "text-gray-400" : "text-black"
                    }
                  >
                    Previous
                  </button>
                  <span
                    className={minPageNumberLimit < 5 ? "hidden" : "inline"}
                  >
                    {pageDecrementBtn}
                  </span>
                  {renderPagesNumber}
                  {pageIncrementBtn}
                  <button
                    onClick={handleNext}
                    disabled={
                      currentPage === pages[pages?.length - 1] ? true : false
                    }
                    className={
                      currentPage === pages[pages?.length - 1]
                        ? "text-gray-400"
                        : "text-black pl-1"
                    }
                  >
                    Next
                  </button>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(HotelBooking), { ssr: false });
