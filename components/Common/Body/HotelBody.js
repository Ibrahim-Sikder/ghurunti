import React from "react";
import { Groups2 } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchHotelData, setHotelData } from "@/Redux/features/hotelSlice";
import { useRef } from "react";
import { useEffect } from "react";
import style from "../../Hotel/Hotel.module.css";
import useModifyModal from "../Hooks/useModifyModal";

const HotelBody = () => {
  const [countryName, setCountryName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [noMatch, setNoMatch] = useState(null);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [room, setRoom] = useState("1 Room");
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const modifyModal = useModifyModal();
  const childIncrement = () => {
    setChild(child + 1);
  };
  const childDecrement = () => {
    if (child < 1) {
      setChild(0);
    } else {
      setChild(child - 1);
    }
  };
  const incrementAdult = () => {
    setAdult(adult + 1);
  };
  const decrementAdult = () => {
    if (child < 1) {
      setAdult(0);
    } else {
      setAdult(child - 1);
    }
  };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);
  const refTow = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape2, true);
    document.addEventListener("click", hideOnClickOutside2, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const hideOnEscape2 = (e) => {
    if (e.key === "Escape") {
      setOpen2(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  const hideOnClickOutside2 = (e) => {
    if (refTow.current && !refTow.current.contains(e.target)) {
      setOpen2(false);
    }
  };

  const handleHotelDetailsData = async () => {
    const data = {
      country_name: countryName,
      city_name: cityName,
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      child: child,
      adult: adult,
      room_number: room,
    };
    dispatch(setHotelData(data));
    try {
      const result = await dispatch(fetchHotelData(data));
      console.log(result);
      if (
        result.payload &&
        result.payload.message === "Successfully hotel details gets."
      ) {
        router.push("/search");
        modifyModal.onClose();
      } else if (
        result.payload &&
        result.payload.message === "No matching package found."
      ) {
        setNoMatch("No matching package found.");
      } else if (result.payload === undefined) {
        setError("Something went wrong!");
      }
    } catch (error) {
      // Handle errors if needed
      console.error("Error dispatching fetchHotelData:", error);
    }
  };
  return (
    <div className="bg-[#19ABE3] text-white px-2 py-3 rounded-md">
      <div className="lg:flex gap-2">
        <div className="border w-full py-1 px-2 rounded-md mb-3 lg:mb-0">
          <h4>Enter Your Destination Country</h4>
          <select
            className="bg-[#19ABE3] "
            onChange={(e) => setCountryName(e.target.value)}
          >
            <option selected value="Select your country">
              Select your country
            </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Thailand">Thailand</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Indonesia">Indonesia</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Singapore">Singapore</option>
            <option value="Iran">Iran</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="border w-full py-1 px-2 rounded-md">
          <h4>City/Hotel/Street Name</h4>
          <select
            className="bg-[#19ABE3] "
            onChange={(e) => setCityName(e.target.value)}
          >
            <option selected value="Select your city">
              Select your city
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Kuala Lumpur">Kuala Lumpur</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Beijing">Beijing</option>
            <option value="Singapore Island">Singapore Island</option>
            <option value="Iran">Iran</option>
            <option value="Hanoi">Hanoi</option>
            <option value="Tehran">Tehran</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>
      </div>

      <div className="lg:flex gap-2 my-3">
        <div
          onClick={() => setOpen((open) => !open)}
          className="border w-full py-1 px-2 rounded-md mb-3 lg:mb-0"
        >
          <h4>Check In</h4>
          <div className={style.calendarInput}>
            <input
              onChange={(e) => setCheckInDate(e.target.value)}
              name="checkIn"
              placeholder="Check In  "
              type="date"
              className={"bg-transparent"}
            />
          </div>
        </div>
        <div
          onClick={() => setOpen2((open2) => !open2)}
          className="border w-full py-1 px-2 rounded-md"
        >
          <h4>Check Out</h4>
          <div className={style.calendarInput}>
            {/* <input
                    value={`${format(range2[0].startDate, "MM/dd/yyyy")}`}
                    readOnly
                  />
                  <CalendarMonth className={style.calendarIcon} /> */}
            <input
              onChange={(e) => setCheckOutDate(e.target.value)}
              name="checkout"
              placeholder="Check Out "
              type="date"
              className={"bg-transparent"}
            />
          </div>
        </div>
      </div>

      <div className="border w-full py-1 px-2 rounded-md">
        <div className="flex justify-between item-center">
          <div>
            <h4>Guests & Room</h4>
            <small>
              {child + adult} Guest & {room}{" "}
            </small>
            {/* <input autoComplete="off" type="text" className=" bg-transparent"/> */}
          </div>
          <Groups2
            onClick={() => window.my_modal_3.showModal()}
            className={style.showModalIcon}
          />
        </div>
        <div className={style.modalWrap}>
          <dialog id="my_modal_3" className={style.hotelModal}>
            <form method="dialog" className="modal-box">
              <button className={style.hotelModalCloseBtn}>✕</button>
              <div className={style.guestRoomWrap}>
                <Groups2 className={style.groupIcon} />
                <div>
                  <small>Guest & Room </small> <br />
                  <p className="text-xl font-bold">
                    {" "}
                    {child + adult} Guest & {room}{" "}
                  </p>
                </div>
              </div>
              <div className={style.adultChildWrap}>
                <div className={style.adultIncrementDecrement}>
                  <small onClick={decrementAdult}> - </small>
                  <span>{adult} Adult </span>
                  <small onClick={incrementAdult}> + </small>
                </div>
                <div className={style.childIncrementDecrement}>
                  <small onClick={childDecrement}> - </small>
                  <span> {child} Child </span>
                  <small onClick={childIncrement}> + </small>
                </div>
              </div>
              <select
                className={style.roomSelect}
                onChange={(e) => {
                  const classes = e.target.value;
                  setRoom(classes);
                }}
              >
                <option value="1 Room" selected>
                  1 Room
                </option>
                <option value="2 Room">2 Room</option>
                <option value="3 Room">3 Room</option>
                <option value="4 Room">4 Room</option>
                <option value="5 Room">5 Room</option>
              </select>
            </form>
          </dialog>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <button
          onClick={handleHotelDetailsData}
          className={" bg-[#4AB449] py-2 px-5 rounded-md"}
        >
          Modify search
        </button>
      </div>
      {error && (
        <div className="  text-red-800 font-medium text-center">{error}</div>
      )}
      <div className="  text-white font-medium text-center my-1">{noMatch}</div>
    </div>
  );
};

export default HotelBody;
