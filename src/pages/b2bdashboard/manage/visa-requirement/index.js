import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import style from "../hotel/hotel.module.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import img from "../../../../../public/assets/hotel.jpg";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import {
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";
const VisaRequiurement = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5 mb-24">
        <div className="flex items-center justify-between px-8 mb-5">
          <TextField id="outlined-basic" label="Search " variant="outlined" />
          <div className={style.addHotel}>
            <Link href='/b2bdashboard/manage/visa-requirement/add'>
            <button>
              <span className="text-xl font-bold">+</span> Add Visa Requirement </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className={style.tableWrap}>
              <tr>
                <th>Visa Requirement List</th>
                <th>Description</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Govt. Job Holder</td>
                <td>Renewal trade license copy with notary public</td>
                <td >
                 <Link href='/b2bdashboard/manage/visa-requirement/update'> 
                  <FaEdit className={style.editIcon} />
                 </Link>
                </td>
                <td>
                  <FaTrashAlt className={style.deleteIcon} />
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
        <div className={style.pagination}>
            <div className={style.paginationBtn}>
              <button>
                <ArrowBack className={style.arrowLeft} />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>
                <ArrowForward className={style.arrowRight} />
              </button>
            </div>
          </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(VisaRequiurement), { ssr: false });
