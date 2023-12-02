import React from "react";
import { LocalPhone } from "@mui/icons-material";
import { Beenhere } from "@mui/icons-material";
import style from "../../Vissa/VisaRequest/VisaRequest.module.css";
import styling from "../UmrahBook/UmrahBook.module.css";
const B2BHajjBook = () => {
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
          <form>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Write down Your City</label>
                <input type="text" className={style.visaInput} />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passenger </label>
                <input type="text" className={style.visaInput} />
              </div>
            </div>
            <div className={style.inputFieldWrap}>
              <div className={style.formControl}>
                <label className={style.inputLabel}>
                  When do you want to go?
                </label>
                <input
                  placeholder="Date "
                  type="date"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}>Passport Number </label>
                <input
                  placeholder="Passport Number "
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
                <label className={style.inputLabel}>Given Name </label>
                <input
                  placeholder="Given Name "
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label placeholder="Surname" className={style.inputLabel}>
                  {" "}
                  Surname{" "}
                </label>
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
                <label className={style.inputLabel}>Movile Number </label>
                <input
                  placeholder="Phone Number"
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
              <div className={style.formControl}>
                <label className={style.inputLabel}> Email </label>
                <input
                  placeholder="Email"
                  type="text"
                  className={style.visaInput}
                  required
                />
              </div>
            </div>
            <div className={styling.uploadDoc}>
              <input type="file" id="files" className="hidden" />
              <label for="files">Upload Your Doc</label>
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

export default B2BHajjBook;
