import React from "react";
import style from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const process = () => {
  return (
    <B2BdashboardLayout>
       <div className={style.ticketListHead}>
            <h3 className="text-2xl font-bold">Proccessing Ticket List </h3>
          </div>

          <div className="mt-5">
            <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
                <div className="overflow-x-auto ">
                  <table className="table lg:table-auto columns-xl break-after-column">
                    <thead className={style.tableWrap}>
                      <tr>
                        <th>Booking By</th>
                        <th>Booked Date</th>
                        <th>Issue Date</th>
                        <th>Fly Date</th>
                        <th>Time Limit </th>
                        <th>Rout</th>
                        <th>Airlines</th>
                        <th>Booking Code</th>
                        <th>PNR</th>
                        <th>Payment Status</th>
                        <th>Booking Status </th>
                        <th>Cards Pay </th>
                        <th>Client Pays</th>
                        <th>Agent Pay </th>
                        <th>AIT</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 2023</td>
                        <td>Not Issued </td>
                        <td>5 Apr 2023</td>
                        <td> 30 Mar 20235</td>
                        <td>DAC-MAAC</td>
                        <td>BS</td>
                        <td>GT16797</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>590</td>
                        <td>5143</td>
                        <td>156</td>
                        <td>
                          <span className=" bg-[#4AB449] rounded text-white py-2 text-xs px-2 font-xs">
                            Cancel
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 2023</td>
                        <td>Not Issued </td>
                        <td>5 Apr 2023</td>
                        <td> 30 Mar 20235</td>
                        <td>DAC-MAAC</td>
                        <td>BS</td>
                        <td>GT16797</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>590</td>
                        <td>5143</td>
                        <td>156</td>
                        <td>
                          <span className=" bg-[#4AB449] rounded text-white py-2 text-xs px-2 font-xs">
                            Cancel
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 2023</td>
                        <td>Not Issued </td>
                        <td>5 Apr 2023</td>
                        <td> 30 Mar 20235</td>
                        <td>DAC-MAAC</td>
                        <td>BS</td>
                        <td>GT16797</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>590</td>
                        <td>5143</td>
                        <td>156</td>
                        <td>
                          <span className=" bg-[#4AB449] rounded text-white py-2 text-xs px-2 font-xs">
                            Cancel
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 2023</td>
                        <td>Not Issued </td>
                        <td>5 Apr 2023</td>
                        <td> 30 Mar 20235</td>
                        <td>DAC-MAAC</td>
                        <td>BS</td>
                        <td>GT16797</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>590</td>
                        <td>5143</td>
                        <td>156</td>
                        <td>
                          <span className=" bg-[#4AB449] rounded text-white py-2 text-xs px-2 font-xs">
                            Cancel
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 2023</td>
                        <td>Not Issued </td>
                        <td>5 Apr 2023</td>
                        <td> 30 Mar 20235</td>
                        <td>DAC-MAAC</td>
                        <td>BS</td>
                        <td>GT16797</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>590</td>
                        <td>5143</td>
                        <td>156</td>
                        <td>
                          <span className=" bg-[#4AB449] rounded text-white py-2 text-xs px-2 font-xs">
                            Cancel
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 2023</td>
                        <td>Not Issued </td>
                        <td>5 Apr 2023</td>
                        <td> 30 Mar 20235</td>
                        <td>DAC-MAAC</td>
                        <td>BS</td>
                        <td>GT16797</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>590</td>
                        <td>5143</td>
                        <td>156</td>
                        <td>
                          <span className=" bg-[#4AB449] rounded text-white py-2 text-xs px-2 font-xs">
                            Cancel
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Global04</td>
                        <td>29 Mar 2023</td>
                        <td>Not Issued </td>
                        <td>5 Apr 2023</td>
                        <td> 30 Mar 20235</td>
                        <td>DAC-MAAC</td>
                        <td>BS</td>
                        <td>GT16797</td>
                        <td>056XNH</td>
                        <td>Unpaid </td>
                        <td>Cancel </td>
                        <td>No</td>
                        <td>590</td>
                        <td>5143</td>
                        <td>156</td>
                        <td>
                          <span className=" bg-[#4AB449] rounded text-white py-2 text-xs px-2 font-xs">
                            Cancel
                          </span>
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

export default dynamic(() => Promise.resolve(process), { ssr: false });
