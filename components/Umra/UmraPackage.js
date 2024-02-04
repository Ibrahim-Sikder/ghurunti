import Image from "next/image"
import React from "react"
import style from "./Umra.module.css"
import hajj4 from "../../public/assets/hajj4.png"
import hajj2 from "../../public/assets/hajj2.png"
import hajj3 from "../../public/assets/hajj3.png"
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import Link from "next/link"
import { HiCheck, HiCheckCircle } from "react-icons/hi"
import Container from "@/ui/Container"
import { HowToReg } from "@mui/icons-material"

const UmraPackage = () => {
  const hajjData = [
    {
      id: 1,
      title: "Economy Hajj Package",
      image: hajj3,
      day: 50,
      price: "66,500",
    },
    {
      id: 2,
      title: "Platinum Hajj Package",
      image: hajj4,
      day: 30,
      price: "33,500",
    },
    {
      id: 3,
      title: "Premium Hajj Package",
      image: hajj2,
      day: 60,
      price: "55,500",
    },
    {
      id: 3,
      title: "Premium Hajj Package",
      image: hajj2,
      day: 60,
      price: "55,500",
    },
  ]
  return (
    <Container>
      <div className="mt-20 px-5">
        <SectionTitle
          heading="Best Umrah Packages"
          subHeading="Some of the renowned and best Hajj agencies in Bangladesh are
        Universal Travel & Tours, Holy Hajj & Umrah"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4 place-items-center">
          {hajjData.map((hajj) => (
            <div key={hajj.id} className={style.singleHajj}>
              <div className={style.imgWrap}>
                <Image
                  loading="lazy"
                  src={hajj.image}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.hajjImg}
                />
              </div>
              <div className={style.hajjContentWrap}>
                <div className="flex justify-between">
                  <h3 className="font-semibold mb-2">{hajj.title}</h3>
                  <p className={style.day}>
                    <div>{hajj.day} day </div>
                  </p>
                </div>
                <ul>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">3* Hotel In Mecca.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">3* Hotel In Madinah.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">
                      Hotel Distance, 300 – 400 Meter.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">5-6 Persons In Every Room.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">Saudi / Biman Airlines Ticket.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">Travel By Ac Bus.</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between w-48 ">
                <span className="text-[#4AB449]">Starts From</span>
                <b>{hajj.price}</b>
              </div>
              <div className={style.viewDetailBtn}>
                <button className={style.hajjBtn}>
                  <Link href="/hajj/economy">
                    {" "}
                    <h4>View Details</h4>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SectionTitle
            heading=" Hajj pre-registration Bangladesh 2023- 2024-2025"
            subHeading="Non-resident & Resident Bangladeshi adults and children can apply
        for hajj pre-registration through the Hajj agency."
          ></SectionTitle>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 place-items-center ">
          <div className={style.registrationCard}>
            <HowToReg className={style.registerIcon} />
            <div>
              <p>NID scanned soft</p>
              <p> copy/photocopy</p>
            </div>
          </div>
          <div className={`${style.registrationCard} ${style.activeRegister}`}>
            <HowToReg className={style.registerIcon} />
            <div>
              <p>Birth certificate s color soft copy</p>
            </div>
          </div>
          <div className={style.registrationCard}>
            <HowToReg className={style.registerIcon} />
            <div>
              <p>Valid mobile number + email id</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className={style.registrationBtn}>
            <button className={style.rBtn}>
              <h4> Get pre-register</h4>
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UmraPackage
