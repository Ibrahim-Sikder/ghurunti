import Image from "next/image";
import React, { useState } from "react";
import login from "../../../public/assets/agent.png";
import { useRouter } from "next/router";
import style from "./signupAgent.module.css";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
import { CloudUpload } from "@mui/icons-material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUpAgent = () => {
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [agree, setAgree] = useState(false);
  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
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

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const values = {
        given_name: data.name,
        surname: data.surname,
        company_name: data.company,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword,
        country_name: data.country,
        city_name: data.city,
        mobile_number: data.number,
        zip_code: data.zipCode,
        image: getImage,
        agree: agree,
        profile_type: "b2b",
      };

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        values
      );
      console.log(response.status);
      if (response.status === 201) {
        setConfirmation("Check your email for confirmation.");

        setError(""); // Assuming you want to log the response data
      }
    } catch (error) {
      setLoading(false);

      if (error.response && error.response.status === 400) {
        setLoading(false);
        setError(error.response.data.message);
        setConfirmation("");
      } else if (error.request) {
        setLoading(false);
        setError("No response received from the server.");
      } else {
        setLoading(false);
        setError("Error setting up the request");
      }
      // Handle the error appropriately, e.g., show a user-friendly error message.
    } finally {
      setLoading(false);
    }
  };

  const handleAgreement = () => {
    setAgree(!agree);
  };

  // console.log(getImage);
  return (
    <section>
      <Helmet>
        <title>Ghuronti || SignUp Agent </title>
      </Helmet>
      <Nav />
      <div className={style.signUpAgentWrap}>
        <div className={style.signUpAgent}>
          <div className={style.signUpAgenLeft}>
            <Image
              loading="lazy"
              src={login}
              alt="Picture of the author"
              className={style.agentImg}
            />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.formControl}>
                <div className="mb-5 md:mr-5 sm:mr-[0px] relative">
                  <label className={style.loginLabel}>Given Name</label> <br />
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Given Name"
                    className={style.loginInput}
                    required
                  />
                </div>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Surname</label> <br />
                  <input
                    {...register("surname", { required: true })}
                    type="text"
                    placeholder="Surname"
                    className={style.loginInput}
                    required
                  />
                </div>
              </div>
              <div className={style.formControl}>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Company Name </label>{" "}
                  <br />
                  <input
                    {...register("company", { required: true })}
                    type="text"
                    placeholder="Company Name "
                    className={style.loginInput}
                    required
                  />
                </div>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Email Address</label>{" "}
                  <br />
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className={style.loginInput}
                    required
                  />
                </div>
              </div>
              <div className={style.formControl}>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Password</label> <br />
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className={style.loginInput}
                    required
                  />
                </div>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Confirm Password</label>{" "}
                  <br />
                  <input
                    type="password"
                    {...register("confirmPassword", { required: true })}
                    placeholder="Confirm Password"
                    className={style.loginInput}
                    required
                  />
                </div>
              </div>
              <div className={style.formControl}>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Country Name</label>{" "}
                  <br />
                  <select
                    {...register("country", { required: true })}
                    className={style.loginInput}
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
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>City Name</label> <br />
                  <select
                    {...register("city", { required: true })}
                    className={style.loginInput}
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
              <div className={style.formControl}>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Mobile Number</label>{" "}
                  <br />
                  <input
                    {...register("number", { required: true })}
                    type="number"
                    placeholder="Number"
                    className={style.loginInput}
                    required
                  />
                </div>
                <div className="mb-5 relative">
                  <label className={style.loginLabel}>Zip/Postal Code </label>{" "}
                  <br />
                  <input
                    {...register("zipCode", { required: true })}
                    type="text"
                    placeholder="Postal Code"
                    className={style.loginInput}
                    required
                  />
                </div>
              </div>
              <div className={style.fileUpload}>
                <div className={style.uploadFile}>
                  {getFile[0]?.name ? (
                    <label for="files">{getFile[0]?.name}</label>
                  ) : (
                    <label for="files">
                      {" "}
                      <CloudUpload className={style.uploadIcon} /> Image Upload{" "}
                    </label>
                  )}

                  <input
                    onChange={handlePdf}
                    name="image"
                    // accept=".jpg/.jpeg/.png"
                    className={style.inputField}
                    type="file"
                    id="files"
                    class="hidden"
                    multiple
                  />
                </div>
              </div>
              <div className="mt-5 flex">
                <input onClick={handleAgreement} type="checkbox" required />
                <small className="ml-2">
                  {" "}
                  I agree with sharing the above mentioned information with
                  Ghuronti.
                </small>
              </div>
              <div className="text-center">
                {confirmation && (
                  <div className="pt-5 text-center text-[#4AB449]">
                    {confirmation}
                  </div>
                )}
                {error && (
                  <div className="py-3 text-center text-red-500">{error}</div>
                )}
                <div className="mb-5  mt-10">
                  <button
                    disabled={loading}
                    className={style.loginBtn}
                    type="submit"
                  >
                    Sign Up as Agent
                  </button>
                </div>
                <div className="">
                  <small>
                    Already a Partner?
                    <Link href="/loginAgent">
                      {" "}
                      <span className="text-[#4AB449]">Login Now</span>
                    </Link>
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignUpAgent;
