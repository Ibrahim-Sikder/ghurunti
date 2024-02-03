"use client"

import React from "react"
import Hotel from "../../../components/Hotel/Hotel"
import Travel from "../../../components/Travel/Travel"
import Customer from "../../../components/Customer/Customer"
import Footer from "../../../components/Footer/Footer"
import Nav from "../../../components/NavBarr/Nav"
import { Helmet } from "react-helmet-async"
import Reveiw from "../../../components/Vissa/Review/Reveiw"
import InternationalHotel from "../../../components/Tour/InternationalHotel"
const InternationalHotelPackage = () => {
  return (
    <section>
      <Helmet>
        <title>Ghuronti || Hotel </title>
      </Helmet>
      <Nav />
      <Hotel></Hotel>
      <InternationalHotel />
      <Travel></Travel>
      <Customer></Customer>
      <Reveiw />
      <Footer />
    </section>
  )
}

export default InternationalHotelPackage
