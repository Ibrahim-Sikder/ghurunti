import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useRef } from "react";
import toast from "react-hot-toast";
const Update = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);

  const [value, setValue] = useState("");
  const [hajjPackage, setHajjPackage] = useState(null);
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [getDate, setGetDate] = useState(null);
  const [price, setPrice] = useState(0);
  const [dayNight, setDayNight] = useState(null);
  const [requirementList, setRequirementList] = useState(null);
  const [popularHajjPackage, setPopularHajjPackage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const formRef = useRef();

  const [specificPackage, setSpecificPackage] = useState({});
  useEffect(() => {
    // Make sure id is defined before making the fetch request
    if (id) {
      fetch(`http://localhost:5000/api/v1/hajj/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage);
          // console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

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

  // const onChanges = (content, delta, source, editor) => {
  //   setValue(content);
  //   // You can perform any additional logic here if needed
  // };

  const handleHajjPost = (e) => {
    e.preventDefault();
    const data = {
      hajj_package: hajjPackage || specificPackage.hajj_package,
      title: title || specificPackage.title,
      sub_title: subTitle || specificPackage.sub_title,
      date: getDate || specificPackage.date,
      price: price || specificPackage.price,
      day_night: dayNight || specificPackage.day_night,
      requirement_list: requirementList || specificPackage.requirement_list,
      popular_hajj_package:
        popularHajjPackage || specificPackage.popular_hajj_package,
      image: getImage.length !== 0 ? getImage : specificPackage?.image?.[0],
      description: value || specificPackage.description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/hajj/update/${id}`, data)
      .then(function (response) {
        if (response.data.message === "Package update successful") {
          toast.success("Package update successful");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/hajj");
          setHajjPackage(null);
          setTitle(null);
          setSubTitle(null);
          setGetDate(null);
          setPrice();
          setDayNight(null);
          setRequirementList(null);
          setPopularHajjPackage(null);
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
            <h2 className="text-3xl font-bold text-center">
              Hajj Package Data Update
            </h2>
            <div className="w-full mx-auto">
              <form onSubmit={handleHajjPost} ref={formRef}>
                <div className={styles.formControl}>
                  <div>
                    <label> Hajj Package </label>
                    <select
                      onChange={(e) => setHajjPackage(e.target.value)}
                      className={styles.inputField}
                      value={hajjPackage || specificPackage.hajj_package}
                    >
                      <option value="Select Hajj Package">
                        Select Hajj Package
                      </option>
                      <option value="Economy Hajj Package">
                        Economy Hajj Package
                      </option>
                      <option value="Shifting Hajj Package">
                        Shifting Hajj Package
                      </option>
                      <option value="Non Shifting Hajj Package">
                        Non Shifting Hajj Package
                      </option>
                    </select>
                  </div>
                  <div>
                    <label> Title </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      name="title"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.title}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Sub Title </label>
                    <input
                      onChange={(e) => setSubTitle(e.target.value)}
                      name="subTitle"
                      placeholder=" Sub Title"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.sub_title}
                    />
                  </div>
                  <div>
                    <label>Date</label>
                    <input
                      onChange={(e) => setGetDate(e.target.value)}
                      name="date"
                      placeholder="Date "
                      type="date"
                      className={styles.inputField}
                      defaultValue={specificPackage.date}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
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
                  <div>
                    <label>Day/Night </label>
                    <input
                      onChange={(e) => setDayNight(e.target.value)}
                      name="price"
                      placeholder="Day/Night"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.day_night}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  {/* <div>
                    <label>Requirement List </label>
                    <input
                      onChange={(e) => setRequirementList(e.target.value)}
                      name="price"
                      placeholder="Requirement List "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.requirement_list}
                    />
                  </div> */}
                  <div>
                    <label>Popular Hajj Package </label>
                    <input
                      onChange={(e) => setPopularHajjPackage(e.target.value)}
                      name="price"
                      placeholder="Popular Hajj Package"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.popular_hajj_package}
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
                            {getFile[0]?.name || specificPackage?.image[0]}
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
