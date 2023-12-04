/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Beenhere } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import style from "./HajjUmrah.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
const UmrahCard = ({ title, img }) => {
  const umrahDetailsData = useSelector((state) => state.umrah.umrahDetailsData);

  const [umrahRamadan, setUmrahRamadan] = useState([]);
  const [umrahPremium, setUmrahPremium] = useState([]);
  const [umrahPlatinum, setUmrahPlatinum] = useState([]);
  const [umrahFamily, setUmrahFamily] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("umrah")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("umrah", currentPage.toString());
  }, [currentPage]);

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("umrah")) || 1;
    setCurrentPage(storedPage);
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    );
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    );
  }, [pageNumberLimit]);

  const handleClick = (e) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("umrah", pageNumber.toString());
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(umrahDetailsData?.length / limit); i++) {
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
              ? "bg-green-500 text-white px-2 rounded cursor-pointer"
              : "cursor-pointer text-black"
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
  const currentItems = umrahDetailsData?.slice(startIndex, lastIndex);

  const renderData = (umrahDetailsData) => {
    return (
      <>
        {umrahDetailsData.map((data) => (
          <div key={data._id} className={style.umrahPackageCardWrap}>
            <div className={style.packageCardWrap}>
              <div className={style.packageCard}>
                <div className={style.cardLeft}>
                  {data?.image[0] && (
                    <Image
                      loading="lazy"
                      src={data.image[0]}
                      alt="Umrah"
                      className={style.leftImg}
                      width={100}
                      height={100}
                    />
                  )}
                </div>
                <div className={style.cardRight}>
                  <div className={style.rightText}>
                    <div className={style.cardText}>
                      <h5 className="text-xl font-bold mb-2">
                        {data.latest_umrah_package}
                      </h5>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.title}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.sub_title}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.date}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.day_night}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.requirement_list}</p>
                      </div>
                      {/* <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.popular_latest_umrah_package}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.description}</p>
                      </div> */}
                      {/* <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.hajj_category}</p>
                      </div> */}
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.cardPrice}>
                    <p>{data.price}</p>
                    <Link href={`/hajj/hajjbook?id=${data._id}&type=umrah`}>
                      <button>Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("umrah", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("umrah", newPage.toString());

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

  useEffect(() => {
    const fetchData = async () => {
      if (refreshParams.includes("umrah-in-ramadan")) {
        try {
          const premiumData = {
            latest_umrah_package: "Premium Umrah Packages",
          };
          setLoading(true);
          const premiumResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            premiumData
          );

          setUmrahPremium(premiumResponse.data.premium);
          setLoading(false);
          // setNonShiftingHajj(nonShiftingResponse.data.nonShifting);

          const platinumData = {
            latest_umrah_package: "Platinum Umrah Packages",
          };
          setLoading(true);
          const platinumResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            platinumData
          );
          setUmrahPlatinum(platinumResponse.data.platinum);
          setLoading(false);
          const familyData = {
            latest_umrah_package: "Family Umrah Packages",
          };
          setLoading(true);
          const familyResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            familyData
          );
          setUmrahFamily(familyResponse.data.family);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      if (refreshParams.includes("premium")) {
        try {
          const umrahInRamadan = {
            latest_umrah_package: "Umrah In Ramadan",
          };
          setLoading(true);
          const umrahInRamadanResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            umrahInRamadan
          );
          setUmrahRamadan(umrahInRamadanResponse.data.umrahInRamadan);
          setLoading(false);
          const platinumData = {
            latest_umrah_package: "Platinum Umrah Packages",
          };
          setLoading(true);
          const platinumResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            platinumData
          );
          setUmrahPlatinum(platinumResponse.data.platinum);
          setLoading(false);
          const familyData = {
            latest_umrah_package: "Family Umrah Packages",
          };
          setLoading(true);
          const familyResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            familyData
          );
          setUmrahFamily(familyResponse.data.family);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      if (refreshParams.includes("platinum")) {
        try {
          const umrahInRamadan = {
            latest_umrah_package: "Umrah In Ramadan",
          };
          setLoading(true);
          const umrahInRamadanResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            umrahInRamadan
          );
          setUmrahRamadan(umrahInRamadanResponse.data.umrahInRamadan);
          setLoading(false);
          const premiumData = {
            latest_umrah_package: "Premium Umrah Packages",
          };
          setLoading(true);
          const premiumResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            premiumData
          );
          setUmrahPremium(premiumResponse.data.premium);
          setLoading(false);

          const familyData = {
            latest_umrah_package: "Family Umrah Packages",
          };
          setLoading(true);
          const familyResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            familyData
          );
          setUmrahFamily(familyResponse.data.family);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      if (refreshParams.includes("family")) {
        try {
          const umrahInRamadan = {
            latest_umrah_package: "Umrah In Ramadan",
          };
          setLoading(true);
          const umrahInRamadanResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            umrahInRamadan
          );
          setUmrahRamadan(umrahInRamadanResponse.data.umrahInRamadan);
          setLoading(false);

          const premiumData = {
            latest_umrah_package: "Premium Umrah Packages",
          };
          setLoading(true);
          const premiumResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            premiumData
          );
          setUmrahPremium(premiumResponse.data.premium);
          setLoading(false);

          const platinumData = {
            latest_umrah_package: "Platinum Umrah Packages",
          };
          setLoading(true);
          const platinumResponse = await axios.post(
            `http://localhost:5000/api/v1/umrah/details/filter/getOne`,
            platinumData
          );
          setUmrahPlatinum(platinumResponse.data.platinum);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div>
        {/* <div className={style.umrahImgWrap}>
          <Image
            loading="lazy"
            src={img}
            alt="umra"
            className={style.umraImage}
          />
        </div> */}
        <h3 className="text-3xl font-bold my-8">{title}</h3>
        {umrahDetailsData.length === 0 ? (
          <div>
            <div className="text-xl text-center flex justify-center items-center h-full">
              No matching packages found.
            </div>
            {loading ? (
              <div>Loading</div>
            ) : (
              <div>
                <div className="my-10">Another umrah packages.</div>
                {refreshParams.includes("umrah-in-ramadan") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {umrahPremium.length > 0 && (
                      <div>
                        <h2>{umrahPremium[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahPremium[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahPlatinum.length > 0 && (
                      <div>
                        <h2>{umrahPlatinum[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahPlatinum[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahFamily.length > 0 && (
                      <div>
                        <h2>{umrahFamily[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahFamily[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                  </div>
                )}
                {refreshParams.includes("premium") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {umrahRamadan.length > 0 && (
                      <div>
                        <h2>{umrahRamadan[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahRamadan[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahPlatinum.length > 0 && (
                      <div>
                        <h2>{umrahPlatinum[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahPlatinum[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahFamily.length > 0 && (
                      <div>
                        <h2>{umrahFamily[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahFamily[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                  </div>
                )}
                {refreshParams.includes("platinum") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {umrahRamadan.length > 0 && (
                      <div>
                        <h2>{umrahRamadan[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahRamadan[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahPremium.length > 0 && (
                      <div>
                        <h2>{umrahPremium[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahPremium[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahFamily.length > 0 && (
                      <div>
                        <h2>{umrahFamily[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahFamily[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                  </div>
                )}
                {refreshParams.includes("family") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {umrahRamadan.length > 0 && (
                      <div>
                        <h2>{umrahRamadan[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahRamadan[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahPremium.length > 0 && (
                      <div>
                        <h2>{umrahPremium[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahPremium[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                    {umrahPlatinum.length > 0 && (
                      <div>
                        <h2>{umrahPlatinum[0]?.latest_umrah_package}</h2>
                        <Image
                          src={umrahPlatinum[0]?.image[0]}
                          alt=""
                          width={100}
                          height={100}
                          className="w-40 h-40"
                        ></Image>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <>
            <section className="lg:w-10/12 mx-auto rounded  ">
              {renderData(currentItems)}
              <ul
                className={
                  minPageNumberLimit < 5
                    ? "flex justify-center gap-3 md:gap-4 pb-5"
                    : "flex justify-center gap-[7px] md:gap-3 pb-5"
                }
              >
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === pages[0] ? true : false}
                  className={
                    currentPage === pages[0] ? "text-gray-400" : "text-black"
                  }
                >
                  Previous
                </button>
                <span className={minPageNumberLimit < 5 ? "hidden" : "inline"}>
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
    </section>
  );
};

export default UmrahCard;
