import React from "react";
import style from "./HotelBookRight.module.css";
import { HiCalendar, HiOutlineUsers } from "react-icons/hi";
const HotelBookRightSide = ({ handleHotelConfirm, loading, error }) => {
  return (
    <section className={style.rightSide}>
      <div className={style.rightSideWrap}>
        <h4 className=" text-[#4AB449] font-bold mb-3">Your Price Summary</h4>
        <div className="flex justify-between bg-[#E9F6E9] px-3 py-2">
          <span>Detail</span>
          <span>Amount</span>
        </div>
        <div className={style.priceSummery}>
          <div className="flex justify-between">
            <div>
              <div>1 Cox Deluxe (Four Bed) X 2 nights</div>
              <div>Discount</div>
            </div>
            <div>
              <b>BDT5,590</b> <br />
              <b>BDT3,590</b>
            </div>
          </div>
        </div>
        <hr className={style.horizontalLine} />
        <div className={style.priceSummery}>
          <div className="flex justify-between">
            <div>
              <div>Total Amount </div>
            </div>
            <div>
              <b>BDT3,590</b>
            </div>
          </div>
        </div>
        <div className={style.priceSummery}>
          <div className="flex items-center">
            <HiCalendar size={25} />
            <div className="ml-2">
              <b>10 Feb, 2024 - 12 Feb, 2024</b> <br />
              <small>2 nights</small>
            </div>
          </div>
          <div className="flex items-center">
            <HiOutlineUsers size={25} />
            <div className="ml-2">
              <span>2 Adults 1 Room </span>
            </div>
          </div>

        </div>
        <div className="flex items-center mb-3 ">
      <input type="checkbox" className="w-5 h-5"/>
        <div className="ml-2">
          <small>Agree to the Terms & Condition and Privacy Policy </small>
        </div>
      </div>


        <hr className={style.horizontalLine} />

        <div className="text-sm text-red-400 my-1">{error}</div>
        <div className="w-full text-center mt-5">
          <button
            disabled={loading ? true : false}
            onClick={handleHotelConfirm}
            className={style.reservationBtn}
          >
           Pay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelBookRightSide;
