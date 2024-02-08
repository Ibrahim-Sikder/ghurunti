import React from "react";
import style from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const flight = () => {
  return (
    <B2BdashboardLayout>
     
     <div className="mt-5">
            <div className={style.profileTop}>
              <div className={style.flightHistory}>
                <div className="overflow-x-auto ">
                  <table className="table  lg:table-auto columns-xl break-after-column">
                    <thead className={style.tableWrap}>
                      <tr>
                        <th>Booking By </th>
                        <th>Booked Date </th>
                        <th>Issue Date </th>
                        <th>Fly Date </th>
                        <th>Time Limit </th>
                        <th>Rout </th>
                        <th>Airlines </th>
                        <th>Booking Code </th>
                        <th>PNR </th>
                        <th>Payment Status</th>
                        <th>Booking Status </th>
                        <th>Cards Pay </th>
                        <th>Client Pays</th>
                        <th>Agent Pay </th>
                        <th>AIT </th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 23 12.00am</td>
                        <td>Not Issued Yet</td>
                        <td>05 Apr 23 11.00am</td>
                        <td> 30 Mar 23 5.00pm</td>
                        <td>DAC-MAA-DAC</td>
                        <td>BS</td>
                        <td>GTRN596</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>-57590</td>
                        <td>-5143</td>
                        <td>156</td>
                        <td>
                          <Link href="/b2bdashboard/flight/ticketbook">
                            {" "}
                            <span className="btn bg-[#26ADE2] text-white rounded p-2">
                              View
                            </span>{" "}
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(flight), { ssr: false });

