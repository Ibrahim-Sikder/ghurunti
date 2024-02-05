import React, { useRef, useState } from "react"
import style from "./SearchBus.module.css"
import bus from "../../../public/assets/bus.png"
import Image from "next/image"

import Seats from "../Seats/Seats"
import SelectedSeats from "../Seats/SelectedSeat"
import { useSelector } from "react-redux"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useModifyModal from "../../Common/Hooks/useModifyModal"
import axios from "axios"
import Container from "@/ui/Container"
const SearchBus = () => {
  const busDetailsData = useSelector((state) => state.bus.busDetailsData)
  const busFilterData = useSelector((state) => state.bus.filterData)
  const [busDetailsDataWithFilter, setBusDetailsDataWithFilter] = useState(
    busDetailsData?.getPackage
  )
  const [errorMessage, setErrorMessage] = useState("")
  const [chooseSeat, setChooseSeat] = useState("A1", "৳1500", "Economy")
  const [showDetails, setShowDetails] = useState(false)
  const [seatsNumber, setSeatsNumber] = useState([])
  const [specificPackage, setSpecificPackage] = useState({})
  const [reload, setReload] = useState(false)

  const [loading, setLoading] = useState(false)
  const modifyModal = useModifyModal()
  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/v1/bus/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage)
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error)
        })
    }
  }, [id])

  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat))
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }

  const [busOperators, setBusOperators] = useState(
    sessionStorage.getItem("b_o")
  )
  const [busTypes, setBusTypes] = useState(sessionStorage.getItem("b_t"))
  const [boardingPoint, setBoardingPoint] = useState(
    sessionStorage.getItem("b_p")
  )
  const [busFacilities, setBusFacilities] = useState(
    sessionStorage.getItem("b_f")
  )

  const handleOperator = (operator) => {
    if (busOperators === operator) {
      sessionStorage.removeItem("b_o")
      setBusOperators(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("b_o", operator)
      setBusOperators(operator)
      setReload(!reload)
    }
  }
  const handleBusType = (type) => {
    if (busTypes === type) {
      sessionStorage.removeItem("b_t")
      setBusTypes(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("b_t", type)
      setBusTypes(type)
      setReload(!reload)
    }
  }
  const handleBusBoardingPoint = (point) => {
    if (boardingPoint === point) {
      sessionStorage.removeItem("b_p")
      setBoardingPoint(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("b_p", point)
      setBoardingPoint(point)
      setReload(!reload)
    }
  }
  const handleBusFacilities = (facilities) => {
    if (busFacilities === facilities) {
      sessionStorage.removeItem("b_f")
      setBusFacilities(null)
      setReload(!reload)
    } else {
      sessionStorage.setItem("b_f", facilities)
      setBusFacilities(facilities)
      setReload(!reload)
    }
  }

  useEffect(() => {
    if (busOperators || busTypes || boardingPoint || busFacilities) {
      const data = {
        starting_point: busFilterData.starting_point,
        end_point: busFilterData.end_point,
        journey_date: busFilterData.journey_date,
        child: busFilterData.child,
        adult: busFilterData.adult,
        seat_type: busFilterData.seat_type,

        operators: busOperators,
        bus_type: busTypes,
        boarding_point: boardingPoint,
        facilities: busFacilities,
      }
      setLoading(true)

      axios
        .post("http://localhost:5000/api/v1/bus/gets/packages/filter", data)
        .then((response) => {
          setLoading(false)
          // console.log(response);
          console.log(response.data)
          if (response.data.message === "Successfully bus details get.") {
            setBusDetailsDataWithFilter(response.data.getPackage)
            setErrorMessage("")
          }
          if (response.data.message === "No matching package found.") {
            setErrorMessage(response.data.message)
            setBusDetailsDataWithFilter([])
          }
        })
        .catch((error) => {
          setLoading(false)
          console.error(error)
        })
    } else {
      setBusDetailsDataWithFilter(busDetailsData?.getPackage)
      setErrorMessage("")
    }
  }, [
    boardingPoint,
    busDetailsData?.getPackage,
    busFacilities,
    busFilterData.adult,
    busFilterData.child,
    busFilterData.end_point,
    busFilterData.journey_date,
    busFilterData.seat_type,
    busFilterData.starting_point,
    busOperators,
    busTypes,
    reload,
  ])

  //  pagination

  const [limit, setLimit] = useState(5)
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("bus")) || 1
  )
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  useEffect(() => {
    sessionStorage.setItem("bus", currentPage.toString())
  }, [currentPage])
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("bus")) || 1
    setCurrentPage(storedPage)
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    )
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    )
  }, [pageNumberLimit])

  // ...

  const handleClick = (e) => {
    const pageNumber = Number(e.target.id)
    setCurrentPage(pageNumber)
    sessionStorage.setItem("bus", pageNumber.toString())
  }
  const pages = []
  for (
    let i = 1;
    i <= Math.ceil(busDetailsDataWithFilter?.length / limit);
    i++
  ) {
    pages.push(i)
  }

  const renderPagesNumber = pages?.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-green-500 text-white px-3 rounded-md cursor-pointer"
              : "cursor-pointer text-black border border-green-500 px-3 rounded-md"
          }
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })

  const lastIndex = currentPage * limit
  const startIndex = lastIndex - limit
  const currentItems = busDetailsDataWithFilter?.slice(startIndex, lastIndex)

 

  const renderData = (busDetailsDataWithFilter) => {
    return (
      <>
        <div className="flex iems-center justify-between px-5">
          <small>Operator (Bus Type)</small>
          <small>Deprature Time</small>
          <small>Arrival Time</small>
          <small>Seat Available </small>
          <small className="mr-5">Fare </small>
        </div>
        {busDetailsDataWithFilter?.map((bus) => (
          <div key={bus._id} className={style.allBusCardWrap}>
            <div className={style.busCard}>
              <div className={style.busDetail}>
                <strong className="capitalize">{bus.bus_name}</strong>
                <small className="block">Seat Type: Non AC</small>
                <p>Starting Point: {bus.starting_point}</p>
                <p>End Point: {bus.end_point}</p>
              </div>
              <div className={style.busDetail}>
                <strong>{bus.starting_time} </strong>
              </div>
              <div className={style.busDetail}>
                <strong>{bus.end_time}</strong>
              </div>
              <div className={style.busDetail}>
                <b>45</b>
                <strong>{bus.seats}</strong>
              </div>
              <div className={style.busDetail}>
                <h5 className="text-3xl font-bold">৳{bus.price}</h5>
                <button onClick={handleShowDetails} className={style.viewBtn}>
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
            <div className={showDetails ? `${style.show}` : `${style.hide}`}>
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
      </>
    )
  }

  const handlePrevious = () => {
    const newPage = currentPage - 1
    setCurrentPage(newPage)
    sessionStorage.setItem("bus", newPage.toString())

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  const handleNext = () => {
    const newPage = currentPage + 1
    setCurrentPage(newPage)
    sessionStorage.setItem("bus", newPage.toString())

    if (newPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  let pageIncrementBtn = null
  if (pages?.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: maxPageNumberLimit + 1 } })}
        className="cursor-pointer text-black pl-1"
      >
        &hellip;
      </li>
    )
  }

  let pageDecrementBtn = null
  if (currentPage > pageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: minPageNumberLimit } })}
        className="cursor-pointer text-black pr-1"
      >
        &hellip;
      </li>
    )
  }

  return (
    <main>
      <div className="bg-[#19ABE3] py-5">
        <Container>
          <div className={style.busTopBar}>
            <div>
              <strong className="block">Departure </strong>
              <div className="flex items-center">
                <Image
                  loading="lazy"
                  alt="bus"
                  src={bus}
                  width={50}
                  height={50}
                />
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

            <button
              onClick={() => modifyModal.onOpen("Bus Modify")}
              className={style.modifyBtn}
            >
              Modify Search
            </button>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-5">
          <div className={style.busCardWrap}>
            <div className={style.searchBusLeftSide}>
              <div className="mt-3">
                <strong>Operators </strong>
                <div className="mt-2">
                  <ul>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleOperator("Hanif")}
                          type="checkbox"
                          checked={busOperators === "Hanif" ? true : false}
                        />
                        <span>Hanif Enterprise </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleOperator("Soudia")}
                          type="checkbox"
                          checked={busOperators === "Soudia" ? true : false}
                        />
                        <span>Soudia Coach Service </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleOperator("Saintmartin")}
                          type="checkbox"
                          checked={
                            busOperators === "Saintmartin" ? true : false
                          }
                        />
                        <span>Saintmartin Hyundai (Robi Express) </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <strong>Bus Type </strong>
                <div className="flex items-center my-2">
                  <input
                    onClick={() => handleBusType("AC")}
                    type="checkbox"
                    checked={busTypes === "AC"}
                  />
                  <span>AC</span>
                </div>
                <div className="flex items-center">
                  <input
                    onClick={() => handleBusType("Non AC")}
                    type="checkbox"
                    checked={busTypes === "Non AC"}
                  />
                  <span>Non AC</span>
                </div>
              </div>

              <div className="my-3">
                <strong>Boarding point </strong>
                <div className="mt-2">
                  <ul>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusBoardingPoint("Arambag")}
                          type="checkbox"
                          checked={boardingPoint === "Arambag"}
                        />
                        <span>Arambag Bus Point </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusBoardingPoint("Chittagong")}
                          type="checkbox"
                          checked={boardingPoint === "Chittagong"}
                        />
                        <span>Chittagong Road B 20 Counter </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusBoardingPoint("College Gate")}
                          type="checkbox"
                          checked={boardingPoint === "College Gate"}
                        />
                        <span>College Gate B 7 Counter </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusBoardingPoint("Fokirapoor")}
                          type="checkbox"
                          checked={boardingPoint === "Fokirapoor"}
                        />
                        <span>Fokirapoor B 4 Counter </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusBoardingPoint("Gabtoli")}
                          type="checkbox"
                          checked={boardingPoint === "Gabtoli"}
                        />
                        <span>Gabtoli AC Counter </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusBoardingPoint("Janapath")}
                          type="checkbox"
                          checked={boardingPoint === "Janapath"}
                        />
                        <span>Janapath 1 Counter </span>
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
                        <input
                          onClick={() => handleBusFacilities("Water")}
                          checked={busFacilities === "Water"}
                          type="checkbox"
                        />
                        <span>Water </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusFacilities("Blanket")}
                          checked={busFacilities === "Blanket"}
                          type="checkbox"
                        />
                        <span>Blanket</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          onClick={() => handleBusFacilities("Dual AC")}
                          checked={busFacilities === "Dual AC"}
                          type="checkbox"
                        />
                        <span>Dual AC </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.searchBusRightSide}>
              <div>
                {loading ? (
                  <div>Loading ...</div>
                ) : (
                  <>
                    {errorMessage ? (
                      <div className="text-xl text-center flex justify-center items-center h-full">
                        {errorMessage}
                      </div>
                    ) : (
                      <>
                        {/* lg:w-10/12 mx-auto rounded  */}
                        <section className=" ">
                          {renderData(currentItems)}
                          <ul
                            className={
                              minPageNumberLimit < 5
                                ? "flex justify-center gap-2 md:gap-4 pb-5 mt-6"
                                : "flex justify-center gap-[5px] md:gap-2 pb-5 mt-6"
                            }
                          >
                            <button
                              onClick={handlePrevious}
                              disabled={currentPage === pages[0] ? true : false}
                              className={
                                currentPage === pages[0]
                                  ? "text-gray-400"
                                  : "text-black"
                              }
                            >
                              Previous
                            </button>
                            <span
                              className={
                                minPageNumberLimit < 5 ? "hidden" : "inline"
                              }
                            >
                              {pageDecrementBtn}
                            </span>
                            {renderPagesNumber}
                            {pageIncrementBtn}
                            <button
                              onClick={handleNext}
                              disabled={
                                currentPage === pages[pages?.length - 1]
                                  ? true
                                  : false
                              }
                              className={
                                currentPage === pages[pages?.length - 1]
                                  ? "text-gray-400"
                                  : "text-black pl-1"
                              }
                            >
                              Next
                            </button>
                          </ul>
                        </section>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default SearchBus
