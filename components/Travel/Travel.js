import React from "react"
import style from "./Travel.module.css"
import Image from "next/image"
import travel from "../../public/assets/travell.png"
import Container from "@/ui/Container"
const Travel = () => {
  return (
    <Container>
      <section className={style.travel}>
        <Image
          loading="lazy"
          src={travel}
          alt="Picture of the author"
          className={style.travelImg}
        />
      </section>
    </Container>
  )
}

export default Travel
