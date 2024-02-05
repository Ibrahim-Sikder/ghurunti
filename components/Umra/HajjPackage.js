import Image from "next/image"
import React from "react"
import style from "./Umra.module.css"
import hajj4 from "../../public/assets/umra2.jpg"
import hajj2 from "../../public/assets/hajj7.jpeg"
import hajj3 from "../../public/assets/hajj3.png"
import hajj from "../../public/assets/umrah7.jpg"
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import Link from "next/link"
import {
  HiCheck,
  HiCheckCircle,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import Container from "@/ui/Container"

const HajjPackage = () => {
  const hajjData = [
    {
      id: 1,
      title: "Economy Hajj Package",
      image: hajj,
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
      image: hajj3,
      day: 60,
      price: "55,500",
    },
  ]
  return (
    <Container>
      <div className="mt-20">
        <SectionTitle
          heading="Best Hajj Packages 2024 from Bangladesh"
          subHeading="Some of the renowned and best Hajj agencies in Bangladesh are
        Universal Travel & Tours, Holy Hajj & Umrah"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4 place-items-center justify-center place-content-center lg:px-5  xl:px-0">
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
              <div>
                <Link href="/hajj/economy">
                  <button className={style.hajjBtn}>
                    <span>View Details </span>
                    <HiOutlineArrowNarrowRight size={22} className="ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default HajjPackage
