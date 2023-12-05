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
import { useRouter } from "next/router";
import { useRef } from "react";

const HajjVisaRequirement = () => {
  const [singleRequirement, setSingleRequirement] = useState({});
  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/v1/requirement/hajj/${id}`)
        .then((res) => res.json())
        .then((data) => setSingleRequirement(data.result));
    }
  }, [id]);

  // useEffect(() => {
  //   setVisaType(singleRequirement.visa_type);
  //   setValue(singleRequirement.requirements);
  // }, [singleRequirement.requirements, singleRequirement.visa_type]);

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

  const handleHajjRequirementUpdate = (e) => {
    e.preventDefault();
    const data = {
      title: title || singleRequirement.title,
      sub_title: subTitle || singleRequirement.sub_title,
      image: getImage.length !== 0 ? getImage : singleRequirement?.image?.[0],
      description: value || singleRequirement?.description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/requirement/hajj/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Package update successful") {
          toast.success("Package update successful");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/hajj-visa-requirement");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const handleVisaTypeChange = (e) => {
  //   setVisaType(e.target.value);
  // };

  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Hajj Visa Requirment Data Update
            </h2>
            <div className="w-full mx-auto">
              <form onSubmit={handleHajjRequirementUpdate} ref={formRef}>
                <div className={styles.formControl}>
                  <div>
                    <label>Title </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      name="category"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                      defaultValue={singleRequirement.title}
                    />
                  </div>
                  <div>
                    <label>Sub Title</label>
                    <input
                      onChange={(e) => setSubTitle(e.target.value)}
                      name="productCategory"
                      placeholder="Sub Title"
                      type="text"
                      className={styles.inputField}
                      defaultValue={singleRequirement.sub_title}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    {getFile[0]?.name ||
                    singleRequirement?.image?.length > 0 ? (
                      <label for="files">
                        {getFile[0]?.name || singleRequirement.image[0]}
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
                      // defaultValue={
                      //   singleRequirement?.image
                      //     ? singleRequirement.image[0]
                      //     : undefined
                      // }
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <ReactQuill
                      value={value || singleRequirement.description}
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

export default dynamic(() => Promise.resolve(HajjVisaRequirement), {
  ssr: false,
});
