import React, { useState } from "react";
import { LocalPhone } from "@mui/icons-material";
import { Beenhere } from "@mui/icons-material";
import style from "../../Vissa/VisaRequest/VisaRequest.module.css";
import styling from "../UmrahBook/UmrahBook.module.css";
import axios from "axios";
import toast from "react-hot-toast";
const HajjBook = () => {
  const [getFile, setGetFile] = useState({});
  const [getPdfLinks, setGetPdfLinks] = useState([]);
  const [cityName, setCityName] = useState("");
  const [passengerNumber, setPassengerNumber] = useState(0);
  const [date, setDate] = useState();
  const [passportNumber, setPassportNumber] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);

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
        setLoading(false)
        // console.log(data.imageLinks);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleConfirmUmrah = (e) => {
    e.preventDefault();
    const data = {
      city: cityName,
      passenger: passengerNumber,
      given_name: name,
      surname: surname,
      journey_date: date,
      passport: passportNumber,
      mobile_number: mobileNumber,
      email: email,
      pdf: getPdfLinks,
      requirements: requirements,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/umrah", data)
      .then(function (response) {
        console.log(response.data)
        if (response.data.message === "Send request for umrah.") {
          toast.success(
            "Confirmation request accepted. Please wait to confirm."
          );
        }
      })
      .catch((error) => {
        toast.error(error);
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

        <div className={styling.visaRequirementUmrahWrap}>
          <div className={styling.visaRquirementForUmrah}>
            <h2 className="text-2xl font-bold my-3">
              Required list of documents for Hajj visa processing from Dhaka
              Bangladesh
            </h2>
            <div className={styling.requirementText}>
              <Beenhere className={styling.checkIcon} />
              <p className="ml-2">
                Original passport must be valid for six months from the date of
                travel and 4 blank pages for visa stamping
              </p>
            </div>
            <div className={styling.requirementText}>
              <Beenhere className={styling.checkIcon} />
              <p className="ml-2">
                Most recent 2 copy passport size photographs with white
                background only{" "}
              </p>
            </div>
            <div className={styling.requirementText}>
              <Beenhere className={styling.checkIcon} />
              <p className="ml-2">Original SMART Card / NID Card</p>
            </div>
            <div className={styling.requirementText}>
              <Beenhere className={styling.checkIcon} />
              <p className="ml-2">
                Health Requirements: Proof of OPV or IPV vaccination is required
                6 weeks prior to the application for an entry visa
              </p>
            </div>
            <div className={styling.requirementText}>
              <Beenhere className={styling.checkIcon} />
              <p className="ml-2">
                A woman traveling alone must be 45 years old and must obtain a
                letter of authorization (notarized) from her mahram
              </p>
            </div>
            <div className={styling.requirementText}>
              <Beenhere className={styling.checkIcon} />
              <p className="ml-2">
                Copy of birth certificate for children (6 years)
              </p>
            </div>
          </div>

          <div className={styling.uploadDocument}>
            <div className={styling.visaRquirementForUmrah}>
              <h2 className="text-2xl font-bold">Few Popular Hajj Packages</h2>
              <div className={styling.requirementText}>
                <Beenhere className={styling.checkIcon} />
                <p className="ml-2">Platinum Umrah Packages</p>
              </div>
              <div className={styling.requirementText}>
                <Beenhere className={styling.checkIcon} />
                <p className="ml-2">Economy Hajj Package </p>
              </div>
              <div className={styling.requirementText}>
                <Beenhere className={styling.checkIcon} />
                <p className="ml-2">Shifting Hajj Package </p>
              </div>
              <div className={styling.requirementText}>
                <Beenhere className={styling.checkIcon} />
                <p className="ml-2">Non-Shifting Hajj Package </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.visaRequestForm}>
          <h2 className="text-xl font-bold">
            Tell us where do you want to go ?{" "}
          </h2>
          <form onSubmit={handleConfirmUmrah}>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  Write down Your City{" "}
                  <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <input
                  onChange={(e) => {
                    setCityName(e.target.value);
                  }}
                  type="text"
                  className={style.visaInput}
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passenger Number </label>
                <input
                  onChange={(e) => setPassengerNumber(e.target.value)}
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
                  onChange={(e) => setDate(e.target.value)}
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
                <label className={style.inputLabel}>
                  Given Name <small className="text-red-500 text-xl">*</small>{" "}
                </label>
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
                <label className={style.inputLabel}>
                  Mobile Number{" "}
                  <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Phone Number"
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  {" "}
                  Email <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className={style.visaInput}
                  required
                />
              </div>
            </div>
            <div className={styling.uploadDoc}>
              <input
                type="file"
                accept=".pdf"
                onChange={handlePdf}
                className="hidden"
                id="files"
                multiple
              />
              {getFile[0]?.name ? (
                <label for="files">{getFile[0]?.name}</label>
              ) : (
                <label for="files">Upload Your Doc</label>
              )}
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
            <button
              className={style.visaSubmitBtn}
              disabled={loading ? true : false}
            >
              Confirm Request
            </button>
          </form>
        </div>
      </div>
      {/* <input type="file" multiple accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload PDF</button> */}
    </section>
  );
};

export default HajjBook;
