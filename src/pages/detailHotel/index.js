import React from 'react'
import DetailHotel from '../../../components/Hotel/DetailHotel'
import Link from 'next/link'
import Image from 'next/image'
import hotel from '../../../public/hotel7.png'
import hotel2 from '../../../public/hotel9.png'
import style from './detailH.module.css'
import clock from '../../../public/clock.png'
import location from '../../../public/location.png'
import clock2 from '../../../public/clock2.png'
import clock3 from '../../../public/clock3.png'
import clock4 from '../../../public/clock4.png'
import clock5 from '../../../public/clock5.png';
import travel from '../../../public/travel2.png'
import Trending from '../../../components/Trending/Trending'
const index = () => {
  return (
    <section>
      <div className='mt-14 mb-3'>
        <h2 className='text-3xl font-bold before:'>Laos: Land of a Million Elephants!</h2>
        <div className='flex'>
        <Image
           src={location}
           alt="Picture of the author"
           width={10}
           height={10}
         />
          <p>Vientinane, Laos</p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-10'>
        <div className='col-span-8'>
          <div className='flex flex-wrap'>
            <div >
            <Image
            className={style.leftSideImg}
                src={hotel}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div>
            <div className='flex'>
            <Image
             className={style.leftSideSimg}
                src={hotel2}
                alt="Picture of the author"
                width={200}
                height={100}
              />
               <Image
                className={style.leftSideSimg}
                src={hotel2}
                alt="Picture of the author"
                width={200}
                height={100}
              />
            </div>
            <div className='flex'>
            <Image
             className={style.leftSideSimg}
                src={hotel2}
                alt="Picture of the author"
                width={200}
                height={100}
              />
               <Image
                className={style.leftSideSimg}
                src={hotel2}
                alt="Picture of the author"
                width={200}
                height={100}
              />
            </div>
            </div>
          </div>
          <div className={style.leftSideText}>
            <div className='mb-5'>
            <h2 className='text-2xl'>DAY 1: Dubai International Airport - Hotel in Deira / Mirdif (Dubai)</h2>
            <p>Welcome to Dubai . Among the seven emirates Dubai is the most popular destination. It is situated on the southern shore of the Persian Gulf on the Arabian Peninsula. It is also called Dubai state to distinguish it from the emirate. Dubai is the second largest Emirate after Abu Dhabi and is usually recognized as the Pearl of the Persian Gulf.Our representative will Transfer you to the hotel . Check in into hotel and enjoy your day.
            There is no service included, you may spend time, as per your interests.</p>
            </div>
            <div className='mb-5'>
            <h2  className='text-2xl'>
            DAY 2: Evening Desert Safari (Dubai)
            </h2>
            <p>
            SIC TOURS OPERATES FROM BUR DUBAI AND DEIRA LOCATIONS ONLY INCASE PICKUP/DROP OFF HOTEL IS IN OTHER LOCATION PLEASE SELECT PRIVATE VEHICLE OPTION.
            This tour departs in the afternoon across the desert with photo-stops during an exciting dune drive and a stop at a camel farm. The drive continues across the desert. Watch the beautiful sunset in the desert. Witness Interactive Falcon Show. You have the opportunity to do camel riding, sand boarding and try out a henna design.
            <strong>Desert Safari Duration :Approx. 6 hours (including transportation time)
            Note : Child below 05 Years is not allowed</strong>
            </p>
            </div>
            
          <div className='mb-5'>
          <h2  className='text-2xl'> DAY 3: Half Day free time in Dubai (No Services included)</h2>
          <p>  There is no service included, you may spend time, as per your interests.
            Check out from hotel and get transferred to the airport for your journey to further destination .</p>
          </div>
           <h2>  Day 04: Today proceed for Dubai City Tour</h2>
          <p>  Later in the evening proceed for Desert Safari with BBQ dinner</p>
            
          </div>
        </div>
        <div className='col-span-4'>
         <div className={style.rightSide}>
            <div>
            <div className='flex  mb-3'>
          <Image
                className={style.rightSideIcon}
                src={clock}
                alt="Picture of the author"
                width={10}
                height={10}
              />
            <p>4 Days-3 Nights</p>
          </div>
          <div className='flex  mb-3'>
          <Image
                className={style.rightSideIcon}
                src={location}
                alt="Picture of the author"
                width={10}
                height={10}
              />
            <p>Hotel Type: DELUXE </p>
          </div>
          <div className='flex  mb-3'>
          <Image
                className={style.rightSideIcon}
                src={clock3}
                alt="Picture of the author"
                width={10}
                height={10}
              />
            <p>Toyal Tulip Hotel(Vietntiane) </p>
          </div>
          <div className='flex  mb-3'>
          <Image
                className={style.rightSideIcon}
                src={clock4}
                alt="Picture of the author"
                width={10}
                height={10}
              />
            <p>Price includes VATE & Tax </p>
          </div>
          <div className='flex  mb-3'>
          <Image
                className={style.rightSideIcon}
                src={clock5}
                alt="Picture of the author"
                width={10}
                height={10}
              />
            <p>Price Per Person Doubl: 26,400TK </p>
          </div>
          <div className='flex  mb-3'>
          <Image
                className={style.rightSideIcon}
                src={clock}
                alt="Picture of the author"
                width={10}
                height={10}
              />
            <p>Price Per Person Twin 25,500Tk</p>
          </div>
          <div className='flex  mb-3'>
          <Image
                className={style.rightSideIcon}
                src={clock}
                alt="Picture of the author"
                width={10}
                height={10}
              />
           <p>Price Per Person Triple: 25,500Tk</p>
          </div>
          <p><strong className='text-[#4AB449]'>Start from</strong> 20000Tk</p>
          <Link href='/payment'>
          <button className={style.rightSideBtn}> Book Now </button>
          </Link>
            </div>
          </div>
          <div className='mt-28'>
          <Image
                src={travel}
                alt="Picture of the author"
                width={300}
                height={500}
              />
          </div>
         </div>
        </div>
      <Trending></Trending>
    </section>
  )
}

export default index
