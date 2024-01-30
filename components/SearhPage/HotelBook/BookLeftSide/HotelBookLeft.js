import React from "react";
import {
  FaPlane,
  FaPlaneDeparture,
  FaPlaneSlash,
  FaPercent,
  FaReact,
  FaBiking,
  FaBlind,
  FaPhoneVolume,
  FaCalendarAlt,
  FaEyeSlash,
  FaEye,
  FaStar,
  FaUserTie,
  FaBed,
} from "react-icons/fa";
import style from "./Book.module.css";

const HotelBookLeft = ({
  setGivenName,
  setEmail,
  setNationality,
  setNricNo,
  setCountryOfResidence,
  setMobileNumber,
  setAdultGuestName,
  setAdultGuestSurName,
  setChildrenName,
  setChildrenSurName,
  setInfantName,
  setInfantSurName,
  setGuestStaying,
  setPrivacyPolicy,
  guestStaying,
  privacyPolicy,
  setGuest
}) => {
  return (
    <section>
      <h2 className={style.hotelName}>HOTEL GOLDEN HILL</h2>
      <div className={style.guestWrap}>
        <div className={style.dateCard}>
          <FaCalendarAlt className={style.dateIcon} />
          <div>
            <small>Check In - Check Out </small>
            <p>03 Oct 2023 - 04 Oct 2023</p>
          </div>
        </div>

        <div className={style.totalGuest}>
          <span>1 Night</span>
          <div className={style.line}></div>
          <FaUserTie />
          <span>Guest </span>
            <select onChange={()=>setGuest(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className={style.line}></div>
          <span>3</span>
          <FaBed />
        </div>
      </div>

      <div className={style.passengerInformation}>
        <h3 className="text-xl font-bold text-[#4AB449]">
          Passenger Information{" "}
        </h3>
        <div>
          <div className={style.formControl}>
            <div className={style.passengerInfo}>
              <label> Given Name * </label> <br />
              <input
                onChange={(e) => setGivenName(e.target.value)}
                className={style.passengerField}
                type="text"
                placeholder="Given Name"
                required
              />
            </div>
            <div className={style.passengerInfo}>
              <label> Email Address *</label> <br />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={style.passengerField}
                type="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className={style.formControl}>
            <div className={style.passengerInfo}>
              <label> Nationality </label> <br />
              <select
                onChange={(e) => setNationality(e.target.value)}
                className={style.passengerField}
              >
                <option value=""> Choose your country</option>
                <option value="Bangladesh"> Bangladesh</option>
                <option value="Malaysia"> Malaysia</option>
                <option value="India"> India</option>
                <option value="Pakistan"> Pakistan</option>
              </select>
            </div>
            <div className={style.passengerInfo}>
              <label>NRIC No. *</label> <br />
              <input
                onChange={(e) => setNricNo(e.target.value)}
                className={style.passengerField}
                type="number"
                placeholder="NRIC No"
                required
              />
            </div>
          </div>
          <div className={style.formControl}>
            <div className={style.passengerInfo}>
              <label> Country of Residence * </label> <br />
              <select
                onChange={(e) => setCountryOfResidence(e.target.value)}
                className={style.passengerField}
              >
                <option value=""> Choose your country</option>
                <option value="Bangladesh"> Bangladesh</option>
                <option value="Malaysia"> Malaysia</option>
                <option value="India"> India</option>
                <option value="Pakistan"> Pakistan</option>
              </select>
            </div>

            <div className={style.passengerInfo}>
              <label> Mobile Number * </label> <br />
              <input
                onChange={(e) => setMobileNumber(e.target.value)}
                className={style.passengerField}
                type="number"
                placeholder="Mobile Number"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <div className={style.personal}>
            <h3 className="text-xl font-bold text-[#4AB449]">Guest Details </h3>
          </div>
          <div className={style.guestInfoWrap}>
            <span>Executive Suite Hill view</span> <br />
            <div className={style.guestInfo}>
              <label htmlFor="">Guest 1 (Adult)</label>
              <div className={style.guestField}>
                <input
                  onChange={(e) => setAdultGuestName(e.target.value)}
                  placeholder="Given Name"
                  type="text"
                  required
                />
                <input
                  onChange={(e) => setAdultGuestSurName(e.target.value)}
                  placeholder="Sure Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className={style.guestInfo}>
              <label htmlFor="">Guest 2 (Children)</label>
              <div className={style.guestField}>
                <input
                  onChange={(e) => setChildrenName(e.target.value)}
                  placeholder="Given Name"
                  type="text"
                  required
                />
                <input
                  onChange={(e) => setChildrenSurName(e.target.value)}
                  placeholder="Sure Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className={style.guestInfo}>
              <label htmlFor="">Guest 3 (Infant)</label>
              <div className={style.guestField}>
                <input
                  onChange={(e) => setInfantName(e.target.value)}
                  placeholder="Given Name"
                  type="text"
                  required
                />
                <input
                  onChange={(e) => setInfantSurName(e.target.value)}
                  placeholder="Sure Name"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-5">
              <input
                onClick={() => setGuestStaying(!guestStaying)}
                type="checkbox"
                checked={guestStaying}
                required
              />
              <small className="ml-2">
                {" "}
                I m the guest staying in this property
              </small>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <input
                onClick={() => setPrivacyPolicy(!privacyPolicy)}
                type="checkbox"
                checked={privacyPolicy}
                required
              />
              <small className="ml-2">
                {" "}
                By checking this box, I confirm that I have read and understand
                the <strong>Privacy Policy and Cancellation Policy</strong> .
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelBookLeft;
