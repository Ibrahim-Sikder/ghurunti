import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import style from "../../../../../components/Hotel/Hotel.module.css";
import { CloudUpload, Groups2 } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const HotelUpdate = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);
  const [specificPackage, setSpecificPackage] = useState({});
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
  // const [productCategory, setProductCategory] = useState(null);
  // const [priceLowToHigh, setPriceLowToHight] = useState(null);

  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [room, setRoom] = useState("1 Room");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Make sure id is defined before making the fetch request
    if (id) {
      fetch(`http://localhost:5000/api/v1/hotel/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

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
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        setGetImage(data.imageLinks);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleHotelData = (e) => {
    e.preventDefault();
    const data = {
      hotel_name: hotelName || specificPackage.hotel_name,
      title: title || specificPackage.title,
      sub_title: subTitle || specificPackage.sub_title,
      address: address || specificPackage.address,
      country_name: country || specificPackage.country_name,
      city_name: city || specificPackage.city_name,
      day_night: dayNight || specificPackage.day_night,
      price_per_person: pricePerPerson || specificPackage.price_per_person,
      price_twin_person: priceTwinPerson || specificPackage.price_twin_person,
      price_triple_person:
        priceTriplePerson || specificPackage.price_triple_person,
      check_in_date: checkInDate || specificPackage.check_in_date,
      check_out_date: checkOutDate || specificPackage.check_out_date,
      child: child || specificPackage.child,
      adult: adult || specificPackage.adult,
      room_number: room || specificPackage.room_number,
      hotel_type: hotelType || specificPackage.hotel_type,
      highest_price: highestPrice || specificPackage.highest_price,
      lowest_price: lowestPrice || specificPackage.lowest_price,
      start_price: startPrice || specificPackage.start_price,
      discount_price: discountPrice || specificPackage.discount_price,
      image: getImage || specificPackage?.image[0],
      description: value || specificPackage.description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/hotel/update/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Package update successful") {
          toast.success("Package update successful");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/hotel");
          setGetImage([]);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // console.log(specificPackage?.image[0]);
  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Hotel Data Update{" "}
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleHotelData}>
                <div className={styles.formControl}>
                  <div>
                    <label>Hotel Name </label>
                    <input
                      onChange={(e) => setHotelName(e.target.value)}
                      name="country"
                      placeholder="Input Hotel Name "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage?.hotel_name}
                    />
                  </div>
                  <div>
                    <label> Title </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      name="city"
                      placeholder="Input Title "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage?.title}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Sub Title </label>
                    <input
                      onChange={(e) => setSubTitle(e.target.value)}
                      name="subtitle"
                      placeholder="Sub Title "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage?.sub_title}
                    />
                  </div>
                  <div>
                    <label>Address</label>
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      name="address"
                      placeholder="Address"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage?.address}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <div>
                    <h4>Enter Your Destination Country</h4>
                    <select
                      onChange={(e) => setCountry(e.target.value)}
                      className={styles.inputField}
                      value={country || specificPackage?.country_name}
                    >
                      <option selected value="Bangladesh">
                        Bangladesh
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Iran">Iran</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                  <div>
                    <h4>City/Hotel/Street Name</h4>
                    <select
                      onChange={(e) => setCity(e.target.value)}
                      className={styles.inputField}
                      value={city || specificPackage?.city_name}
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Bangkok">Bangkok</option>
                      <option value="Tokyo">Tokyo</option>
                      <option value="Kuala Lumpur">Kuala Lumpur</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Beijing">Beijing</option>
                      <option value="Singapore Island">Singapore Island</option>
                      <option value="Iran">Iran</option>
                      <option value="Hanoi">Hanoi</option>
                      <option value="Tehran">Tehran</option>
                      <option value="Islamabad">Islamabad</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Day/Night </label>
                    <input
                      onChange={(e) => setDayNight(e.target.value)}
                      name="day"
                      placeholder="Day/Night "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage?.day_night}
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
                      defaultValue={specificPackage?.price_per_person}
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
                      defaultValue={specificPackage?.price_twin_person}
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
                      defaultValue={specificPackage?.price_triple_person}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Check In </label>
                    <input
                      onChange={(e) => setCheckInDate(e.target.value)}
                      name="checkIn"
                      placeholder="Check In  "
                      type="date"
                      className={styles.inputField}
                      defaultValue={specificPackage?.check_in_date}
                    />
                  </div>
                  <div>
                    <label> Check Out </label>
                    <input
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      name="checkout"
                      placeholder="Check Out "
                      type="date"
                      className={styles.inputField}
                      defaultValue={specificPackage?.check_out_date}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <h4>Guests & Room</h4>
                    <div className={styles.mondalInputFiled}>
                      <div>
                        <small>
                          {child + adult} Guest & {room}
                        </small>
                        <input autoComplete="off" type="text" />
                      </div>
                      <div>
                        <Groups2
                          onClick={() => window.my_modal_3.showModal()}
                          className={styles.showModalIcon}
                        />
                      </div>
                    </div>
                    {/* Open modala  */}
                    <div className={styles.modalWrap}>
                      <dialog id="my_modal_3" className={styles.modalWrap2}>
                        <form method="dialog" className="modal-box">
                          <button className={styles.hotelModalCloseBtn2}>
                            ✕
                          </button>
                          <div className={style.guestRoomWrap}>
                            <Groups2 className={style.groupIcon} />
                            <div>
                              <small>Guest & Room </small> <br />
                              <p className="text-xl font-bold">
                                {" "}
                                {child + adult} Guest & {room}{" "}
                              </p>
                            </div>
                          </div>
                          <div className={style.adultChildWrap}>
                            <div className={style.adultIncrementDecrement}>
                              <small onClick={decrementAdult}> - </small>
                              <span>{adult} Adult </span>
                              <small onClick={incrementAdult}> + </small>
                            </div>
                            <div className={style.childIncrementDecrement}>
                              <small onClick={childDecrement}> - </small>
                              <span> {child} Child </span>
                              <small onClick={childIncrement}> + </small>
                            </div>
                          </div>
                          <select
                            className={styles.roomSelect2}
                            onChange={(e) => {
                              const classes = e.target.value;
                              setRoom(classes);
                            }}
                            value={specificPackage?.room_number}
                          >
                            <option value="1 Room" selected>
                              1 Room
                            </option>
                            <option value="2 Room">2 Room</option>
                            <option value="3 Room">3 Room</option>
                            <option value="4 Room">4 Room</option>
                            <option value="5 Room">5 Room</option>
                          </select>
                        </form>
                      </dialog>
                    </div>
                  </div>
                  <div>
                    <label>Hotel Type </label>
                    <input
                      onChange={(e) => setHotelType(e.target.value)}
                      name="type"
                      placeholder="Hotel Type "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage?.hotel_type}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <div>
                    <label>Highest Price </label>
                    <input
                      onChange={(e) => setHighestPrice(e.target.value)}
                      name="highestPrice"
                      placeholder="Highest Price "
                      type="number"
                      className={styles.inputField}
                      defaultValue={specificPackage?.highest_price}
                    />
                  </div>
                  <div>
                    <label> Lowest Price </label>
                    <input
                      onChange={(e) => setLowestPrice(e.target.value)}
                      name="lowestPrice"
                      placeholder="Lowest Price "
                      type="number"
                      className={styles.inputField}
                      defaultValue={specificPackage?.lowest_price}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Start Price </label>
                    <input
                      onChange={(e) => setStartPrice(e.target.value)}
                      name="startPrice"
                      placeholder="Start Price "
                      type="number"
                      className={styles.inputField}
                      defaultValue={specificPackage?.start_price}
                    />
                  </div>
                  <div>
                    <label> Discount Price </label>
                    <input
                      onChange={(e) => setDiscountPrice(e.target.value)}
                      name="discountPrice"
                      placeholder="Discount Price "
                      type="number"
                      className={styles.inputField}
                      defaultValue={specificPackage?.discount_price}
                    />
                  </div>
                </div>
                {/* <div className={styles.formControl}>
                  <div>
                    <label>Date</label>
                    <input
                      onChange={(e) => setGetDate(e.target.value)}
                      name="date"
                      placeholder="Date "
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Address</label>
                    <input
                      name="address"
                      placeholder="Address"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div> */}

                <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    {getFile[0]?.name || specificPackage?.image?.length > 0 ? (
                      <label for="files">
                        {getFile[0]?.name || specificPackage?.image[0]}
                      </label>
                    ) : (
                      <label for="files">
                        {" "}
                        <CloudUpload className={styles.uploadIcon} /> Image
                        Upload{" "}
                      </label>
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
                      value={value || specificPackage?.description}
                      // defaultValue={specificPackage?.value}
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
                  <button className={styles.submitBtn} type="submit">
                    Update
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

export default HotelUpdate;
