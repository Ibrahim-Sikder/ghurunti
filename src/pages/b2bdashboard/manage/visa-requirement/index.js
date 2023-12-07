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
const VisaRequirement = ({ data }) => {
  const [packages, setPackages] = useState(data);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("r_q")) || 1
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
        const res = await fetch(`http://localhost:5000/api/v1/requirement/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.message == "Successfully visa requirement deleted") {
          setPackages(packages.filter((pkg) => pkg._id !== id));
        }
        swal("Deleted!", "Package delete successful.", "success");
      } catch (error) {
        swal("Error", "An error occurred while deleting the package.", "error");
      }
    }
  };

  useEffect(() => {
    sessionStorage.setItem("r_q", currentPage.toString());
  }, [currentPage]);
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("r_q")) || 1;
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
    sessionStorage.setItem("r_q", pageNumber.toString());
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
        <table className="table ">
          <thead className={style.tableWrap}>
            <tr>
              <th>Visa Requirement List</th>
              <th>Description</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {packages?.map((requirement) => (
              <tr key={requirement._id}>
                <td> {requirement.visa_type}</td>
                {/* <td>Renewal trade license copy with notary public</td> */}
                <td> {requirement.requirements}</td>
                <td>
                  <Link href={`/b2bdashboard/manage/visa-requirement/update?id=${requirement._id}`}>
                    <FaEdit className={style.editIcon} />
                  </Link>
                </td>
                <td onClick={()=>deletePackage(requirement._id)}>
                  <FaTrashAlt className={style.deleteIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("r_q", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("r_q", newPage.toString());

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
            <Link href="/b2bdashboard/manage/visa-requirement/add">
              <button>
                <span className="text-xl font-bold">+</span> Add Visa
                Requirement{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ">
          {packages?.length === 0 ? (
            <div className="text-xl text-center flex justify-center items-center h-full">
              No matching packages found.
            </div>
          ) : (
            <>
              <section className="lg:w-12/12 mx-auto rounded  ">
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
                      currentPage === pages[0] ? "text-gray-400" : "text-black"
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
        
      </div>
    </B2BdashboardLayout>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v1/requirement"
    );
    const data = response.data.result;

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
export default dynamic(() => Promise.resolve(VisaRequirement), { ssr: false });
