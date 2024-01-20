import React from "react";
import style from "./profile.module.css";
import { FaAddressCard, FaBookmark, FaLock, FaRegUser } from "react-icons/fa";
import { IoLogOut,IoCardOutline  } from "react-icons/io5";
import ActiveUser from "../ActiveLink/ActiveUser";
const ProfileLeftSide = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section>
      <div className={style.userProfileLeftSide}>
        <div className={style.userInfo}>        
           <ul className={style.userInfoList}>
            <li>
            <ActiveUser href="/profile">
             <div className="flex items-center">
             <FaRegUser className="mr-2"  size={20}  />
              <span>My Account </span>
             </div>
            </ActiveUser>
            </li>
            <li>
            <ActiveUser href="/profile/booking">
             <div className="flex items-center">
             <FaBookmark className="mr-2" size={20}  />
              <span>My Booking </span>
             </div>
            </ActiveUser>
            </li>
            <li>
            <ActiveUser href="/profile/password">
             <div className="flex items-center">
             <FaLock className="mr-2"  size={20} />
              <span>Change Password </span>
             </div>
            </ActiveUser>
            </li>
            <li>
            <ActiveUser href="/profile/savecard">
             <div className="flex items-center">
             <FaAddressCard className="mr-2"  size={20} />
              <span>Save Cards</span>
             </div>
            </ActiveUser>
            </li>
            <li>
            <ActiveUser href="/profile/savecard">
             <div className="flex items-center">
             <IoCardOutline className="mr-2"  size={20}  />
              <span>Manage Your Data </span>
             </div>
            </ActiveUser>
            </li>
            
            <li >
            <div className="flex items-center ml-[15px]">
             <IoLogOut className="mr-2" size={20} />
              <span>Manage Your Data </span>
             </div>
            </li>
           </ul>
        </div>
      </div>
    </section>
    
  );
};

export default ProfileLeftSide;
