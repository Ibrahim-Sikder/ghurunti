"use client";

import React, { useRef, useState } from "react";
import style from "./SearchBus.module.css";
import bus from "../../../public/assets/bus.png";
import Image from "next/image";

import Seats from "../Seats/Seats";
import SelectedSeats from "../Seats/SelectedSeat";
import { useSelector } from "react-redux";
import Link from "next/link";
const SearchBus = () => {
  const busDetailsData = useSelector((state) => state.bus.busDetailsData);
  console.log(busDetailsData.getPackage);
  const [chooseSeat, setChooseSeat] = useState("A1", "৳1500", "Economy");
  const [showDetails, setShowDetails] = useState(false);
  const [seatsNumber, setSeatsNumber] = useState([]);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const busData = [
    {
      id: 1,
      name: "SHYAMOLI NR TRAVELS",
      price: 900.0,
      departureTime: "10.30AM",
      arrivalTime: "12.20PM",
      seats: 33,
    },
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <main>
      <div className={style.busTopBar}>
        <div>
          <strong className="block">Departure </strong>
          <div className="flex items-center">
            <Image loading="lazy" alt="bus" src={bus} width={50} height={50} />
            <div>
              <h6>Dhaka - Bandarban</h6>
              <small className="block">19 October, 2023</small>
            </div>
          </div>
        </div>
        <div className={style.totalOperator}>
          <h6>Total Operators Found: 30</h6>
        </div>

        <div>
          <h6>Total Seats Available: 275</h6>
        </div>
        <Link href="/bus">
        <button className={style.modifyBtn}>Modify Search</button>
        </Link>
      </div>

      <div className={style.busWrap}>
        <div className={style.busCardWrap}>
          <div className={style.searchBusLeftSide}>
            <div className="mt-3">
              <strong>Operators </strong>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Hanif Enterprise </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Soudia Coach Service </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Saintmartin Hyundai (Robi Express) </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <strong>Bus Type </strong>
              <div className="flex items-center my-2">
                <input type="checkbox" />
                <span>AC</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" />
                <span>Non AC</span>
              </div>
            </div>

            <div className="my-3">
              <strong>Boarding point </strong>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Arambag Bus Point </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Chittagong Road B 20 Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>College Gate B 7 Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Fokirapoor B 4 Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Gabtoli AC Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Jnapath 1 Counter </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <strong>Facilities </strong>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Water </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Blanket</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Dual AC </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.searchBusRightSide}>
            <div>
              {busDetailsData.getPackage.map((bus) => (
                <div key={bus._id} className={style.allBusCardWrap}>
                  <div className={style.busCard}>
                    <div className={style.busDetail}>
                      <strong className="capitalize">{bus.bus_name}</strong>
                      <small className="block">504-BAN Non AC</small>
                      <p>Starting Point: {bus.starting_point}</p>
                      <p>End Point: {bus.end_point}</p>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className=" capitalize">{bus.starting_time} </h5>
                      <strong>10:30AM</strong>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className=" capitalize">{bus.end_time} </h5>
                      <strong>10:30AM</strong>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className=" capitalize">Seats Available</h5>
                      <strong>{bus.seats}</strong>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className="text-3xl font-bold">৳{bus.price}</h5>
                      <button
                        onClick={handleShowDetails}
                        className={style.viewBtn}
                      >
                        View Details{" "}
                      </button>
                    </div>
                  </div>

                  <div className={style.policy}>
                    <small>Cancellation Policy </small>
                    <small> Boarding point</small>
                    <small> Dropping point </small>
                    <small>Facilities</small>
                  </div>
                  <div
                    className={showDetails ? `${style.show}` : `${style.hide}`}
                  >
                    <div className=" my-5">
                      <b>Choose your seat</b>
                      <hr className="mt-2" />
                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Seats
                          handleSeatSelection={handleSeatSelection}
                          selectedSeats={selectedSeats}
                          setSeatsNumber={setSeatsNumber}
                        />
                        <SelectedSeats selectedSeats={selectedSeats} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchBus;
