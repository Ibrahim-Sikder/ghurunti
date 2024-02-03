import React from "react"
import style from "./SectionTitle.module.css"
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <div className={style.sectionTitle}>
        <h2 className="text-capitalize">{heading}</h2>
        <p>{subHeading}</p>
      </div>
    </div>
  )
}

export default SectionTitle
