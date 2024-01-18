import React, { useState } from "react";
import style from "./Login.module.css";
import Image from "next/image";
import login from "../../public/assets/login.png";
import facebook from "../../public/assets/facebook.png";
import google from "../../public/assets/google.png";
import Link from "next/link";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Cookies from "js-cookie";
import { encryptTransform } from "../EncryptAndDecrypt/EncryptAnsDecrypt";

const Login = () => {
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
  const [error, setError] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      const values = {
        username: data.username,
        email: data.email,
        password: data.password,
      };

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        values
      );

      if (response.data.status === "success") {
        setConfirmation(
          "Successfully logged in. Explore and enjoy your personalized experience!"
        );
        setError(""); // Assuming you want to log the response data
        Cookies.set("token", encryptTransform(response.data.token));
        Cookies.set("id", encryptTransform(response.data.user.id));
        Cookies.set("em", encryptTransform(response.data.user.email));
        const { query } = router;
        const nextPage = query.next || "/";
        router.push(nextPage);
      }
      if (response.data.status === "failed") {
        setVerificationError(response.data.message);
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

  return (
    <>
      <Helmet>
        <title>Ghuronti || Login </title>
      </Helmet>
      <section className={style.loginWrap}>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div>
            <Image
              loading="lazy"
              src={login}
              alt="Picture of the author"
              width={600}
              height={700}
            />
          </div>
          <div className="mt-14">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5 relative">
                <label className={style.inputLabel}>Email Address</label> <br />
                <input
                  name="email"
                  type="email"
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
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className={style.loginInput}
                  {...register("password", {
                    required: "Password is required",
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
              {confirmation && (
                <div className="py-5 text-center text-[#4AB449]">
                  {confirmation}
                </div>
              )}
              {error && (
                <div className="py-3 text-center text-red-500">{error}</div>
              )}
              <div className="mb-5">
                <button
                  disabled={loading}
                  className={style.loginBtn}
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="my-3 text-red-400">{verificationError}</div>
              <div className="flex items-center ">
                <p className={style.devided}></p>
                <span className="mx-2">or</span>
                <p className={style.devided}></p>
              </div>
              <div className="mb-5 mt-3">
                <Link href="/loginAgent">
                  <button className={style.loginBtn2} type="submit">
                    Login as Agent
                  </button>
                </Link>
              </div>
              <div className="mb-5 ">
                <Link href="/signup">
                  <button className={style.loginBtn3} type="submit">
                    Create your account{" "}
                  </button>
                </Link>
              </div>
              <div className={style.loginWithProvider}>
                <div className="flex justify-between  w-32 mx-auto">
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
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
