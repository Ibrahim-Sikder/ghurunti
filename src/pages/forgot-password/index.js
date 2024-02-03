/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Footer from "../../../components/Footer/Footer"
import Nav from "../../../components/NavBarr/Nav"
import style from "./ForgotPassword.module.css"
const ForgotPassword = () => {
  return (
    <div>
      <Nav />
      <div className="flex justify-center my-20 mx-auto  ">
        <div className={style.passwordCard}>
          <h3 className="text-3xl font-bold capitalize text-center ">
            forgot password
          </h3>
          <small className="text-center block mt-3 mb-5 ">
            "Resetting passwords, unlocking adventures – your gateway to a world
            of seamless travel awaits."
          </small>
          <form>
            <div className={style.passwordForm}>
              <label className="block text-left ">Email</label>
              <input placeholder="example@gmail.com" type="text" name="email" />
            </div>
            <div className="mt-5">
              <button className="btn">Send Mail </button>
            </div>
            <br />
            <small>
              Remeber your password?{" "}
              <Link href="/signin">
                {" "}
                <b className="text-[#4AB449]">Sign In</b>
              </Link>
            </small>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ForgotPassword
