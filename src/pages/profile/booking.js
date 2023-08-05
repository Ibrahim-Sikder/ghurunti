import React, { useState } from "react";
import style from "./userProfile.module.css";
import ProfileLeftSide from "./profileLeftSide/ProfileLeftSide";
import Footer from "../../../components/Footer/Footer";
import styles from "./booking.module.css";
import Image from "next/image";
import flight from "../../../public/flight.png";
import hotel from "../../../public/hotel.png";
import visa from "../../../public/vissa.png";
import tour from "../../../public/tour.png";
import booking from "../../../public/saveCard.png";
import Link from "next/link";
import Nav from "../../../components/NavBarr/Nav";
const Booking = () => {
  const [activeBooking, setActiveBooking] = useState();
  const handleBooking = () => {
    setActiveBooking((activeBooking) => !activeBooking);
  };
  return (
    <section>
      <Nav />
      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
            <ProfileLeftSide />
          </div>
          <div className={style.userProfileRightSide}>
            <div className={styles.bookingWrap}>
              <Link href="/profile/userbooking/flightbooking">
                <div
                  style={{ display: "flex" }}
                  className={activeBooking ? `${style.active}` : ""}
                >
                  <Image
                    src={flight}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className={styles.logoIcon}
                  />
                  <button className="ml-3">Flight </button>
                </div>
              </Link>
              <Link href="/profile/userbooking/hotelbooking">
                <div className="flex">
                  <Image
                    src={hotel}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className={styles.logoIcon}
                  />
                  <button className="ml-3">Hotel </button>
                </div>
              </Link>
              <div className="flex ">
                <Image
                  src={visa}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.logoIcon}
                />
                <button className="ml-3">Visa </button>
              </div>
              <div className="flex ">
                <Image
                  src={tour}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.logoIcon}
                />
                <button className="ml-3">Tours </button>
              </div>
            </div>
            <div className={styles.bookImg}>
              <div>
                <Image
                  src={booking}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                <h3 className="text-3xl mt-5 font-bold">Sorry !</h3> <br />
                <h3 className="text-3xl  font-bold">
                  No Flight Booking History Fount{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Booking;
