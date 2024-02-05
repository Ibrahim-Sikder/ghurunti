import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import user from "../../../public/assets/review.png"
import style from "./Review.module.css"
import { EffectCoverflow, Pagination } from "swiper/modules"
import { FaQuoteLeft } from "react-icons/fa"
import Image from "next/image"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import Container from "@/ui/Container"
const Reveiw = () => {
  return (
   <Container>
     <section className="mb-[100px]">
      <div className={style.swiperSliderWrap}>
        <SectionTitle heading="What Our Client Say "></SectionTitle>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            initialSlide: 3,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.testimonialBox}>
              <FaQuoteLeft className={style.quoteIcon} />
              <div className={style.content}>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus velit non eos, unde omnis temporibus totam
                  cupiditate doloremque distinctio quidem sed, rerum delectus
                  eaque quae? Pariatur sint tempora rem, facere .
                </p>
                <div className={style.details}>
                  <div className={style.imgBx}>
                    <div className="flex items-center">
                      <Image
                        alt="swiper"
                        src={user}
                        className={style.swiperImg}
                      />
                      <div>
                        <b className="block text-[#fff]">Aminul Hoque </b>
                        <small>Business Man </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
   </Container>
  )
}

export default Reveiw
