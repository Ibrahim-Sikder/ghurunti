import React from "react"
import style from "./FlightSearch.module.css"
import TextField from "@mui/material/TextField"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Checkbox from "@mui/material/Checkbox"
import Link from "next/link"
import "react-photo-view/dist/react-photo-view.css"
import {
  FlightLand,
  AirplanemodeInactive,
  Airlines,
  KeyboardArrowDown,
  LocalOffer,
  AirplaneTicket,
  Diversity3,
  AccessAlarm,
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material"

import { FaFighterJet } from "react-icons/fa"
import dynamic from "next/dynamic"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const FlightSearchB2b = () => {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  }
  const flightData = [
    {
      id: 1,
      price: "55000",
      title: "Partially Refundable",
      airportName: "Hazrat Shahjalal Internation Airport",
    },
    {
      id: 1,
      price: "58000",
      title: "Partially Refundable",
      airportName: "Hazrat Shahjalal Internation Airport",
    },
    {
      id: 1,
      price: "105000",
      title: "Partially Refundable",
      airportName: "Hazrat Shahjalal Internation Airport",
    },
    {
      id: 1,
      price: "105000",
      title: "Partially Refundable",
      airportName: "Hazrat Shahjalal Internation Airport",
    },
    {
      id: 1,
      price: "105000",
      title: "Partially Refundable",
      airportName: "Hazrat Shahjalal Internation Airport",
    },
  ]

  return (
    <section className={style.flightSearchWrap}>
      <div className={style.searchDetailHead}>
        <div>
          <div className="flex items-center justify-center">
            <h2 className="text-xl font-bold ">
              COX S BAZAR - BANGKOK(BANGKOK-ALL)
            </h2>
            <small className="ml-2">(PREMIUM ECONOMY)</small>
          </div>
          <span className="sm:my-3">27th August 2023 - 28th August 2023</span>
          <span> | Adult: 2, | Child: 2, | Infant: 2</span>
        </div>
        <button className={style.editSearchBtn}>EDIT SEARCH </button>
      </div>
      <div className={style.hotelSearchBoxWrap}>
        <div className={style.hotelSearchLeftSide}>
          <div className={style.availableHotel}>
            <div>
              <h5 className="">34 Available Flight </h5>
            </div>
            <small>*Price includes VAT & Tax</small>
          </div>
          <div className={style.flightSlider}>
            <Slider {...settings}>
              <div className={style.perFlightPerson}>
                <h2>USA </h2>
                <small className="font-sm">2 Flight</small>
              </div>
              <div className={style.perFlightPerson}>
                <h2>MU </h2>
                <small className="font-sm">2 Flight</small>
              </div>
              <div className={style.perFlightPerson}>
                <h2>Am </h2>
                <small className="font-sm">2 Flight</small>
              </div>
              <div className={style.perFlightPerson}>
                <h2>Am </h2>
                <small className="font-sm">2 Flight</small>
              </div>
              <div className={style.perFlightPerson}>
                <h2>QS</h2>
                <small className="font-sm">2 Flight</small>
              </div>
              <div className={style.perFlightPerson}>
                <h2>Am </h2>
                <small className="font-sm">2 Flight</small>
              </div>
              <div className={style.perFlightPerson}>
                <h2>IH </h2>
                <small className="font-sm">2 Flight</small>
              </div>
              <div className={style.perFlightPerson}>
                <h2>HI </h2>
                <small className="font-sm">2 Flight</small>
              </div>
            </Slider>
          </div>

          <div className={style.flightPrice}>
            <div className={style.flight}>
              <FaFighterJet className="mr-2" /> cheapest Flight
            </div>
            <div className={style.flight}>
              <AirplanemodeInactive className="mr-2" /> Fastest Flight
            </div>
            <div className={style.flight}>
              <Airlines className="mr-2" /> Earliest Flight
            </div>
          </div>
          {flightData.map((data) => (
            <div key={data.id} className={style.flightSearch}>
              <div className={style.detailBoxWrap}>
                <div className={style.flightSearchLeftSide}>
                  <div className={style.deal}>
                    <LocalOffer className={style.dealIcon} /> Best Deal
                  </div>
                  <span>{data.title}</span>
                  <h4 className="text-2xl font-bold text-[#26ADE2]">
                    BDT 39,400
                  </h4>
                  <del className="text-[#26ADE2]">BDT {data.price}</del> <br />
                  <Link href="/b2bdashboard/flight/details">
                    <button className={style.flightBookBtn}>See Details</button>
                  </Link>{" "}
                  <br />
                  <span className="text-[#26ADE2] mt-16 block">
                    See more <KeyboardArrowDown />
                  </span>
                </div>
                <div className={style.searchBoxWrap}>
                  <div className={style.flightDurationWrap}>
                    <div className={style.flightDuration}>
                      <div>
                        <AirplaneTicket className="text-[#26ADE2] mr-2" />
                      </div>
                      <div className={style.duration}>
                        <h2 className="text-xl">
                          {" "}
                          DAC - <strong>07:30</strong>
                        </h2>
                        <p>{data.airportName}</p>
                        <small>29Th Jul 2023</small>
                      </div>
                    </div>
                    <div className={style.flightDuration}>
                      <div className={style.duration2}>
                        <FlightLand className="text-[#26ADE2]" /> <br />
                        <p>Non stop </p>
                        <small>02h: 30m</small>
                      </div>
                      <div>
                        <h2 className="text-xl">
                          {" "}
                          RJH - <strong>08:25</strong>
                        </h2>
                        <small>Shah Mokhdum Airport</small>
                        <small>29Th Jul 2023</small>
                      </div>
                    </div>
                    <div className={style.flightDuration}>
                      <div>
                        <AirplaneTicket className="text-[#26ADE2] mr-2" />
                      </div>
                      <div className={style.duration}>
                        <h2 className="text-xl">
                          {" "}
                          DAC - <strong>07:30</strong>
                        </h2>
                        <p>Hazrat Shahjalal Internation Airport</p>
                        <small>29Th Jul 2023</small>
                      </div>
                    </div>
                    <div className={style.flightDuration}>
                      <div className={style.duration2}>
                        <FlightLand className="text-[#26ADE2]" /> <br />
                        <p>Non stop </p>
                        <small>02h: 30m</small>
                      </div>
                      <div>
                        <h2 className="text-xl">
                          {" "}
                          RJH - <strong>08:25</strong>
                        </h2>
                        <small>Shah Mokhdum Airport</small>
                        <small>29Th Jul 2023</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={style.pagination}>
            <p className="text-[#4AB449] font-bold">TOP OF PAGE</p>
            <p>Showing Results 11 - 20 of 301</p>
            <div className={style.paginationBtn}>
              <button>
                <ArrowBack className={style.arrowLeft} />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>10</button>
              <button>
                <ArrowForward className={style.arrowRight} />
              </button>
            </div>
          </div>
          <div className={style.priceInclude}>
            <p className="mb-3">Prices include all taxes & fees in BDT.</p>
            <span>
              Fare may change at the time of booking depending on availability.
            </span>
          </div>
        </div>
        <div className={style.flightRightSide}>
          <div className={style.flightDesc}>
            <div className={style.textFieldWrap}>
              <TextField
                className={style.textField}
                id="standard-basic"
                label="Search Flight"
                variant="standard"
              />
            </div>

            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className={style.bookDuration}>
                    <div>
                      <p>Book Now before it gets sold out.</p>
                      <div className={style.bookDurationBtn}>
                        <div>
                          <button size="small">10</button> <br />
                          <small>min</small>
                        </div>
                        <div>
                          <button size="small">35</button> <br />
                          <small>sec</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Typography>
              </CardContent>
            </Card>
            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Diversity3 />{" "}
                  <p className="font-bold">
                    8 people are looking at this flight.
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className="flex justify-between mb-3">
                    <div>
                      <div>Minimum price </div>
                      <strong>12800</strong>
                    </div>
                    <div>
                      <div>Maximum price </div>
                      <strong>45500</strong>
                    </div>
                  </div>
                  <input className="w-full" type="range" />
                </Typography>
              </CardContent>
            </Card>
            <div className="mb-5">
              <TextField
                id="standard-basic"
                label="Shedule"
                variant="standard"
              />
            </div>
            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p>Depart Time </p>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                </Typography>
              </CardContent>
            </Card>
            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p>Arrival Time </p>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                </Typography>
              </CardContent>
            </Card>
            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <strong>Airlines </strong> <br />
                  <div>
                    <Checkbox />
                    <span>Biman Bangladesh Airlines (2) </span>
                  </div>
                  <div>
                    <Checkbox />
                    <span>US-Bangla Airlines (4) </span>
                  </div>
                  <div>
                    <Checkbox />
                    <span>NOVOAIR (9) </span>
                  </div>
                </Typography>
              </CardContent>
            </Card>
            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <strong>Weights </strong> <br />
                  <div>
                    <Checkbox />
                    <span>20KG </span>
                  </div>
                </Typography>
              </CardContent>
            </Card>
            <Card className={style.bookingCard} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <strong>Refundable </strong> <br />
                  <div>
                    <Checkbox />
                    <span>Non Refundable </span>
                  </div>
                  <div>
                    <Checkbox />
                    <span>Partially Refundable </span>
                  </div>
                  <div>
                    <Checkbox />
                    <span>Rules Wise </span>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(FlightSearchB2b), { ssr: false })
