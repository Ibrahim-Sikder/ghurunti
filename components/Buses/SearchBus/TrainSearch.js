"use client"

import React, { useEffect, useRef, useState } from "react"
import style from "./SearchBus.module.css"
import train from "../../../public/assets/train.png"
import Image from "next/image"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import SelectedSeats from "../../Train/SearcTrain/Seats/SelectedSeat"
import Seats from "../../Train/SearcTrain/Seats/Seats"
import Link from "next/link"
import { useSelector } from "react-redux"
import useModifyModal from "../../Common/Hooks/useModifyModal"
import Container from "@/ui/Container"
const TrainSearch = () => {
  const trainDetailsData = useSelector((state) => state.train.trainDetailsData)
  // const isLoading = useSelector((state) => state.train.isLoading);
  const [trainDataWithFilter, setTrainDataWithFilter] = useState(
    trainDetailsData?.getPackage
  )
  console.log(trainDataWithFilter)

  const [reload, setReload] = useState(false)
  // const [chooseSeat, setChooseSeat] = useState("A1", "৳1500", "Economy");
  const [showDetails, setShowDetails] = useState(false)

  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }

  const modifyModal = useModifyModal()
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats?.filter((s) => s !== seat))
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }
  const [trainClass, setTrainClass] = useState(sessionStorage.getItem("t_c"))

  const handleAC = () => {
    if (trainClass === "AC_B") {
      sessionStorage.removeItem("t_c")
      setTrainClass(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("t_c", "AC_B")
      setTrainClass("AC_B")
      setReload(!reload)
    }
  }
  const handleSChair = () => {
    if (trainClass === "S_CHAIR") {
      sessionStorage.removeItem("t_c")
      setTrainClass(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("t_c", "S_CHAIR")
      setTrainClass("S_CHAIR")
      setReload(!reload)
    }
  }
  const handleFBERTH = () => {
    if (trainClass === "F_BERTH") {
      sessionStorage.removeItem("t_c")
      setTrainClass(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("t_c", "F_BERTH")
      setTrainClass("F_BERTH")
      setReload(!reload)
    }
  }
  const handleSHULOV = () => {
    if (trainClass === "SHULOV") {
      sessionStorage.removeItem("t_c")
      setTrainClass(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("t_c", "SHULOV")
      setTrainClass("SHULOV")
      setReload(!reload)
    }
  }
  const handleSNIGDHA = () => {
    if (trainClass === "SNIGDHA") {
      sessionStorage.removeItem("t_c")
      setTrainClass(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("t_c", "SNIGDHA")
      setTrainClass("SNIGDHA")
      setReload(!reload)
    }
  }
  const handleJANAPATH = () => {
    if (trainClass === "JANAPATH") {
      sessionStorage.removeItem("t_c")
      setTrainClass(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("t_c", "JANAPATH")
      setTrainClass("JANAPATH")
      setReload(!reload)
    }
  }
  const handleAC_CHAIR = () => {
    if (trainClass === "AC_CHAIR") {
      sessionStorage.removeItem("t_c")
      setTrainClass(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("t_c", "AC_CHAIR")
      setTrainClass("AC_CHAIR")
      setReload(!reload)
    }
  }

  useEffect(() => {
    if (trainClass === "AC_B") {
      const trainData = trainDataWithFilter?.filter(
        (item) => item.class_type === "AC_B"
      ) // Exclude non-numeric prices
      setTrainDataWithFilter(trainData)
    } else if (trainClass === "S_CHAIR") {
      const trainData = trainDataWithFilter?.filter(
        (item) => item.class_type === "S_CHAIR"
      ) // Exclude non-numeric prices
      setTrainDataWithFilter(trainData)
    } else if (trainClass === "F_BERTH") {
      const trainData = trainDataWithFilter?.filter(
        (item) => item.class_type === "F_BERTH"
      ) // Exclude non-numeric prices
      setTrainDataWithFilter(trainData)
    } else if (trainClass === "SHULOV") {
      const trainData = trainDataWithFilter.filter(
        (item) => item.class_type === "SHULOV"
      ) // Exclude non-numeric prices
      setTrainDataWithFilter(trainData)
    } else if (trainClass === "SNIGDHA") {
      const trainData = trainDataWithFilter?.filter(
        (item) => item.class_type === "SNIGDHA"
      ) // Exclude non-numeric prices
      setTrainDataWithFilter(trainData)
    } else if (trainClass === "JANAPATH") {
      const trainData = trainDataWithFilter?.filter(
        (item) => item.class_type === "JANAPATH 1 COUNTER"
      ) // Exclude non-numeric prices
      setTrainDataWithFilter(trainData)
    } else if (trainClass === "AC_CHAIR") {
      const trainData = trainDataWithFilter?.filter(
        (item) => item.class_type === "AC_CHAIR"
      ) // Exclude non-numeric prices
      setTrainDataWithFilter(trainData)
    } else {
      setTrainDataWithFilter(trainDetailsData?.getPackage)
    }
  }, [trainClass, reload, trainDataWithFilter, trainDetailsData?.getPackage])

  return (
    <main className={style.trainSearchWrap}>
      <div className="bg-[#19ABE3] py-5 ">
        <Container>
          <div className={style.busTopBar}>
            <div>
              <strong className="block">Departure </strong>
              <div className="flex items-center">
                <Image
                  loading="lazy"
                  alt="bus"
                  src={train}
                  width={60}
                  height={50}
                />
                <div>
                  <h6>Dhaka - Bandarban</h6>
                  <small className="block">19 October, 2023</small>
                </div>
              </div>
            </div>
            <div className={style.topBtnGroup}>
              <div className={style.prevBtn}>
                <FaAngleLeft className={style.trainIcon} />
                <button>PREV DAY</button>
              </div>

              <div className={style.nextBtn}>
                <button>NEXT DAY</button>
                <FaAngleRight className={style.trainIcon} />
              </div>
            </div>
            <button
              onClick={() => modifyModal.onOpen("Train Modify")}
              className={style.modifyBtn}
            >
              Modify Search
            </button>
          </div>
        </Container>
      </div>
      <div className="py-5"> 
  
      <Container>
        <div className={style.busWrap}>
          <div className={style.busCardWrap}>
            <div className={style.searchBusLeftSide}>
              <div className={style.seatTypeWrap}>
                <strong className={style.type}> SEAT TYPE </strong>
                <hr className="border" />
                <div className="mt-2">
                  <ul>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={handleAC}
                          className="cursor-pointer"
                          type="checkbox"
                          checked={trainClass === "AC_B" ? true : false}
                        />

                        <span>AC_B </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={handleSChair}
                          type="checkbox"
                          className="cursor-pointer"
                          checked={trainClass === "S_CHAIR" ? true : false}
                        />
                        <span>S_CHAIR</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={handleFBERTH}
                          className="cursor-pointer"
                          type="checkbox"
                          checked={trainClass === "F_BERTH" ? true : false}
                        />
                        <span>F_BERTH </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={handleSHULOV}
                          type="checkbox"
                          className="cursor-pointer"
                          checked={trainClass === "SHULOV" ? true : false}
                        />
                        <span>SHULOV </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={handleSNIGDHA}
                          type="checkbox"
                          className="cursor-pointer"
                          checked={trainClass === "SNIGDHA" ? true : false}
                        />
                        <span>SNIGDHA </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={handleJANAPATH}
                          type="checkbox"
                          className="cursor-pointer"
                          checked={trainClass === "JANAPATH" ? true : false}
                        />
                        <span>JANAPATH 1 COUNTER </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={handleAC_CHAIR}
                          type="checkbox"
                          className="cursor-pointer"
                          checked={trainClass === "AC_CHAIR" ? true : false}
                        />
                        <span> AC_CHAIR </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.seatTypeWrap}>
                <strong className={style.type}>DEPARTURE TIME </strong>
                <hr className="border" />
                <div className="mt-2">
                  <ul>
                    <li>
                      <div className="flex items-center">
                        <input type="checkbox" />
                        <span>06.00AM - 12.00AM</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input type="checkbox" />
                        <span>12.00AM - 06.00AM</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input type="checkbox" />
                        <span>03.00PM - 01.00PM</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input type="checkbox" />
                        <span>01.00PM - 03.00PM</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.searchBusRightSide}>
              <div>
                {trainDataWithFilter?.map((bus) => (
                  <div key={bus._id} className={style.allBusCardWrap}>
                    <div className={style.busCard}>
                      <div className={style.busDetail}>
                        <strong className="capitalize">{bus.train_name}</strong>
                        <small className="block">Dhaka - Biman_Bandar</small>
                        <p>Starting Point: {bus.starting_point}</p>
                        <p>End Point: {bus.end_point}</p>
                      </div>
                      <div className={style.busDetail}>
                        <small className="block">DEPARTURE TIME</small>
                        <strong className=" capitalize">
                          {bus.departure_time}{" "}
                        </strong>
                      </div>
                      <div className={style.busDetail}>
                        <small className="block">ARRIVAL TIME</small>
                        <strong className=" capitalize">
                          {bus.arrival_time}{" "}
                        </strong>
                      </div>
                      <div className={style.busDetail}>
                        <h5 className=" capitalize">Seats Available</h5>
                        <strong>{bus.seats}22</strong>
                      </div>
                      <div className={style.busDetail}>
                        <small className="block">FARE</small>
                        <h5 className="text-3xl font-bold">৳{bus.price}</h5>
                        <button
                          onClick={handleShowDetails}
                          className={style.viewBtn}
                        >
                          View Details{" "}
                        </button>
                      </div>
                    </div>

                    <div
                      className={
                        showDetails ? `${style.show}` : `${style.hide}`
                      }
                    >
                      <div className=" my-5">
                        <b>Choose your seat</b>
                        <hr className="mt-2" />
                        <div className="mt-5 grid grid-cols-2 gap-4">
                          <Seats
                            handleSeatSelection={handleSeatSelection}
                            selectedSeats={selectedSeats}
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
      </Container>
      </div>
    </main>
  )
}

export default TrainSearch
