import React, { useEffect } from "react";
import style from "./Umraha.module.css";
import Image from "next/image";
import hajj2 from "../../../public/assets/hajj2.png";
import umrah2 from "../../../public/assets/umra2.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../UserDashBoard/MoveText/MoveText";
import HajjActiveLink from "../HajjActiveLink/HajjActiveLink";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { fetchUmrahData } from "@/Redux/features/umrahSlice";
import { fetchHajjData } from "@/Redux/features/hajjSlice";
const UmrahLayout = ({ children }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
  // const lastPart = refreshParams[refreshParams.length - 1];
  // Function to parse the query string and get the value of the "type" parameter
  const queryString = router.query;
  function getTypeFromQueryString(queryString) {
    const urlParams = new URLSearchParams(queryString);
    const typeValue = urlParams.get("type");
    return typeValue;
  }

  // Get the type value from the queryString
  const type = getTypeFromQueryString(queryString);

 
  // const handleGetHajjData = (e) => {};

  useEffect(() => {
    let data;
    if (refreshParams.includes("economy")) {
      data = {
        hajj_package: "Economy Hajj Package",
      };
    }
    if (refreshParams.includes("nonshifting")) {
      data = {
        hajj_package: "Non Shifting Hajj Package",
      };
    }
    if (refreshParams.includes("shifting")) {
      data = {
        hajj_package: "Shifting Hajj Package",
      };
    }

    dispatch(fetchHajjData(data)).then((result) => {
      console.log(result);
      // if (
      //   result.payload &&
      //   result.payload.message === "Successfully visa details gets."
      // ) {
      //   router.push("/visa/visaSearch");
      // } else if (
      //   result.payload &&
      //   result.payload.message === "No matching package found."
      // ) {
      //   setNoMatching("No matching package found.");
      // } else if (
      //   result.payload &&
      //   result.payload.message === "Please select a country and visa type."
      // ) {
      //   toast.error("Please select a country and visa type.");
      // }
    });
  }, [dispatch, refreshParams]);
  // console.log(refreshParams);
  useEffect(() => {
    let data;
    if (refreshParams.includes("umrah-in-ramadan")) {
      data = {
        latest_umrah_package: "Umrah In Ramadan",
      };
    }
    if (refreshParams.includes("premium")) {
      data = {
        latest_umrah_package: "Premium Umrah Packages",
      };
    }
    if (refreshParams.includes("platinum")) {
      data = {
        latest_umrah_package: "Platinum Umrah Packages",
      };
    }
    if (refreshParams.includes("family")) {
      data = {
        latest_umrah_package: "Family Umrah Packages",
      };
    }

    dispatch(fetchUmrahData(data)).then((result) => {
      console.log(result);
      // if (
      //   result.payload &&
      //   result.payload.message === "Successfully visa details gets."
      // ) {
      //   router.push("/visa/visaSearch");
      // } else if (
      //   result.payload &&
      //   result.payload.message === "No matching package found."
      // ) {
      //   setNoMatching("No matching package found.");
      // } else if (
      //   result.payload &&
      //   result.payload.message === "Please select a country and visa type."
      // ) {
      //   toast.error("Please select a country and visa type.");
      // }
    });
  }, [dispatch, refreshParams]);
  // const umrahDetailsData = useSelector((state) => state.umrah.umrahDetailsData);
  // console.log(umrahDetailsData)
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className={style.packageWrap}>
      <aside className={style.packageLeftSide}>
          <div className={style.LeftSideWrap}>
            {(type === "Umrah Package" ||
              refreshParams.includes("umrah-in-ramadan") ||
              refreshParams.includes("premium") ||
              refreshParams.includes("platinum") ||
              refreshParams.includes("family")) && (
              <div className={style.umrahAccordion}>
                <AccordionSummary
                  className={style.umrahSummary}
                  expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={style.umrahTypograpy}>
                    <p className="text-[16px] font-bold">Umrah Offer </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={style.umrahTypograpy}>
                    <Accordion className={style.hajjAccordion}>
                      <AccordionSummary
                        className={style.hajjSummary}
                        expandIcon={
                          <ExpandMoreIcon className={style.expandIcon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={style.hajjTypograpy}>
                          <p className="font-bold">Umrah Packages </p>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          // onClick={() => handleGetUmrahData("Umrah In Ramadan")}
                          className={style.hajjTypograpy}
                        >
                          <HajjActiveLink href="/b2bdashboard/umrah/umrah-in-ramadan">
                            <p>Umrah In Ramadan </p>
                          </HajjActiveLink>
                        </Typography>
                        <Typography
                          // onClick={() =>
                          //   handleGetUmrahData("Premium Umrah Packages")
                          // }
                          className={style.hajjTypograpy}
                        >
                          <HajjActiveLink href="/b2bdashboard/umrah/premium">
                            <p>Premium Umrah Packages </p>
                          </HajjActiveLink>
                        </Typography>
                        <Typography
                          // onClick={() =>
                          //   handleGetUmrahData("Platinum Umrah Packages")
                          // }
                          className={style.hajjTypograpy}
                        >
                          <HajjActiveLink href="/b2bdashboard/umrah/platinum">
                            <p>Platinum Umrah Packages </p>
                          </HajjActiveLink>
                        </Typography>
                        <Typography
                          // onClick={() =>
                          //   handleGetUmrahData("Family Umrah Packages")
                          // }
                          className={style.hajjTypograpy}
                        >
                          <HajjActiveLink href="/b2bdashboard/umrah/family">
                            <p>Family Umrah Packages </p>
                          </HajjActiveLink>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                  <Typography className={style.umrahTypograpy}>
                    <HajjActiveLink href="/b2bdashboard/umrah/benefit-umrah">
                      <p>Benefit of Umrah </p>
                    </HajjActiveLink>
                  </Typography>
                  <Typography className={style.umrahTypograpy}>
                    <HajjActiveLink href="/b2bdashboard/umrah/umrah-visa-requirement">
                      <p>Umrah Visa Requirement </p>
                    </HajjActiveLink>
                  </Typography>

                  <Typography className={style.umrahTypograpy}>
                    <HajjActiveLink href="/b2bdashboard/umrah/perform-umrah">
                      <p>How to perform Umrah </p>
                    </HajjActiveLink>
                  </Typography>
                  <Typography className={style.umrahTypograpy}>
                    <HajjActiveLink href="/b2bdashboard/umrah/umrah-faq">
                      <p>Umrah FAQ </p>
                    </HajjActiveLink>
                  </Typography>
                </AccordionDetails>
              </div>
            )}

            {(type === "Hajj Package" ||
              refreshParams.includes("economy") ||
              refreshParams.includes("nonshifting") ||
              refreshParams.includes("shifting")) && (
              <div className="my-3">
                <div className={style.umrahAccordion}>
                  <AccordionSummary
                    className={style.umrahSummary}
                    expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                  >
                    <Typography className={style.umrahTypograpy}>
                      <p className="text-[16px] font-bold">Hajj Management</p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={style.umrahTypograpy}>
                      <Accordion className={style.hajjAccordion}>
                        <AccordionSummary
                          className={style.hajjSummary}
                          expandIcon={
                            <ExpandMoreIcon className={style.expandIcon} />
                          }
                        >
                          <Typography className={style.hajjTypograpy}>
                            <p className="font-bold">Hajj Packages </p>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            // onClick={() =>
                            //   handleGetHajjData("Economy Hajj Package")
                            // }
                            className={style.hajjTypograpy}
                          >
                            <HajjActiveLink href="/b2bdashboard/hajj/economy">
                              <p>Economy Hajj Package</p>
                            </HajjActiveLink>
                          </Typography>

                          <Typography
                            // onClick={() =>
                            //   handleGetHajjData("Non Shifting Hajj Package")
                            // }
                            className={style.hajjTypograpy}
                          >
                            <HajjActiveLink href="/b2bdashboard/hajj/nonshifting">
                              <p>Non shifting hajj package </p>
                            </HajjActiveLink>
                          </Typography>

                          <Typography
                            // onClick={() =>
                            //   handleGetHajjData("Shifting Hajj Package")
                            // }
                            className={style.hajjTypograpy}
                          >
                            <HajjActiveLink href="/b2bdashboard/hajj/shifting">
                              <p>Shifting hajj package </p>
                            </HajjActiveLink>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Typography>

                    <Typography className={style.umrahTypograpy}>
                      <HajjActiveLink href="/b2bdashboard/hajj/pre-registration">
                        <p>Pre Registration Process </p>
                      </HajjActiveLink>
                    </Typography>

                    <Typography className={style.umrahTypograpy}>
                      <HajjActiveLink href="/b2bdashboard/hajj/visa-requirement">
                        <p>Hajj Visa Requirement </p>
                      </HajjActiveLink>
                    </Typography>

                    <Typography className={style.umrahTypograpy}>
                      <HajjActiveLink href="/b2bdashboard/hajj/brief-history-hajj">
                        <p>Brief History Of Hajj </p>
                      </HajjActiveLink>
                    </Typography>
                  </AccordionDetails>
                </div>
              </div>
            )}

            <div className={style.latestHajjOffer}>
              <h2 className="text-xl font-bold mt-2">Latest Hajj Package </h2>
              <ul>
                <li>Economy Hajj Package </li>
                <li>Premium Hajj Package </li>
                <li>Platinum Hajj Package </li>
              </ul>
            </div>

            <div className={style.latestHajjOffer}>
              <h2 className="text-xl font-bold mt-2">Latest Umrah Package </h2>
              <ul>
                <li>Family Hajj Package </li>
                <li>Premium Hajj Package </li>
                <li>Platinum Hajj Package </li>
              </ul>
            </div>
          </div>
        </aside>

        <main className={style.packageRightSide}>{children}</main>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(UmrahLayout), { ssr: false });
