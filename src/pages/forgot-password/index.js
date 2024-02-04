/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import style from "./ForgotPassword.module.css";
import axios from "axios";
import { useState } from "react";
import { setEmail } from "@/Redux/features/sign-up-slice";
import { useDispatch, useSelector } from "react-redux";
import { FormError } from "../../../components/form-error";
import { FormSuccess } from "../../../components/form-success";
import { useRouter } from "next/router";
const ForgotPassword = () => {
  const { email } = useSelector((state) => state.email);
  const [getEmail, setGetEmail] = useState("");
  const [code, setCode] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const forgotPasswordLink = async () => {
    setError("");
    setSuccess("");
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:5000/api/v1/login/forgot/password`,
        { email: getEmail },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        dispatch(setEmail(response.data.email));
        setSuccess(response.data.message);
        sessionStorage.setItem("em_g", response.data.email);
        setShowCodeInput(true);
        setLoading(false);
        setError("");
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  const handleCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:5000/api/v1/user/${email}`,
        { code }
      );

      if (response.status === 200) {
        setSuccess(response.data.message);
        setLoading(false);
        router.push("/reset");
        setError("");
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Nav />
      {showCodeInput ? (
        <div className="flex justify-center my-20 mx-auto  ">
          <div className={style.passwordCard}>
            <h3 className="text-3xl font-bold capitalize text-center ">
              Enter your code
            </h3>

            <div>
              <div className={style.passwordForm}>
                <label className="block text-left ">Code</label>
                <input
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="123456"
                  type="text"
                  name="email"
                />
              </div>
              {error && <FormError message={error} />}
              {success && <FormSuccess message={success} />}

              <button onClick={handleCode}>submit</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center my-20 mx-auto  ">
          <div className={style.passwordCard}>
            <h3 className="text-3xl font-bold capitalize text-center ">
              forgot password
            </h3>
            <small className="text-center block mt-3 mb-5 ">
              "Resetting passwords, unlocking adventures – your gateway to a
              world of seamless travel awaits."
            </small>
            <div>
              <div className={style.passwordForm}>
                <label className="block text-left ">Email</label>
                <input
                  onChange={(e) => setGetEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  type="text"
                  name="email"
                />
              </div>
              {error && <FormError message={error} />}
              {success && <FormSuccess message={success} />}
              <div className="mt-5">
                <button
                  disabled={loading}
                  onClick={forgotPasswordLink}
                  className="btn"
                >
                  Send Mail{" "}
                </button>
              </div>
              <br />
              <small>
                Remember your password?{" "}
                <Link href="/login">
                  {" "}
                  <b className="text-[#4AB449]">Sign In</b>
                </Link>
              </small>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ForgotPassword;
