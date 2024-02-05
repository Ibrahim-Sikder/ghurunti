/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import style from "../forgot-password/ForgotPassword.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FormError } from "../../../components/form-error";
import { FormSuccess } from "../../../components/form-success";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
const ResetPassword = () => {
  const { email } = useSelector((state) => state.email);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:5000/api/v1/user/${email}`,
        {
          password: data.password,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setSuccess(response.data.message);
        router.push("/login");
        setLoading(false);
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-center my-20 mx-auto  ">
        <div className={style.passwordCard}>
          <h3 className="text-3xl font-bold capitalize text-center ">
            Reset password
          </h3>
          <small className="text-center block mt-3 mb-5 ">
            "Resetting passwords, unlocking adventures – your gateway to a world
            of seamless travel awaits."
          </small>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.passwordForm}>
              <label className="block text-left ">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must contain at least 6 characters, including at least one letter and one number.",
                  },
                })}
                placeholder="******"
                type="password"
              />
              {errors.password && (
                <p className="text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}
            <div className="mt-5">
              <button disabled={loading} className="btn">
                Update password
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
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
