import React from "react";
import style from "./ToursSearch.module.css";
import Image from "next/image";
import tours from "../../../public/assets/tour.jpeg";
import tours2 from "../../../public/assets/destination8.jpeg";
import tours3 from "../../../public/assets/destination.jpeg";
import { StarOutline, Block, KeyboardBackspace } from "@mui/icons-material";
import Link from "next/link";
const B2bBusSearch = () => {
  const tourData = [
    {
      id: 1,
      title: "Explore Dhaka City in a Local Way !!",
      heading: "Private and Luxury",
      price: 5099,
      description:
        "Stimulate your senses and challenge your photographic eye by taking part in the awakening of one of the world’s largest …Free cancellation",
      image: tours,
    },
    {
      id: 1,
      title: "Explore Dhaka City in a Local Way !!",
      heading: "Private and Luxury",
      price: 5099,
      description:
        "Stimulate your senses and challenge your photographic eye by taking part in the awakening of one of the world’s largest …Free cancellation",
      image: tours2,
    },
    {
      id: 1,
      title: "Explore Dhaka City in a Local Way !!",
      heading: "Private and Luxury",
      price: 5099,
      description:
        "Stimulate your senses and challenge your photographic eye by taking part in the awakening of one of the world’s largest …Free cancellation",
      image: tours3,
    },
    {
      id: 1,
      title: "Explore Dhaka City in a Local Way !!",
      heading: "Private and Luxury",
      price: 5099,
      description:
        "Stimulate your senses and challenge your photographic eye by taking part in the awakening of one of the world’s largest …Free cancellation",
      image: tours,
    },
    {
      id: 1,
      title: "Explore Dhaka City in a Local Way !!",
      heading: "Private and Luxury",
      price: 5099,
      description:
        "Stimulate your senses and challenge your photographic eye by taking part in the awakening of one of the world’s largest …Free cancellation",
      image: tours2,
    },
  ];
  return (
    <div>
      <div className={style.toursDetialsWrap}>
        <h3 className="font-bold text-3xl">Tours In Cox s Bazar </h3>
        <div className="flex justify-between w-full my-3 ">
          <div className={style.topBarCard}>
            <label>Select Your Date </label>
            <input type="date" />
          </div>
          <div className={style.topBarCard}>
            <select>
              <option value="Traveller Favourite" selected>
                {" "}
                Traveller Favourite
              </option>
              <option value=" Price (Low to high)">
                {" "}
                Price (Low to high){" "}
              </option>
              <option value="Price (High to low)"> Price (High to low)</option>
              <option value="Duration "> Duration </option>
            </select>
          </div>
        </div>
        <div className={style.toursDetails}>
          <div className={style.toursDetailLeftSide}>
            <strong className="mt-3">
              {" "}
              <span>
                {" "}
                <KeyboardBackspace className={style.star} />{" "}
              </span>
              All things to do{" "}
            </strong>
            <div className={style.category}>
              <strong>Categorys Type </strong>
              <p>Attractions </p>
              <p>Tours </p>
              <p>Day Trips </p>
              <p>OUtdoor Activities</p>
              <p>Shopping </p>
              <p>Transportation </p>
              <p>Traveler Resources </p>
            </div>
            <div className={style.category}>
              <strong>Products Category </strong>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">Sightseeing Tours </p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">private Tours </p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">Bus Tours </p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">Historical & Heritage Tours </p>
              </div>
            </div>
          </div>
          <div className={style.toursDetailsRightSide}>
            <div className={style.toursCardWrap}>
              <h6 className="text-xl font-bold mb-3">
                120 places sorted by traveler favorites
              </h6>
              {tourData.map((tour) => (
                <div key={tour.id} className={style.toursCard}>
                  <div className={style.toursCardLeft}>
                    <Image
                      loading="lazy"
                      alt="tours"
                      src={tour.image}
                      width={500}
                      className={style.toursImg}
                    />
                  </div>
                  <div className={style.toursCardRight}>
                    <h6 className="text-xl">{tour.title}</h6>
                    <div className={style.cardTextWrap}>
                      <div className={style.cardText}>
                        <div className="flex mt-2">
                          <StarOutline className={style.star} />
                          <StarOutline className={style.star} />
                          <StarOutline className={style.star} />
                          <StarOutline className={style.star} />
                          <StarOutline className={style.star} />
                        </div>
                        <p>{tour.heading}</p>
                        <p>6–8 hours</p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: tour.description,
                          }}
                        ></p>
                        <p>
                          Free cancellation{" "}
                          <span>
                            {" "}
                            <Block className={style.star} />{" "}
                          </span>
                        </p>
                        <p>Recommended by 100% of travelers</p>
                      </div>
                      <div className={style.cardPrice}>
                        <p>$ {tour.price}</p>
                        <p>Per adults</p>
                        <Link href="/b2bdashboard/tours/reserve">
                          {" "}
                          <button>Reserve</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2bBusSearch;
