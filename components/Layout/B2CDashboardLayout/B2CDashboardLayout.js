import React from "react";
import style from "./B2CDashboard.module.css";
import ProfileLeftSide from "@/pages/profile/profileLeftSide/ProfileLeftSide";
import Nav from "../../NavBarr/Nav";
import Footer from "../../Footer/Footer";
const B2CDashboardLayout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <div className={style.profileWrap}>
        <aside className={style.userProfileLeftSide}>
          <ProfileLeftSide/>
        </aside>
        <main className={style.userProfileRightSide}>
        {children}
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default B2CDashboardLayout;
