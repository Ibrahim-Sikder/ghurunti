import { fetchBusData } from "@/Redux/features/busSlice";
import { Groups2 } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "../../BusBanner/Bus.module.css";
import { useRouter } from "next/router";
import useModifyModal from "../Hooks/useModifyModal";
const BusBody = () => {
  const [cityFrom, setCityFrom] = useState(null);
  const [cityTo, setCityTo] = useState(null);
  const [noMatch, setNoMatch] = useState(null);
  const [journeyDate, setJourneyDate] = useState(null);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [seat, setSeat] = useState("1 Class");
  const [error, setError] = useState(null);
  const router = useRouter();
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

  // date state

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const dispatch = useDispatch();
  const handleBusDetailsData = () => {
    const data = {
      starting_point: cityFrom,
      end_point: cityTo,
      journey_date: journeyDate,
      child: child,
      adult: adult,
      seat_type: seat,
    };

    dispatch(fetchBusData(data)).then((result) => {
      console.log(result);
      if (
        result.payload &&
        result.payload.message === "Successfully bus details gets."
      ) {
        router.push("/bus/search");
        modifyModal.onClose();
      } else if (
        result.payload &&
        result.payload.message === "No matching package found."
      ) {
        setNoMatch("No matching package found.");
      } else if (
        result.payload &&
        result.payload.message === "Please select all the field."
      ) {
        setError("Please select all the field.");
      }
    });
  };
  return (
    <div className="bg-[#19ABE3] text-white px-2 py-3 rounded-md">
      <form className="flex flex-col gap-3">
        <div className={style.singleForm}>
          <div className={style.formControl}>
            <h4>From </h4>
            <input
              onChange={(e) => setCityFrom(e.target.value)}
              type="text "
              placeholder="Enter City"
            />
          </div>
          <div className={style.formControl}>
            <h4> To </h4>
            <input
              onChange={(e) => setCityTo(e.target.value)}
              type="text "
              placeholder="Enter City"
            />
          </div>
        </div>
        <div className={style.singleForm}>
          <div className={style.formControl}>
            <div
              onClick={() => setOpen((open) => !open)}
              className={style.date}
            >
              <h4>Journey Date </h4>
              <div className="flex items-center justify-between ">
                <input
                  onChange={(e) => setJourneyDate(e.target.value)}
                  type="date"
                  // value={`${format(range[0].startDate, "MM/dd/yyyy")}`}
                />
                {/* <CalendarMonth className={style.calendarIcon} /> */}
              </div>
            </div>
             
          </div>
          <div className={style.formControl}>
            <div className={style.package4}>
              <div className="flex justify-between items-center">
                <div>
                  <h4>Passenger Number </h4>
                  <small>
                    {" "}
                    {child + adult} Passenger & {seat}
                  </small>
                </div>
                <Groups2
                  onClick={() => window.busModal.showModal()}
                  className={style.showModalIcon}
                />
              </div>
            </div>
            {/* Modal  */}
            <div className={style.modalWrap}>
              <dialog id="busModal" className={style.hotelModal}>
                <form method="dialog" className="modal-box">
                  <button className={style.hotelModalCloseBtn}>✕</button>
                  <div className={style.guestRoomWrap}>
                    <Groups2 className={style.groupIcon} />
                    <div>
                      <small>Passenger & Class </small> <br />
                      <p className="text-xl font-bold">
                        {child + adult} Passenger & {seat}
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
                      setSeat(classes);
                    }}
                  >
                    <option value="Economy" selected>
                      Economy
                    </option>
                    <option value="Premium">Premium</option>
                  </select>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </form>
      
      <div className="flex justify-center mt-5">
        <button
          onClick={handleBusDetailsData}
          className={" bg-[#4AB449] py-2 px-5 rounded-md"}
        >
          Modify search
        </button>
      </div>
      {error && !noMatch && (
        <div className="  text-red-800 font-medium text-center">{error}</div>
      )}
      <div className="  text-white font-medium text-center my-1">{noMatch}</div>
    </div>
  );
};

export default BusBody;
