/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import style from "./HotelSearch.module.css";
import Image from "next/image";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Slider } from "@mui/material";
import axios from "axios";

const minDistance = 5;
const HotelSearch = () => {
  const hotelDetailsData = useSelector((state) => state.hotel.hotelDetailsData);
  const [priceRangeData, setPriceRangeData] = useState(null);
  const filterData = useSelector((state) => state.hotel.filterData);
  const isLoading = useSelector((state) => state.hotel.isLoading);
  const [hotelDataWithFilter, setHotelDataWithFilter] = useState(
    hotelDetailsData?.getPackage
  );

  const [reload, setReload] = useState(false);

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center py-20">
        Loading...
      </div>
    );
  }

  const highPrice = localStorage.getItem("h_p");
  const lowPrice = localStorage.getItem("l_p");

  const handleDataWithPrice = () => {
    if (highPrice) {
      localStorage.removeItem("h_p");
      setReload(!reload);
    } else {
      localStorage.setItem("h_p", true);
      localStorage.removeItem("l_p");

      setReload(!reload);
    }
  };
  const handleDataWithLowestPrice = () => {
    if (lowPrice) {
      localStorage.removeItem("l_p");
      setReload(!reload);
    } else {
      localStorage.setItem("l_p", true);
      localStorage.removeItem("h_p");
      setReload(!reload);
    }
  };

  useEffect(() => {
    if (highPrice && !lowPrice) {
      const highestPriceData = hotelDataWithFilter
        .filter((item) => typeof item.highest_price === "number") // Exclude non-numeric prices
        .sort((a, b) => b.highest_price - a.highest_price);
      // if (highestPriceData.length > 0) {
      //   // Set the highest price to the state
      //   setHighestPrice(highestPriceData[0].highest_price);
      // }
      setHotelDataWithFilter(highestPriceData);

      // console.log("After filtering/sorting:", highestPriceData);
    } else if (lowPrice && !highPrice) {
      const lowestPriceData = hotelDataWithFilter
        .filter((item) => typeof item.lowest_price === "number") // Exclude non-numeric prices
        .sort((a, b) => a.lowest_price - b.lowest_price);
      setHotelDataWithFilter(lowestPriceData);

      console.log("After filtering/sorting:", lowestPriceData);
    } else {
      setHotelDataWithFilter(hotelDetailsData?.getPackage);
    }
  }, [highPrice, lowPrice, reload]);

  const [value, setValue] = useState([0, 500]);

  const handleChange = async (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    if (value) {
      const data = {
        price: newValue,
        country_name: filterData.country_name,
        city_name: filterData.city_name,
        check_in_date: filterData.check_in_date,
        check_out_date: filterData.check_out_date,
        child: filterData.child,
        adult: filterData.adult,
        room_number: filterData.room_number,
      };

      const response = await axios.post(
        "http://localhost:5000/api/v1/hotel/get/packages/filter",
        data
      );
      setPriceRangeData( activeThumb);
      setHotelDataWithFilter(response.data.getPackage);
    }
  };

  const handleAll = () => {
    setHotelDataWithFilter(hotelDetailsData?.getPackage);
    setPriceRangeData(null);
  };

  return (
    <section>
      <div className={style.searchDetailHead}>
        <div>
          <h2 className="text-3xl font-bold">COX S BAZAR</h2>
          <span className="sm:my-3">
            27th August 2023 - 28th August 2023 4 Persons - 1 Rooms
          </span>
        </div>
        <button>EDIT SEARCH</button>
      </div>
      <div className={style.hotelSearchBoxWrap}>
        <div className={style.hotelSearchLeftSide}>
          <div className={style.availableHotel}>
            <div>
              <h5 className="font-bold">95 Available Hotels </h5>
              <small>Price includes VAT & Tax </small>
            </div>
            <div
              // className={style.bookBtnGroup}
              className="space-x-5"
            >
              {(priceRangeData === 0 || priceRangeData ===1) && (
                <button
                  className={
                    "bg-[#19ABE3] text-white px-3  rounded-md py-2 btn btn-sm"
                  }
                  onClick={handleAll}
                >
                  All{" "}
                </button>
              )}
              <button
                className={
                  highPrice
                    ? "bg-[#19ABE3] text-white px-3  rounded-md py-2 btn btn-sm"
                    : "bg-white text-[#19ABE3] px-3 rounded-md border border-[#19ABE3]  py-2 btn btn-sm"
                }
                onClick={handleDataWithPrice}
              >
                Highest Price{" "}
              </button>
              <button
                className={
                  lowPrice
                    ? "bg-[#4AB449] text-white px-3 rounded-md  py-2"
                    : "text-[#4AB449] px-3 rounded-md border border-[#4AB449]  py-2"
                }
                onClick={handleDataWithLowestPrice}
              >
                Lowest Price
              </button>
            </div>
          </div>
          {hotelDataWithFilter?.length === 0 ? (
            <div className="flex justify-center py-20">
              No matching hotel package found.
            </div>
          ) : (
            <div>
              {hotelDataWithFilter?.map((hotel) => (
                <div key={hotel._id} className={style.SearchHotel}>
                  <div className={style.detailBoxWrap}>
                    <div className={style.searchLeftSideImg}>
                      <Image
                        loading="lazy"
                        src={hotel?.image[0]}
                        alt="Picture of the author"
                        className={style.searchLeftImg}
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={style.searchBoxWrap}>
                      <div>
                        <h2 className="text-2xl font-bold ">{hotel.title} </h2>
                        <div className="flex my-3">
                          <FaStar className="text-[#4AB449]" />
                          <FaStar className="text-[#4AB449] mx-[3px]" />
                          <FaStar className="text-[#4AB449]" />
                        </div>
                        <div className="flex items-center justify-center">
                          <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                          <span className="md:w-[350px]">{hotel.address}</span>
                        </div>
                      </div>
                      <div className={style.priceBlock}>
                        <div>
                          <span className={style.starFrom}>Starts from</span>
                          <span>
                            <del>BDT {hotel.price}</del>
                            <span className={style.starFrom}>/Night</span>
                          </span>
                          <div>
                            <span>
                              <small className="text-[#4AB449] ">44% OFF</small>
                              <strong>
                                BDT {hotel.lastPrice}
                                <span className={style.starFrom}>Night</span>
                              </strong>
                            </span>
                          </div>
                          <div>
                            <span className="text-xs">
                              Price Includes VAT & Tax{" "}
                            </span>
                          </div>
                          {/* <Link href={`/b2bdashboard/hotel/hotelDetail?id=${hotel._id}`}>
                            <button className={style.bookBtn}>
                              See Details{" "}
                            </button>
                          </Link> */}
                           <Link href={`/b2bdashboard/hotel/details?id=${hotel._id}`}>
                          <button className={style.bookBtn}>See Details </button>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={style.hotelSearchRightSide}>
          <div className={style.propertyWrap}>
            <div className="mb-5">
              <TextField
                id="standard-basic"
                label="Search Hotel"
                variant="standard"
              />
            </div>

            <div>
              <strong>Filter:</strong>
              <div>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Your budget (per night) </strong> <br />
                      <span className="my-5 block">
                        BDT {value[0]} - BDT {value[1]}
                      </span>
                      {/* <input className="w-full" type="range" /> */}
                      <Slider
                        className="w-full z-50"
                        // getAriaLabel={getArrivalLabel}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={5000}
                      />
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Popular filters</strong> <br />
                      <div>
                        <Checkbox />
                        <span>Restaurant</span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Breakfast included </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>No prepayment </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>5 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Beachfront </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Beach </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Hotels </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Swimming Pool </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Fun things to do </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Fitness centre </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Beach </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Indoor pool </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Games room </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Hotel tub/Jacuzzi </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Meal</strong> <br />
                      <div>
                        <Checkbox />
                        <span>Breakfast </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Half Board </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Full Board </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Property rating</strong> <br />
                      <small>Includes stars and other ratings </small>
                      <div>
                        <Checkbox />
                        <span>3 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>4 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>5 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Unrated </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Sustainability </strong> <br />
                      <div>
                        <Checkbox />
                        <span>
                          Travel Sustainable properties Properties taking steps
                          to make your stay more sustainable{" "}
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Property type </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Hotels </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Entire hoes & apartments </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Resorts </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Bed preference </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Twin beds </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Double bed </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Large double bed </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Extra-large double bed </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Property accessibility </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Wheelchair accessible </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Room accessibility </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Upper floors accessible by elevator </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Entire unit wheelchair accessible </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Toilet with grab rails </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Walk-in shower </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Emergency cord in bathroom </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSearch;


                       