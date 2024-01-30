import React, { useEffect } from "react";
import Nav from "../../../components/NavBarr/Nav";
import Footer from "../../../components/Footer/Footer";
import HotelBookLeft from "../../../components/SearhPage/HotelBook/BookLeftSide/HotelBookLeft";
import HotelBookRightSide from "../../../components/SearhPage/HotelBook/RightSide/HotelBookRightSide";
import style from "../../../components/SearhPage/HotelBook/HotelBook.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { decryptTransform } from "../../../components/EncryptAndDecrypt/EncryptAnsDecrypt";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const Book = () => {
  const [givenName, setGivenName] = useState(null);
  const [email, setEmail] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [nricNo, setNricNo] = useState(null);
  const [countryOfResidence, setCountryOfResidence] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [adultGuestName, setAdultGuestName] = useState(null);
  const [adultGuestSurName, setAdultGuestSurName] = useState(null);
  const [childrenName, setChildrenName] = useState(null);
  const [childrenSurName, setChildrenSurName] = useState(null);
  const [infantName, setInfantName] = useState(null);
  const [infantSurName, setInfantSurName] = useState(null);
  const [guestStaying, setGuestStaying] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [guest, setGuest] = useState(1)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const [user, setUser] = useState({});
 const router = useRouter()

  const em = decryptTransform(Cookies.get("em"));

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser));
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [em]);

  const handleHotelConfirm = (e) => {
    e.preventDefault();
    const data = {
      given_name: givenName,
      confirmation_email: email,
      nationality: nationality,
      nric_no: nricNo,
      country_of_residence: countryOfResidence,
      mobile_number: mobileNumber,
      guest_adult_name: adultGuestName,
      adult_surname: adultGuestSurName,
      guest_children_name: childrenName,
      children_surname: childrenSurName,
      guest_infant_name: infantName,
      infant_surname: infantSurName,
      guest_staying: guestStaying,
      privacy_policy: privacyPolicy,
      guest: guest,
      profile_type: user.profile_type,
      email: user.email,
      user_type: user.user_type
    };
    const hasQuotationNullValues = Object.values(data).some(
      (val) => val === null
    );

    if (hasQuotationNullValues) {
      setError("Please fill in all the required fields.");
      return;
    }
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/hotel", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Send request for hotel.") {
          toast.success("Post successful.");
          if (user.profile_type === "b2c") {
            router.push("/profile/booking");
          }
          if (user.profile_type === "b2b") {
            router.push("/b2bdashboard/hotel/hotelbooking");
          }
          // formRef.current.reset();
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Send request for hotel.")
        ) {
          toast.error("Please fill all the field.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Nav />
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
          <HotelBookLeft
            setGivenName={setGivenName}
            setEmail={setEmail}
            setNationality={setNationality}
            setNricNo={setNricNo}
            setCountryOfResidence={setCountryOfResidence}
            setMobileNumber={setMobileNumber}
            setAdultGuestName={setAdultGuestName}
            setAdultGuestSurName={setAdultGuestSurName}
            setChildrenName={setChildrenName}
            setChildrenSurName={setChildrenSurName}
            setInfantName={setInfantName}
            setInfantSurName={setInfantSurName}
            setGuestStaying={setGuestStaying}
            setPrivacyPolicy={setPrivacyPolicy}
            guestStaying={guestStaying}
            privacyPolicy={privacyPolicy}
            setGuest={setGuest}
          />
        </div>
        <div className={style.flightBookRightSide}>
          <HotelBookRightSide
            handleHotelConfirm={handleHotelConfirm}
            loading={loading}
            error={error}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
