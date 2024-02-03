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
      <div className="mt-20">
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
        <div className={style.ummrahClock}>
          <div className={style.clock}>
            <p className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  stroke="#4AB449"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                />
                <path
                  stroke="#4AB449"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 4 12 14.01l-3-3"
                />
              </svg>
            </p>
            <div>
              <p>NID scanned soft</p>
              <p> copy/photocopy</p>
            </div>
          </div>
          <div className={style.clock2}>
            <p className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  stroke="#4AB449"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                />
                <path
                  stroke="#4AB449"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 4 12 14.01l-3-3"
                />
              </svg>
            </p>
            <div>
              <p>Birth certificate s color soft copy</p>
            </div>
          </div>
          <div>
            <div className={style.clock}>
              <p className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                >
                  <path
                    stroke="#4AB449 "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                  />
                  <path
                    stroke="#4AB449 "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M22 4 12 14.01l-3-3"
                  />
                </svg>
              </p>
              <div>
                <p>Valid mobile number + email id</p>
              </div>
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
