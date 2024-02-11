import React, { useEffect } from "react";
import style from "./VisaRequest.module.css";
import { LocalPhone, CloudUpload } from "@mui/icons-material";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { decryptTransform } from "../../EncryptAndDecrypt/EncryptAnsDecrypt";
import Cookies from "js-cookie";
import { FormError } from "../../form-error";

const VisaRequest = () => {
  const [error, setError] = useState("")
  const [getFile, setGetFile] = useState({});
  const [getPdfLinks, setGetPdfLinks] = useState([]);
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [user, setUser] = useState({});
  const formRef = useRef();
  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  useEffect(() => {
    if (getPdfLinks.length !== 0) {
      setError("");
    }
  }, [getPdfLinks.length]);
  
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
      setGetImage([]);
      setGetFile({});
    }
  };

 
  const onSubmit = (data) => {
    if(getPdfLinks.length !== 0){
      const values = {
        country: data.country,
        write_down_country: data.write_down,
        journey_date: data.date,
        passport: data.passport,
        given_name: data.name,
        surname: data.surName,
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
        .post("http://localhost:5000/api/v1/visa", values)
        .then(function (response) {
          if (response.data.message === "Send request for Visa Confirmation.") {
            toast.success(
              "Confirmation request accepted. Please wait to confirm."
            );
            formRef.current.reset();
            if (user.profile_type === "b2c") {
              router.push("/profile/booking");
            }
            if (user.profile_type === "b2b") {
              router.push("/b2bdashboard/visa/visabooking");
            }
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
    }else{
      setError("Please upload doc.")
    }
    
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
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  {" "}
                  Select a destination from list
                </label>
                <select
                  // onChange={(e) => setCountry(e.target.value)}
                  {...register("country", { required: true })}
                  className={style.visaInput}
                >
                  <option selected value=" ">
                    Choose your country
                  </option>
                  <option   value="Bangladesh">
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
                <br />
                {errors.country && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    Choose your country
                  </span>
                )}
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Or Write down </label>
                <input
                  {...register("write_down")}
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
                  // onChange={(e) => setGetDate(e.target.value)}
                  {...register("date", { required: true })}
                  placeholder="Date "
                  type="date"
                  className={style.visaInput}
                   
                />
                <br />
                {errors.date && (
                  <span className="text-sm text-red-400 mt-1">
                    {" "}
                    Select correct date.
                  </span>
                )}
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passport Number </label>
                <input
                 
                  className={style.visaInput}
                  {...register("passport", {
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Enter a valid passport number",
                    },
                  })}
                  placeholder="Passport Number"
                  type="text"
                />
                {errors.passport && (
                  <p className="text-red-400 text-sm my-1">
                    {errors.passport.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-bold">Tell us about Yourself </h2>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Given Name </label>
                <input
                  // onChange={(e) => setName(e.target.value)}
                  {...register("name", { required: true })}
                  placeholder="Given Name "
                  type="text"
                  className={style.visaInput}
                   
                />
                 {errors.name && (
                  <p className="text-red-400 text-sm my-1"> Enter your name</p>
                )}
              </div>
              <div className={style.formControl}>
                <label placeholder="Surname" className={style.inputLabel}>
                  {" "}
                  Surname{" "}
                </label>
                <input
                  // onChange={(e) => setSurname(e.target.value)}
                  {...register("surName")}
                  placeholder="Surname"
                  type="text"
                  className={style.visaInput}
                   
                />
              </div>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Movile Number </label>
                <input
                  // onChange={(e) => setMobileNumber(e.target.value)}
                  {...register("mobileNumber", {
                    required: "Mobile Number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter a valid number",
                    },
                  })}
                  placeholder="Phone Number"
                  type="text"
                  className={style.visaInput}
                   
                />
                {errors.mobileNumber && (
                  <p className="text-sm text-red-400 my-1">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}> Email </label>
                <input
                  // onChange={(e) => setEmail(e.target.value)}
                  {...register("email", { required: true })}
                  placeholder="Email"
                  type="text"
                  className={style.visaInput}
                   
                />
                {errors.email && (
                  <p className="text-sm text-red-400 my-1">
                    {" "}
                    Enter your email.
                  </p>
                )}
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
                {imageLoading ? (
                  <div>Uploading...</div>
                ) : (
                  <>
                    {getFile[0]?.name ? (
                      <label for="files">{getFile[0]?.name}</label>
                    ) : (
                      <label for="files">
                        {" "}
                        <CloudUpload className={style.uploadIcon} /> Upload Your
                        Doc
                      </label>
                    )}
                  </>
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
            <div className="text-sm text-red-400 text-start my-1">
              {error}
            </div>
            {
              !user.email && <FormError message={"Need to login before confirmation"}/>
            }
            <button
              disabled={loading || imageLoading || !user.email ? true : false}
              className={style.visaSubmitBtn}
            >
              Confirm Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VisaRequest;
