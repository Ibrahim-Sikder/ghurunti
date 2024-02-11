import styling from "../../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../../manage.module.css";
import { CloudUpload, Groups2 } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const UpdateDomestic = () => {
  const [specificPackage, setSpecificPackage] = useState({});
  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [hotelName, setHotelName] = useState(null);
  const [price, setPrice] = useState(null);
  const [shortDescription, setShortDescription] = useState(null);
  const [pricePerPerson, setPricePerPerson] = useState(null);
  const [priceTwinPerson, setPriceTwinPerson] = useState(null);
  const [priceTriplePerson, setPriceTriplePerson] = useState(null);
  const [day, setDay] = useState(null);
  const [night, setNight] = useState(null);

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const formRef = useRef();

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    // Make sure id is defined before making the fetch request
    if (id) {
      fetch(`http://localhost:5000/api/v1/domestic/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage);
        })
        .catch(() => {
          toast.error("Something went wrong.");
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

  const handleHotelData = (e) => {
    e.preventDefault();
    const data = {
      hotel_name: hotelName || specificPackage.hotel_name,
      price: price || specificPackage.price,
      short_description: shortDescription || specificPackage.short_description,
      day: day || specificPackage.day,
      night: night || specificPackage.night,
      price_per_person: pricePerPerson || specificPackage.price_per_person,
      price_twin_person: priceTwinPerson || specificPackage.price_twin_person,
      price_triple_person: priceTriplePerson || specificPackage.price_triple_person,

      image: getImage.length !== 0 ? getImage : specificPackage?.image?.[0],
      description: value || specificPackage.description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/domestic/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        if (
          response.data.message ===
          "Package update successful"
        ) {
          toast.success("Package update successful");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/hotel/domestic");
          setLoading(false);
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !==
              "Package update successful")
        ) {
          toast.error("Please fill all the field.");
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  console.log(specificPackage);

  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Domestic Hotel Data Update
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleHotelData}>
                <div className={styles.formControl}>
                  <div>
                    <label>Hotel Name </label>
                    <input
                      onChange={(e) => setHotelName(e.target.value)}
                      name="checkIn"
                      placeholder="Check In  "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.hotel_name}
                    />
                  </div>
                  <div>
                    <label>Price </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      name="checkout"
                      placeholder="Check Out "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.price}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <div>
                    <label>Short Desc </label>
                    <input
                      onChange={(e) => setShortDescription(e.target.value)}
                      name="day"
                      placeholder="Day/Night "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.short_description}
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
                      defaultValue={specificPackage.price_per_person}
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
                      defaultValue={specificPackage.price_twin_person}
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
                      defaultValue={specificPackage.price_triple_person}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <div>
                    <label>Day </label>
                    <input
                      onChange={(e) => setDay(e.target.value)}
                      name="startPrice"
                      placeholder="Day "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.day}
                    />
                  </div>
                  <div>
                    <label>Night </label>
                    <input
                      onChange={(e) => setNight(e.target.value)}
                      name="startPrice"
                      placeholder="Night "
                      type="text"
                      className={styles.inputField}
                      defaultValue={specificPackage.night}
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
                          <label for="files" className=" overflow-hidden">
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

export default dynamic(() => Promise.resolve(UpdateDomestic), { ssr: false });
