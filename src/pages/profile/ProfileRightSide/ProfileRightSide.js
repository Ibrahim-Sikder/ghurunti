import React from "react"
import style from "./ProfileRightSide.module.css"
import Image from "next/image"
import admin from "../../../../public/assets/admin.png"
import TextField from "@mui/material/TextField"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Box } from "@mui/system"
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFlag,
  FaHome,
  FaLaptopHouse,
  FaPassport,
  FaUserAlt,
} from "react-icons/fa"
import { HiDeviceMobile, HiOutlineLockClosed, HiUsers } from "react-icons/hi"
import { FileUpload } from "@mui/icons-material"
const ProfileRightSide = () => {
  const [age, setAge] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

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
            <button className="text-bold btn border text-[#19ABE3] border-[#19ABE3] border-purple-1 hover:bg-[#19ABE3] hover:text-white px-8 py-2 text-center transition rounded-sm">
              Upload Image
            </button>
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
              value={age}
              label="Title"
              onChange={handleChange}
            >
              <MenuItem value={10}>Mr</MenuItem>
              <MenuItem value={20}>Ms</MenuItem>
              <MenuItem value={30}>Mrs</MenuItem>
              <MenuItem value={30}>Dr</MenuItem>
              <MenuItem value={30}>Engr</MenuItem>
              <MenuItem value={30}>Miss</MenuItem>
              <MenuItem value={30}>Master</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          className={style.userInputField}
          required
          id="outlined-required"
          label="Given Name"
        />
        <TextField
          className={style.userInputField}
          id="outlined-required"
          label="Sur Name"
        />
      </div>
      <div className={style.inputGroupWrap}>
        <FaEnvelopeOpenText size={20} className={style.userIcon} />
        <TextField fullWidth id="outlined-required" label="Email" />
      </div>
      <div className="mt-3 flex items-center ">
        <HiOutlineLockClosed size={20} className={style.userIcon} />
        <TextField fullWidth id="outlined-required" label="password" />
      </div>
      <div className="flex mt-3 items-center">
        <HiDeviceMobile size={20} className={style.userIcon} />
        <TextField fullWidth id="outlined-required" label="Mobile Number" />
      </div>
      <div className="flex items-center mt-3 ">
        <HiUsers size={20} className={style.userIcon} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Title"
            onChange={handleChange}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female </MenuItem>
            <MenuItem value={30}>Other</MenuItem>
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
            value={age}
            label="Title"
            onChange={handleChange}
          >
            <MenuItem value={10}>Bangladesh</MenuItem>
            <MenuItem value={20}>Australia </MenuItem>
            <MenuItem value={30}>India</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex items-center mt-3">
        <FaCalendarAlt size={20} className={style.userIcon} />
        <TextField fullWidth id="outlined-required" label="Date of Birth " />
      </div>
      <div className="flex items-center mt-3">
        <FaPassport size={20} className={style.userIcon} />
        <TextField fullWidth id="outlined-required" label="Passport Number " />
      </div>

      <div className="flex items-center mt-3">
        <FaPassport size={20} className={style.userIcon} />
        <TextField
          fullWidth
          id="outlined-required"
          label="Passport Expire Date"
        />
      </div>
      <div className="flex items-center mt-3">
        <FaHome size={20} className={style.userIcon} />
        <TextField fullWidth id="outlined-required" label="Address" />
      </div>
      <div className="flex items-center mt-3">
        <FaLaptopHouse size={20} className={style.userIcon} />
        <TextField fullWidth id="outlined-required" label="Post Code" />
      </div>
      <div className="flex items-cener mt-5">
        <div>
          <p className="mb-2">Passport Copy (max 2MB)</p>
          <div className={style.upload}>
            <input type="file" id="files" className="hidden" />
            <label for="files">
              <span className={style.fileUploadIcon}>
                <FileUpload className={style.uploadIcon} />
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
                <FileUpload className={style.uploadIcon} />
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
    </div>
  )
}

export default ProfileRightSide
