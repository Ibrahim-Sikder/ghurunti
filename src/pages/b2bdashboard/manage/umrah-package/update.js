import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import styling from "../../profile.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import axios from "axios";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useRouter } from "next/router";

const Update = () => {
  const [specificPackage, setSpecificPackage] = useState({});
  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [latestUmrahPackage, setLatestUmrahPackage] = useState(null);
  const [dayNight, setDayNight] = useState(null);
  const [getDate, setGetDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const formRef = useRef();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:5000/api/v1/umrah/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage);

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          toast.error(error);
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

  const handleUmrahUpdate = (e) => {
    e.preventDefault();
    const data = {
      title: title || specificPackage.title,
      sub_title: subTitle || specificPackage.sub_title,
      latest_umrah_package:
        latestUmrahPackage || specificPackage.latest_umrah_package,
      day_night: dayNight || specificPackage.day_night,
      date: getDate || specificPackage.date,
      price: price || specificPackage.price,
      image: getImage.length !== 0 ? getImage : specificPackage?.image?.[0],
      description: value || specificPackage.description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/umrah/update/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Package update successful") {
          toast.success("Package update successful");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/umrah-package");
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
              Umrah Package Data Update
            </h2>
            <div className="w-full mx-auto">
              <form onSubmit={handleUmrahUpdate} ref={formRef}>
                <div className={styles.formControl}>
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
                  <div>
                    <label>Sub Title </label>
                    <input
                      onChange={(e) => setSubTitle(e.target.value)}
                      name="title"
                      placeholder="Sub Title"
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.sub_title}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                <div>
                    <label> Latest Umrah Package </label>
                    <select
                      onChange={(e) => setLatestUmrahPackage(e.target.value)}
                      className={styles.inputField}
                      value={latestUmrahPackage || specificPackage.latest_umrah_package}
                    >
                      
                      <option value="Umrah In Ramadan">Umrah In Ramadan</option>
                      <option value="Premium Umrah Packages">
                        Premium Umrah Packages
                      </option>
                      <option value="Platinum Umrah Packages">
                        Platinum Umrah Packages
                      </option>
                      <option value="Family Umrah Packages">
                        Family Umrah Packages
                      </option>
                    </select>
                  </div>
                  <div>
                    <label>Day/Night</label>
                    <input
                      onChange={(e) => setDayNight(e.target.value)}
                      name="title"
                      placeholder=" Day/Night "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.day_night}
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
                      defaultValue={specificPackage.date}
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
