import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import style from "../../../../../components/Hotel/Hotel.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload, Groups2 } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect, useRef } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
const ToursUpdate = () => {
  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [travelFrom, setTravelFrom] = useState(null);
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [getDate, setGetDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [included, setIncluded] = useState(null);
  const [excluded, setExcluded] = useState(null);
  const [itinary, setItinary] = useState(null);
  const [categoryType, setCategoryType] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [priceLowToHigh, setPriceLowToHight] = useState(null);
  const [priceHighToLow, setPriceHighToLow] = useState(null);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const [specificPackage, setSpecificPackage] = useState({});
  useEffect(() => {
    // Make sure id is defined before making the fetch request
    if (id) {
      fetch(`http://localhost:5000/api/v1/tours/${id}`)
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

  const handleToursData = (e) => {
    e.preventDefault();
    const data = {
      title: title || specificPackage.title,
      sub_title: subTitle || specificPackage.sub_title,
      journey_date: getDate || specificPackage.journey_date,
      price: price || specificPackage.price,
      country_name: countryName || specificPackage.country_name,
      travel_from: travelFrom || specificPackage.travel_from,
      child: child || specificPackage.child,
      adult: adult || specificPackage.adult,
      time: time || specificPackage.time,
      city_name: cityName || specificPackage.city_name,
      included: included || specificPackage.included,
      excluded: excluded || specificPackage.excluded,
      itinary: itinary || specificPackage.itinary,
      category_type: categoryType || specificPackage.category_type,
      product_category: productCategory || specificPackage.product_category,
      price_low_to_hight: priceLowToHigh || specificPackage.price_low_to_hight,
      price_hight_to_low: priceHighToLow || specificPackage.price_hight_to_low,
      image:  specificPackage?.image[0] || getImage,
      description: value || specificPackage.description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/tours/update/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Package update successful") {
          toast.success("Package update successful");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/tours")
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
            <h2 className="text-3xl font-bold text-center">
              Tours Data Update
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleToursData}>
                <div className={styles.formControl}>
                  <div>
                    <label>Travel From </label>
                    <input
                      onChange={(e) => setTravelFrom(e.target.value)}
                      name="category"
                      placeholder="Travel From "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.travel_from}
                    />
                  </div>
                  <div>
                    <label>Title </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      name="category"
                      placeholder="Title "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.title}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Date</label>
                    <input
                      onChange={(e) => setGetDate(e.target.value)}
                      name="date"
                      placeholder="Date "
                      type="date"
                      className={styles.inputField}
                      defaultValue={specificPackage.journey_date}
                    />
                  </div>
                  <div>
                    <label>Sub Title</label>
                    <input
                      onChange={(e) => setSubTitle(e.target.value)}
                      name="productCategory"
                      placeholder="Sub Title "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.sub_title}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Your Destination Country</label>
                    <select
                      onChange={(e) => setCountryName(e.target.value)}
                      className={styles.inputField}
                      value={specificPackage.country_name}
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
                    <label>Enter city </label>
                    <input
                      onChange={(e) => setCityName(e.target.value)}
                      name="price"
                      placeholder="Enter city"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.city_name}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <h4>Guests & Room</h4>
                    <div className={styles.mondalInputFiled}>
                      <div>
                        <small>{child + adult} Guest</small>
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
                                {child + adult} Guest
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
                        </form>
                      </dialog>
                    </div>
                  </div>
                  <div>
                    <label>Time</label>
                    <input
                      onChange={(e) => setTime(e.target.value)}
                      name="type"
                      placeholder="Time "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.time}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <div>
                    <label> What is included </label>
                    <input
                      onChange={(e) => setIncluded(e.target.value)}
                      name="title"
                      placeholder="What is included "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.included}
                    />
                  </div>
                  <div>
                    <label> What is excluded </label>
                    <input
                      onChange={(e) => setExcluded(e.target.value)}
                      name="subTitle"
                      placeholder="What is excluded "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.excluded}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Itinary </label>
                    <input
                      onChange={(e) => setItinary(e.target.value)}
                      name="title"
                      placeholder="Itinary"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.itinary}
                    />
                  </div>
                  <div>
                    <label>Category Type </label>
                    <input
                      onChange={(e) => setCategoryType(e.target.value)}
                      name="subTitle"
                      placeholder="Category Type  "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.category_type}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Product Category </label>
                    <input
                      onChange={(e) => setProductCategory(e.target.value)}
                      name="title"
                      placeholder="Product Category "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.product_category}
                    />
                  </div>
                  <div>
                    <label>Price Low To Hight </label>
                    <input
                      onChange={(e) => setPriceLowToHight(e.target.value)}
                      name="subTitle"
                      placeholder="Price Low To Hight "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.price_low_to_hight}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Price Hight To Low </label>
                    <input
                      onChange={(e) => setPriceHighToLow(e.target.value)}
                      name="title"
                      placeholder=" Price Hight To Low  "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.price_hight_to_low}
                    />
                  </div>
                  <div>
                    <label>Price </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      name="price"
                      placeholder="Price"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.price}
                    />
                  </div>
                </div>
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
                    disabled={loading ? true : false}
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

export default ToursUpdate;
