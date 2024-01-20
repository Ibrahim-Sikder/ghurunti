import React from "react";
import style from "./ProfileRightSide.module.css";
import Image from "next/image";
import admin from "../../../../public/assets/admin.png";
import TextField from "@mui/material/TextField";
const ProfileRightSide = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className={style.userInfo}>
        <div className="flex ">
          <Image
          loading="lazy"
            src={admin}
            alt="Picture of the author"
            width={150}
            height={100}
            className={style.userImg}
          />
          <div className="ml-8">
            <h2 className="text-5xl font-bold">Ghuronti</h2>
            <p className="my-1 mb-2">ghuronti@gmail.com</p>
            <button className="text-bold btn border text-[#19ABE3] border-[#19ABE3] border-purple-1 hover:bg-[#19ABE3] hover:text-white px-8 py-2 text-center transition rounded-sm">Upload Image</button>
          </div>
        </div>
      </div>
      <div className={style.inputGroupWrap}>
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="First Name"
        />
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Last Name"
        />
      </div>
      <div className={style.inputGroupWrap}>
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Email"
        />
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="password"
        />
      </div>
      <div className={style.inputGroupWrap}>
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Mobile Number"
        />
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Gender"
        />
      </div>
      <div className={style.inputGroupWrap}>
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Date of Birth "
        />
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Nationality "
        />
      </div>
      <div className={style.inputGroupWrap}>
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Passport Number "
        />
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Passport Expire Date "
        />
      </div>
      <div className={style.inputGroupWrap}>
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="First Name"
        />
        <TextField
          className={style.inputBtn}
          required
          id="outlined-required"
          label="Last Name"
        />
      </div>
      <div className={style.saveBtn}>
        <button>Save Your Information </button>
      </div>
    </div>
  );
};

export default ProfileRightSide;
