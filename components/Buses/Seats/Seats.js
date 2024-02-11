import { useEffect, useState } from "react";
import { TbSteeringWheel } from "react-icons/tb";
import { LuArmchair } from "react-icons/lu";

import PropTypes from "prop-types";
import allSeats from "./Database/Seats";
import toast from "react-hot-toast";

const Seats = ({ handleSeatSelection, selectedSeats, setSeatsNumber }) => {
  const [seats] = useState([...allSeats]);
  const [bookedSeats, setBookedSeats] = useState([]);

  function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/v1/confirmation/bus/all")
        .then((res) => res.json())
        .then((data) => {
          const seatsArray = data.getPackage.reduce((acc, pack) => {
            // Split the string into pairs of two letters
            const pairs = pack.Seats.match(/.{1,2}/g);
            // Filter out empty strings
            const nonEmptyQuotedPairs = pairs.filter(
              (pair) => pair.trim() !== ","
            );
            // Concatenate the non-empty quoted pairs with the accumulator array
            return acc.concat(nonEmptyQuotedPairs);
          }, []);
          setBookedSeats(seatsArray);
        });
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="w-1/3 mx-auto">
      <div className="mt-5 grid grid-cols-2 gap-2 md:gap-4 border p-4 rounded-lg shadow">
        {seats.map((seat, index) => {
          return (
            <div
              className={`${index === 0 ? "col-span-2 text-right" : ""} ${
                checkEvenOrOdd(seat.id) === "Even"
                  ? "flex justify-start"
                  : "flex justify-end"
              }`}
              key={index}
            >
              {index === 0 ? (
                <button className="text-xl text-gray-700">
                  <TbSteeringWheel />
                </button>
              ) : (
                <button
                  title={
                    seat?.isBooked
                      ? `${seat.number} Booked`
                      : `${seat.number} Available`
                  }
                  onClick={() => handleSeatSelection(seat)}
                  className={`text-xl ${
                    bookedSeats.includes(seat.number)
                      ? "text-red-600 select-none cursor-not-allowed"
                      : ""
                  } ${
                    selectedSeats.includes(seat || booked)
                      ? "text-lime-600"
                      : "text-gray-600 hover:text-lime-600 disabled:text-red-600"
                  }`}
                  disabled={bookedSeats.includes(seat.number)}
                >
                  <LuArmchair />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Seats.propTypes = {
  handleSeatSelection: PropTypes.func.isRequired,
  selectedSeats: PropTypes.array.isRequired,
};

export default Seats;
