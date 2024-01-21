/* eslint-disable react/no-unescaped-entities */
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
import { FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa"
import hotel from "../../../../public/assets/hotel7.png"
import style from "./bookin.module.css"
import B2CDashboardLayout from "../../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout"
import axios from "axios"
import toast from "react-hot-toast"
import { decryptTransform } from "../../../../components/EncryptAndDecrypt/EncryptAnsDecrypt"
import Cookies from "js-cookie"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from "@mui/material"
import {
  HiCheck,
  HiLocationMarker,
  HiOutlineHome,
  HiOutlinePhone,
  HiUser,
} from "react-icons/hi"
import Image from "next/image"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
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
                    <button onClick={() => window.my_modal_1.showModal()}>
                      Hotel Information{" "}
                    </button>
                    <button onClick={() => window.my_modal_2.showModal()}>
                      Travelers Info{" "}
                    </button>
                    <button onClick={() => window.my_modal_4.showModal()}>
                      Pricing Details{" "}
                    </button>
                    <button onClick={() => window.my_modal_3.showModal()}>
                      Cancellation Policy
                    </button>
                    <Link href="/profile/userbooking/baggage">
                      <button>Baggages</button>
                    </Link>
                  </div>
                  {/* hotel information model */}
                  <div className={style.modalWrap}>
                    {/* You can open the modal using ID.showModal() method */}

                    <dialog id="my_modal_1" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Hotel Informattion</h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="flex items-center mt-5">
                            <Image
                              w={300}
                              h={300}
                              alt="hotel-model"
                              loading="lazy"
                              src={hotel}
                            />
                            <div className="ml-3 ">
                              <h2>Hotel Sea Pal </h2>
                              <div className="flex items-center">
                                <HiLocationMarker size={20} />
                                <p className="ml-2">Cox's Bazar </p>
                              </div>
                              <div>
                                <span>3 Room 5 Guest </span>
                              </div>
                            </div>
                          </div>
                          <div className="my-5">
                            <h3>Description </h3>
                            <p>
                              <p>
                                As you step into the lobby of Hotel Sea Pal,
                                you'll be embraced by a nautical-inspired
                                ambiance, capturing the essence of the nearby
                                ocean. The contemporary design, coupled with
                                maritime elements, sets the tone for a relaxing
                                and rejuvenating stay.
                              </p>
                              <p>
                                Our accommodations are thoughtfully designed to
                                provide a coastal sanctuary for our guests. Each
                                room and suite boasts panoramic views of the
                                azure sea, inviting you to unwind in comfort.
                                Tasteful maritime decor, plush furnishings, and
                                cutting-edge amenities ensure a seamless blend
                                of style and functionality.
                              </p>
                              <p>
                                Dining at Hotel Sea Pal is a culinary journey
                                featuring fresh, locally sourced ingredients.
                                Our seaside restaurant offers a diverse menu
                                that celebrates the flavors of the region,
                                complemented by a curated selection of wines and
                                cocktails. Enjoy your meals with the soothing
                                sound of waves as your backdrop. For those
                                seeking relaxation, our spa and wellness center
                                provide a range of indulgent treatments and
                                therapies. Pamper yourself with a massage
                                overlooking the ocean or rejuvenate in our
                                state-of-the-art fitness facilities.{" "}
                              </p>
                            </p>
                          </div>
                          <h3>Aminities of the hotel </h3>
                          <div className="my-5 flex items-center justify-between mt-5">
                            <div className="mt-2">
                              <h4>TV and Equipment </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                            <div className="mt-2">
                              <h4>Transfer </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                            <div className="mt-2">
                              <h4>Buisness Aminities </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* travel info modal */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_2" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Travellers Information </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />

                          <div className="my-5">
                            <Accordion>
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    className={style.accordionIcon}
                                  />
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                              >
                                Accordion 1
                              </AccordionSummary>
                              <AccordionDetails>
                                <div className="flex items-center  justify-between ">
                                  <div>
                                    <div className="flex items-center mt-3">
                                      <HiUser className="mr-5" size={20} />
                                      <div>
                                        <h5>Full Name</h5>
                                        <b>Aminul Houque </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlinePhone
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Mobile Number</h5>
                                        <b>4567899789 </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlineHome
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Address</h5>
                                        <b> Cox's Bazar </b>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center ">
                                    <FaEnvelopeOpenText
                                      className="mr-5"
                                      size={20}
                                    />
                                    <div>
                                      <h5>Email Address</h5>
                                      <b> amin@gmail.com </b>
                                    </div>
                                  </div>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                          <div className="my-5">
                            <Accordion>
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    className={style.accordionIcon}
                                  />
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                              >
                                Accordion 1
                              </AccordionSummary>
                              <AccordionDetails>
                                <div className="flex items-center  justify-between ">
                                  <div>
                                    <div className="flex items-center mt-3">
                                      <HiUser className="mr-5" size={20} />
                                      <div>
                                        <h5>Full Name</h5>
                                        <b>Aminul Houque </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlinePhone
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Mobile Number</h5>
                                        <b>4567899789 </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlineHome
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Address</h5>
                                        <b> Cox's Bazar </b>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center ">
                                    <FaEnvelopeOpenText
                                      className="mr-5"
                                      size={20}
                                    />
                                    <div>
                                      <h5>Email Address</h5>
                                      <b> amin@gmail.com </b>
                                    </div>
                                  </div>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* pricing details  */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_4" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Pricing Details </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="bg-[#19ABE3] py-3 px-2 rounded-md text-white flex items-center justify-between">
                            <b>Details</b>
                            <b>Amount</b>
                          </div>
                          <div className="mt-3">
                            <h5>Room 2: 5 Guest </h5>
                            <div className="flex items-center justify-between mt-3">
                              <span>1 night </span>
                              <b>BDT3,500 </b>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span>Convenience Fee </span>
                              <b>BDT400 </b>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span>Discount </span>
                              <b>BDT500 </b>
                            </div>
                            <hr className="my-5" />
                            <div className="flex items-center justify-between">
                              <span>Total Amount </span>
                              <b>BDT5,500 </b>
                            </div>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* cancelation policy model */}
                  <div className={style.modalWrap}>
                    {/* You can open the modal using ID.showModal() method */}

                    <dialog id="my_modal_3" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Cancelation Policy </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="flex items-center">
                            <HiCheck
                              className="text-[#19ABE3] mr-2"
                              size={20}
                            />
                            <p>Non Refundable </p>
                          </div>
                        </form>
                      </div>
                    </dialog>
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
                   {/* train information model */}
                   <div className={style.modalWrap}>
                    <dialog id="my_modal_7" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Hotel Informattion</h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="flex items-center mt-5">
                            <Image
                              w={300}
                              h={300}
                              alt="hotel-model"
                              loading="lazy"
                              src={hotel}
                            />
                            <div className="ml-3 ">
                              <h2>MAHANAGAR PROVATI(SNIGDHA) </h2>
                              <div className="flex items-center">
                                <HiLocationMarker size={20} />
                                <p className="ml-2">Gabtali - Abdullahpur </p>
                              </div>
                              <div>
                                <span>2 Seat 2 Passenger </span>
                              </div>
                            </div>
                          </div>
                          <div className="my-5">
                            <h3>Description </h3>
                            <p>
                              <p>
                                As you step into the lobby of Hotel Sea Pal,
                                you'll be embraced by a nautical-inspired
                                ambiance, capturing the essence of the nearby
                                ocean. The contemporary design, coupled with
                                maritime elements, sets the tone for a relaxing
                                and rejuvenating stay.
                              </p>
                              <p>
                                Our accommodations are thoughtfully designed to
                                provide a coastal sanctuary for our guests. Each
                                room and suite boasts panoramic views of the
                                azure sea, inviting you to unwind in comfort.
                                Tasteful maritime decor, plush furnishings, and
                                cutting-edge amenities ensure a seamless blend
                                of style and functionality.
                              </p>
                            </p>
                          </div>
                          <h3>Aminities of the Train </h3>
                          <div className="my-5 flex items-center justify-between mt-5">
                            <div className="mt-2">
                              <h4>TV and Equipment </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                            <div className="mt-2">
                              <h4>Transfer </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                            <div className="mt-2">
                              <h4>Buisness Aminities </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* travel info modal */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_6" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Travellers Information </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />

                          <div className="my-5">
                            <Accordion>
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    className={style.accordionIcon}
                                  />
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                              >
                                Accordion 1
                              </AccordionSummary>
                              <AccordionDetails>
                                <div className="flex items-center  justify-between ">
                                  <div>
                                    <div className="flex items-center mt-3">
                                      <HiUser className="mr-5" size={20} />
                                      <div>
                                        <h5>Full Name</h5>
                                        <b>Aminul Houque </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlinePhone
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Mobile Number</h5>
                                        <b>4567899789 </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlineHome
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Address</h5>
                                        <b> Cox's Bazar </b>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center ">
                                    <FaEnvelopeOpenText
                                      className="mr-5"
                                      size={20}
                                    />
                                    <div>
                                      <h5>Email Address</h5>
                                      <b> amin@gmail.com </b>
                                    </div>
                                  </div>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                          <div className="my-5">
                            <Accordion>
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    className={style.accordionIcon}
                                  />
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                              >
                                Accordion 1
                              </AccordionSummary>
                              <AccordionDetails>
                                <div className="flex items-center  justify-between ">
                                  <div>
                                    <div className="flex items-center mt-3">
                                      <HiUser className="mr-5" size={20} />
                                      <div>
                                        <h5>Full Name</h5>
                                        <b>Aminul Houque </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlinePhone
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Mobile Number</h5>
                                        <b>4567899789 </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlineHome
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Address</h5>
                                        <b> Cox's Bazar </b>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center ">
                                    <FaEnvelopeOpenText
                                      className="mr-5"
                                      size={20}
                                    />
                                    <div>
                                      <h5>Email Address</h5>
                                      <b> amin@gmail.com </b>
                                    </div>
                                  </div>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* pricing details  */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_5" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Pricing Details </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="bg-[#19ABE3] py-3 px-2 rounded-md text-white flex items-center justify-between">
                            <b>Details</b>
                            <b>Amount</b>
                          </div>
                          <div className="mt-3">
                            <h5>Room 2: 5 Guest </h5>
                            <div className="flex items-center justify-between mt-3">
                              <span>1 night </span>
                              <b>BDT3,500 </b>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span>Convenience Fee </span>
                              <b>BDT400 </b>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span>Discount </span>
                              <b>BDT500 </b>
                            </div>
                            <hr className="my-5" />
                            <div className="flex items-center justify-between">
                              <span>Total Amount </span>
                              <b>BDT5,500 </b>
                            </div>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* cancelation modal */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_3" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Cancelation Policy </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="flex items-center">
                            <HiCheck
                              className="text-[#19ABE3] mr-2"
                              size={20}
                            />
                            <p>Non Refundable </p>
                          </div>
                        </form>
                      </div>
                    </dialog>
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
                    <div>
                      <button onClick={() => window.my_modal_7.showModal()}>
                        Train Information{" "}
                      </button>
                    </div>
                    <button onClick={() => window.my_modal_6.showModal()}>
                      Travelers Info{" "}
                    </button>
                    <button onClick={() => window.my_modal_5.showModal()}>
                      Pricing Details{" "}
                    </button>
                    <button onClick={() => window.my_modal_3.showModal()}>
                      Cancellation Policy
                    </button>
                    <button>Facilities</button>
                  </div>
                  {/* train information model */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_7" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Hotel Informattion</h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="flex items-center mt-5">
                            <Image
                              w={300}
                              h={300}
                              alt="hotel-model"
                              loading="lazy"
                              src={hotel}
                            />
                            <div className="ml-3 ">
                              <h2>MAHANAGAR PROVATI(SNIGDHA) </h2>
                              <div className="flex items-center">
                                <HiLocationMarker size={20} />
                                <p className="ml-2">Gabtali - Abdullahpur </p>
                              </div>
                              <div>
                                <span>2 Seat 2 Passenger </span>
                              </div>
                            </div>
                          </div>
                          <div className="my-5">
                            <h3>Description </h3>
                            <p>
                              <p>
                                As you step into the lobby of Hotel Sea Pal,
                                you'll be embraced by a nautical-inspired
                                ambiance, capturing the essence of the nearby
                                ocean. The contemporary design, coupled with
                                maritime elements, sets the tone for a relaxing
                                and rejuvenating stay.
                              </p>
                              <p>
                                Our accommodations are thoughtfully designed to
                                provide a coastal sanctuary for our guests. Each
                                room and suite boasts panoramic views of the
                                azure sea, inviting you to unwind in comfort.
                                Tasteful maritime decor, plush furnishings, and
                                cutting-edge amenities ensure a seamless blend
                                of style and functionality.
                              </p>
                            </p>
                          </div>
                          <h3>Aminities of the Train </h3>
                          <div className="my-5 flex items-center justify-between mt-5">
                            <div className="mt-2">
                              <h4>TV and Equipment </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                            <div className="mt-2">
                              <h4>Transfer </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                            <div className="mt-2">
                              <h4>Buisness Aminities </h4>
                              <ul className={style.hotelFacilityList}>
                                <li>Cable TV</li>
                                <li>Telephone</li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* travel info modal */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_6" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Travellers Information </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />

                          <div className="my-5">
                            <Accordion>
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    className={style.accordionIcon}
                                  />
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                              >
                                Accordion 1
                              </AccordionSummary>
                              <AccordionDetails>
                                <div className="flex items-center  justify-between ">
                                  <div>
                                    <div className="flex items-center mt-3">
                                      <HiUser className="mr-5" size={20} />
                                      <div>
                                        <h5>Full Name</h5>
                                        <b>Aminul Houque </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlinePhone
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Mobile Number</h5>
                                        <b>4567899789 </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlineHome
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Address</h5>
                                        <b> Cox's Bazar </b>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center ">
                                    <FaEnvelopeOpenText
                                      className="mr-5"
                                      size={20}
                                    />
                                    <div>
                                      <h5>Email Address</h5>
                                      <b> amin@gmail.com </b>
                                    </div>
                                  </div>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                          <div className="my-5">
                            <Accordion>
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    className={style.accordionIcon}
                                  />
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                              >
                                Accordion 1
                              </AccordionSummary>
                              <AccordionDetails>
                                <div className="flex items-center  justify-between ">
                                  <div>
                                    <div className="flex items-center mt-3">
                                      <HiUser className="mr-5" size={20} />
                                      <div>
                                        <h5>Full Name</h5>
                                        <b>Aminul Houque </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlinePhone
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Mobile Number</h5>
                                        <b>4567899789 </b>
                                      </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                      <HiOutlineHome
                                        className="mr-5"
                                        size={20}
                                      />
                                      <div>
                                        <h5>Address</h5>
                                        <b> Cox's Bazar </b>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center ">
                                    <FaEnvelopeOpenText
                                      className="mr-5"
                                      size={20}
                                    />
                                    <div>
                                      <h5>Email Address</h5>
                                      <b> amin@gmail.com </b>
                                    </div>
                                  </div>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* pricing details  */}
                  <div className={style.modalWrap}>
                    <dialog id="my_modal_5" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Pricing Details </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="bg-[#19ABE3] py-3 px-2 rounded-md text-white flex items-center justify-between">
                            <b>Details</b>
                            <b>Amount</b>
                          </div>
                          <div className="mt-3">
                            <h5>Room 2: 5 Guest </h5>
                            <div className="flex items-center justify-between mt-3">
                              <span>1 night </span>
                              <b>BDT3,500 </b>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span>Convenience Fee </span>
                              <b>BDT400 </b>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <span>Discount </span>
                              <b>BDT500 </b>
                            </div>
                            <hr className="my-5" />
                            <div className="flex items-center justify-between">
                              <span>Total Amount </span>
                              <b>BDT5,500 </b>
                            </div>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  {/* cancelation modal */}
                  <div className={style.modalWrap}>
                    {/* You can open the modal using ID.showModal() method */}

                    <dialog id="my_modal_3" className={style.flightModal}>
                      <div className={style.trainModalIno}>
                        <form method="dialog" className="modal-box">
                          <div className="flex justify-between ">
                            <h3 className="text-xl">Cancelation Policy </h3>
                            <button className={style.modalCloseBtn}>✕</button>
                          </div>
                          <hr className="my-3" />
                          <div className="flex items-center">
                            <HiCheck
                              className="text-[#19ABE3] mr-2"
                              size={20}
                            />
                            <p>Non Refundable </p>
                          </div>
                        </form>
                      </div>
                    </dialog>
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
