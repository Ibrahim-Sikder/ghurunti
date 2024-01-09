import React from "react";
import style from "../../UserDashBoard/UserDashBoard.module.css";
import styling from './B2BdashboardLayout.module.css'
import Footer from "../../Footer/Footer";
import UserDashBoardLeft from "../../UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
const B2BdashboardLayout = ({ children }) => {    
  return (
    <div>
      <div className={style.sideBarWrap}>
        <aside className={styling.leftSideBar}>
        <UserDashBoardLeft/>
        </aside>
        <main className={style.dashboardRight}>
            <RightSideTopBar/>
            {children}
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default dynamic(() => Promise.resolve(B2BdashboardLayout), { ssr: false });
