import React from "react";
import style from "./ToursReserve.module.css";
import tours from "../../../public/assets/tourImage3.jpg";
import tours2 from "../../../public/assets/tourImage4.jpg";
import tours3 from "../../../public/assets/tourImage12.jpg";
import Link from "next/link";
import Image from "next/image";
import {
  PeopleOutline,
  StarOutline,
  AccessTime,
  MobileOff,
  Language,
  CheckCircleOutline,
  LocalPhone,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TourPackage from "../TourPackage/TourPackage";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Container from "@/ui/Container";

const TourPackageBook = () => {
  return (
   <Container>
   <div className={style.TourReserveWrap}>
   <div className={style.galleryWrap}>
     <div className="my-3">
       <h3 className="font-bold text-2xl">
         Fascinating Old Dhaka and Ship Breaking Yard Day Trip
       </h3>
       <div className="flex mt-2">
         <StarOutline className={style.star} />
         <StarOutline className={style.star} />
         <StarOutline className={style.star} />
         <StarOutline className={style.star} />
         <StarOutline className={style.star} />
       </div>
       <span>50 Reviews </span>
     </div>
     <div className={style.galleryWraps}>
       <div className={style.galleryleftSide}>
         <div className={style.leftSideImgWrap}>
           <div>
             <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
               <a href="https://c1.wallpaperflare.com/preview/860/689/115/tour-packages-travel-tourism.jpg">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours}
                   className={style.gallaryImg}
                 />
               </a>
               <a href="https://e7.pngegg.com/pngimages/823/324/png-clipart-package-tour-travel-agent-flight-tour-operator-travel-city-computer-wallpaper.png">
                 <Image
                   loading="lazy"
                   alt="tours3"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://c8.alamy.com/comp/C6530P/edinburgh-scotland-busy-city-centre-fringe-festival-performer-balancing-C6530P.jpg">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1b/b7/a8.jpg">
                 <Image
                   loading="lazy"
                   alt="tours4"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                 <Image
                   loading="lazy"
                   alt="tours5"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/umbrella-chair-around-swimming-pool_1203-2419.jpg?w=2000">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/hammocks-placed-row_1203-190.jpg">
                 <Image
                   loading="lazy"
                   alt="tours6"
                   src={tours}
                   className="hidden"
                 />
               </a>
             </LightGallery>
           </div>
         </div>
         <div className="mt-5">
           <strong className="mb-3">About</strong>
           <p>
             Combine visits to Old Dhaka and the ship breaking yard on a
             single day tour. Immerse yourself in the life of the old city,
             traveling down the narrow winding streets in the company of a
             guide who knows all the hidden gems in the nooks and crannies.
             Visit the ship breaking yard to learn about the process and the
             history of the practice through guided commentary.
           </p>
           <p className="mt-5">
             from <strong>$108.77</strong> per adult (price varies by group
             size)
           </p>
           <div className="mt-5">
             <strong>
               Lowest price guaranteeReserve now & pay laterFree cancellation
             </strong>
           </div>
           <hr className="my-5" />
           <div className="my-3">
             <div className="flex mb-2">
               <PeopleOutline className={style.passengerIcon} />
               <p className="ml-2"> Ages 12 - 80 </p>
             </div>
             <div className="flex mb-2">
               <AccessTime className={style.passengerIcon} />
               <p className="ml-2"> Duration : 08:00 </p>
             </div>
             <div className="flex mb-2">
               <AccessTime className={style.passengerIcon} />
               <p className="ml-2">Start Time: Check availability </p>
             </div>
             <div className="flex mb-2">
               <MobileOff className={style.passengerIcon} />
               <p className="ml-2"> Mobile ticket </p>
             </div>
             <div className="flex mb-2">
               <Language className={style.passengerIcon} />
               <p className="ml-2"> English </p>
             </div>
           </div>

           <div className="my-5">
             <Accordion className={style.accordion}>
               <AccordionSummary
                 expandIcon={
                   <ExpandMoreIcon className={style.accordionIcons} />
                 }
                 aria-controls="panel1a-content"
                 id="panel1a-header"
                 className={style.accordonSummary}
               >
                 <Typography className={style.accordionTypo}>
                   What is included{" "}
                 </Typography>
               </AccordionSummary>
               <AccordionDetails className={style.accordionDetails}>
                 <Typography className={style.accordionTypos}>
                   <div>
                     <ul>
                       <li>
                         <span>
                           <CheckCircleOutline className={style.checkIcon} />
                         </span>
                         Local taxes
                       </li>
                       <li>
                         <span>
                           {" "}
                           <CheckCircleOutline
                             className={style.checkIcon}
                           />{" "}
                         </span>{" "}
                         Buffet Lunch{" "}
                       </li>
                       <li>
                         {" "}
                         <span>
                           {" "}
                           <CheckCircleOutline
                             className={style.checkIcon}
                           />{" "}
                         </span>{" "}
                         All activites{" "}
                       </li>
                       <li>
                         {" "}
                         <span>
                           {" "}
                           <CheckCircleOutline
                             className={style.checkIcon}
                           />{" "}
                         </span>{" "}
                         Hotel/part pickup and drop-off{" "}
                       </li>
                       <li>
                         {" "}
                         <span>
                           {" "}
                           <CheckCircleOutline
                             className={style.checkIcon}
                           />{" "}
                         </span>{" "}
                         Private Tour{" "}
                       </li>
                       <li>
                         <span>
                           <CheckCircleOutline className={style.checkIcon} />
                         </span>
                         transport by private vehicle{" "}
                       </li>
                     </ul>
                   </div>
                 </Typography>
               </AccordionDetails>
             </Accordion>
           </div>

           <div className="my-5">
             <Accordion className={style.accordion}>
               <AccordionSummary
                 expandIcon={
                   <ExpandMoreIcon className={style.accordionIcons} />
                 }
                 aria-controls="panel1a-content"
                 id="panel1a-header"
                 className={style.accordonSummary}
               >
                 <Typography className={style.accordionTypo}>
                   What is Excluded
                 </Typography>
               </AccordionSummary>
               <AccordionDetails className={style.accordionDetails}>
                 <Typography className={style.accordionTypos}>
                   <ul>
                     <li>Anything that is not mentioned in the inclusion</li>
                     <li>Photo and video shooting tickets </li>
                     <li>Train and flight tickets (incl. domestic)</li>
                     <li>Tips </li>
                     <li>Meals and beverages except mentioned </li>
                     <li>Meals and beverages except mentioned </li>
                   </ul>
                   <div className="mt-3">
                     <p>
                       If you have questions about accessibility, we’d be
                       happy to help. Just call the number below and
                       reference the product code: 90303P1
                     </p>
                   </div>
                 </Typography>
               </AccordionDetails>
             </Accordion>
           </div>

           <div className="my-5">
             <Accordion className={style.accordion}>
               <AccordionSummary
                 expandIcon={
                   <ExpandMoreIcon className={style.accordionIcons} />
                 }
                 aria-controls="panel1a-content"
                 id="panel1a-header"
                 className={style.accordonSummary}
               >
                 <Typography className={style.accordionTypo}>
                   <strong>Itinerary</strong>
                 </Typography>
               </AccordionSummary>
               <AccordionDetails className={style.accordionDetails}>
                 <Typography className={style.accordionTypos}>
                   <div>
                     <p>This is a typical itinerary for this product</p>
                     <p>
                       <strong>Stop At:</strong> Shipyard Road, Shipyard Rd,
                       Khulna, Bangladesh
                     </p>
                     <p>
                       Shipbuilding is a growing industry in Bangladesh with
                       great potentials.
                     </p>
                     <div>
                       <strong>Duration: 1 hour</strong>
                       <p>
                         <strong>Stop At:</strong> Baitul Mukarram Mosque,
                         Dhaka City Bangladesh
                       </p>
                       <p>
                         See the Central Mosque of Dhaka City from inside
                         which is 10th largest mosque in the world.
                       </p>
                     </div>
                     <div>
                       <strong>Duration: 1 hour</strong>
                     </div>
                   </div>
                 </Typography>
               </AccordionDetails>
             </Accordion>
           </div>
           <div>
             <h3 className="text-xl font-bold">We can help !</h3>
             <p>
               If you have questions about this tour or need help making your
               booking, we’d be happy to help. Just call the number below and
               reference the product code: 90303P1
             </p>
             <div className="mt-3">
               <strong>
                 <LocalPhone className={style.checkIcon} /> +88 01885071488
               </strong>
             </div>
           </div>
         </div>
       </div>

       <div className={style.galleryRightside}>
         <div>
           <div className={style.leftsideGalleryImg}>
             <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
               <a href="https://www.jumpdesign.co.uk/wp-content/uploads/2022/11/HD-GRABS-2.jpg">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours3}
                   className={style.gallaryImg}
                 />
               </a>
               <a href="https://e7.pngegg.com/pngimages/823/324/png-clipart-package-tour-travel-agent-flight-tour-operator-travel-city-computer-wallpaper.png">
                 <Image
                   loading="lazy"
                   alt="tours3"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://www.itl.cat/pngfile/big/65-653470_leh-ladakh-leh-ladakh-hd.jpg">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80">
                 <Image
                   loading="lazy"
                   alt="tours4"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                 <Image
                   loading="lazy"
                   alt="tours5"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/umbrella-chair-around-swimming-pool_1203-2419.jpg?w=2000">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/hammocks-placed-row_1203-190.jpg">
                 <Image
                   loading="lazy"
                   alt="tours6"
                   src={tours}
                   className="hidden"
                 />
               </a>
             </LightGallery>
           </div>
           <div className={style.leftsideGalleryImg}>
             <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
               <a href="https://c1.wallpaperflare.com/preview/860/689/115/tour-packages-travel-tourism.jpg">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours2}
                   className={style.gallaryImg}
                 />
               </a>
               <a href="https://wallpaperaccess.com/full/873423.jpg">
                 <Image
                   loading="lazy"
                   alt="tours3"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqShZZmMfkz9paZkKmyxk4jnkJXksXxvLLY4LqWUD9wZNz5X3m684TawuHH7Hyg-qscUg&usqp=CAU">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80">
                 <Image
                   loading="lazy"
                   alt="tours4"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg">
                 <Image
                   loading="lazy"
                   alt="tours5"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/umbrella-chair-around-swimming-pool_1203-2419.jpg?w=2000">
                 <Image
                   loading="lazy"
                   alt="tours2"
                   src={tours}
                   className="hidden"
                 />
               </a>
               <a href="https://img.freepik.com/free-photo/hammocks-placed-row_1203-190.jpg">
                 <Image
                   loading="lazy"
                   alt="tours6"
                   src={tours}
                   className="hidden"
                 />
               </a>
             </LightGallery>
           </div>
         </div>
         <div className={style.galleryTextRightSide}>
           <div>
             <h2 className="text-2xl font-bold">
               {" "}
               Saint Petersburg Package
             </h2>
             <div className={style.allTraveller}>
               <strong>Traveller </strong>
               <div className={style.reserveRight}>
                 <PeopleOutline className={style.passengerIcon} />
                 <span>3</span>
               </div>
             </div>
             <div className={style.priceCard}>
               <div className="flex mt-3 justify-between w-full ">
                 <span>3 Adults x $108.77</span>
                 <strong>Total $217.54</strong>
               </div>
               <small>(No additional taxes or booking fees)</small>
               <div className={style.checkout}>
                 <Link href="/tours/package-checkout">
                   {" "}
                   <button> Continoue </button>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   <TourPackage />
 </div>
   </Container>
  );
};

export default TourPackageBook;
