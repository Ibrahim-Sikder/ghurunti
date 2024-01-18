import React from "react";
import style from "../../../pages/train/confirm/confirm.module.css";
import { FaInfo } from "react-icons/fa";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
const confirm = () => {



  
  return (
    <div>
      <Nav/>
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
                <hr className="my-3"/>
                <div className="flex items-center justify-between">
                    <small>Total</small>
                    <small>3300৳</small>
                </div>
                <div className="flex items-center">
                <FaInfo/>
                <small className="text-red-500 mt-3">Please note that service charge is non refundable.</small>
                </div>
              </div>
            </div>
            <div className={style.passengerInfoRightSide}>
                
              <h3 className="text-xl font-bold">Passenger 1</h3>
              <div>
                <label>Name </label>
                <input type="Passenger Name " />
              </div>
              <div>
                <label>Passenger Type </label>
                <select>
                  <option value="Adult">Adult</option>
                  <option value="Adult">Child</option>
                </select>
              </div>
              <div>
                <h3 className="text-xl">Contact Information </h3>
                <div>
                  <label>Mobile Number </label>
                  <input type="Mobile Number" />
                </div>
                <div>
                  <label>Email </label>
                  <input type="Email" />
                </div>
                <button className={style.confirmBtn}>Confirm Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default confirm;
