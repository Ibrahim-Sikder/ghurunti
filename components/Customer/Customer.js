import React from "react"
import style from "./Customer.module.css"
import quote2 from "../../public/assets/quote2.png"
import Image from "next/image"
import Slider from "react-slick"
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import Container from "@/ui/Container"
const Customer = () => {
  var settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  }
  return (
    <Container>
      <SectionTitle
        heading="Customer satisfaction is our top priority"
        subHeading=" Our clients praise us for our great results, personable service,
      expert knowledge. Here are what just a few of them had to say"
      ></SectionTitle>

      <Slider {...settings}>
        <div className={style.Customers}>
          <div className={style.customer}>
            <p>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </p>
            <Image
              loading="lazy"
              src={quote2}
              alt="Picture of the author"
              width={100}
              height={30}
              className={style.quoteImg}
            />
          </div>
        </div>
        <div className={style.Customers}>
          <div className={style.customer}>
            <p>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </p>
            <Image
              loading="lazy"
              src={quote2}
              alt="Picture of the author"
              width={100}
              height={30}
              className={style.quoteImg}
            />
          </div>
        </div>
        <div className={style.Customers}>
          <div className={style.customer}>
            <p>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </p>
            <Image
              loading="lazy"
              src={quote2}
              alt="Picture of the author"
              width={100}
              height={30}
              className={style.quoteImg}
            />
          </div>
        </div>
      </Slider>
    </Container>
  )
}

export default Customer
