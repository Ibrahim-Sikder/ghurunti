import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import style from "../hotel/hotel.module.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import img from "../../../../../public/assets/hotel.jpg";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import axios from "axios";
import swal from "sweetalert";
const Buses = ({ data }) => {
  const [packages, setPackages] = useState(data);
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("bus")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const deletePackage = async (id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this package?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/bus/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.message == "Package delete successful") {
          setPackages(packages.filter((pkg) => pkg._id !== id));
        }
        swal("Deleted!", "Package delete successful.", "success");
      } catch (error) {
        swal(
          "Error",
          "An error occurred while deleting the package.",
          "error"
        );
      }
    }
  };

  useEffect(() => {
    sessionStorage.setItem("bus", currentPage.toString());
  }, [currentPage]);
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("bus")) || 1;
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
    sessionStorage.setItem("bus", pageNumber.toString());
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(packages?.length / limit); i++) {
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
  const currentItems = packages?.slice(startIndex, lastIndex);

  const renderData = (packages) => {
    return (
      <>
        {packages?.map((data) => (
          <div className="overflow-x-auto ">
            <table className="table ">
              <thead className={style.tableWrap}>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Sub title </th>
                  <th>Description</th>
                  <th>Date</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="mask   h-[100px] w-[100px] mx-auto ">
                      <Image
                        loading="lazy"
                        className="h-20 w-20 object-cover text-center"
                        src={data.image[0]}
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </div>
                  </td>
                  <td>রমজানে ওমরা করলে হজ করার সওয়াব </td>
                  <td>Top package </td>
                  <td>পবিত্র কোরআনুল কারিমে আল্লাহ তায়ালা বলেন</td>
                  <td>20-05-23</td>
                  <td>
                    <Link href={`/b2bdashboard/manage/buses/update?id=${data._id}`}>
                      <FaEdit className={style.editIcon} />
                    </Link>
                  </td>
                  <td onClick={() => deletePackage(data._id)}>
                    <FaTrashAlt className={style.deleteIcon} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("bus", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("bus", newPage.toString());

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
      <div className="mt-5 mb-24">
        <div className="flex items-center justify-between px-8 mb-5">
          <TextField id="outlined-basic" label="Search " variant="outlined" />
          <div className={style.addHotel}>
            <Link href="/b2bdashboard/manage/buses/add">
              <button>
                <span className="text-xl font-bold">+</span> Add Bus Package{" "}
              </button>
            </Link>
          </div>
        </div>
        <div>
          <>
            {packages?.length === 0 ? (
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

        <div className={style.pagination}>
          <div className={style.paginationBtn}>
            {/* <button>
              <ArrowBack className={style.arrowLeft} />
            </button> */}
            {/* <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>
              <ArrowForward className={style.arrowRight} />
            </button> */}
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/bus");
    const data = response.data.getPackage;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

// export default dynamic(() => Promise.resolve(Benefit), { ssr: false });
export default Buses;
