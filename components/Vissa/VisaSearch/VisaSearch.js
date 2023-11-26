import React from "react";
import style from "./VisaSearch.module.css";
import { Beenhere } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { LocalPhone } from "@mui/icons-material";
import dynamic from "next/dynamic";
import Link from "next/link";
import SingleVisaSearch from "./SingleVisaSearch";
import { useSelector } from "react-redux";

const VisaSearch = () => {
  const [showDetail, setShowDetail] = useState(true);
  const visaDetailsData = useSelector((state) => state.visa.visaDetailsData);
  const [profession, setProfession] = useState("Business Man");
  const handleShowDetail = () => {
    setShowDetail((showDetail) => !showDetail);
  };

  return (
    <div>
      <div className={style.visaSearchWrap}>
        <div className={style.visaSearchLeft}>
          <div className={style.visaType}>
            <div>
              <h4 className=" text-2xl ">
                Required Documents for Malaysia Tourist Visa
              </h4>
              <p className=" mb-5 mt-3">Visa Type : Studnet Visa</p>
              <p className=" font-bold text-xl "> </p>
            </div>

            <div className={style.visaDownload}>
              <div className="receipt-actions-div">
                <div className="actions-right">
                  <button className={style.downloadPdf}> Download </button>
                </div>
              </div>
              <div className={style.visaLocation}>
                <TextField
                  className={style.location}
                  id="standard-basic"
                  label="Visa Submission Location"
                  variant="standard"
                />
              </div>
            </div>
          </div>

          <div>
            {visaDetailsData.getPackage?.map((visa) => (
              <SingleVisaSearch
                key={visa._id}
                visa={visa}
                handleShowDetail={handleShowDetail}
              ></SingleVisaSearch>
            ))}
          </div>

          <div className={style.pricInfo}>
            <div
              className={
                showDetail
                  ? "translate-y-0 hidden  transition"
                  : `${style.allCoasInfo}`
              }
            >
              <div>
                <h2 className="text-white">Depends on embassy</h2>
                <h3 className="text-xl mb-5 text-white">Price Break Down</h3>
              </div>
              <table>
                <tr>
                  <th>Embassy Fee</th>
                  <th>Agent Fee</th>
                  <th>Agency Fee</th>
                  <th>Service Charge </th>
                  <th>Total</th>
                </tr>
                <tbody>
                  <tr>
                    <td>467 BDT</td>
                    <td>2345 BDT</td>
                    <td>789 BDT</td>
                    <td>588 BDT</td>
                    <td>9899 BDT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={style.visaRequiredInfoWrap}>
          <div className={style.visaRequiredLeft}>
            <div className={style.requiredDocument}>
              <div className={style.document}>
                <h2 className="text-2xl font-bold">
                  Required Documents for E-Visa (Malaysia)
                </h2>
                <select
                  className={style.professionSelect}
                  onChange={(e) => {
                    const classes = e.target.value;
                    setProfession(classes);
                  }}
                >
                  <option value="Govt. Job Holder">Govt. Job Holder</option>
                  <option value="Private Job Holder">Private Job Holder</option>
                  <option value="Student">Student</option>
                  <option value="Non Student">Non Student</option>
                  <option value="House Wife">House Wife </option>
                  <option value="Advocate Lawyer">Advocate Lawyer </option>
                  <option value="Doctor">Doctor </option>
                  <option value="Unemployment">Unemployment </option>
                  <option value="Business Man">Business Man </option>
                </select>
              </div>

              <h2 className={style.selectedProfession}> {profession}</h2>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>
                    Renewal trade license copy with notary public (english
                    translated)
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Visiting card</p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>
                    Marriage certificate copy (if spouse name not mentioned in
                    the passport)
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>
                    Memorandum for limited company form page XII (One photo
                    copy)
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>
                    Recent 2 copy photograph taken in last 3 months (white
                    background only, photo size 35 mm X 50 mm, Matt paper).
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Company letter head pad</p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Personal or company bank solvency certificate </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>
                    Personal or Company bank statement of last 06 months and
                    minimum balance BDT 80,000 for each applicant{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={style.requestVisaBtn}>
              <Link href="/visa/visaRequest" passHref prefetch={false}>
                {" "}
                <button>Request Now </button>
              </Link>
            </div>
          </div>
          <div className={style.visaRequiredRight}>
            <div className={style.visaGuide}>
              <h3 className="text-xl">Looking for Expert Visa Guidance?</h3>
              <p>
                Don t know where to begin? Share your details, and our
                experienced visa consultants will assist you on every step.
              </p>
              <div className={style.requestNow}>
                <button>Contact Us </button>
                <div className="flex items-center ">
                  <LocalPhone className={style.requesIcon} />
                  <span className="ml-2">+88 01885071488</span>
                </div>
              </div>
            </div>

            <div className={style.visaGuide}>
              <h3 className="text-xl">E-Visa (Malaysia) Type:E-Visa </h3>
              <div className="flex item-center justify-between w-full ">
                <div>
                  <small>Validiy</small> <br />
                  <strong>90 Days </strong>
                </div>
                <div>
                  <small>Max Stay </small> <br />
                  <strong>30 Days </strong>
                </div>
              </div>
              <div>
                <strong>
                  BDT 5500/ <small>person</small>{" "}
                </strong>
              </div>
              <small>Visa fee & service charge can be change</small>
              <div className="w-full flex justify-center mx-auto">
                <button className={style.selectOfferBtn}>Select offer </button>
              </div>
            </div>
            <div className={style.visaGuide}>
              <h3 className="text-xl font-bold">Important Note</h3>
              <p>
                Please contact the Visa department for Document processing after
                the payment. Visa rate may change without any prior notice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSearch;
// export default dynamic(() => Promise.resolve(VisaSearch), { ssr: false });
