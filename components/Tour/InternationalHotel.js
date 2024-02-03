import React from "react"
import destination from "../../public/assets/destination.jpeg"
import destination2 from "../../public/assets/destination6.jpeg"
import destination3 from "../../public/assets/destination2.jpeg"
import destination4 from "../../public/assets/destination3.jpeg"
import destination5 from "../../public/assets/destination1.jpeg"
import destination6 from "../../public/assets/destination4.jpeg"
import destination7 from "../../public/assets/destination5.jpeg"
import destination8 from "../../public/assets/destination6.jpeg"
import destination9 from "../../public/assets/destination7.jpeg"
import destination10 from "../../public/assets/destination8.jpeg"
import destination11 from "../../public/assets/destination9.jpeg"
import destination12 from "../../public/assets/destination10.jpeg"
import destination13 from "../../public/assets/destination11.jpeg"
import india from "../../public/assets/india.jpeg"
import india2 from "../../public/assets/india2.jpeg"
import india3 from "../../public/assets/india3.jpeg"
import india4 from "../../public/assets/india4.jpeg"
import india5 from "../../public/assets/india5.jpeg"
import india6 from "../../public/assets/india6.jpeg"
import india7 from "../../public/assets/india7.jpeg"
import india8 from "../../public/assets/india8.jpeg"
import india9 from "../../public/assets/india9.jpeg"
import india10 from "../../public/assets/india10.jpeg"
import india11 from "../../public/assets/india4.jpeg"
import india12 from "../../public/assets/destination9.jpeg"
import tour from "../../public/assets/tourImage3.jpg"
import tour2 from "../../public/assets/tourImage4.jpg"
import tour3 from "../../public/assets/tourImage5.jpg"
import tour4 from "../../public/assets/tourImage6.jpg"
import tour5 from "../../public/assets/tourImage7.jpg"
import tour6 from "../../public/assets/tourImage8.jpg"
import tour7 from "../../public/assets/tourImage9.jpg"
import tour8 from "../../public/assets/tourImage10.jpg"
import tour9 from "../../public/assets/tourImage11.jpg"
import tour10 from "../../public/assets/tourImage12.jpg"
import tour11 from "../../public/assets/tourImage13.jpg"
import Image from "next/image"
import Link from "next/link"
import style from "./Tour.module.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import { East } from "@mui/icons-material"
import SeeMoreButton from "../Shared/SeeMoreButton/SeeMoreButton"

const InternationalHotel = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 56000,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
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
    <section>
      <SectionTitle
        heading="International Hotel "
        subHeading="Explore breathtaking landscapes and cultural wonders with our immersive inbound tour packages, curated for an unforgettable journey into the heart of diverse destinations."
      ></SectionTitle>
      <div className={style.destination}>
        <div>
          <Slider {...settings}>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6>The Grand Canyon </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination2}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Colosseum, Rome </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination3}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">
                    Lakshadweep. Tropical Band of Islands{" "}
                  </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">484$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination4}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Leh. White Paradise in Ladakh </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">454$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination5}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Pondicherry. Bewitching French City </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination6}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">
                    Goa. Popular for beaches and nightlife{" "}
                  </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination7}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination8}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination9}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination10}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination12}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination13}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination11}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        <Link href="/hotel/international">
          <SeeMoreButton />
        </Link>
      </div>
      {/* trending Indian destination  */}

      <SectionTitle
        heading="Domestic Hotel "
        subHeading="The world is now just a hop, skip and jump away and here’s how you can make your travel easier and better."
      ></SectionTitle>

      <div className={style.destination}>
        <div>
          <Slider {...settings}>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6>Radisson Blu Plaza Delhi Airport </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">504$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india2}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">The Corinthians Resort & Club </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">1344$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india3}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Roseate House</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">454$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india4}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Kaldan Samudhra Palace</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">124$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india5}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Gokulam Grand Turtle on the Beach </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">774$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india6}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Caravela Beach Resort </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india7}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">The Lalit New Delhi </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india8}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Trident Udaipur</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india9}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Taj Resort & Convention Centre, Goa </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india10}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Country Inn Mysore </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india11}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3"> The Leela Kovalam, A Raviz Hotel</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={india12}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Chandys Windy Woods </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                loading="lazy"
                src={destination11}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        <Link href="/hotel/international">
          <SeeMoreButton />
        </Link>
      </div>
    </section>
  )
}

export default InternationalHotel
