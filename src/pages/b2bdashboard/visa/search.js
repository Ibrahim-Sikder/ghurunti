import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import style from "../../../../components/Vissa/VisaSearch/VisaSearch.module.css";
import { Beenhere } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { LocalPhone } from "@mui/icons-material";
import Link from "next/link";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import { fetchVisaRequirementData } from "@/Redux/features/visaRequirementSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleVisaSearch from "../../../../components/Vissa/VisaSearch/SingleVisaSearch";
import Cookies from "js-cookie";
const Visa = () => {
  const [showDetail, setShowDetail] = useState(true);
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  //  faruk's code

  const visaType = Cookies.get("v_t");
  const [profession, setProfession] = useState(visaType || "Govt. Job Holder");

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
    <B2BdashboardLayout>
      <MoveText />
      <div className={style.visaSearchWrap}>
        <div className={style.visaSearchLeft}>
          <div className={style.visaType}>
            <div>
              <h4 className=" text-2xl ">
                Required Documents for Malaysia Tourist Visa
              </h4>
              <p className=" mb-5 mt-3">Visa Type : Studnet Visa</p>
              <p className=" font-bold text-xl ">Duration and Cost Details</p>
            </div>

            <div className={style.visaDownload}>
              <div className="receipt-actions-div">
                <div className="actions-right">
                  <button
                    className={style.downloadPdf}
                    onClick={downloadPDF}
                    disabled={!(loader === false)}
                  >
                    {loader ? <span>Downloading</span> : <span>Download</span>}
                  </button>
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
            {arrayVisaDetails?.length === 0 ? (
              <div className="text-xl flex justify-center items-center h-full">
                No matching packages found.
              </div>
            ) : (
              <>
                <section className=" rounded  ">
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
          </div>

          <div className={style.pricInfo}>
            <div
              className={
                showDetail
                  ? "translate-y-0 bg-red-600 opacity-0 h-[0px] transition"
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
              <h2 className="text-2xl font-bold">
                Required Documents for E-Visa (Malaysia)
              </h2>
              <h3 className="text-xl">Businessman : </h3>
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

            <div className={style.requiredDocument}>
              <h3 className="text-xl">Job Holder : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>No objection certificate (NOC)</p>
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
                  <p>Employee Id card copy (One photo copy)</p>
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
                  <p>Personal bank solvency certificate</p>
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
            <div className={style.requiredDocument}>
              <h3 className="text-xl">Govt Job Holder : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>GO (Government order) for official passport</p>
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
                  <p>Employee Id card copy (One photo copy)</p>
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
                  <p>Personal bank solvency certificate</p>
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
            <div className={style.requiredDocument}>
              <h3 className="text-xl">Doctor : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>BMDC certificate for doctor (Scan copy)</p>
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
                    Recent 2 copy photograph taken in last 3 months (white
                    background only, photo size 35 mm X 50 mm, Matt paper).
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Personal bank solvency certificate</p>
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

            <div className={style.requiredDocument}>
              <h3 className="text-xl">Advocate - Lawyer : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>BAR council certificate (One photo copy)</p>
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
                    Recent 2 copy photograph taken in last 3 months (white
                    background only, photo size 35 mm X 50 mm, Matt paper).
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Personal bank solvency certificate</p>
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
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Employee Id card copy (One photo copy) </p>
                </div>
              </div>
            </div>

            <div className={style.requiredDocument}>
              <h3 className="text-xl">Student : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
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
                  <p>ID card (Student) one photocopy both sides</p>
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
                  <p>Personal bank solvency certificate</p>
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

            <div className={style.requiredDocument}>
              <h3 className="text-xl"> Non-Student Child : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
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
                  <p>Birth certificate</p>
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
                  <p>Personal bank solvency certificate</p>
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

            <div className={style.requiredDocument}>
              <h3 className="text-xl"> House Wife : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
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
                    Recent 2 copy photograph taken in last 3 months (white
                    background only, photo size 35 mm X 50 mm, Matt paper).
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>
                    Marriage certificate copy (if spouse name not mentioned in
                    the passport){" "}
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Personal bank solvency certificate</p>
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

            <div className={style.requiredDocument}>
              <h3 className="text-xl"> House Wife : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Retirement document (Retired Person) one photo copy</p>
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
                  <p>
                    Marriage certificate copy (if spouse name not mentioned in
                    the passport){" "}
                  </p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Personal bank solvency certificate</p>
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

            <div className={style.requiredDocument}>
              <h3 className="text-xl"> Unemployed : </h3>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>07 Months Valid Passport With Old Passport (If have) </p>
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
                  <p>NID or birth certificate (must) one photo copy</p>
                </div>
              </div>
              <div>
                <div className={style.visaRule}>
                  <Beenhere className={style.checkIcon} />
                  <p>Personal bank solvency certificate</p>
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
              <Link
                href="/b2bdashboard/visa/visaRequest"
                passHref
                prefetch={false}
              >
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
                <button>Request Now </button>
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
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Visa), { ssr: false });
