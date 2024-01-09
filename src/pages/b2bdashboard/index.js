import React from "react";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import HeroBox from "../../../components/UserDashBoard/HeroBox";
import DisCount from "../../../components/DisCount/DisCount";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import B2bTourDestination from "../../../components/Tour/B2bTourDestination";

const index = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <HeroBox />
      <B2bTourDestination />
      <DisCount />
      <Travel />
      <Customer />
    </B2BdashboardLayout>
  );
};

export default index;
