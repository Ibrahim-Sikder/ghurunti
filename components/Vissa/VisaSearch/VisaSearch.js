import React, { useEffect } from "react";
import style from "./VisaSearch.module.css";
import { Beenhere } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { LocalPhone } from "@mui/icons-material";
import Link from "next/link";
import SingleVisaSearch from "./SingleVisaSearch";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { fetchVisaRequirementData } from "@/Redux/features/visaRequirementSlice";

const VisaSearch = () => {
  const visaType = Cookies.get("v_t");
  const [profession, setProfession] = useState(visaType || "Govt. Job Holder");
  const [showDetail, setShowDetail] = useState(true);
  const visaDetailsData = useSelector((state) => state.visa.visaDetailsData);
  const arrayVisaDetails = visaDetailsData.getPackage;
  const handleShowDetail = () => {
    setShowDetail((showDetail) => !showDetail);
  };

  const dispatch = useDispatch();

  const handleVisaRequirement = (e) => {
    Cookies.set("v_t", e);

    setProfession(e);
    const data = {
      visa_type: e ? e : profession,
    };

    dispatch(fetchVisaRequirementData(data));
  };
  const visaRequirementData = useSelector(
    (state) => state["visa-rq"].visaRequirementData
  );

  //  pagination

  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("visa")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
 

  useEffect(() => {
    sessionStorage.setItem("visa", currentPage.toString());
  }, [currentPage]);
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("visa")) || 1;
    setCurrentPage(storedPage);
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    );
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    );
  }, [pageNumberLimit]);

  // ...

  const handleClick = (e) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("visa", pageNumber.toString());
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(arrayVisaDetails?.length / limit); i++) {
    pages.push(i);
  }

  const renderPagesNumber = pages?.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-green-500 text-white px-3 rounded-md cursor-pointer"
              : "cursor-pointer text-black border border-green-500 px-3 rounded-md"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;
  const currentItems = arrayVisaDetails?.slice(startIndex, lastIndex);

  const renderData = (arrayVisaDetails) => {
    return (
      <>
        {arrayVisaDetails.map((visa) => (
          <SingleVisaSearch
            key={visa._id}
            visa={visa}
            handleShowDetail={handleShowDetail}
          ></SingleVisaSearch>
        ))}
      </>
    );
  };
   
  

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("visa", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("visa", newPage.toString());

    if (newPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages?.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: maxPageNumberLimit + 1 } })}
        className="cursor-pointer text-black pl-1"
      >
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (currentPage > pageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: minPageNumberLimit } })}
        className="cursor-pointer text-black pr-1"
      >
        &hellip;
      </li>
    );
  }
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

          <>
            {arrayVisaDetails?.length === 0 ? (
              <div className="text-xl text-center flex justify-center items-center h-full">
                No matching packages found.
              </div>
            ) : (
              <>
                <section className="lg:w-10/12 mx-auto rounded  ">
                  {renderData(currentItems)}
                  <ul
                    className={
                      minPageNumberLimit < 5
                        ? "flex justify-center gap-2 md:gap-4 pb-5 mt-6"
                        : "flex justify-center gap-[5px] md:gap-2 pb-5 mt-6"
                    }
                  >
                    <button
                      onClick={handlePrevious}
                      disabled={currentPage === pages[0] ? true : false}
                      className={
                        currentPage === pages[0]
                          ? "text-gray-400"
                          : "text-black"
                      }
                    >
                      Previous
                    </button>
                    <span
                      className={minPageNumberLimit < 5 ? "hidden" : "inline"}
                    >
                      {pageDecrementBtn}
                    </span>
                    {renderPagesNumber}
                    {pageIncrementBtn}
                    <button
                      onClick={handleNext}
                      disabled={
                        currentPage === pages[pages?.length - 1] ? true : false
                      }
                      className={
                        currentPage === pages[pages?.length - 1]
                          ? "text-gray-400"
                          : "text-black pl-1"
                      }
                    >
                      Next
                    </button>
                  </ul>
                </section>
              </>
            )}
          </>


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
                    handleVisaRequirement(classes);
                  }}
                >
                  <option selected value="Select your profession" disabled>
                    Select your profession
                  </option>
                  <option value="Govt. Job Holder">Govt. Job Holder</option>
                  <option value="Private Job Holder">Private Job Holder</option>
                  <option value="Student">Student</option>
                  <option value="Non Student">Non Student</option>
                  <option value="House Wife">House Wife </option>
                  <option value="Advocate Lawyer">Advocate Lawyer </option>
                  <option value="Doctor">Doctor </option>
                  <option value="Unemployment">Unemployment </option>
                </select>
              </div>

              <h2 className={style.selectedProfession}> {profession}</h2>
              <div>{visaRequirementData?.requirements}</div>
              {/* <div>
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
              </div> */}
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
