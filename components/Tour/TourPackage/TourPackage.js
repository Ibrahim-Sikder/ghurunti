import React from "react"
import style from "./TourPackage.module.css"
import Image from "next/image"
import india from "../../../public/assets/india.jpeg"
import india2 from "../../../public/assets/india2.jpeg"
import india3 from "../../../public/assets/india3.jpeg"
import india4 from "../../../public/assets/india4.jpeg"
import india5 from "../../../public/assets/india5.jpeg"
import india6 from "../../../public/assets/india6.jpeg"
import india7 from "../../../public/assets/india7.jpeg"
import india8 from "../../../public/assets/india8.jpeg"
import india9 from "../../../public/assets/india9.jpeg"
import india10 from "../../../public/assets/india10.jpeg"
import india11 from "../../../public/assets/india4.jpeg"
import india12 from "../../../public/assets/destination9.jpeg"
import destination11 from "../../../public/assets/destination9.jpeg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Link from "next/link"
import { StarOutline } from "@mui/icons-material"
import Container from "@/ui/Container"

const TourPackage = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Container>
      <div className={style.packageWrap}>
        <h3 className="text-2xl font-bold mb-5">Similar Tour Package </h3>
        <Slider {...settings}>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india2}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india3}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india4}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>{" "}
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india5}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>

          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india6}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india7}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india8}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india9}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>

          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india11}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india11}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <div className={style.package}>
            <div className={style.packageImgWrap}>
              <Image
                loading="lazy"
                alt="tour"
                src={destination11}
                className={style.packageImg}
              />
            </div>
            <div className={style.packageContent}>
              <h6 className="text-xl font-bold">
                Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                North-eastern part
              </h6>
              <div className="flex my-2">
                <StarOutline className={style.star} />
                <StarOutline className={style.star} />
                <StarOutline className={style.star} />
                <StarOutline className={style.star} />
                <StarOutline className={style.star} />
              </div>
              <small className="block mb-2">Transportation Services</small>
              <strong>
                {" "}
                from $666.67 per adult (price varies by group size)
              </strong>
            </div>
          </div>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india10}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
          <Link href="/tours/package">
            <div className={style.package}>
              <div className={style.packageImgWrap}>
                <Image
                  loading="lazy"
                  alt="tour"
                  src={india12}
                  className={style.packageImg}
                />
              </div>
              <div className={style.packageContent}>
                <h6>
                  Private Tour: 5 Days - Bangladesh Nature & Culture Tour -
                  North-eastern part
                </h6>
                <div className="flex my-2">
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                  <StarOutline className={style.star} />
                </div>
                <small className="block mb-2">Transportation Services</small>
                <strong>
                  {" "}
                  from $666.67 per adult (price varies by group size)
                </strong>
              </div>
            </div>
          </Link>
        </Slider>
      </div>
    </Container>
  )
}

export default TourPackage
