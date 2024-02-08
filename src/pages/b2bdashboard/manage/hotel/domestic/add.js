import styling from "../../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../../manage.module.css";
import style from "../../../../../../components/Hotel/Hotel.module.css";
import { CloudUpload, Groups2 } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const Hotel = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [hotelName, setHotelName] = useState(null);
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [address, setAddress] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [dayNight, setDayNight] = useState(null);
  const [pricePerPerson, setPricePerPerson] = useState(null);
  const [priceTwinPerson, setPriceTwinPerson] = useState(null);
  const [priceTriplePerson, setPriceTriplePerson] = useState(null);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [hotelType, setHotelType] = useState(null);
  const [price, setPrice] = useState(null);
  const [highestPrice, setHighestPrice] = useState(null);
  const [lowestPrice, setLowestPrice] = useState(null);
  const [startPrice, setStartPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const formRef = useRef();

  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [room, setRoom] = useState("1 Room");
  const router = useRouter();

  const childIncrement = () => {
    setChild(child + 1);
  };
  const childDecrement = () => {
    if (child < 1) {
      setChild(0);
    } else {
      setChild(child - 1);
    }
  };
  const incrementAdult = () => {
    setAdult(adult + 1);
  };
  const decrementAdult = () => {
    if (child < 1) {
      setAdult(0);
    } else {
      setAdult(child - 1);
    }
  };

  let files;
  const handlePdf = async (e) => {
    setGetFile(e.target.files);
    try {
      files = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("pdfFiles", files[i]);
      }
      setImageLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        console.log(data.imageLinks);
        setGetImage(data.imageLinks);
        setImageLoading(false);
      }
      if (data.error === "Something went wrong") {
        toast.error("Something went wrong");
        setImageLoading(false);
        setGetImage([]);
        setGetFile({});
      }
    } catch (error) {
      toast.error("Something went wrong");
      setImageLoading(false);
      setGetImage([]);
      setGetFile({});
    }
  };

  const handleHotelData = (e) => {
    e.preventDefault();
    const data = {
      hotel_name: hotelName,
      title: title,
      sub_title: subTitle,
      address: address,
      country_name: country,
      city_name: city,
      day_night: dayNight,
      price_per_person: pricePerPerson,
      price_twin_person: priceTwinPerson,
      price_triple_person: priceTriplePerson,
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      child: child,
      adult: adult,
      room_number: room,
      hotel_type: hotelType,
      highest_price: highestPrice,
      lowest_price: lowestPrice,
      start_price: startPrice,
      discount_price: discountPrice,
      image: getImage,
      description: value,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/hotel/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Successfully hotel details posted.") {
          toast.success("Post successful.");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/hotel");
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully hotel details posted.")
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
  console.log(checkInDate, checkOutDate);
  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Domestic Hotel Data Input
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleHotelData}>
             


              <div className={styles.formControl}>
              <div>
                <label>Hotel Name </label>
                <input
                  onChange={(e) => setCheckInDate(e.target.value)}
                  name="checkIn"
                  placeholder="Check In  "
                  type="text"
                  className={styles.inputField}
                />
              </div>
              <div>
                <label>Price  </label>
                <input
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  name="checkout"
                  placeholder="Check Out "
                  type="text"
                  className={styles.inputField}
                />
              </div>
            </div>
              
                <div className={styles.formControl}>
                  <div>
                    <label>Short Desc </label>
                    <input
                      onChange={(e) => setDayNight(e.target.value)}
                      name="day"
                      placeholder="Day/Night "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price Per Person </label>
                    <input
                      onChange={(e) => setPricePerPerson(e.target.value)}
                      name="price"
                      placeholder="Price Person "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Price Twin Person</label>
                    <input
                      onChange={(e) => setPriceTwinPerson(e.target.value)}
                      name="price"
                      placeholder="Price Twin Person "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price Triple Person </label>
                    <input
                      onChange={(e) => setPriceTriplePerson(e.target.value)}
                      name="price"
                      placeholder="Price Triple Person"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
               
           
                <div className={styles.formControl}>
                <div>
                <label>Day </label>
                <input
                  onChange={(e) => setStartPrice(e.target.value)}
                  name="startPrice"
                  placeholder="Day "
                  type="text"
                  className={styles.inputField}
                />
              </div>
                  <div>
                  <label>Night </label>
                  <input
                    onChange={(e) => setStartPrice(e.target.value)}
                    name="startPrice"
                    placeholder="Night "
                    type="text"
                    className={styles.inputField}
                  />
                </div>
                </div>
                <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    {imageLoading ? (
                      <div>Uploading...</div>
                    ) : (
                      <>
                        {getFile[0]?.name ? (
                          <label for="files">{getFile[0]?.name}</label>
                        ) : (
                          <label for="files">
                            {" "}
                            <CloudUpload className={styles.uploadIcon} /> Image
                            Upload{" "}
                          </label>
                        )}
                      </>
                    )}

                    <input
                      onChange={handlePdf}
                      name="image"
                      // accept=".jpg/.jpeg/.png"
                      className={styles.inputField}
                      type="file"
                      id="files"
                      class="hidden"
                      multiple
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  {" "}
                  <div>
                    <ReactQuill
                      value={value}
                      onChange={setValue}
                      modules={{
                        toolbar: [
                          [{ font: [] }],
                          [{ size: ["small", false, "large", "huge"] }],
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          [{ color: [] }, { background: [] }],
                          [{ align: [] }],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["bold", "italic", "underline"],
                          [{ align: [] }],
                          ["link", "image"],
                          ["video"],
                          ["clean"],
                          ["blockquote", "code-block"],
                          ["direction"],
                          ["formula"],
                          ["strike"],
                        ],
                      }}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <button
                    disabled={loading || imageLoading ? true : false}
                    className={styles.submitBtn}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
