import React from "react";
import BestPlace from "../../../../components/BestPlace/BestPlace";
import Travel from "../../../../components/Travel/Travel";
import Customer from "../../../../components/Customer/Customer";
import TourDestination from "../../../../components/Tour/TourDestination";
import dynamic from "next/dynamic";

import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import B2bTrainBanner from "../../../../components/Train/B2bTrainBanner";

const Train = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <B2bTrainBanner />
      <BestPlace></BestPlace>
      <Travel></Travel>
      <TourDestination></TourDestination>
      <Customer></Customer>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Train), { ssr: false });
