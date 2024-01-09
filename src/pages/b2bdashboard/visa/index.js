import React from "react";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import VisaHeroBox from "../../../../components/UserDashBoard/VisaHeroBox";
import Passion from "../../../../components/Passion/Passion";
import Travel from "../../../../components/Travel/Travel";
import Countries from "../../../../components/Countries/Countries";

const Visa = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <VisaHeroBox />
      <Countries />
      <Passion />
      <Travel />
    </B2BdashboardLayout>
  );
};

export default Visa;
