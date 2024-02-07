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
const Update = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);
  const [specificPackage, setSpecificPackage] = useState({});
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
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const formRef = useRef();
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [seat, setSeat] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Make sure id is defined before making the fetch request
    if (id) {
      fetch(`http://localhost:5000/api/v1/bus/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage);
          setChild(specificPackage.child);
          setAdult(specificPackage.adult);
          setSeat(specificPackage.seat_type);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [
    id,
    specificPackage.adult,
    specificPackage.child,
    specificPackage.seat_type,
  ]);

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

  const handleBusData = (e) => {
    e.preventDefault();
    const data = {
      bus_name: busName || specificPackage.bus_name,
      starting_point: travelFrom || specificPackage.starting_point,
      end_point: travelTo || specificPackage.end_point,
      starting_time: startingTime || specificPackage.starting_time,
      end_time: endTime || specificPackage.end_point,
      price: price || specificPackage.price,
      journey_date: journeyDate || specificPackage.journey_date,
      child: child || specificPackage.child,
      adult: adult || specificPackage.adult,
      seat_type: seat || specificPackage.seat_type,
      operators: operators || specificPackage.operators,
      type_of_bus: typeOfBus || specificPackage.type_of_bus,
      boarding_point: boardingPoint || specificPackage.boarding_point,
      facilities: facilities || specificPackage.facilities,
      image: getImage.length !== 0 ? getImage : specificPackage?.image?.[0],
      description: value || specificPackage.description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/bus/update/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Package update successful") {
          toast.success("Update successful.");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/buses");

          setGetImage([]);
          setValue("");
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
            <h2 className="text-3xl font-bold text-center">Bus Data Update</h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleBusData}>
              <div className={styles.formControl}>
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
            </div>
            <div className={styles.formControl}>
            <div>
              <label>Journey Date </label>
              <input
                onChange={(e) => setJourneyDate(e.target.value)}
                name="category"
                placeholder="Journey Date"
                type="date"
                className={styles.inputField}
                defaultValue={specificPackage.journey_date}
              />
            </div>
            <div>
              <h4>Passenger Number</h4>
              <div className={styles.mondalInputFiled}>
                <div>
                  {child || adult || seat ? (
                    <small>
                      {child + adult} Passenger & {seat}
                    </small>
                  ) : (
                    <small>
                      {specificPackage.child} child,{" "}
                      {specificPackage.adult} adult, &{" "}
                      {specificPackage.seat_type}
                    </small>
                  )}
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
                      value={specificPackage.seat_type}
                    >
                      <option value="" selected>
                        Select your class
                      </option>
                      <option value="Economy">Economy</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Bus Name </label>
                    <input
                      onChange={(e) => setBusName(e.target.value)}
                      name="category"
                      placeholder="Bus Name"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.bus_name}
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
                      defaultValue={specificPackage.starting_point}
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
                      defaultValue={specificPackage.end_point}
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
                      defaultValue={specificPackage.starting_time}
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
                      defaultValue={specificPackage.end_time}
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
                      defaultValue={specificPackage.price}
                    />
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
                      defaultValue={specificPackage.operators}
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
                      defaultValue={specificPackage.type_of_bus}
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
                      defaultValue={specificPackage.boarding_point}
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
                      defaultValue={specificPackage.facilities}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                <div>
                  <label>Boardings Points </label>
                  <input
                    onChange={(e) => setBoardingPoint(e.target.value)}
                    name="category"
                    placeholder="Boarding Point "
                    type="text"
                    className={styles.inputField}
                  />
                </div>
                <div>
                  <label> Seat Available </label>
                  <input
                    onChange={(e) => setFacilities(e.target.value)}
                    name="productCategory"
                    placeholder="Facilities "
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
                        {getFile[0]?.name ||
                        specificPackage?.image?.length > 0 ? (
                          <label for="files">
                            {getFile[0]?.name || specificPackage.image[0]}
                          </label>
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
                      defaultValue={
                        specificPackage?.image
                          ? specificPackage.image[0]
                          : undefined
                      }
                    />
                  </div>
                  
                </div>
                <div className={styles.formControl}>
                  <div>
                    <ReactQuill
                      value={value || specificPackage.description}
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

export default dynamic(() => Promise.resolve(Update), { ssr: false });
