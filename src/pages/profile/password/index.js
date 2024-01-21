import React from "react"

import styles from "./password.module.css"
import Image from "next/image"
import password from "../../../../public/assets/pass.png"
import TextField from "@mui/material/TextField"
import { FaEnvelopeOpenText } from "react-icons/fa"
import B2CDashboardLayout from "../../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout"
import { HiOutlineLockClosed } from "react-icons/hi"
const Password = () => {
  return (
    <B2CDashboardLayout>
      <div className={styles.changePassWrap}>
        <div>
          <Image
            loading="lazy"
            src={password}
            alt="Picture of the author"
            width={400}
            height={400}
          />
          <div className={styles.changePassInputWrap}>
            <div className="mt-3 flex items-center ">
              <FaEnvelopeOpenText size={25} className="mr-5" />
              <TextField fullWidth id="outlined-required" label="Email" />
            </div>
            <div className="mt-3 flex items-center ">
              <HiOutlineLockClosed size={25} className="mr-5" />
              <TextField
                fullWidth
                id="outlined-required"
                label="Old Password"
              />
            </div>
            <div className="mt-3 flex items-center ">
              <HiOutlineLockClosed size={25} className="mr-5" />
              <TextField
                fullWidth
                id="outlined-required"
                label="New Password"
              />
            </div>
            <div className="mt-3 flex items-center ">
              <HiOutlineLockClosed size={25} className="mr-5" />
              <TextField
                fullWidth
                id="outlined-required"
                label="Re-New Password"
              />
            </div>
            <div className={styles.updatedPassword}>
              <button>Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </B2CDashboardLayout>
  )
}

export default Password
