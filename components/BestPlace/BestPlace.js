import React from "react";
import style from "./BestPlace.module.css";
import Image from "next/image";
import cox from "../../public/assets/cox.jpg";
import cox2 from "../../public/assets/destination16.jpg";
import shylet from "../../public/assets/shylet.jpg";
import sundarban from "../../public/assets/see3.png";
import Link from "next/link";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const BestPlace = () => {
  const bestPlaceData = [
    {
      id: 1,
      price:4500,
      title: "Cox's Bazar ",
      desc: " It is famous mostly for its long natural sandy beach and it is infamous for the largest refugee camp n the world It is located 150 km",
      image: cox,
    },
    {
      id: 1,
      price:3999,
      title: "Shylet",
      desc: "Tourist attractions outside the city include Ratargul Swamp Forest, Bisnakandi, Bholaganj SadaPathor,Jaflong, Lalakhal, Khadimnagar Rain Forest, Sreemangal",
      image: shylet,
    },
    {
      id: 1,
      price:5500,
      title: "Sundarbans",
      desc: " Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal",
      image: sundarban,
    },
    {
      id: 1,
      price:4500,
      title: "Rangamati ",
      desc: " It is famous mostly for its long natural sandy beach and it is infamous for the largest refugee camp n the world It is located 150 km",
      image: cox2,
    },
  ]
  return (
    <section className='my-[100px]'>
      <SectionTitle
        subHeading=" Bangladesh is a South Asian country with a rich cultural heritage and
      natural beauty. It is home to the world's largest mangrove forest,
      culture, and natural beauty."
        heading="Best Places To Visit In Bangladesh"
      ></SectionTitle>
      <div>
        <div className={style.singleBestPlace}>
          <div className="max-w-screen-xl mx-auto ">
            <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
            {
              bestPlaceData.map(data=>  <div key={data.id} className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
              <Link
                href="/details"
                className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-[#4AB449]"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={data.image}
                />
                <div className="absolute gradient transition duration-500 group-hover:bg-[#19ABE3] group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                       {data.title}
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        {data.price}TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </div>)
            }
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPlace;
