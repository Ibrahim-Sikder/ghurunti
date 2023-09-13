import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import styling from "./profile.module.css";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import Footer from "../../../components/Footer/Footer";
const banklist = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={styling.bankListInfo}>
          <RightSideTopBar />
          <MoveText />

          <div className="mt-5">
            <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
                <div className="overflow-x-auto ">
                  <table className="table  lg:table-auto columns-xl break-after-column">
                    <thead className={style.tableWrap}>
                      <tr>
                        <th>Name of Bank</th>
                        <th>Branch Name </th>
                        <th>Account Name </th>
                        <th>Routing Number </th>
                        <th>Account Number </th>
                        <th>Payment Change </th>
                        <th>Company Details </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>City Bank LTD</td>
                        <td>Gulshan Avenue</td>
                        <td>1262751784001</td>
                        <td>225261732</td>
                        <td> Global Explore Pvt. Limited </td>
                        <td>
                          Inter city charge applicable for Cash deposit% on
                          Total amount
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>City Bank LTD</td>
                        <td>Gulshan Avenue</td>
                        <td>1262751784001</td>
                        <td>225261732</td>
                        <td> Global Explore Pvt. Limited </td>
                        <td>
                          Inter city charge applicable for Cash deposit% on
                          Total amount
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>City Bank LTD</td>
                        <td>Gulshan Avenue</td>
                        <td>1262751784001</td>
                        <td>225261732</td>
                        <td> Global Explore Pvt. Limited </td>
                        <td>
                          Inter city charge applicable for Cash deposit% on
                          Total amount
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>City Bank LTD</td>
                        <td>Gulshan Avenue</td>
                        <td>1262751784001</td>
                        <td>225261732</td>
                        <td> Global Explore Pvt. Limited </td>
                        <td>
                          Inter city charge applicable for Cash deposit% on
                          Total amount
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>City Bank LTD</td>
                        <td>Gulshan Avenue</td>
                        <td>1262751784001</td>
                        <td>225261732</td>
                        <td> Global Explore Pvt. Limited </td>
                        <td>
                          Inter city charge applicable for Cash deposit% on
                          Total amount
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>City Bank LTD</td>
                        <td>Gulshan Avenue</td>
                        <td>1262751784001</td>
                        <td>225261732</td>
                        <td> Global Explore Pvt. Limited </td>
                        <td>
                          Inter city charge applicable for Cash deposit% on
                          Total amount
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>City Bank LTD</td>
                        <td>Gulshan Avenue</td>
                        <td>1262751784001</td>
                        <td>225261732</td>
                        <td> Global Explore Pvt. Limited </td>
                        <td>
                          Inter city charge applicable for Cash deposit% on
                          Total amount
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default dynamic(() => Promise.resolve(banklist), { ssr: false });
