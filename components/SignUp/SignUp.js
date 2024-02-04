import Image from "next/image";
import React, { useState } from "react";
import style from "./SignUp.module.css";
import login from "../../public/assets/login.png";
import facebook from "../../public/assets/facebook.png";
import google from "../../public/assets/google.png";
import Link from "next/link";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import axios from "axios";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "@/Redux/features/sign-up-slice";
const SignUp = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = () => {};
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = async (data) => {
    setError("");
    setConfirmation("");
    try {
      const values = {
        username: data.username,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword,
      };

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        values
      );
      console.log(response);
      if (response.status === 201) {
        setConfirmation("Check your email for confirmation.");
        dispatch(setEmail(response.data.email));
        setError(""); // Assuming you want to log the response data
      }
    } catch (error) {
      setLoading(false);

      if (error.response && error.response.status === 400) {
        console.log(error.response.data.message);
        setLoading(false);
        setError(error.response.data.message);
        setConfirmation("");
      } else if (error.request) {
        setLoading(false);
        setError("No response received from the server.");
        setConfirmation("");
      } else {
        setLoading(false);
        setError("Error setting up the request");
        setConfirmation("");
      }
      // Handle the error appropriately, e.g., show a user-friendly error message.
    } finally {
      setLoading(false);
    }
  };

  const { email } = useSelector((state) => state.email);
  

  const resendVerificationLink = async () => {
    setError("");
    setConfirmation("");

    // Disable the button
    setButtonDisabled(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/register/resend`,
        { email }
      );
      if (response.status === 200) {
        setConfirmation("Check your email for confirmation.");
        setError("");
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      // Enable the button after a 10-second delay
      setTimeout(() => {
        setButtonDisabled(false);
      }, 10000);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        <div>
          <Image
            loading="lazy"
            src={login}
            alt="Picture of the author"
            width={600}
            height={700}
          />
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className={style.inputLabel}>User Name</label> <br />
              <input
                type="text"
                placeholder="User Name"
                className={style.loginInput}
                {...register("username", {
                  required: "Username is required",
                  minLength: 8,
                })}
              />
            </div>
            {errors.username && (
              <p className="text-red-500" role="alert">
                {errors.username?.message}
              </p>
            )}
            <div className="mb-5">
              <label className={style.inputLabel}>Email Address</label> <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={style.loginInput}
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
            <div className="mb-5 relative">
              <label className={style.inputLabel}>Password</label> <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={style.loginInput}
                {...register("password", { required: "Password is required" })}
              />
              <span
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className={style.ShowIcon}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
            <div className="mb-5 relative">
              <label className={style.inputLabel}>Confirm Password</label>{" "}
              <br />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={style.loginInput}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
              />
              <span
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className={style.ShowIcon}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}

            {error && <FormError message={error} />}
            {confirmation && <FormSuccess message={confirmation} />}

            <div
              className={confirmation ? "mb-5 ml-16 mt-5" : "mb-5 ml-16 mt-10"}
            >
              <button
                disabled={loading}
                className={style.loginBtn}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          {
            <div className="flex justify-end ">
              <button
                onClick={resendVerificationLink}
                disabled={isButtonDisabled}
                className={
                  isButtonDisabled
                    ? "mb-3 text-gray-400 no-underline"
                    : "mb-3 underline"
                }
              >
                Resend
              </button>
            </div>
          }
          <div className="flex items-center ">
            <p className={style.devided}></p>
            <span className="mx-5">or</span>
            <p className={style.devided}></p>
          </div>
          <div className="mb-5 ml-16 sm:ml-8 mt-5">
            <Link href="/signupAgent">
              <button className={style.loginBtn2} type="submit">
                Apply For Agent
              </button>
            </Link>
          </div>
          <div className="mb-5 ml-16 sm:ml-8 mt-10">
            <Link href="/login">
              <button className={style.loginBtn3} type="submit">
                Login Now{" "}
              </button>
            </Link>
          </div>
          <div className={style.loginWithProvider}>
            <div className={style.providerLoginWrap}>
              <div className={style.circle}>
                <button type="button">
                  <Image
                    loading="lazy"
                    src={google}
                    alt="Picture of the author"
                    width={40}
                    height={20}
                  />
                </button>
              </div>
              <div className={style.circle}>
                <button type="button">
                  <Image
                    loading="lazy"
                    src={facebook}
                    alt="Picture of the author"
                    width={40}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
