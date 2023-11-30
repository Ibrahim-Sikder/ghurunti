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
import toast from "react-hot-toast";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/router";
const Busses = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [busName, setBusName] = useState(null);
  const [operators, setOperators] = useState(null);
  const [travelFrom, setTravelFrom] = useState(null);
  const [travelTo, setTravelTo] = useState(null);
  const [startingTime, setStartingTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [price, setPrice] = useState(null);
  const [journeyDate, setJourneyDate] = useState(null);
  const [typeOfBus, setTypeOfBus] = useState(null);
  const [boardingPoint, setBoardingPoint] = useState(null);
  const [facilities, setFacilities] = useState(null);
  // const [getDate, setGetDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [seat, setSeat] = useState("1 Class");
  const formRef = useRef();
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

  const handleBusData = (e) => {
    e.preventDefault();
    const data = {
      bus_name: busName,
      starting_point: travelFrom,
      end_point: travelTo,
      starting_time: startingTime,
      end_time: endTime,
      price: price,
      journey_date: journeyDate,
      child: child,
      adult: adult,
      seat_type: seat,
      operators: operators,
      type_of_bus: typeOfBus,
      boarding_point: boardingPoint,
      facilities: facilities,

      image: getImage,
      description: value,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/bus/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Successfully post bus details.") {
          toast.success("Post successful.");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/buses");
          setGetImage([]);
          setValue("");
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully post bus details.")
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
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">Bus Data Input</h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleBusData}>
                {/* <div className={styles.formControl}>
                  <div>
                    <label>Travel From City</label>
                    <input
                      onChange={(e) => setTravelFrom(e.target.value)}
                      name="travelFromCity"
                      placeholder="Travel From City"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Travel To City</label>
                    <input
                      onChange={(e) => setTypeOfBus(e.target.value)}
                      name="travelToCity"
                      placeholder="Travel To City"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div> */}
                <div className={styles.formControl}>
                  <div>
                    <label>Bus Name </label>
                    <input
                      onChange={(e) => setBusName(e.target.value)}
                      name="category"
                      placeholder="Bus Name"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Starting Point</label>
                    <input
                      onChange={(e) => setTravelFrom(e.target.value)}
                      name="productCategory"
                      placeholder="Starting Point"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>End Point </label>
                    <input
                      onChange={(e) => setTravelTo(e.target.value)}
                      name="category"
                      placeholder="End Point"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Starting Time</label>
                    <input
                      onChange={(e) => setStartingTime(e.target.value)}
                      name="productCategory"
                      placeholder="Starting Time"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> End Time</label>
                    <input
                      onChange={(e) => setEndTime(e.target.value)}
                      name="productCategory"
                      placeholder="End Time"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Price</label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      name="category"
                      placeholder="Price"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Journy Date </label>
                    <input
                      onChange={(e) => setJourneyDate(e.target.value)}
                      name="category"
                      placeholder="Journey Date"
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <h4>Passenger Number</h4>
                    <div className={styles.mondalInputFiled}>
                      <div>
                        <small>
                          {child + adult} Passenger & {seat} Class
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
                              <small>0 Passenger & 1 Class </small> <br />
                              <p className="text-xl font-bold">
                                {" "}
                                {child + adult} Passenger & {seat}
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
                            className={style.roomSelect}
                            onChange={(e) => {
                              const classes = e.target.value;
                              setSeat(classes);
                            }}
                          >
                            <option value="Class" selected>
                              Economy
                            </option>
                            <option value="Premium">Premium</option>
                          </select>
                        </form>
                      </dialog>
                    </div>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Operators </label>
                    <input
                      onChange={(e) => setOperators(e.target.value)}
                      name="category"
                      placeholder="Operators"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Type of Bus </label>
                    <input
                      onChange={(e) => setTypeOfBus(e.target.value)}
                      name="productCategory"
                      placeholder="Type of Bus "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Boarding Point </label>
                    <input
                      onChange={(e) => setBoardingPoint(e.target.value)}
                      name="category"
                      placeholder="Boarding Point "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Facilities </label>
                    <input
                      onChange={(e) => setFacilities(e.target.value)}
                      name="productCategory"
                      placeholder="Facilities "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                {/* <div className={styles.formControl}>
                  
                  <div>
                    <label> Date </label>
                    <input
                    onChange={(e) => setGetDate(e.target.value)}
                      name="Date"
                      placeholder="Date "
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                </div> */}
                <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    {getFile[0]?.name ? (
                      <label for="files">{getFile[0]?.name}</label>
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
                    disabled={loading ? true : false}
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

export default dynamic(() => Promise.resolve(Busses), { ssr: false });
