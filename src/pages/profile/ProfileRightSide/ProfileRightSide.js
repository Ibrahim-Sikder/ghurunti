import React, { useEffect, useState } from "react";
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
  FaUserCircle,
} from "react-icons/fa";
import { HiDeviceMobile, HiOutlineLockClosed, HiUsers } from "react-icons/hi";
import { FileUpload } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { decryptTransform } from "../../../../components/EncryptAndDecrypt/EncryptAnsDecrypt";
import { FormSuccess } from "../../../../components/form-success";
import { FormError } from "../../../../components/form-error";
const ProfileRightSide = () => {
  const [reload, setReload] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState({});
  const [getFile, setGetFile] = useState({});
  const [getPassportFile, setGetPassportFile] = useState({});
  const [getVisaFile, setGetVisaFile] = useState({});

  const [profileImage, setProfileImage] = useState([]);
  const [passportImage, setPassportImage] = useState([]);
  const [visaImage, setVisaImage] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setGetPassportFile(e.target.files);
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
        setGetPassportFile({});
      }
    } catch (error) {
      toast.error("Something went wrong");
      setPassportLoading(false);
      setPassportImage([]);
      setGetPassportFile({});
    }
  };
  let visaFiles;
  const handleVisaCopy = async (e) => {
    setGetVisaFile(e.target.files);
    try {
      visaFiles = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < visaFiles.length; i++) {
        formData.append("pdfFiles", visaFiles[i]);
      }
      setVisaLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        setVisaImage(data.imageLinks);
        setVisaLoading(false);
      }
      if (data.error === "Something went wrong") {
        toast.error("Something went wrong");
        setVisaLoading(false);
        setVisaImage([]);
        setGetVisaFile({});
      }
    } catch (error) {
      toast.error("Something went wrong");
      setVisaLoading(false);
      setVisaImage([]);
      setGetVisaFile({});
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const em = decryptTransform(Cookies.get("em_g"));

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/user/${em}`)
        .then((res) => res.json())
        .then((data) => setUser(data.getUser));
    } catch (error) {
      toast.error(error.message);
    }
  }, [em, reload]);

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");
    const values = {
      profile_image:
        profileImage.length !== 0 ? profileImage : user?.profile_image[0],
      title: data.title || user.title,
      given_name: data.name || user.given_name,
      surname: data.surname || user.surname,
      email: data.email || user.email,
      mobile_number: data.mobile_number || user.mobile_number,
      gender: data.gender || user.gender,
      nationality: data.nationality || user.nationality,
      date: data.date || user.date,
      passport_number: data.passport_number || user.passport_number,
      passport_expire_date:
        data.passport_expire_date || user.passport_expire_date,
      address: data.address || user.address,
      zip_code: data.post_code || user.zip_code,
      passport_file:
        passportImage.length !== 0 ? passportImage : user?.passport_file[0],
      visa_file: visaImage.length !== 0 ? visaImage : user?.visa_file[0],
    };
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:5000/api/v1/user/${em}`,
        values
      );
      if (response.status === 200) {
        setSuccess(response.data.message);
        setReload(!reload);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.userInfo}>
        <div className="flex ">
          {user?.profile_image?.length > 0 || profileImage.length > 0 ? (
            <Image
              loading="lazy"
              src={profileImage[0] || user?.profile_image[0]}
              alt="Picture of the author"
              width={150}
              height={100}
              className={style.userImg}
            />
          ) : (
            <FaUserCircle className="h-32 w-32" />
          )}
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
                <div className="text-bold btn border text-[#19ABE3] border-[#19ABE3] border-purple-1 hover:bg-[#19ABE3] hover:text-white px-8 py-2 text-center transition rounded-sm cursor-pointer">
                  Uploading...
                </div>
              ) : (
                <>
                  {getFile[0]?.name ? (
                    <label
                      className="text-bold btn border text-[#19ABE3] border-[#19ABE3] border-purple-1 hover:bg-[#19ABE3] hover:text-white px-8 py-2 text-center transition rounded-sm cursor-pointer"
                      for="file"
                    >
                      {getFile[0]?.name?.slice(0, 10)}...
                    </label>
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
              {...register("title")}
              value={user?.title || ""}
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
            defaultValue={user?.given_name || ""}
          />
        </div>

        <TextField
          className={
            errors.surname ? "border-red-400" : `${style.userInputField}`
          }
          id="outlined-required"
          label="Sur Name"
          {...register("surname")}
          value={user?.surname || ""}
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
          value={user?.email || ""}
          disabled
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
          value={user?.mobile_number}
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
            {...register("gender")}
            value={user?.gender}
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
            {passportLoading ? (
              <div>Uploading...</div>
            ) : (
              <>
                <input
                  type="file"
                  id="files"
                  className="hidden"
                  onChange={handlePassport}
                />
                {getPassportFile[0]?.name ? (
                  <label for="files">
                    {getPassportFile[0]?.name.slice(0, 15)}...
                  </label>
                ) : (
                  <label for="files">
                    <span className={style.fileUploadIcon}>
                      <FileUpload className={style.uploadIcon} />
                    </span>
                    Upload
                  </label>
                )}
              </>
            )}
          </div>
          <button className={style.viewbtn}>View Passport </button>
        </div>
        <div>
          <p className="mb-2">Visa Copy (max 2MB)</p>
          <div className={style.upload}>
            {visaLoading ? (
              <div>Uploading...</div>
            ) : (
              <>
                <input
                  type="file"
                  id="visafiles"
                  className="hidden"
                  onChange={handleVisaCopy}
                />
                {getVisaFile[0]?.name ? (
                  <label for="visafiles">
                    {getVisaFile[0]?.name.slice(0, 15)}...
                  </label>
                ) : (
                  <>
                    {" "}
                    <label for="visafiles">
                      <span className={style.fileUploadIcon}>
                        <FileUpload className={style.uploadIcon} />
                      </span>
                      Upload
                    </label>
                  </>
                )}
              </>
            )}
          </div>
          <button className={style.viewbtn}>View Visa </button>
        </div>
      </div>
      <div className="mt-5">
        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}
      </div>
      <div className={style.saveBtn}>
        <button
          disabled={loading || imageLoading || passportLoading || visaLoading}
        >
          Update{" "}
        </button>
      </div>
    </form>
  );
};

export default ProfileRightSide;
