import React, { useState } from "react";
import { LocalPhone } from "@mui/icons-material";
import { Beenhere } from "@mui/icons-material";
import style from "../../Vissa/VisaRequest/VisaRequest.module.css";
import styling from "../UmrahBook/UmrahBook.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { decryptTransform } from "../../EncryptAndDecrypt/EncryptAnsDecrypt";
import Cookies from "js-cookie";
import { FormError } from "../../form-error";
import { FormWarning } from "../../form-warning";
const UmrahBook = () => {
  const [getFile, setGetFile] = useState({});
  const [getPdfLinks, setGetPdfLinks] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [user, setUser] = useState({});
  const [specificPackage, setSpecificPackage] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { id, type } = router.query;

  useEffect(() => {
    // Make sure id is defined before making the fetch request
    if (id && type === "umrah") {
      setLoading(true);
      fetch(`http://localhost:5000/api/v1/umrah/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id, type]);
   

  const em = decryptTransform(Cookies.get("em_g"));

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser));
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [em]);

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
        setGetPdfLinks(data.imageLinks);
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
      setGetPdfLinks([]);
      setGetFile({});
    }
  };

  const onSubmit = (data) => {
    if (getPdfLinks.length === 0) {
      return setError("Upload a doc");
    }
    setError("");
    setSuccess("");
    const values = {
      city: data.cityName,
      passenger: data.passengerNumber,
      given_name: data.name,
      surname: data.surname,
      journey_date: data.date,
      passport: data.passportNumber,
      mobile_number: data.mobileNumber,
      confirmation_email: data.email,
      pdf: getPdfLinks,
      requirements: requirements,
      email: user.email,
      profile_type: user.profile_type,
      user_type: user.user_type,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/confirmation/hajj/post/one", values)
      .then(function (response) {
        if (response.data.message === "Send request for hajj.") {
          setSuccess("Confirmation request accepted. Please wait to confirm.");

          if (user.profile_type === "b2c") {
            router.push("/profile/booking");
          }
          if (user.profile_type === "b2b") {
            router.push("/b2bdashboard/hajj/hajjbooking");
          }
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (getPdfLinks.length > 0) {
      setError("");
    }
  }, [getPdfLinks.length]);

  console.log(user);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  Write down Your City{" "}
                  <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <input
                  {...register("cityName", { required: true })}
                  type="text"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.cityName && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    City name is required.
                  </span>
                )}
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passenger Number </label>
                <input
                  {...register("passengerNumber", {
                    required: "Passenger number name is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Enter a valid passenger number",
                    },
                  })}
                  type="text"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.passengerNumber && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    {errors.passengerNumber.message}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  When do you want to go?
                </label>
                <input
                  {...register("date", { required: true })}
                  placeholder="Date "
                  type="date"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.date && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    Date is required.
                  </span>
                )}
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passport Number </label>
                <input
                  {...register("passportNumber", { required: true })}
                  placeholder="Passport Number "
                  type="text"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.passportNumber && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    Passport number is required.
                  </span>
                )}
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
                  // onChange={(e) => setName(e.target.value)}
                  {...register("name", { required: true })}
                  placeholder="Given Name "
                  type="text"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.name && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    Name is required.
                  </span>
                )}
              </div>
              <div className={style.formControl}>
                <label placeholder="Surname" className={style.inputLabel}>
                  {" "}
                  Surname{" "}
                </label>
                <input
                  // onChange={(e) => setSurname(e.target.value)}
                  {...register("surname", { required: true })}
                  placeholder="Surname"
                  type="text"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.surname && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    Surname is required.
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  Mobile Number{" "}
                  <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <input
                  // onChange={(e) => setMobileNumber(e.target.value)}
                  {...register("mobileNumber", {
                    required: "Mobile number is required.",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Enter a valid mobile number",
                    },
                  })}
                  placeholder="Phone Number"
                  type="text"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.mobileNumber && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  {" "}
                  Email <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <input
                  // onChange={(e) => setEmail(e.target.value)}
                  {...register("email", { required: true })}
                  placeholder="Email"
                  type="email"
                  className={style.visaInput}
                />
                <br className="hidden lg:flex" />
                {errors.email && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    Email is required.
                  </span>
                )}
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
              {imageLoading ? (
                <div>Uploading...</div>
              ) : (
                <>
                  {getFile[0]?.name ? (
                    <label for="files">{getFile[0]?.name}</label>
                  ) : (
                    <label for="files">Upload Your Doc</label>
                  )}
                </>
              )}
            </div>
            <div>
              {error && <span className="text-red-400 text-sm">{error}</span>}
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
            {!user.email && (
              <FormWarning message={"Need to login before confirmation"} />
            )}

            <div className="flex justify-end">
              <button
                className={style.visaSubmitBtn}
                disabled={loading || imageLoading || !user.email ? true : false}
              >
                Confirm Request
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <input type="file" multiple accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload PDF</button> */}
    </section>
  );
};

export default UmrahBook;
