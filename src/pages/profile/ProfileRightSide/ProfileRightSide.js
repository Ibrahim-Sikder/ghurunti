import React, { useState } from "react";
import style from "./ProfileRightSide.module.css";
import Image from "next/image";
import admin from "../../../../public/assets/admin.png";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFlag,
  FaHome,
  FaLaptopHouse,
  FaPassport,
  FaUserAlt,
} from "react-icons/fa";
import { HiDeviceMobile, HiOutlineLockClosed, HiUsers } from "react-icons/hi";
import { FileUpload } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const ProfileRightSide = () => {
  const [getFile, setGetFile] = useState({});

  const [profileImage, setProfileImage] = useState([]);
  const [passportImage, setPassportImage] = useState([]);
  const [visaImage, setVisaImage] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [passportLoading, setPassportLoading] = useState(false);
  const [visaLoading, setVisaLoading] = useState(false);

  let files;
  const handleProfileImage = async (e) => {
    setGetFile(e.target.files);
    try {
      files = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("pdfFiles", files[i]);
      }
      setImageLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        setProfileImage(data.imageLinks);
        setImageLoading(false);
      }
      if (data.error === "Something went wrong") {
        toast.error("Something went wrong");
        setImageLoading(false);
        setProfileImage([]);
        setGetFile({});
      }
    } catch (error) {
      toast.error("Something went wrong");
      setImageLoading(false);
      setProfileImage([]);
      setGetFile({});
    }
  };
  let passportFiles;
  const handlePassport = async (e) => {
    setGetFile(e.target.files);
    try {
      passportFiles = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < passportFiles.length; i++) {
        formData.append("pdfFiles", passportFiles[i]);
      }
      setPassportLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        setPassportImage(data.imageLinks);
        setPassportLoading(false);
      }
      if (data.error === "Something went wrong") {
        toast.error("Something went wrong");
        setPassportLoading(false);
        setPassportImage([]);
        setGetFile({});
      }
    } catch (error) {
      toast.error("Something went wrong");
      setPassportLoading(false);
      setPassportImage([]);
      setGetFile({});
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setValue("profile_image", file);
  };

  console.log(passportImage);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="mt-5">
              <input
                type="file"
                id="file"
                className="hidden"
                name="profile_image"
                onChange={handleProfileImage}
              />
              {imageLoading ? (
                <div  className="text-bold btn border text-[#19ABE3] border-[#19ABE3] border-purple-1 hover:bg-[#19ABE3] hover:text-white px-8 py-2 text-center transition rounded-sm cursor-pointer">Uploading...</div>
              ) : (
                <>
                  {getFile[0]?.name ? (
                    <label  className="text-bold btn border text-[#19ABE3] border-[#19ABE3] border-purple-1 hover:bg-[#19ABE3] hover:text-white px-8 py-2 text-center transition rounded-sm cursor-pointer" for="file">{getFile[0]?.name?.slice(0,10)}...</label>
                  ) : (
                    <label
                      htmlFor="file"
                      className="text-bold btn border text-[#19ABE3] border-[#19ABE3] border-purple-1 hover:bg-[#19ABE3] hover:text-white px-8 py-2 text-center transition rounded-sm cursor-pointer"
                    >
                      Upload Image
                    </label>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={style.inputGroupWrap}>
        <FaUserAlt size={20} className={style.userIcon} />
        <Box sx={{ minWidth: 120 }} className={style.inputBox}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Title</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Title"
              // onChange={handleChange}
              {...register("title")}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Dr">Dr</MenuItem>
              <MenuItem value="Engr">Engr</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Master">Master</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
          <TextField
            className={style.userInputField}
            id="outlined-required"
            label="Given Name"
            {...register("name")}
          />
        </div>

        <TextField
          className={
            errors.surname ? "border-red-400" : `${style.userInputField}`
          }
          id="outlined-required"
          label="Sur Name"
          {...register("surname")}
        />
        <br />
      </div>
      <div className={style.inputGroupWrap}>
        <FaEnvelopeOpenText size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          label="Email"
          {...register("email")}
        />
      </div>
      {/* <div className="mt-3 flex items-center ">
          <HiOutlineLockClosed size={20} className={style.userIcon} />
          <TextField fullWidth id="outlined-required" label="password" />
        </div> */}
      <div className="flex mt-3 items-center">
        <HiDeviceMobile size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          label="Mobile Number"
          {...register("mobile_number")}
        />
      </div>
      <div className="flex items-center mt-3 ">
        <HiUsers size={20} className={style.userIcon} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Title"
            // onChange={handleChange}
            {...register("gender")}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female </MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex items-center mt-3 ">
        <FaFlag size={20} className={style.userIcon} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Title"
            // onChange={handleChange}
            {...register("nationality")}
          >
            <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
            <MenuItem value={"Australia"}>Australia </MenuItem>
            <MenuItem value={"India"}>India</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex items-center mt-3">
        <FaCalendarAlt size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          type="date"
          {...register("date")}
        />
      </div>
      <div className="flex items-center mt-3">
        <FaPassport size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          label="Passport Number "
          {...register("passport_number")}
        />
      </div>

      <div className="flex items-center mt-3">
        <FaPassport size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          label="Passport Expire Date"
          {...register("passport_expire_date")}
        />
      </div>
      <div className="flex items-center mt-3">
        <FaHome size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          label="Address"
          {...register("address")}
        />
      </div>
      <div className="flex items-center mt-3">
        <FaLaptopHouse size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          label="Post Code"
          {...register("post_code")}
        />
      </div>

      <div className="flex items-center mt-5">
        <div>
          <p className="mb-2">Passport Copy (max 2MB)</p>
          <div className={style.upload}>
            <input type="file" id="files" className="hidden" />
            <label for="files" onClick={handlePassport}>
              <span className={style.fileUploadIcon}>
                <FileUpload
                  className={style.uploadIcon}
                  // {...register("passport_copy")}
                />
              </span>
              Upload
            </label>
          </div>
          <button className={style.viewbtn}>View Passport </button>
        </div>
        <div>
          <p className="mb-2">Visa Copy (max 2MB)</p>
          <div className={style.upload}>
            <input type="file" id="files" className="hidden" />
            <label for="files">
              <span className={style.fileUploadIcon}>
                <FileUpload
                  className={style.uploadIcon}
                  {...register("visa_copy")}
                />
              </span>
              Upload
            </label>
          </div>
          <button className={style.viewbtn}>View Visa </button>
        </div>
      </div>
      <div className={style.saveBtn}>
        <button>Update </button>
      </div>
    </form>
  );
};

export default ProfileRightSide;
