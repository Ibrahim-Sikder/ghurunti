import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hotel from "../../../public/assets/hotel9.jpg";
import hotel2 from "../../../public/assets/hotell3.jpeg";
import hotel3 from "../../../public/assets/hotel14.jpg";
import hotel4 from "../../../public/assets/hotel12.jpg";
import hotel5 from "../../../public/assets/hotell6.jpeg";
import hotel6 from "../../../public/assets/hotel16.jpg";
import style from "./HotelDetails.module.css";
import { CheckCircleOutline } from "@mui/icons-material";
import travel from "../../../public/assets/travel2.png";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useRouter } from "next/router";
import useModifyModal from "../../Common/Hooks/useModifyModal";

const HotelDetails = () => {
  const modifyModal = useModifyModal();
  const [specificPackage, setSpecificPackage] = useState({});
  console.log(specificPackage);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Make sure id is defined before making the fetch request
    if (id) {
      fetch(`http://localhost:5000/api/v1/hotel/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecificPackage(data.getPackage);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  return (
    <section>
      <div className={style.hotelDetailWraps}>
        <div className={style.hotelDetailTopBar}>
          <div className={style.detailHeadText}>
            <h2 className="text-xl md:text-3xl font-bold before:">
              Laos: Land of a Million Elephants!
            </h2>
            <div>
              <p className="mt-3">
                30th August 2023 - 1st September 2023 1 Persons - 1 Rooms
              </p>
            </div>
          </div>
          <button onClick={() => modifyModal.onOpen("Hotel Search Modify")}>
            Modify Search
          </button>
        </div>
        <div className={style.hotelDetailWrap}>
          <div className={style.leftSideDetail}>
            <div className={style.topImagae}>
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a href="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80">
                  <Image
                    loading="lazy"
                    alt="tours2"
                    src={hotel}
                    className={style.hotelImage}
                  />
                </a>
                <a href="https://wallpaperaccess.com/full/2690578.jpg">
                  <Image
                    loading="lazy"
                    alt="tours3"
                    src={hotel2}
                    className="hidden"
                  />
                </a>
                <a href="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80">
                  <Image
                    loading="lazy"
                    alt="tours2"
                    src={hotel3}
                    className="hidden"
                  />
                </a>
                <a href="https://media.istockphoto.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=0&k=20&c=LPNC-aqrsOsgxU8eqPcR38ACIOIjqAmh0VSKclIa2gs=">
                  <Image
                    loading="lazy"
                    alt="tours4"
                    src={hotel4}
                    className="hidden"
                  />
                </a>
                <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                  <Image
                    loading="lazy"
                    alt="tours5"
                    src={hotel5}
                    className="hidden"
                  />
                </a>
                <a href="https://media.istockphoto.com/id/1198357648/photo/luxury-villa-with-sea-view.jpg?s=612x612&w=0&k=20&c=8Zo0cxUkfwDzjq2m39IoMHQllWXLfn3e_fEKSWSxZng=">
                  <Image
                    loading="lazy"
                    alt="tours2"
                    src={hotel}
                    className="hidden"
                  />
                </a>
                <a href="https://media.istockphoto.com/id/1198357651/photo/room-with-sea-view.jpg?s=612x612&w=0&k=20&c=nWgr44k1ncmDYaOsO4S-638c7r07jocn6_c_HvJthfw=">
                  <Image
                    loading="lazy"
                    alt="tours6"
                    src={hotel6}
                    className="hidden"
                  />
                </a>
              </LightGallery>
            </div>
            <div className={style.groupImgWrap}>
              <div className={style.groupImg}>
                <div className={style.leftSideSimg}>
                  <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    <a href="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel2}
                        className={style.singleImg}
                      />
                    </a>
                    <a href="https://wallpaperaccess.com/full/2690578.jpg">
                      <Image
                        loading="lazy"
                        alt="tours3"
                        src={hotel2}
                        className="hidden"
                      />
                    </a>
                    <a href="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel3}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=0&k=20&c=LPNC-aqrsOsgxU8eqPcR38ACIOIjqAmh0VSKclIa2gs=">
                      <Image
                        loading="lazy"
                        alt="tours4"
                        src={hotel4}
                        className="hidden"
                      />
                    </a>
                    <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                      <Image
                        loading="lazy"
                        alt="tours5"
                        src={hotel5}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357648/photo/luxury-villa-with-sea-view.jpg?s=612x612&w=0&k=20&c=8Zo0cxUkfwDzjq2m39IoMHQllWXLfn3e_fEKSWSxZng=">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357651/photo/room-with-sea-view.jpg?s=612x612&w=0&k=20&c=nWgr44k1ncmDYaOsO4S-638c7r07jocn6_c_HvJthfw=">
                      <Image
                        loading="lazy"
                        alt="tours6"
                        src={hotel6}
                        className="hidden"
                      />
                    </a>
                  </LightGallery>
                </div>
                <div className={style.leftSideSimg}>
                  <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    <a href="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel4}
                        className={style.singleImg}
                      />
                    </a>
                    <a href="https://wallpaperaccess.com/full/2690578.jpg">
                      <Image
                        loading="lazy"
                        alt="tours3"
                        src={hotel2}
                        className="hidden"
                      />
                    </a>
                    <a href="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel3}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=0&k=20&c=LPNC-aqrsOsgxU8eqPcR38ACIOIjqAmh0VSKclIa2gs=">
                      <Image
                        loading="lazy"
                        alt="tours4"
                        src={hotel4}
                        className="hidden"
                      />
                    </a>
                    <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                      <Image
                        loading="lazy"
                        alt="tours5"
                        src={hotel5}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357648/photo/luxury-villa-with-sea-view.jpg?s=612x612&w=0&k=20&c=8Zo0cxUkfwDzjq2m39IoMHQllWXLfn3e_fEKSWSxZng=">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357651/photo/room-with-sea-view.jpg?s=612x612&w=0&k=20&c=nWgr44k1ncmDYaOsO4S-638c7r07jocn6_c_HvJthfw=">
                      <Image
                        loading="lazy"
                        alt="tours6"
                        src={hotel6}
                        className="hidden"
                      />
                    </a>
                  </LightGallery>
                </div>
              </div>
              <div className={style.groupImg}>
                <div className={style.leftSideSimg}>
                  <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    <a href="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel5}
                        className={style.singleImg}
                      />
                    </a>
                    <a href="https://wallpaperaccess.com/full/2690578.jpg">
                      <Image
                        loading="lazy"
                        alt="tours3"
                        src={hotel2}
                        className="hidden"
                      />
                    </a>
                    <a href="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel3}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=0&k=20&c=LPNC-aqrsOsgxU8eqPcR38ACIOIjqAmh0VSKclIa2gs=">
                      <Image
                        loading="lazy"
                        alt="tours4"
                        src={hotel4}
                        className="hidden"
                      />
                    </a>
                    <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                      <Image
                        loading="lazy"
                        alt="tours5"
                        src={hotel5}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357648/photo/luxury-villa-with-sea-view.jpg?s=612x612&w=0&k=20&c=8Zo0cxUkfwDzjq2m39IoMHQllWXLfn3e_fEKSWSxZng=">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357651/photo/room-with-sea-view.jpg?s=612x612&w=0&k=20&c=nWgr44k1ncmDYaOsO4S-638c7r07jocn6_c_HvJthfw=">
                      <Image
                        loading="lazy"
                        alt="tours6"
                        src={hotel6}
                        className="hidden"
                      />
                    </a>
                  </LightGallery>
                </div>
                <div className={style.leftSideSimg}>
                  <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    <a href="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel3}
                        className={style.singleImg}
                      />
                    </a>
                    <a href="https://wallpaperaccess.com/full/2690578.jpg">
                      <Image
                        loading="lazy"
                        alt="tours3"
                        src={hotel2}
                        className="hidden"
                      />
                    </a>
                    <a href="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel3}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=0&k=20&c=LPNC-aqrsOsgxU8eqPcR38ACIOIjqAmh0VSKclIa2gs=">
                      <Image
                        loading="lazy"
                        alt="tours4"
                        src={hotel4}
                        className="hidden"
                      />
                    </a>
                    <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                      <Image
                        loading="lazy"
                        alt="tours5"
                        src={hotel5}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357648/photo/luxury-villa-with-sea-view.jpg?s=612x612&w=0&k=20&c=8Zo0cxUkfwDzjq2m39IoMHQllWXLfn3e_fEKSWSxZng=">
                      <Image
                        loading="lazy"
                        alt="tours2"
                        src={hotel}
                        className="hidden"
                      />
                    </a>
                    <a href="https://media.istockphoto.com/id/1198357651/photo/room-with-sea-view.jpg?s=612x612&w=0&k=20&c=nWgr44k1ncmDYaOsO4S-638c7r07jocn6_c_HvJthfw=">
                      <Image
                        loading="lazy"
                        alt="tours6"
                        src={hotel6}
                        className="hidden"
                      />
                    </a>
                  </LightGallery>
                </div>
              </div>
            </div>
            <div className={style.leftSideText}>
              <div className="mb-5">
                <h2 className="text-2xl">
                  DAY 1: Dubai International Airport - Hotel in Deira / Mirdif
                  (Dubai)
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: specificPackage?.description,
                  }}
                ></p>
              </div>
              <div className="mb-5">
                <h2 className="text-2xl">
                  DAY 2: Evening Desert Safari (Dubai)
                </h2>
                <p>
                  SIC TOURS OPERATES FROM BUR DUBAI AND DEIRA LOCATIONS ONLY
                  INCASE PICKUP/DROP OFF HOTEL IS IN OTHER LOCATION PLEASE
                  SELECT PRIVATE VEHICLE OPTION. This tour departs in the
                  afternoon across the desert with photo-stops during an
                  exciting dune drive and a stop at a camel farm. The drive
                  continues across the desert. Watch the beautiful sunset in the
                  desert. Witness Interactive Falcon Show. You have the
                  opportunity to do camel riding, sand boarding and try out a
                  henna design.
                  <strong>
                    Desert Safari Duration :Approx. 6 hours (including
                    transportation time) Note : Child below 05 Years is not
                    allowed
                  </strong>
                </p>
              </div>

              <div className="mb-5">
                <h2 className="text-2xl">
                  {" "}
                  DAY 3: Half Day free time in Dubai (No Services included)
                </h2>
                <p>
                  {" "}
                  There is no service included, you may spend time, as per your
                  interests. Check out from hotel and get transferred to the
                  airport for your journey to further destination .
                </p>
              </div>
              <h2> Day 04: Today proceed for Dubai City Tour</h2>
              <p>
                {" "}
                Later in the evening proceed for Desert Safari with BBQ dinner
              </p>
            </div>
          </div>
          <div className={style.detailRightSide}>
            <div className={style.rightSide}>
              <div>
                <div className="flex  mb-3">
                  <CheckCircleOutline className={style.checkIcon} />
                  <p> {specificPackage?.day_night} Days-3 Nights</p>
                </div>
                <div className="flex  mb-3">
                  <CheckCircleOutline className={style.checkIcon} />
                  <p>Hotel Type: {specificPackage?.hotel_type} </p>
                </div>
                <div className="flex  mb-3">
                  <CheckCircleOutline className={style.checkIcon} />
                  <p> {specificPackage?.hotel_name}</p>
                </div>
                <div className="flex  mb-3">
                  <CheckCircleOutline className={style.checkIcon} />
                  <p>Price includes VATE & Tax </p>
                </div>
                <div className="flex  mb-3">
                  <CheckCircleOutline className={style.checkIcon} />
                  <p>
                    Price Per Person Doubl: {specificPackage?.price_per_person}
                    TK{" "}
                  </p>
                </div>
                <div className="flex  mb-3">
                  <CheckCircleOutline className={style.checkIcon} />
                  <p>
                    Price Per Person Twin {specificPackage?.price_twin_person}
                  </p>
                </div>
                <div className="flex  mb-3">
                  <CheckCircleOutline className={style.checkIcon} />
                  <p>
                    Price Per Person Triple:{" "}
                    {specificPackage?.price_triple_person}
                  </p>
                </div>
                <p>
                  <strong className="text-[#4AB449]">Start from</strong>{" "}
                  {specificPackage?.start_price}Tk
                </p>
                <Link href="/hotel/book">
                  <button className={style.rightSideBtn}> Book Now </button>
                </Link>
              </div>
            </div>
            <div className={style.rightSideImg}>
              <Image
                loading="lazy"
                className={style.travel}
                src={travel}
                alt="Picture of the author"
                width={300}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
