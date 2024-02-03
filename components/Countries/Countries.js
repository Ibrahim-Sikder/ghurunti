import React from "react"
import Image from "next/image"
import malasiya from "../../public/assets/malasiya.png"
import usa from "../../public/assets/usa.png"
import england from "../../public/assets/england.png"
import china from "../../public/assets/china.png"
import germany from "../../public/assets/germany.png"
import newzealand from "../../public/assets/newzealand.png"
import italy from "../../public/assets/italy.png"
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import Container from "@/ui/Container"

const Countries = () => {
  return (
    <Container>
      <div className="mt-10 text-center">
        <SectionTitle
          heading="Top visited countries"
          subHeading=" The Top Ranking of Most Visited Countries in the World is based on
        the most recent available numbers of visitors a country"
        ></SectionTitle>
        <div className=" p-10 bg-[#DBF0DB] rounded-md ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10 place-items-center">
            <Image
              className="h-[170px] object-cover "
              loading="lazy"
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              loading="lazy"
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[170px] object-cover "
            />
            <Image
              loading="lazy"
              src={china}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[170px] object-cover "
            />
            <Image
              src={germany}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[170px] object-cover "
            />
            <Image
              src={newzealand}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[170px] object-cover "
            />
            <Image
              src={england}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[170px] object-cover "
            />
            <Image
              loading="lazy"
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[170px] object-cover "
            />
            <Image
              loading="lazy"
              src={usa}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-[170px] object-cover "
            />
          </div>
          <button className="btn">View More countries</button>
        </div>
      </div>
    </Container>
  )
}

export default Countries
