import React, { useEffect } from "react";
import style from "../../UserDashBoard/UserDashBoard.module.css";
import styling from './B2BdashboardLayout.module.css'
import Footer from "../../Footer/Footer";
import UserDashBoardLeft from "../../UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import { HiArrowNarrowUp } from "react-icons/hi";
import './B2BdashboardLayout.module.css'
const B2BdashboardLayout = ({ children }) => {  

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('button')
     if(window.scrollY > 600){
       button.classList.add('scrollToTopBtn')
      }
      else{
      button.classList.remove('scrollToTopBtn')
     }

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

function scrollToTop(){
  window.scrollTo(0,0)
  scroll.scrollToTop({ smooth: true });
}

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
      <button onClick={scrollToTop} className="scrollToTopBtn" id="button"><HiArrowNarrowUp size={25} /> </button>

    </div>
  );
};

export default dynamic(() => Promise.resolve(B2BdashboardLayout), { ssr: false });
