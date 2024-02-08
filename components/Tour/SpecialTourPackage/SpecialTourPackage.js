import React from "react"
import Image from "next/image"
import tour from "../../../public/assets/tourPackage.jpg"
import tour2 from "../../../public/assets/tourImage3.jpg"
import tour3 from "../../../public/assets/tourImage4.jpg"
import tour4 from "../../../public/assets/tourImage5.jpg"
import tour5 from "../../../public/assets/tourImage6.jpg"
import tour6 from "../../../public/assets/tourImage7.jpg"
import style from "./SpecialTourPackage.module.css"
import Link from "next/link"
import see from "../../../public/assets/shylet.jpg"
import see3 from "../../../public/assets/see3.png"
import { ArrowForward, ArrowBack } from "@mui/icons-material"
import RelatedTourPackage from "../../../components/Tour/TourPackage/RelatedTourPackage"
import Container from "@/ui/Container"
const SpecialTourPackage = () => {
  return (
    <div>
      <div className={style.tourImgWrap}>
        <Image
          loading="lazy"
          className={style.tourImg}
          src={tour}
          alt="tour7"
          width={500}
          height={500}
        />
      </div>
      <Container>
      <h3 className="md:text-5xl font-bold text-3xl text-center mt-8 mb-5">
        International Destination{" "}
      </h3>
      <div className={style.singleBestPlace}>
        <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-10">
          <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
            <div className="h-72  tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 md:h-96 shadow-2xl block group rounded-3xl  relative mx-2 overflow-hidden "
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={tour2}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h-72  tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 md:h-96 block group relative mx-2 rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={tour}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full rounded-3xl h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h-72  tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 rounded-3xl  md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={tour3}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h-72   tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 rounded-3xl  md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={tour4}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h-72  tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 rounded-3xl  md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={tour5}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h-72  tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 rounded-3xl  md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={tour6}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h-72  tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 rounded-3xl  md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={see}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h-72  tourPackag md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-3 rounded-3xl  ">
              <Link
                href="/tours/book-tours-package"
                className="h-72 rounded-3xl  md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                <Image
                  loading="lazy"
                  className="absolute z-0 object-cover w-full rounded-3xl h-72 md:h-96 transform duration-500 group-hover:scale-150"
                  alt="house"
                  src={see3}
                />

                <div className="absolute gradient transition duration-500 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                        Cox s Bazar
                      </h2>
                      <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                        4500TK
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      {" "}
                      It is famous mostly for its long natural sandy beach, and
                      it is infamous for the largest refugee camp in the world.
                      It is located 150 km.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={style.pagination}>
            <div className={style.paginationBtn}>
              <button>
                <ArrowBack className={style.arrowLeft} />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>
                <ArrowForward className={style.arrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 mb-5 ">
          <h3 className="text-3xl md:text-left text-center font-bold">
            Related Package{" "}
          </h3>
          <RelatedTourPackage />
         
        </div>
      </div>
      </Container>
    </div>
  )
}

export default SpecialTourPackage
