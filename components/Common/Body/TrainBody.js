import { fetchTrainData } from "@/Redux/features/trainSlice";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import style from "../../BusBanner/Bus.module.css";
import useModifyModal from "../Hooks/useModifyModal";

const TrainBody = () => {
  const [cityFrom, setCityFrom] = useState(null);
  const [cityTo, setCityTo] = useState(null);
  const [seatType, setSeatType] = useState(null);
  const [noMatch, setNoMatch] = useState(null);
  const [journeyDate, setJourneyDate] = useState(null);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
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
  const handleTrainDetailsData = () => {
    const data = {
      travel_from: cityFrom,
      travel_to: cityTo,
      journey_date: journeyDate,
      class_type: seatType,
    };

    dispatch(fetchTrainData(data)).then((result) => {
      console.log(result);
      if (
        result.payload &&
        result.payload.message === "Successfully train details gets."
      ) {
        router.push("/train/search");
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
      <form className={"flex flex-col gap-3"}>
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
                  type="date"
                  onChange={(e) => setJourneyDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={style.formControl}>
            <div className={style.package4}>
              <label htmlFor="">Choos a class</label>
              <select
                onChange={(e) => setSeatType(e.target.value)}
                name=""
                id=""
              >
                <option value="AC_B">AC_B</option>
                <option value="S_CHAIR">S_CHAIR</option>
                <option value="F_BERTH">F_BERTH</option>
                <option value="SHULOV">SHULOV</option>
                <option value="SNIGDHA">SNIGDHA</option>
                <option value="AC_CHAIR">AC_CHAIR</option>
              </select>
            </div>
          </div>
        </div>
      </form>
     
      {/* <Link href="/train/search"> */}

      <div className="flex justify-center mt-5">
        <button
          onClick={handleTrainDetailsData}
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

export default TrainBody;
