import React from "react";
import style from "../../../components/Vissa/VisaRequest/VisaRequest.module.css";
import { LocalPhone, CloudUpload } from "@mui/icons-material";
const TourPackageCheckout = () => {
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
          <form>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  {" "}
                  Select a destination from list{" "}
                  <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <select className={style.visaInput}>
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
              <div className={style.formControl}>
                <label className={style.inputLabel}>Or Write down </label>
                <input type="text" className={style.visaInput} />
              </div>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  When do you want to go?{" "}
                  <small className="text-red-500 text-xl">*</small>{" "}
                </label>
                <input
                  placeholder="Date "
                  type="date"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passenger Number </label>
                <input
                  placeholder="Passenger Number "
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
                  Given Name <small className="text-red-500 text-xl">*</small>
                </label>
                <input
                  placeholder="Given Name "
                  type="text"
                  className={style.visaInput}
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}> Surname </label>
                <input
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
                  placeholder="Mobile Number"
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
                  placeholder="Email"
                  type="email"
                  className={style.visaInput}
                  required
                />
              </div>
            </div>
            <div className={`${style.formControl} ${style.uploadDoc}`}>
              <div className="flex items-center ">
                <div>
                  <input type="file" id="files" className="hidden" />
                  <label for="files">Upload Your Doc</label>
                </div>
                <CloudUpload className={style.uploadIcon} />
              </div>
            </div>

            <div className={style.formControl}>
              <h2 className="font-bold text-xl"> Share Your Requirements </h2>
              <textarea
                className={style.textField}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className={style.visaSubmitBtn}>Confirm Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TourPackageCheckout;
