import Link from "./next/Link"
import Footer from "../../../components/Footer/Footer"
import Nav from "../../../components/NavBarr/Nav"
import style from "./ForgotPassword.module.css"
const ForgotPassword = () => {
  return (
    <div>
      <Nav />
      <div className="h-screen flex items-center justify-center ">
        <div className={style.passwordCard}>
          <h3 className="text-3xl font-bold capitalize text-center ">
            forgot password
          </h3>
          <small className="text-center">
            No problem. Just enter your email address below — we’ll send you a
            link to reset it.
          </small>
          <form>
            <div className={style.passwordForm}>
              <label className="block">Email</label>
              <input type="text" name="email" />
            </div>
            <div className="mt-5">
              <button className="btn">Send Mail </button>
            </div>
            <br />
            <small>
              Remeber your password?{" "}
              <Link href="/signin">
                {" "}
                <b className="text-[#4AB449]">Signin</b>
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
