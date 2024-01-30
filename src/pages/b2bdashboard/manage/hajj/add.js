import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload, Checklist } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
const HajjUmrah = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);
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
  // const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const formRef = useRef();
  const router = useRouter();
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
      hajj_package: hajjPackage,
      title: title,
      sub_title: subTitle,
      date: getDate,
      price: price,
      day_night: dayNight,
      requirement_list: requirementList,
      popular_hajj_package: popularHajjPackage,
      image: getImage,
      description: value,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/hajj/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Post hajj package details.") {
          // toast.success("Post successful.");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Hajj Package Data Input Successfully !",
            showConfirmButton: false,
            timer: 1500,
          });
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
          // setDescription(null);
          setValue("");
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Post hajj package details.")
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
            <h2 className="text-3xl font-bold text-center">
              Hajj Package Data Input
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleHajjPost}>
                <div className={styles.formControl}>
                  <div>
                    <label> Hajj Package </label>
                    <select
                      onChange={(e) => setHajjPackage(e.target.value)}
                      className={styles.inputField}
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
                    />
                  </div>
                  <div>
                    <label>Day/Night </label>
                    <input
                      onChange={(e) => setDayNight(e.target.value)}
                      name="day/night"
                      placeholder="Day/Night"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  {/* <div onClick={() => window.my_modal_3.showModal()}>
                    <label>Requirement List </label>
                    <div className={styles.requirementField}>
                      <input
                        onChange={(e) => setRequirementList(e.target.value)}
                        name="requirement"
                        placeholder="Requirement List "
                        type="text"
                      />
                      <Checklist className={styles.requirementIcon} />
                    </div>
                    <div className={styles.modalWrap}>
                      <dialog
                        id="my_modal_3"
                        className={styles.requirementModal}
                      >
                        <form method="dialog" className="modal-box">
                          <button className={styles.hotelModalCloseBtn2}>
                            ✕
                          </button>
                          <div className="my-3 ">
                            <label> Requirement List </label>
                            <select className={styles.inputField}>
                              <option value="  Hajj Visa Requirement List">
                                Hajj Visa Requirement List
                              </option>
                              <option value="Umrah Visa Requirement List">
                                Umrah Visa Requirement List
                              </option>
                            </select>
                          </div>
                          <div className={styles.formControl}>
                            <div>
                              <ReactQuill
                                value={value}
                                onChange={setValue}
                                modules={{
                                  toolbar: [
                                    [{ font: [] }],
                                    [
                                      {
                                        size: ["small", false, "large", "huge"],
                                      },
                                    ],
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
                        </form>
                      </dialog>
                    </div>
                  </div> */}
                  <div>
                    <label>Popular Hajj Package </label>
                    <input
                      onChange={(e) => setPopularHajjPackage(e.target.value)}
                      name="popular hajj"
                      placeholder="Popular Hajj Package"
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

export default dynamic(() => Promise.resolve(HajjUmrah), { ssr: false });
