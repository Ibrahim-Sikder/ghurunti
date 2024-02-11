import { LuArmchair } from "react-icons/lu";
import PropTypes from "prop-types";
import { PriorityHigh } from "@mui/icons-material";
import style from "./Seats.module.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { saveTrainConfirmationData } from "@/Redux/features/trainConfirmationSlice";
const SelectedSeats = ({ selectedSeats }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
  const [fareAmount, setFareAmount] = useState(null);
  const [className, setClassName] = useState(null);
  const [getTotalAmount, setGetTotalAmount] = useState(null);
  const [getId, setGetId] = useState("");
  const [getBoardingPoint, setGetBoardingPoint] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const allSeatNumbers = selectedSeats.map((seat) => seat.number).join(", ");
    const allSeatFare = selectedSeats.map((seat) => seat.fare).join(", ");
    const allSeatClass = selectedSeats.map((seat) => seat.class).join(", ");
    const totalAmount = selectedSeats.reduce(
      (price, next) => price + next.fare,
      0
    );

    setSelectedSeatNumber(allSeatNumbers);
    setFareAmount(allSeatFare);
    setClassName(allSeatClass);
    setGetTotalAmount(totalAmount);
  }, [selectedSeats]);

  // const handleConfirmTrain = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     Seats: selectedSeatNumber,
  //     fare: fareAmount,
  //     class: className,
  //     total: getTotalAmount,
  //     boarding_point: getBoardingPoint,

  //   };
  //   setLoading(true);
  //   axios
  //     .post("http://localhost:5000/api/v1/train", data)
  //     .then(function (response) {
  //       if (response.data.message === "Send request for train confirmation.") {
  //         toast.success(
  //           "Confirmation request accepted. Please wait to confirm."
  //         );
  //         router.push("/train/confirm")
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //       console.log(error)
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  const dispatch = useDispatch();
  const handleConfirmTrain = async (e) => {
    e.preventDefault();

    const data = {
      Seats: selectedSeatNumber,
      fare: fareAmount,
      class: className,
      total: getTotalAmount,
      boarding_point: getBoardingPoint,
    };
    const result = await dispatch(saveTrainConfirmationData(data));
  
    if (result.payload) {
      router.push("/train/confirm");
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-base flex items-center gap-2">
          <span>
            <LuArmchair />
          </span>{" "}
          Available Seat
        </h1>
        <h1 className="text-base flex items-center gap-2">
          <span className="text-red-600">
            <LuArmchair />
          </span>{" "}
          Booked Seat
        </h1>
        <h1 className="text-base flex items-center gap-2">
          <span className="text-lime-600">
            <LuArmchair />
          </span>{" "}
          Selected Seat
        </h1>
      </div>
      <hr className="mt-2 mb-3" />
      <table className="w-full border">
        <tr className="bg-[#4AB449] text-white">
          <th>Seats</th>
          <th>Fare</th>
          <th>Class</th>
        </tr>
        {selectedSeats.map((seat, index) => {
          return (
            <tr key={index} className="text-center">
              <td>{seat.number}</td>
              <td>৳{seat.fare}</td>
              <td>{seat.class}</td>
            </tr>
          );
        })}
      </table>
      <div className="text-right">
        <h1>
          Total: ৳{selectedSeats.reduce((price, next) => price + next.fare, 0)}
        </h1>
      </div>

      <form onSubmit={handleConfirmTrain}>
        <select
          onChange={(e) => setGetBoardingPoint(e.target.value)}
          className={style.boardingSelect}
        >
          <option value=" -- Boarding points -- ">
            {" "}
            -- Boarding points --{" "}
          </option>
          <option value="Abdullahpur Bus Point (11:15 PM)">
            Abdullahpur Bus Point (11:15 PM)
          </option>
          <option value=".Norda Bus Point. (11:15 PM) ">
            {" "}
            .Norda Bus Point. (11:15 PM)
          </option>
          <option value=" Panthapath Bus Point (11:30 PM) ">
            {" "}
            Panthapath Bus Point (11:30 PM){" "}
          </option>
          <option value=" Fokirapool Bus Point (11:45 PM) ">
            {" "}
            Fokirapool Bus Point (11:45 PM){" "}
          </option>
          <option value=" Eden(Arambag) Bus Point (11:45 PM) ">
            {" "}
            Eden(Arambag) Bus Point (11:45 PM){" "}
          </option>
          <option value=" Badda (11:55 PM) "> Badda (11:55 PM) </option>
          <option value=" Sayedabad Bus Point (11:55 PM) ">
            {" "}
            Sayedabad Bus Point (11:55 PM){" "}
          </option>
        </select>

        <div className="flex items-center justify-between my-5">
          <button className={style.continoueBtn}>Continue Purchase</button>

          <small className="underline cursor-pointer hover:text-[#0BB811]">
            Close
          </small>
        </div>
      </form>

      <div className="flex items-center">
        <PriorityHigh className={style.conditonIcon} />
        <small>Due to traffic condition, the trip may get canceled.</small>
      </div>
    </div>
  );
};

SelectedSeats.propTypes = {
  selectedSeats: PropTypes.array.isRequired,
};

export default SelectedSeats;
