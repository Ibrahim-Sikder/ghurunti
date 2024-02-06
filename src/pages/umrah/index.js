import React from "react";
import HajjUmrahCard from "../../../components/Shared/HajjUmraCard/HajjUmrahCard";
import umrah from "../../../public/assets/umrahOffer.jpg";
import HajjLayout from "../../../components/UmrahHajj/Hajj/HajjLayout";
const Umrah = () => {
  return (
    <HajjLayout>
      <HajjUmrahCard
        img={umrah}
        heading="Economy Umrah Package "
        subheading=""
        title="Available 7-10-14 days Umrah Packages 2023 - 2024"
      ></HajjUmrahCard>
    </HajjLayout>
  );
};


export default Umrah;
