import React, { useEffect, useState } from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from "./confirm.module.css";
import { FaInfo } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { decryptTransform } from "../../../../components/EncryptAndDecrypt/EncryptAnsDecrypt";
import PrivateRoute from "@/routes/privateroute";
const Confirm = () => {
  const trainData = useSelector((state) => state.trainConfirmation);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const [isValid, setIsValid] = useState(true);

  const router = useRouter();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNumber(inputValue);
    const mobileNumberRegex = /^[0-9]{11}$/;
    setIsValid(mobileNumberRegex.test(inputValue));
  };

  const em = decryptTransform(Cookies.get("em"));

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser));
    } catch (error) {}
  }, [em]);

  const handleConfirmTrain = (e) => {
    e.preventDefault();

    const data = {
      Seats: trainData.Seats,
      fare: trainData.fare,
      class: trainData.class,
      total: trainData.total,
      boarding_point: trainData.boarding_point,
      name: name,
      passenger_type: type,
      mobile_number: number,
      confirmation_email: email,
      email: user.email,
      profile_type: user.profile_type
    };
    const hasQuotationNullValues = Object.values(data).some(
      (val) => val === null
    );

    if (hasQuotationNullValues) {
      setError("Please fill in all the fields.");
      return;
    }
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/train", data)
      .then(function (response) {
        if (response.data.message === "Send request for train confirmation.") {
          toast.success(
            "Confirmation request accepted. Please wait to confirm."
          );
          if (user.profile_type === "b2c") {
            router.push("/profile/booking");
          } else if (user.profile_type === "b2b") {
            router.push("/b2bdashboard/train/trainbooking");
          }
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    // <PrivateRoute>
      <div>
        <Nav />
        <div className={style.purchasWrap}>
          <h3 className="text-2xl font-bold">Purchase Ticket </h3>
          <hr />
          <div className="mt-10">
            <h3 className="text-xl font-bold ">Passenger Details </h3>
            <div className={style.passengerInforWrap}>
              <div className={style.passengerInfoLeftSide}>
                <div className={style.journyDetails}>
                  <h5>Journey Details</h5>
                  <h3 className="text-xl">Train Name </h3>
                  <strong className="block">Dhaka - Cumilla </strong>
                  <small>
                    Deperture Time: <strong>Thu, 31 Mar 2022, 06.30AM </strong>
                  </small>
                  <hr />
                  <div>
                    <small>
                      Coach : <strong>TA</strong>
                    </small>
                    <small>
                      Seat Type: <strong>SHOVAN</strong>
                    </small>
                    <small>
                      Seats: <strong>TA-27</strong>
                    </small>
                  </div>
                </div>
                <div className={style.journyDetails}>
                  <h3 className="text-xl font-bold">Fare Details </h3>
                  <div className="flex items-center justify-between">
                    <small>Total Price</small>
                    <small>300৳</small>
                  </div>
                  <div className="flex items-center justify-between">
                    <small>VAT</small>
                    <small>30৳</small>
                  </div>
                  <div className="flex items-center justify-between">
                    <small>Service Charge</small>
                    <small>30৳</small>
                  </div>
                  <hr className="my-3" />
                  <div className="flex items-center justify-between">
                    <small>Total</small>
                    <small>3300৳</small>
                  </div>
                  <div className="flex items-center">
                    <FaInfo />
                    <small className="text-red-500 mt-3">
                      Please note that service charge is non refundable.
                    </small>
                  </div>
                </div>
              </div>
              <div className={style.passengerInfoRightSide}>
                <h3 className="text-xl font-bold">Passenger 1</h3>
                <div>
                  <label>Name </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Passenger Name "
                  />
                </div>
                <div>
                  <label>Passenger Type </label>
                  <select onChange={(e) => setType(e.target.value)}>
                    <option value="" selected>
                      {" "}
                      Select passenger type
                    </option>
                    <option value="Adult">Adult</option>
                    <option value="Adult">Child</option>
                  </select>
                </div>
                <div>
                  <h3 className="text-xl">Contact Information </h3>
                  <div>
                    <label>Mobile Number </label>
                    <input
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      type="text"
                      value={number}
                    />
                    {!isValid && (
                      <p style={{ color: "red", margin: "5px" }}>
                        Please enter a valid mobile number
                      </p>
                    )}
                  </div>
                  <div>
                    <label>Email </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <button
                    onClick={handleConfirmTrain}
                    className={
                      loading
                        ? "mt-1 bg-gray-400 py-2 rounded-full w-full"
                        : `${style.confirmBtn}`
                    }
                    disabled={loading}
                  >
                    Confirm Purchase
                  </button>
                  <div className="mt-2 text-red-400 text-sm">{error}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    // </PrivateRoute>
  );
};

export default Confirm;
