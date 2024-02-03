import { LuArmchair } from "react-icons/lu"
import PropTypes from "prop-types"
import { PriorityHigh } from "@mui/icons-material"
import style from "./Seats.module.css"
import toast from "react-hot-toast"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { decryptTransform } from "../../EncryptAndDecrypt/EncryptAnsDecrypt"
import Cookies from "js-cookie"
import Link from "next/link"
const SelectedSeats = ({ selectedSeats }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null)
  const [fareAmount, setFareAmount] = useState(null)
  const [className, setClassName] = useState(null)
  const [getTotalAmount, setGetTotalAmount] = useState(null)
  const [getName, setGetName] = useState(null)
  const [getEmail, setGetEmail] = useState(null)
  const [getPhoneNumber, setGetPhoneNumber] = useState(null)
  const [getBoardingPoint, setGetBoardingPoint] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [user, setUser] = useState({})

  const router = useRouter()

  useEffect(() => {
    const allSeatNumbers = selectedSeats.map((seat) => seat.number).join(", ")
    const allSeatFare = selectedSeats.map((seat) => seat.fare).join(", ")
    const allSeatClass = selectedSeats.map((seat) => seat.class).join(", ")
    const totalAmount = selectedSeats.reduce(
      (price, next) => price + next.fare,
      0
    )

    setSelectedSeatNumber(allSeatNumbers)
    setFareAmount(allSeatFare)
    setClassName(allSeatClass)
    setGetTotalAmount(totalAmount)
  }, [selectedSeats])

  const em = decryptTransform(Cookies.get("em"))

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser))
    } catch (error) {
      toast.error(error.message)
    }
  }, [em])

  const handleConfirmBus = (e) => {
    e.preventDefault()

    const data = {
      Seats: selectedSeatNumber,
      fare: fareAmount,
      class: className,
      total: getTotalAmount,
      boarding_point: getBoardingPoint,
      name: getName,
      confirmation_email: getEmail,
      mobile_number: getPhoneNumber,
      email: user.email,
      profile_type: user.profile_type,
    }
    setLoading(true)
    axios
      .post("http://localhost:5000/api/v1/bus", data)
      .then(function (response) {
        console.log(response)
        if (response.data.message === "Send request for bus confirmation.") {
          toast.success(
            "Confirmation request accepted. Please wait to confirm."
          )
          if (user.profile_type === "b2c") {
            router.push("/profile/booking")
          } else if (user.profile_type === "b2b") {
            router.push("/b2bdashboard/buses/busbooking")
          }
          setError("")
        }
        if (response.data === "Internal server error") {
          setError("All fields must be filled out.")
        }
      })
      .catch((error) => {
        toast.error(error)
        setError("")
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
          //  setSelectedSeatNumber(seat.number);
          return (
            <tr key={index} className="text-center">
              <td>{seat.number}</td>
              <td>৳{seat.fare}</td>
              <td>{seat.class}</td>
            </tr>
          )
        })}
      </table>
      <div className="text-right">
        <h1>
          Total: ৳{selectedSeats.reduce((price, next) => price + next.fare, 0)}
        </h1>
      </div>

      <form onSubmit={handleConfirmBus}>
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
        {/* <input
          onChange={(e) => setGetName(e.target.value)}
          className={style.phoneNumber}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setGetEmail(e.target.value)}
          className={style.phoneNumber}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setGetPhoneNumber(e.target.value)}
          className={style.phoneNumber}
          type="text"
          placeholder="Phone Number"
        /> */}
        <div className="text-sm text-red-400 mt-3 mb-0">{error}</div>
        <div className="flex items-center justify-between my-5">
          <Link href="/bus/confirm">
            <button
              disabled={loading ? true : false}
              className={style.continoueBtn}
            >
              Continue{" "}
            </button>
          </Link>
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
  )
}

SelectedSeats.propTypes = {
  selectedSeats: PropTypes.array.isRequired,
}

export default SelectedSeats
