import React, { useEffect, useState } from "react"

import Link from "next/link"
import { TabList, TabPanel, Tabs, Tab } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import {
  Groups,
  SwapHoriz,
  CalendarMonth,
  AttachMoney,
  Flight,
  Hotel,
  BookOnline,
  TransferWithinAStation,
} from "@mui/icons-material"
import { FaMapMarkerAlt } from "react-icons/fa"

import style from "./bookin.module.css"
import B2CDashboardLayout from "../../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout"
import axios from "axios"
import toast from "react-hot-toast"
import { decryptTransform } from "../../../../components/EncryptAndDecrypt/EncryptAnsDecrypt"
import Cookies from "js-cookie"

const Booking = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [user, setUser] = useState({})
  const [trainConfirmation, setTrainConfirmation] = useState([])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  // for train

  const em = decryptTransform(Cookies.get("em"))

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser))
    } catch (error) {}
  }, [em])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(em, user.profile_type)
        if (em && user.profile_type) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/confirmation/train?email=${em}&profile_type=${user.profile_type}`
          )
          console.log(response)
          setTrainConfirmation(response.data.result)
        }
      } catch (error) {
        toast.error("Error fetching data")
      }
    }

    fetchData()
  }, [em, user.profile_type])

  return (
    <div>
      <B2CDashboardLayout>
        <div className={style.tabWrap}>
          {/* <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
        
        </Tab>
        <Tab key="music" title="Music">
          
        </Tab>
        <Tab key="videos" title="Videos">
           
        </Tab>
      </Tabs> */}
          <Tabs
            defaultTabIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className={style.tabListWrap}>
              <Tab className={style.bookingTab}>
                <div className="flex items-center ">
                  <Flight className={style.bookingIcon} />
                  <span className="ml-2">Flight </span>
                </div>
              </Tab>
              <Tab className={style.bookingTab}>
                <div className="flex items-center ">
                  <Hotel className={style.bookingIcon} />
                  <span className="ml-2">Hotel </span>
                </div>
              </Tab>
              <Tab className={style.bookingTab}>
                <div className="flex items-center ">
                  <BookOnline className={style.bookingIcon} />
                  <span className="ml-2">Visa </span>
                </div>
              </Tab>
              <Tab className={style.bookingTab}>
                <div className="flex items-center ">
                  <TransferWithinAStation className={style.bookingIcon} />
                  <span className="ml-2">Tours </span>
                </div>
              </Tab>
              <Tab className={style.bookingTab}>
                <div className="flex items-center ">
                  <TransferWithinAStation className={style.bookingIcon} />
                  <span className="ml-2">Bus </span>
                </div>
              </Tab>
              <Tab className={style.bookingTab}>
                <div className="flex items-center ">
                  <TransferWithinAStation className={style.bookingIcon} />
                  <span className="ml-2">Trains </span>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <div className={style.userProfileRightSide}>
                <div className={style.flightBooking}>
                  <div className="flex w-full justify-between mb-8">
                    <strong>
                      DAC <SwapHoriz className={style.bookingIcon} /> CXB{" "}
                    </strong>
                    <strong>BDT 12,445 </strong>
                  </div>
                  <div className={style.traveler}>
                    <div className="flex items-center mb-3 ">
                      <Groups className={style.bookingIcon} />
                      <span className="ml-2 block"> 1 Travelers</span>
                    </div>
                    <div className="flex items-center w-[200px] text-left ">
                      <span> Airline PNR: </span>
                      <strong>MXRHIF</strong>
                    </div>
                  </div>
                  <div className={style.travelerDate}>
                    <div className="flex items-center">
                      <CalendarMonth className={style.bookingIcon} />
                      <span className="ml-2">21 Aug 23 - 24 Dev 23</span>
                    </div>
                    <div className="flex items-center  w-[200px] text-left">
                      <span> Reservation PNR:</span>
                      <strong>540K9C</strong>
                    </div>
                  </div>
                  <div className={style.detailBtnGroup}>
                    <Link href="/profile/userbooking/flightDetail">
                      <button>Flight Details</button>
                    </Link>
                    <Link href="/profile/userbooking/travelerdetails">
                      <button>Traveler</button>
                    </Link>
                    <Link href="/profile/userbooking/fareDetail">
                      <button>Pricing</button>
                    </Link>
                    <Link href="/profile/userbooking/flightCancel">
                      <button>Cancellation Policy</button>
                    </Link>
                    <Link href="/profile/userbooking/baggage">
                      <button>Baggages</button>
                    </Link>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className={style.payments}>
                      <span>Payment:</span>
                      <strong> Unpaid - </strong>
                      <span> Booking:</span>
                      <strong>Canacelled:</strong>
                    </div>
                    <div className="flex items-center">
                      <small className={style.dollars}>
                        {" "}
                        <AttachMoney className={style.dollarIcons} />
                      </small>
                      <strong>240</strong>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.userProfileRightSide}>
                <div className={style.flightBooking}>
                  <div className="flex w-full justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">Hotel Sea Pal </h3>
                      <p>
                        BookingId: <strong>GH05757585685959</strong>
                      </p>
                    </div>
                    <strong>BDT 12,445 </strong>
                  </div>
                  <div className={style.traveler}>
                    <div>
                      <span>Chekc In</span>
                      <div className="flex items-center">
                        <p className="text-4xl text-[#666666]">30</p>{" "}
                        <span>Jul 24</span>
                      </div>
                    </div>
                    <div>
                      <span>Chekc Out </span>
                      <div className="flex items-center">
                        <p className="text-4xl text-[#666666]">30</p>{" "}
                        <span>Jul 24</span>
                      </div>
                    </div>
                    <div>
                      <span>2 Room </span>
                      <div className="flex items-center">
                        <span className="mr-2">2 Adult</span>
                        <span>1 Child</span>
                      </div>
                    </div>
                  </div>
                  <div className={style.travelerDate}>
                    <div className="flex items-center">
                      <CalendarMonth className={style.bookingIcon} />
                      <span className="ml-2">21 Aug 23 - 24 Dev 23</span>
                    </div>
                    <div className="flex items-center  w-[200px] text-left">
                      <span> Reservation PNR:</span>
                      <strong>540K9C</strong>
                    </div>
                  </div>
                  <div className={style.detailBtnGroup}>
                    <Link href="/profile/userbooking/flightDetail">
                      <button>Hotel Information </button>
                    </Link>
                    <Link href="/profile/userbooking/travelerdetails">
                      <button>Travelers Info </button>
                    </Link>
                    <Link href="/profile/userbooking/fareDetail">
                      <button>Pricing Details </button>
                    </Link>
                    <Link href="/profile/userbooking/flightCancel">
                      <button>Cancellation Policy</button>
                    </Link>
                    <Link href="/profile/userbooking/baggage">
                      <button>Baggages</button>
                    </Link>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className={style.payments}>
                      <span>Payment:</span>
                      <strong> Unpaid - </strong>
                      <span> Booking:</span>
                      <strong>Canacelled:</strong>
                    </div>
                    <div className="flex items-center">
                      <small className={style.dollars}>
                        {" "}
                        <AttachMoney className={style.dollarIcons} />
                      </small>
                      <strong>240</strong>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.userProfileRightSide}>
                <div className={style.flightBooking}>
                  <div className="flex w-full justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">Hotel Sea Pal </h3>
                      <p>
                        BookingId: <strong>GH05757585685959</strong>
                      </p>
                    </div>
                    <strong>BDT 12,445 </strong>
                  </div>
                  <div className={style.traveler}>
                    <div>
                      <span>Chekc In</span>
                      <div className="flex items-center">
                        <p className="text-4xl text-[#666666]">30</p>{" "}
                        <span>Jul 24</span>
                      </div>
                    </div>
                    <div>
                      <span>Chekc Out </span>
                      <div className="flex items-center">
                        <p className="text-4xl text-[#666666]">30</p>{" "}
                        <span>Jul 24</span>
                      </div>
                    </div>
                    <div>
                      <span>2 Room </span>
                      <div className="flex items-center">
                        <span className="mr-2">2 Adult</span>
                        <span>1 Child</span>
                      </div>
                    </div>
                  </div>
                  <div className={style.travelerDate}>
                    <div className="flex items-center">
                      <CalendarMonth className={style.bookingIcon} />
                      <span className="ml-2">21 Aug 23 - 24 Dev 23</span>
                    </div>
                    <div className="flex items-center  w-[200px] text-left">
                      <span> Reservation PNR:</span>
                      <strong>540K9C</strong>
                    </div>
                  </div>
                  <div className={style.detailBtnGroup}>
                    <Link href="/profile/userbooking/flightDetail">
                      <button>Hotel Information </button>
                    </Link>
                    <Link href="/profile/userbooking/travelerdetails">
                      <button>Travelers Info </button>
                    </Link>
                    <Link href="/profile/userbooking/fareDetail">
                      <button>Pricing Details </button>
                    </Link>
                    <Link href="/profile/userbooking/flightCancel">
                      <button>Cancellation Policy</button>
                    </Link>
                    <Link href="/profile/userbooking/baggage">
                      <button>Baggages</button>
                    </Link>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className={style.payments}>
                      <span>Payment:</span>
                      <strong> Unpaid - </strong>
                      <span> Booking:</span>
                      <strong>Canacelled:</strong>
                    </div>
                    <div className="flex items-center">
                      <small className={style.dollars}>
                        {" "}
                        <AttachMoney className={style.dollarIcons} />
                      </small>
                      <strong>240</strong>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.userProfileRightSide}>
                <div className={style.flightBooking}>
                  <div className="flex w-full justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">Hotel Sea Pal </h3>
                      <p>
                        BookingId: <strong>GH05757585685959</strong>
                      </p>
                    </div>
                    <strong>BDT 12,445 </strong>
                  </div>
                  <div className={style.traveler}>
                    <div>
                      <span>Chekc In</span>
                      <div className="flex items-center">
                        <p className="text-4xl text-[#666666]">30</p>{" "}
                        <span>Jul 24</span>
                      </div>
                    </div>
                    <div>
                      <span>Chekc Out </span>
                      <div className="flex items-center">
                        <p className="text-4xl text-[#666666]">30</p>{" "}
                        <span>Jul 24</span>
                      </div>
                    </div>
                    <div>
                      <span>2 Room </span>
                      <div className="flex items-center">
                        <span className="mr-2">2 Adult</span>
                        <span>1 Child</span>
                      </div>
                    </div>
                  </div>
                  <div className={style.travelerDate}>
                    <div className="flex items-center">
                      <CalendarMonth className={style.bookingIcon} />
                      <span className="ml-2">21 Aug 23 - 24 Dev 23</span>
                    </div>
                    <div className="flex items-center  w-[200px] text-left">
                      <span> Reservation PNR:</span>
                      <strong>540K9C</strong>
                    </div>
                  </div>
                  <div className={style.detailBtnGroup}>
                    <Link href="/profile/userbooking/flightDetail">
                      <button>Hotel Information </button>
                    </Link>
                    <Link href="/profile/userbooking/travelerdetails">
                      <button>Travelers Info </button>
                    </Link>
                    <Link href="/profile/userbooking/fareDetail">
                      <button>Pricing Details </button>
                    </Link>
                    <Link href="/profile/userbooking/flightCancel">
                      <button>Cancellation Policy</button>
                    </Link>
                    <Link href="/profile/userbooking/baggage">
                      <button>Baggages</button>
                    </Link>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className={style.payments}>
                      <span>Payment:</span>
                      <strong> Unpaid - </strong>
                      <span> Booking:</span>
                      <strong>Canacelled:</strong>
                    </div>
                    <div className="flex items-center">
                      <small className={style.dollars}>
                        {" "}
                        <AttachMoney className={style.dollarIcons} />
                      </small>
                      <strong>240</strong>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.userProfileRightSide}>
                <div className={style.flightBooking}>
                  <div className="flex w-full justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">
                        SHYAMOLI NR TRAVELS{" "}
                      </h3>
                      <p>
                        BookingId: <strong>GH05757585685959</strong>
                      </p>
                    </div>
                    <strong>BDT 12,445 </strong>
                  </div>
                  <div className={style.traveler}>
                    <div className=" items-center">
                      <p className=" text-[rgb(154,129,129)]">DEPARTURE TIME</p>{" "}
                      <b>10.30AM</b>
                    </div>
                    <div className=" items-center">
                      <p className=" text-[rgb(154,129,129)]">ARRIVAL TIME</p>{" "}
                      <b>10.30AM</b>
                    </div>
                    <div className=" items-center">
                      <p className=" text-[rgb(154,129,129)]">Boarding point</p>{" "}
                      <b>College Gate B 7 Counter</b>
                    </div>
                  </div>
                  <div className={style.travelerDate}>
                    <div className="flex items-center">
                      <CalendarMonth className={style.bookingIcon} />
                      <span className="ml-2">21 Aug 24</span>
                    </div>
                    <div className="flex items-center  w-[200px] text-left">
                      <span> Reservation PNR:</span>
                      <strong>540K9C</strong>
                    </div>
                  </div>
                  <div className={style.detailBtnGroup}>
                    <button>Bus Information </button>
                    <button>Travelers Info </button>
                    <button>Pricing Details </button>
                    <button>Cancellation Policy</button>
                    <button>Facilities</button>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className={style.payments}>
                      <span>Payment:</span>
                      <strong> Unpaid - </strong>
                      <span> Booking:</span>
                      <strong>Canacelled:</strong>
                    </div>
                    <div className="flex items-center">
                      <small className={style.dollars}>
                        {" "}
                        <AttachMoney className={style.dollarIcons} />
                      </small>
                      <strong>240</strong>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.userProfileRightSide}>
                <div className={style.flightBooking}>
                  <div className="flex w-full justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">
                        MAHANAGAR PROVATI(SNIGDHA)
                      </h3>
                      <p>
                        BookingId: <strong>GH05757585685959</strong>
                      </p>
                    </div>
                    <div>
                      <p>Fare</p>
                      <strong>BDT 12,445 </strong>
                    </div>
                  </div>
                  <div className={style.traveler}>
                    <div className=" items-center">
                      <p className=" text-[rgb(154,129,129)]">DEPARTURE TIME</p>{" "}
                      <b>10.30AM</b>
                    </div>
                    <div className=" items-center">
                      <p className=" text-[rgb(154,129,129)]">ARRIVAL TIME</p>{" "}
                      <b>10.30AM</b>
                    </div>
                    <div className=" items-center">
                      <p className=" text-[rgb(154,129,129)]">SEAT TYPE</p>{" "}
                      <b>AC_Br</b>
                    </div>
                  </div>
                  <div className={style.travelerDate}>
                    <div className="flex items-center">
                      <CalendarMonth className={style.bookingIcon} />
                      <span className="ml-2">21 Aug 24</span>
                    </div>
                    <div className="flex items-center  w-[200px] text-left">
                      <span> Reservation PNR:</span>
                      <strong>540K9C</strong>
                    </div>
                  </div>
                  <div className={style.detailBtnGroup}>
                    <button>Train Information </button>
                    <button>Travelers Info </button>
                    <button>Pricing Details </button>
                    <button>Cancellation Policy</button>
                    <button>Facilities</button>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className={style.payments}>
                      <span>Payment:</span>
                      <strong> Unpaid - </strong>
                      <span> Booking:</span>
                      <strong>Canacelled:</strong>
                    </div>
                    <div className="flex items-center">
                      <small className={style.dollars}>
                        {" "}
                        <AttachMoney className={style.dollarIcons} />
                      </small>
                      <strong>240</strong>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </B2CDashboardLayout>
    </div>
  )
}

export default Booking
