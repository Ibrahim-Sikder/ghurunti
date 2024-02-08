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
const Tours = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

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
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState("");
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
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
      setImageLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
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

  const handleToursData = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      sub_title: subTitle,
      journey_date: getDate,
      price: price,
      country_name: countryName,
      travel_from: travelFrom,
      child: child,
      adult: adult,
      time: time,
      city_name: cityName,
      included: included,
      excluded: excluded,
      itinary: itinary,
      category_type: categoryType,
      product_category: productCategory,
      price_low_to_hight: priceLowToHigh,
      price_hight_to_low: priceHighToLow,
      image: getImage,
      description: value,
    };

    const hasQuotationNullValues = Object.values(data).some(
      (val) => val === null
    );

    if (hasQuotationNullValues) {
      setError("Please fill in all the fields.");
      return;
    }

    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/tours/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Successfully tours details posted.") {
          toast.success("Post successful.");
          setError("");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/tours");
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully tours details posted.")
        ) {
          toast.error("Please fill all the field.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      })
      .finally(() => {
        setError("");
        setLoading(false);
      });
  };

  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">Special Tours Package </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleToursData}>
               
             
                <div className={styles.formControl}>
                 
                  <div>
                    <label>Tour Package Name </label>
                    <input
                      onChange={(e) => setCityName(e.target.value)}
                      name="price"
                      placeholder="Tour Package Name "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                  <label>Destination Name </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    name="category"
                    placeholder="Title "
                    type="text"
                    className={styles.inputField}
                  />
                </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Short Description </label>
                    <input
                      onChange={(e) => setCityName(e.target.value)}
                      name="price"
                      placeholder="Short Description"
                      type="text"
                      className={styles.inputField}
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
                <div className="my-2 text-red-400 text-center">{error}</div>
                <div className={styles.formControl}>
                  <button
                    disabled={loading || imageLoading ? true : false}
                    className={styles.submitBtn}
                    type="submit"
                  >
                    {loading ? "Loading..." : " Submit"}
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

export default dynamic(() => Promise.resolve(Tours), { ssr: false });
