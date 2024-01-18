import React, { useEffect, useState } from "react";

import Link from "next/link";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Groups,
  SwapHoriz,
  CalendarMonth,
  AttachMoney,
  Flight,
  Hotel,
  BookOnline,
  TransferWithinAStation,
  BusAlert,
  DirectionsRailway,
  LocalPhone,
} from "@mui/icons-material";
import { FaMapMarkerAlt } from "react-icons/fa";

import style from "./bookin.module.css";
import B2CDashboardLayout from "../../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout";
import axios from "axios";
import toast from "react-hot-toast";
import { decryptTransform } from "../../../../components/EncryptAndDecrypt/EncryptAnsDecrypt";
import Cookies from "js-cookie";
const Booking = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [user, setUser] = useState({});
  const [trainConfirmation, setTrainConfirmation] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // for train

  const em = decryptTransform(Cookies.get("em"));

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser));
    } catch (error) {}
  }, [em]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(em, user.profile_type)
        if (em && user.profile_type) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/confirmation/train?email=${em}&profile_type=${user.profile_type}`
          );
 console.log(response)
          setTrainConfirmation(response.data.result);
        }
      } catch (error) {
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, [em, user.profile_type]);

 

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
                      DAC <SwapHoriz className="mx-3" /> CXB{" "}
                    </strong>
                    <strong>BDT 12,445 </strong>
                  </div>
                  <div className={style.traveler}>
                    <div className="flex items-center mb-3 ">
                      <Groups className="mr-3 " />
                      <span> 1 Travelers</span>
                    </div>
                    <div className="flex items-center w-[200px] text-left ">
                      <span> Airline PNR: </span>
                      <strong>MXRHIF</strong>
                    </div>
                  </div>
                  <div className={style.travelerDate}>
                    <div className="flex items-center">
                      <CalendarMonth className="mr-3 mb-3" />
                      <span>21 Aug 23 - 24 Dev 23</span>
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
              <div className={style.userHotelBookingInfoWrap}>
                <div className={style.userHotelBookingInfo}>
                  <div className={style.left}>
                    <div className=" pl-3 pt-3">
                      <h6>BOOKING ID: HB-DP2307290102</h6>
                      <hr className="w-full my-5" />
                    </div>
                    <div className={style.payHistory}>
                      <div>
                        <h6>Hotel The Cox Today</h6>
                        <div className="flex items-center">
                          <FaMapMarkerAlt />
                          <small>Kolatoli Cox s Bazar</small>
                        </div>
                      </div>
                      <div>
                        <small>Total</small> <br />
                        <strong>BDT 45,900</strong>
                      </div>
                      <div>
                        <small>Paid</small> <br />
                        <strong>BDT 00</strong>
                      </div>
                    </div>
                  </div>
                  <div className={style.pending}>
                    <p>Pending </p>
                  </div>
                </div>
                <div className={style.userContactInfo}>
                  <div>
                    <small>Contact Name</small> <br />
                    <span>MD Rofique</span>
                  </div>
                  <div>
                    <small>Guest </small> <br />
                    <span>3 Adults</span>
                  </div>
                  <div>
                    <small>Check In </small> <br />
                    <span>Sat, Aug 05, 2023</span>
                  </div>
                  <div>
                    <small>Check Out </small> <br />
                    <span>Sat, Aug 12, 2023</span>
                  </div>
                  <div>
                    <small>5 Nights x 1 Room</small> <br />
                    <span>Family </span>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.userHotelBookingInfoWrap}>
                <div className={style.userHotelBookingInfo}>
                  <div className={style.left}>
                    <div className=" pl-3 pt-3">
                      <h6>BOOKING ID: HB-DP2307290102</h6>
                      <hr className="w-full my-5" />
                    </div>
                    <div className={style.payHistory}>
                      <div>
                        <h6>Hotel The Cox Today</h6>
                        <div className="flex items-center">
                          <FaMapMarkerAlt />
                          <small>Kolatoli Cox s Bazar</small>
                        </div>
                      </div>
                      <div>
                        <small>Total</small> <br />
                        <strong>BDT 45,900</strong>
                      </div>
                      <div>
                        <small>Paid</small> <br />
                        <strong>BDT 00</strong>
                      </div>
                    </div>
                  </div>
                  <div className={style.pending}>
                    <p>Pending </p>
                  </div>
                </div>
                <div className={style.userContactInfo}>
                  <div>
                    <small>Contact Name</small> <br />
                    <span>MD Rofique</span>
                  </div>
                  <div>
                    <small>Guest </small> <br />
                    <span>3 Adults</span>
                  </div>
                  <div>
                    <small>Check In </small> <br />
                    <span>Sat, Aug 05, 2023</span>
                  </div>
                  <div>
                    <small>Check Out </small> <br />
                    <span>Sat, Aug 12, 2023</span>
                  </div>
                  <div>
                    <small>5 Nights x 1 Room</small> <br />
                    <span>Family </span>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.userHotelBookingInfoWrap}>
                <div className={style.userHotelBookingInfo}>
                  <div className={style.left}>
                    <div className=" pl-3 pt-3">
                      <h6>BOOKING ID: HB-DP2307290102</h6>
                      <hr className="w-full my-5" />
                    </div>
                    <div className={style.payHistory}>
                      <div>
                        <h6>Hotel The Cox Today</h6>
                        <div className="flex items-center">
                          <FaMapMarkerAlt />
                          <small>Kolatoli Cox s Bazar</small>
                        </div>
                      </div>
                      <div>
                        <small>Total</small> <br />
                        <strong>BDT 45,900</strong>
                      </div>
                      <div>
                        <small>Paid</small> <br />
                        <strong>BDT 00</strong>
                      </div>
                    </div>
                  </div>
                  <div className={style.pending}>
                    <p>Pending </p>
                  </div>
                </div>
                <div className={style.userContactInfo}>
                  <div>
                    <small>Contact Name</small> <br />
                    <span>MD Rofique</span>
                  </div>
                  <div>
                    <small>Guest </small> <br />
                    <span>3 Adults</span>
                  </div>
                  <div>
                    <small>Check In </small> <br />
                    <span>Sat, Aug 05, 2023</span>
                  </div>
                  <div>
                    <small>Check Out </small> <br />
                    <span>Sat, Aug 12, 2023</span>
                  </div>
                  <div>
                    <small>5 Nights x 1 Room</small> <br />
                    <span>Family </span>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </B2CDashboardLayout>
    </div>
  );
};

export default Booking;
