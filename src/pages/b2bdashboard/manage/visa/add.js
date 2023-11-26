import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload,Checklist } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect, useRef } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
const Add = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [countryName, setCountryName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [visaType, setVisaType] = useState(null);
  const [travelerType, setTravelerType] = useState(null);
  const [entry, setEntry] = useState(null);
  const [duration, setDuration] = useState(null);
  const [processingTime, setProcessingTime] = useState(null);
  const [embassyFee, setEmbassyFee] = useState(null);
  const [agentFee, setAgentFee] = useState(null);
  const [agencyFee, setAgencyFee] = useState(null);
  const [serviceCharge, setServiceCharge] = useState(null);
  const [stay, setStay] = useState(null);
  const [getDate, setGetDate] = useState(null);
  const [requirement, setRequirement] = useState(null);

  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  let files;
  const handlePdf = async (e) => {
    setGetFile(e.target.files);
    try {
      files = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("pdfFiles", files[i]);
      }
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        setGetImage(data.imageLinks);
        // console.log(data.imageLinks);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleVisaData = (e) => {
    e.preventDefault();
    const data = {
      country_name: countryName,
      city_name: cityName,
      visa_type: visaType,
      traveler_type: travelerType,
      entry: entry,
      duration: duration,
      processing_time: processingTime,
      embassy_fee: embassyFee,
      agent_fee: agentFee,
      agency_fee: agencyFee,
      service_charge: serviceCharge,
      stay: stay,

      date: getDate,
      requirement: requirement,

      image: getImage,
      description: value,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/visa/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Successfully visa details posted.") {
          toast.success("Post successful.");
          
          formRef.current.reset();
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully visa details posted.")
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
            <h2 className="text-3xl font-bold text-center">Visa Data Input </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleVisaData}>
                <div className={styles.formControl}>
                  <div>
                    <label> Enter Country </label>
                    <select
                      onChange={(e) => setCountryName(e.target.value)}
                      className={styles.inputField}
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
                    <label> Enter City </label>
                    <select
                      onChange={(e) => setCityName(e.target.value)}
                      className={styles.inputField}
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
                    <label> Visa Type </label>
                    <select
                      onChange={(e) => setVisaType(e.target.value)}
                      className={styles.inputField}
                    >
                      <option value="Select Visa Type ">
                        Select Visa Type
                      </option>
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Student Visa">Student Visa</option>
                      <option value="Business Visa">Business Visa</option>
                    </select>
                  </div>
                  <div>
                    <label> Traveller Type </label>
                    <select
                      onChange={(e) => setTravelerType(e.target.value)}
                      className={styles.inputField}
                    >
                      <option value="Select Traveller Type">
                        Select Traveller Type{" "}
                      </option>
                      <option value="Govt. Job Holder">Govt. Job Holder</option>
                      <option value="Private Job Holder">
                        Private Job Holder
                      </option>
                      <option value="Student">Student</option>
                      <option value="Non Student">Non Student</option>
                      <option value="House Wife">House Wife </option>
                      <option value="Advocate Lawyer">Advocate Lawyer </option>
                      <option value="Doctor">Doctor </option>
                      <option value="Unemployment">Unemployment </option>
                      <option value="Business Man">Business Man </option>
                    </select>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Entry </label>
                    <input
                      onChange={(e) => setEntry(e.target.value)}
                      name="Entry"
                      placeholder="Entry"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Duration </label>
                    <input
                      onChange={(e) => setDuration(e.target.value)}
                      name="Duration"
                      placeholder="Duration"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Maximum Stay </label>
                    <input
                      onChange={(e) => setEntry(e.target.value)}
                      name="Entry"
                      placeholder="Maximum Stay"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Interview </label>
                    <input
                      onChange={(e) => setDuration(e.target.value)}
                      name="Duration"
                      placeholder="Interview"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Processing Time </label>
                    <input
                      onChange={(e) => setProcessingTime(e.target.value)}
                      name="process"
                      placeholder="Processing Time "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Embassy Fee </label>
                    <input
                      onChange={(e) => setEmbassyFee(e.target.value)}
                      name="coast"
                      placeholder="Embassy Fee"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Agent Fee </label>
                    <input
                      onChange={(e) => setAgentFee(e.target.value)}
                      name="process"
                      placeholder="Agent Fee"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Agency Fee </label>
                    <input
                      onChange={(e) => setAgencyFee(e.target.value)}
                      name="coast"
                      placeholder="Agency Fee"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Service Charge </label>
                    <input
                      onChange={(e) => setServiceCharge(e.target.value)}
                      name="process"
                      placeholder="Service Charge"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Stay </label>
                    <input
                      onChange={(e) => setStay(e.target.value)}
                      name="stay"
                      placeholder="Stay"
                      type="text"
                      className={styles.inputField}
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
                    />
                  </div>
                  <div onClick={() => window.my_modal_3.showModal()}>
                    <label>Requirement List </label>
                   <div   className={styles.requirementField}>
                   <input
                      onChange={(e) => setRequirementList(e.target.value)}
                      name="requirement"
                      placeholder="Requirement List "
                      type="text"
                     
                    />
                    <Checklist className={styles.requirementIcon}/>


                   </div>
                   <div className={styles.modalWrap} >
                <dialog id="my_modal_3" className={styles.requirementModal}>
                  <form method="dialog" className="modal-box">
                    <button className={styles.hotelModalCloseBtn2}>✕</button>
                   <strong className="block my-3 "> Required Documents for E-Visa (Malaysia)</strong>
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
                  </form>
                </dialog>
              </div>
                  </div>
                </div>
                <div className={styles.formControl}>
                 
                  <div>
                    <label>Validity Day</label>
                    <input
                      onChange={(e) => setRequirement(e.target.value)}
                      name="validity"
                      placeholder="Validity Day"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Max Stay</label>
                    <input
                      onChange={(e) => setGetDate(e.target.value)}
                      name="date"
                      placeholder="Max Stay "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
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
                  <button disabled={loading ? true : false} className={styles.submitBtn} type="submit">
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

export default dynamic(() => Promise.resolve(Add), { ssr: false });
