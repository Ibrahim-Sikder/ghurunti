import React from "react";
import style from "./VisaRequest.module.css";
import { LocalPhone, CloudUpload } from "@mui/icons-material";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

const VisaRequest = () => {
  const [getFile, setGetFile] = useState({});
  const [getPdfLinks, setGetPdfLinks] = useState([]);
  const [country, setCountry] = useState("");
  const [writeDownCountry, setWriteDownCountry] = useState(0);
  const [getDate, setGetDate] = useState("");
  const [passportNumber, setPassportNumber] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
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
      setLoading(true)
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        setGetPdfLinks(data.imageLinks);
        // console.log(data.imageLinks);
        setLoading(false)
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleConfirmVisaRequest = (e) => {
    e.preventDefault();
    const data = {
      country: country,
      write_down_country: writeDownCountry,
      journey_date: getDate,
      passport: passportNumber,
      given_name: name,
      surname: surname,
      mobile_number: mobileNumber,
      email: email,
      pdf: getPdfLinks,
      requirements: requirements,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/visa", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Send request for Visa Confirmation.") {
          toast.success(
            "Confirmation request accepted. Please wait to confirm."
          );
          formRef.current.reset();
          setCountry("");
          setWriteDownCountry("");
          setGetDate("");
          setPassportNumber();
          setName("");
          setSurname("");
          setEmail("");
          setRequirements("");
          setGetPdfLinks([]);
        }
        if (
          response.data === "Interval server error" &&
          response.data !== "Send request for Visa Confirmation."
        ) {
          toast.error("Something went wrong!");
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
    <section>
      <div className={style.visaRequestWrap}>
        <div className={style.needHelp}>
          <div className={style.needHelpLeft}>
            <h3 className="text-xl font-bold mt-5">Need More Help !</h3>
            <span>
              Call our experts and share any questions you have. Our team is
              ready to assist you every step of the way.
            </span>
          </div>
          <div className={style.needHelpRightSide}>
            <LocalPhone className={style.phoneIcon} />
            <button>01885071488</button>
          </div>
        </div>
        <div className={style.visaRequestForm}>
          <h2 className="text-xl font-bold">
            Tell us where do you want to go ?{" "}
          </h2>
          <form ref={formRef} onSubmit={handleConfirmVisaRequest}>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  {" "}
                  Select a destination from list
                </label>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  className={style.visaInput}
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
              <div className={style.formControl}>
                <label className={style.inputLabel}>Or Write down </label>
                <input
                  onChange={(e) => setWriteDownCountry(e.target.value)}
                  type="text"
                  className={style.visaInput}
                />
              </div>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  When do you want to go?
                </label>
                <input
                  onChange={(e) => setGetDate(e.target.value)}
                  placeholder="Date "
                  type="date"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passport Number </label>
                <input
                  onChange={(e) => setPassportNumber(e.target.value)}
                  placeholder="Passport Number "
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-bold">Tell us about Yourself </h2>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Given Name </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Given Name "
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label placeholder="Surname" className={style.inputLabel}>
                  {" "}
                  Surname{" "}
                </label>
                <input
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Surname"
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Movile Number </label>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Phone Number"
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}> Email </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
            </div>
            <div className={`${style.formControl} ${style.uploadDoc}`}>
              <div className="flex items-center ">
                <div>
                  <input
                    onChange={handlePdf}
                    name="image"
                    accept=".pdf"
                    className={style.inputField}
                    type="file"
                    id="files"
                    class="hidden"
                    multiple
                  />
                </div>
                {getFile[0]?.name ? (
                  <label for="files">{getFile[0]?.name}</label>
                ) : (
                  <label for="files">
                    {" "}
                    <CloudUpload className={style.uploadIcon} /> Upload Your Doc
                  </label>
                )}

                {/* <label for="files"></label>
                  <CloudUpload className={style.uploadIcon} /> */}
              </div>
              {/* <div className={style.uploadFile}>
                    
                    
                  </div> */}
            </div>
            <div className={style.formControl}>
              <h2 className="font-bold text-xl"> Share Your Requirements </h2>
              <textarea
                onChange={(e) => setRequirements(e.target.value)}
                className={style.textField}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button disabled={loading ? true : false} className={style.visaSubmitBtn}>Confirm Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VisaRequest;
